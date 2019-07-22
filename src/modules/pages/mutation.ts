import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";

export const postsMutation = (t: PrismaObjectDefinitionBlock<"Mutation">) => {
  t.prismaFields(["createPage", "updatePage", "updateManyPages", "upsertPage", "deletePage", "deleteManyPages"]);
}