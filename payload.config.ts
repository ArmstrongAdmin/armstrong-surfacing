import { buildConfig } from "payload";
import { postgresAdapter } from"@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./src/collections/Users";
import { Projects } from "./src/collections/Projects";
import { News } from "./src/collections/News";
import { Media } from "./src/collections/Media";
const databaseUrl = process.env.DATABASE_URL;
const payloadSecret = process.env.PAYLOAD_SECRET;
if (!databaseUrl) {
  
  throw new Error ( "DATABASE_URL is not defined" );
  }
if (!payloadSecret) {
  
 throw new Error ("PAYLOAD_SECRET is not defined");
}

export default  buildConfig({
  secret: payloadSecret, 
  admin: { user : Users.slug,   },
  
  editor : lexicalEditor(),
  
  collections : [Users, Projects, News, Media],
  
  db : postgresAdapter({ pool : { connectionString: databaseUrl,
    },
  }),
});