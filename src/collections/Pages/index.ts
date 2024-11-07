import type { CollectionConfig } from "payload"

import { admins } from "@/payload/access/admins"
import { adminsOrPublished } from "./access/adminsOrPublished"
import { slugField } from "@/payload/fields/slug"

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: admins,
    delete: admins,
    read: adminsOrPublished,
    update: admins,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== "home" ? doc.slug : ""}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "publishedOn",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      type: "tabs",
      tabs: [
        /* {
          fields: [hero],
          label: "Hero",
        }, */
        /* {
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [CallToAction, Content, MediaBlock, Archive],
              required: true,
            },
          ],
          label: "Content",
        }, */
      ],
    },
    slugField(),
  ],
  /* hooks: {
    afterChange: [revalidatePage],
    afterRead: [populateArchiveBlock],
  }, */
  versions: {
    drafts: true,
  },
}
