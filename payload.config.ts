import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Users } from "./src/collections/Users";
import { Projects } from "./src/collections/Projects";
import { News } from "./src/collections/News";
import { Media } from "./src/collections/Media";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "change-this-secret",

  admin: {
    user: Users.slug,
  },

  editor: lexicalEditor(),

  collections: [
    Users,
    Projects,
    News,
    Media,
  ],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
  }), 
});