import { PrismaClient, ResourceType, ActionType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Crearea permisiunilor
  console.log("📋 Creating permissions...");

  const permissions = [
    // Utilizatori
    {
      resource: ResourceType.USERS,
      action: ActionType.CREATE,
      description: "Crearea de utilizatori noi",
    },
    {
      resource: ResourceType.USERS,
      action: ActionType.READ,
      description: "Vizualizarea utilizatorilor",
    },
    {
      resource: ResourceType.USERS,
      action: ActionType.UPDATE,
      description: "Editarea utilizatorilor",
    },
    {
      resource: ResourceType.USERS,
      action: ActionType.DELETE,
      description: "Ștergerea utilizatorilor",
    },
    {
      resource: ResourceType.USERS,
      action: ActionType.MANAGE,
      description: "Gestionarea completă a utilizatorilor",
    },

    // Roluri
    {
      resource: ResourceType.ROLES,
      action: ActionType.CREATE,
      description: "Crearea de roluri noi",
    },
    {
      resource: ResourceType.ROLES,
      action: ActionType.READ,
      description: "Vizualizarea rolurilor",
    },
    {
      resource: ResourceType.ROLES,
      action: ActionType.UPDATE,
      description: "Editarea rolurilor",
    },
    {
      resource: ResourceType.ROLES,
      action: ActionType.DELETE,
      description: "Ștergerea rolurilor",
    },
    {
      resource: ResourceType.ROLES,
      action: ActionType.MANAGE,
      description: "Gestionarea completă a rolurilor",
    },

    // Permisiuni
    {
      resource: ResourceType.PERMISSIONS,
      action: ActionType.READ,
      description: "Vizualizarea permisiunilor",
    },
    {
      resource: ResourceType.PERMISSIONS,
      action: ActionType.ASSIGN,
      description: "Atribuirea permisiunilor",
    },
    {
      resource: ResourceType.PERMISSIONS,
      action: ActionType.MANAGE,
      description: "Gestionarea completă a permisiunilor",
    },

    // Asociații
    {
      resource: ResourceType.ASSOCIATIONS,
      action: ActionType.CREATE,
      description: "Crearea de asociații",
    },
    {
      resource: ResourceType.ASSOCIATIONS,
      action: ActionType.READ,
      description: "Vizualizarea asociațiilor",
    },
    {
      resource: ResourceType.ASSOCIATIONS,
      action: ActionType.UPDATE,
      description: "Editarea asociațiilor",
    },
    {
      resource: ResourceType.ASSOCIATIONS,
      action: ActionType.DELETE,
      description: "Ștergerea asociațiilor",
    },

    // Blocuri
    {
      resource: ResourceType.BUILDINGS,
      action: ActionType.CREATE,
      description: "Crearea de blocuri",
    },
    {
      resource: ResourceType.BUILDINGS,
      action: ActionType.READ,
      description: "Vizualizarea blocurilor",
    },
    {
      resource: ResourceType.BUILDINGS,
      action: ActionType.UPDATE,
      description: "Editarea blocurilor",
    },
    {
      resource: ResourceType.BUILDINGS,
      action: ActionType.DELETE,
      description: "Ștergerea blocurilor",
    },

    // Apartamente
    {
      resource: ResourceType.APARTMENTS,
      action: ActionType.CREATE,
      description: "Crearea de apartamente",
    },
    {
      resource: ResourceType.APARTMENTS,
      action: ActionType.READ,
      description: "Vizualizarea apartamentelor",
    },
    {
      resource: ResourceType.APARTMENTS,
      action: ActionType.UPDATE,
      description: "Editarea apartamentelor",
    },
    {
      resource: ResourceType.APARTMENTS,
      action: ActionType.DELETE,
      description: "Ștergerea apartamentelor",
    },

    // Proprietari
    {
      resource: ResourceType.OWNERS,
      action: ActionType.ASSIGN,
      description: "Atribuirea proprietarilor la apartamente",
    },
    {
      resource: ResourceType.OWNERS,
      action: ActionType.READ,
      description: "Vizualizarea proprietarilor",
    },

    // Citiri apă
    {
      resource: ResourceType.WATER_READINGS,
      action: ActionType.CREATE,
      description: "Introducerea citirilor de apă",
    },
    {
      resource: ResourceType.WATER_READINGS,
      action: ActionType.READ,
      description: "Vizualizarea citirilor de apă",
    },
    {
      resource: ResourceType.WATER_READINGS,
      action: ActionType.UPDATE,
      description: "Editarea citirilor de apă",
    },
    {
      resource: ResourceType.WATER_READINGS,
      action: ActionType.APPROVE,
      description: "Aprobarea citirilor de apă",
    },
    {
      resource: ResourceType.WATER_READINGS,
      action: ActionType.REJECT,
      description: "Respingerea citirilor de apă",
    },

    // Liste de plată
    {
      resource: ResourceType.PAYMENT_LISTS,
      action: ActionType.CREATE,
      description: "Crearea listelor de plată",
    },
    {
      resource: ResourceType.PAYMENT_LISTS,
      action: ActionType.READ,
      description: "Vizualizarea listelor de plată",
    },
    {
      resource: ResourceType.PAYMENT_LISTS,
      action: ActionType.UPDATE,
      description: "Editarea listelor de plată",
    },
    {
      resource: ResourceType.PAYMENT_LISTS,
      action: ActionType.APPROVE,
      description: "Aprobarea listelor de plată",
    },
    {
      resource: ResourceType.PAYMENT_LISTS,
      action: ActionType.EXPORT,
      description: "Exportarea listelor de plată",
    },

    // Rapoarte
    {
      resource: ResourceType.REPORTS,
      action: ActionType.READ,
      description: "Vizualizarea rapoartelor",
    },
    {
      resource: ResourceType.REPORTS,
      action: ActionType.EXPORT,
      description: "Exportarea rapoartelor",
    },

    // Notificări
    {
      resource: ResourceType.NOTIFICATIONS,
      action: ActionType.CREATE,
      description: "Crearea notificărilor",
    },
    {
      resource: ResourceType.NOTIFICATIONS,
      action: ActionType.READ,
      description: "Vizualizarea notificărilor",
    },

    // Setări sistem
    {
      resource: ResourceType.SYSTEM_SETTINGS,
      action: ActionType.READ,
      description: "Vizualizarea setărilor de sistem",
    },
    {
      resource: ResourceType.SYSTEM_SETTINGS,
      action: ActionType.UPDATE,
      description: "Editarea setărilor de sistem",
    },
  ];

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: {
        resource_action: {
          resource: permission.resource,
          action: permission.action,
        },
      },
      update: {},
      create: permission,
    });
  }

  // 2. Crearea rolurilor
  console.log("👥 Creating roles...");

  const superAdminRole = await prisma.role.upsert({
    where: { name: "SUPER_ADMIN" },
    update: {},
    create: {
      name: "SUPER_ADMIN",
      description: "Super Administrator cu acces complet la sistem",
      isSystem: true,
    },
  });

  const adminRole = await prisma.role.upsert({
    where: { name: "ADMIN" },
    update: {},
    create: {
      name: "ADMIN",
      description: "Administrator asociație cu acces la gestionarea blocurilor",
      isSystem: true,
    },
  });

  const ownerRole = await prisma.role.upsert({
    where: { name: "OWNER" },
    update: {},
    create: {
      name: "OWNER",
      description: "Proprietar de apartament cu acces limitat",
      isSystem: true,
    },
  });

  // 3. Atribuirea permisiunilor la roluri
  console.log("🔐 Assigning permissions to roles...");

  // Super Admin - toate permisiunile
  const allPermissions = await prisma.permission.findMany();
  for (const permission of allPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: superAdminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: superAdminRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Admin - permisiuni pentru gestionarea asociației
  const adminPermissions = await prisma.permission.findMany({
    where: {
      OR: [
        {
          resource: ResourceType.USERS,
          action: {
            in: [ActionType.CREATE, ActionType.READ, ActionType.UPDATE],
          },
        },
        {
          resource: ResourceType.ASSOCIATIONS,
          action: { in: [ActionType.READ, ActionType.UPDATE] },
        },
        {
          resource: ResourceType.BUILDINGS,
          action: {
            in: [
              ActionType.CREATE,
              ActionType.READ,
              ActionType.UPDATE,
              ActionType.DELETE,
            ],
          },
        },
        {
          resource: ResourceType.APARTMENTS,
          action: {
            in: [
              ActionType.CREATE,
              ActionType.READ,
              ActionType.UPDATE,
              ActionType.DELETE,
            ],
          },
        },
        {
          resource: ResourceType.OWNERS,
          action: { in: [ActionType.ASSIGN, ActionType.READ] },
        },
        {
          resource: ResourceType.WATER_READINGS,
          action: {
            in: [
              ActionType.CREATE,
              ActionType.READ,
              ActionType.UPDATE,
              ActionType.APPROVE,
              ActionType.REJECT,
            ],
          },
        },
        {
          resource: ResourceType.PAYMENT_LISTS,
          action: {
            in: [
              ActionType.CREATE,
              ActionType.READ,
              ActionType.UPDATE,
              ActionType.APPROVE,
              ActionType.EXPORT,
            ],
          },
        },
        {
          resource: ResourceType.REPORTS,
          action: { in: [ActionType.READ, ActionType.EXPORT] },
        },
        {
          resource: ResourceType.NOTIFICATIONS,
          action: { in: [ActionType.CREATE, ActionType.READ] },
        },
      ],
    },
  });

  for (const permission of adminPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }

  // Owner - permisiuni limitate
  const ownerPermissions = await prisma.permission.findMany({
    where: {
      OR: [
        { resource: ResourceType.WATER_READINGS, action: ActionType.CREATE },
        { resource: ResourceType.WATER_READINGS, action: ActionType.READ },
        { resource: ResourceType.PAYMENT_LISTS, action: ActionType.READ },
        { resource: ResourceType.NOTIFICATIONS, action: ActionType.READ },
      ],
    },
  });

  for (const permission of ownerPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: ownerRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: ownerRole.id,
        permissionId: permission.id,
      },
    });
  }

  // 4. Crearea utilizatorului Super Admin
  console.log("👤 Creating Super Admin user...");

  const hashedPassword = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: { email: "admin@aquasync.com" },
    update: {},
    create: {
      email: "admin@aquasync.com",
      name: "Super Administrator",
      password: hashedPassword,
      roleId: superAdminRole.id,
      isActive: true,
    },
  });

  console.log("✅ Database seeding completed successfully!");
  console.log("📧 Super Admin credentials:");
  console.log("   Email: admin@aquasync.com");
  console.log("   Password: admin123");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
