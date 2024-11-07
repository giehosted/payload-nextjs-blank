import type { Access, AccessArgs } from "payload"

import { checkRole } from "@/collections/StorefrontUsers/checkRole"
import { StorefrontUser } from "@/payload-types"

export const adminsOrLoggedIn: Access = ({ req }: AccessArgs<StorefrontUser>) => {
  if (checkRole(["admin"], req.user as StorefrontUser)) {
    return true
  }

  return !!req.user
}
