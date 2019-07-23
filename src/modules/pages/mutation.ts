import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";

export const pagesMutation = (t: PrismaObjectDefinitionBlock<"Mutation">) => {
  t.prismaFields(["createPage", "updatePage", "updateManyPages", "upsertPage", "deletePage", "deleteManyPages"]);
}