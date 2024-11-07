import type { AccessArgs } from "payload"

import { StorefrontUser } from "@/payload-types"
import { checkRole } from "@/collections/StorefrontUsers/checkRole"

type isAdmin = (args: AccessArgs<unknown>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(["admin"], user as StorefrontUser)
}
