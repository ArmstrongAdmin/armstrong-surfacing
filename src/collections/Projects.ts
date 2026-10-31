import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",

  admin: {
    useAsTitle: "title",
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "sector",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};