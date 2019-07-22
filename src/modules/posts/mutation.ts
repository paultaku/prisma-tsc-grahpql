import { prismaObjectType } from "nexus-prisma";
import { stringArg, idArg } from "nexus/dist";
import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";

// export const postsMutation = prismaObjectType<"Mutation">({
//   name: "Mutation",
//   definition(t: PrismaObjectDefinitionBlock<"Mutation">) {

//     t.prismaFields(["deletePost"]);

//     t.field("createDraft", {
//       type: "Post",
//       args: {
//         title: stringArg(),
//         authorId: idArg({ nullable: true })
//       },
//       resolve: (_, { title, authorId }, ctx) =>
//         ctx.prisma.createPost({
//           title,
//           author: { connect: { id: authorId } }
//         })
//     });
//     t.field("publish", {
//       type: "Post",
//       nullable: true,
//       args: { id: idArg() },
//       resolve: (_, { id }, ctx) =>
//         ctx.prisma.updatePost({
//           where: { id },
//           data: { published: true }
//         })
//     });
//   }
// });

export const postsMutation = (t: PrismaObjectDefinitionBlock<"Mutation">) => {
  t.prismaFields(["deletePost"]);

  t.field("createDraft", {
    type: "Post",
    args: {
      title: stringArg(),
      authorId: idArg({ nullable: true })
    },
    resolve: (_, { title, authorId }, ctx) =>
      ctx.prisma.createPost({
        title,
        author: { connect: { id: authorId } }
      })
  });
  
  t.field("publish", {
    type: "Post",
    nullable: true,
    args: { id: idArg() },
    resolve: (_, { id }, ctx) =>
      ctx.prisma.updatePost({
        where: { id },
        data: { published: true }
      })
  });
}