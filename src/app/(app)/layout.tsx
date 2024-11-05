import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import "@/app/globals.css"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Trevail Co.",
  description: "Trevail Co. Clothing",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  )
}
