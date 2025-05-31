import { NextRequest, NextResponse } from "next/server";
import { requirePermission } from "@/lib/auth";
import { createAuthError } from "@/lib/auth-errors";
import { AuthErrorKey } from "@/types/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    // Check if user has permission to read buildings
    await requirePermission({
      resource: "BUILDINGS",
      action: "READ",
    });

    // Get buildings from database
    const buildings = await prisma.building.findMany({
      include: {
        apartments: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: buildings,
    });
  } catch (error) {
    console.error("Buildings API Error:", error);

    if (
      error instanceof Error &&
      error.message.includes("Missing required permission")
    ) {
      return createAuthError(
        AuthErrorKey.INSUFFICIENT_PERMISSIONS,
        "Nu aveți permisiunea de a vedea clădirile",
        "BUILDINGS:READ"
      );
    }

    return createAuthError(AuthErrorKey.INTERNAL_ERROR);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if user has permission to create buildings
    await requirePermission({
      resource: "BUILDINGS",
      action: "CREATE",
    });

    const body = await request.json();

    // Create building in database
    const building = await prisma.building.create({
      data: {
        name: body.name,
        address: body.address,
        floors: body.floors,
        apartmentsPerFloor: body.apartmentsPerFloor,
      },
      include: {
        apartments: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: building,
    });
  } catch (error) {
    console.error("Buildings API Error:", error);

    if (
      error instanceof Error &&
      error.message.includes("Missing required permission")
    ) {
      return createAuthError(
        AuthErrorKey.INSUFFICIENT_PERMISSIONS,
        "Nu aveți permisiunea de a crea clădiri",
        "BUILDINGS:CREATE"
      );
    }

    return createAuthError(AuthErrorKey.INTERNAL_ERROR);
  }
}
