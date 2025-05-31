import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/email";
import RegisterEmail from "@/emails/templates/register-email";
import { z } from "zod";
import crypto from "crypto";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = registerSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Get default role (assuming we have a "user" role)
    const defaultRole = await prisma.role.findFirst({
      where: { name: "user" },
    });

    if (!defaultRole) {
      return NextResponse.json(
        { error: "Default role not found" },
        { status: 500 }
      );
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        name: validatedData.name,
        hashedPassword,
        roleId: defaultRole.id,
        isActive: false, // User is inactive until email is verified
      },
    });

    // Generate verification token
    const verificationToken = await prisma.verificationToken.create({
      data: {
        identifier: user.email,
        token: crypto.randomUUID(),
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      },
    });

    // Send verification email
    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify?token=${verificationToken.token}`;

    await sendEmail({
      to: user.email,
      subject: "Confirmă-ți adresa de email - TBSA",
      react: RegisterEmail({
        name: user.name || "Utilizator",
        verificationUrl,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Please check your email to verify your account",
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
