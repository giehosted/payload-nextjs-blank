import { checkRole } from "@/collections/StorefrontUsers/checkRole"
import { StorefrontUser } from "@/payload-types"
import type { Access } from "payload"

export const adminsOrPublished: Access = ({ req: { user } }) => {
  if (checkRole(["admin"], user as StorefrontUser)) {
    return true
  }

  return {
    _status: {
      equals: "published",
    },
  }
}
