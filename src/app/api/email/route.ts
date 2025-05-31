import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import WelcomeEmail from "@/emails/templates/welcome-email";
import RegisterEmail from "@/emails/templates/register-email";
import ResetPasswordEmail from "@/emails/templates/reset-password-email";
import { ReactElement } from "react";

export async function POST(req: Request) {
  try {
    const { to, subject, template, templateData } = await req.json();

    if (!to || !subject || !template) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let emailContent: ReactElement;
    switch (template) {
      case "welcome":
        emailContent = WelcomeEmail({ ...templateData });
        break;
      case "register":
        emailContent = RegisterEmail({ ...templateData });
        break;
      case "reset-password":
        emailContent = ResetPasswordEmail({ ...templateData });
        break;
      default:
        return NextResponse.json(
          { error: "Invalid template" },
          { status: 400 }
        );
    }

    const result = await sendEmail({
      to,
      subject,
      react: emailContent,
    });

    if (!result.success) {
      console.error("Failed to send email:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
