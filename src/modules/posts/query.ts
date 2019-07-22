import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";
import { stringArg } from "nexus/dist";

export const postsQuery = (t: PrismaObjectDefinitionBlock<"Query">) => {
    t.prismaFields(["post"]);

    t.list.field("feed", {
        type: "Post",
        resolve: (_, _args, ctx) =>
        ctx.prisma.posts({ where: { published: true } })
    });

    t.list.field("postsByUser", {
        type: "Post",
        args: { email: stringArg() },
        resolve: (_, { email }, ctx) =>
        ctx.prisma.posts({ where: { author: { email } } })
    });
}