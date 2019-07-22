import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";

export const usersMutation = (t: PrismaObjectDefinitionBlock<"Mutation">) => {
    t.prismaFields([
        "createUser",
        "updateUser",
        "upsertUser",
        "deleteUser",
        "deleteManyUsers" 
    ]);
}