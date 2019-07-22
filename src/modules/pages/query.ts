import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";
export const pagesQuery = (t: PrismaObjectDefinitionBlock<"Query">) => {
    t.prismaFields(["page"]);
}