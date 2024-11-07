import type { StorefrontUser } from "../../payload-types"

export const checkRole = (
  allRoles: StorefrontUser["roles"] = [],
  user?: StorefrontUser,
): boolean => {
  if (user) {
    if (
      allRoles?.some((role) => {
        return user?.roles?.some((individualRole) => {
          return individualRole === role
        })
      })
    )
      return true
  }

  return false
}
