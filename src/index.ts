import { prisma } from "./generated/prisma-client";
import datamodelInfo from "./generated/nexus-prisma";
import * as path from "path";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import { GraphQLServer } from "graphql-yoga";
import { postsQuery, postsMutation } from "./modules/posts";
import { usersQuery, usersMutation } from './modules/users';
import { PrismaObjectDefinitionBlock } from "nexus-prisma/dist/blocks/objectType";

// const Query = [postsQuery, usersQuery];
const Query = prismaObjectType<"Query">({
    name: "Query",

    definition(t: PrismaObjectDefinitionBlock<"Query">) {
        postsQuery(t);
        usersQuery(t);
    }
});
const Mutation = prismaObjectType<"Mutation">({
    name: "Mutation",

    definition(t: PrismaObjectDefinitionBlock<"Mutation">) {
        postsMutation(t);
        usersMutation(t);
    }
});

const schema = makePrismaSchema({
    types: [
        Query,
        Mutation
    ],

    prisma: {
        datamodelInfo,
        client: prisma
    },

    outputs: {
        schema: false,
        typegen: path.join(__dirname, "./generated/nexus.ts")
    }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
