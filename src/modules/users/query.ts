import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";
export const usersQuery = (t: PrismaObjectDefinitionBlock<"Query">) => {
    t.prismaFields([
        "user",
        "users",
        "usersConnection"
    ]);
}