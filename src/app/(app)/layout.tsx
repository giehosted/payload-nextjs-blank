import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import "@/app/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/Context/theme-provider"

export const metadata: Metadata = {
  title: "Trevail Co.",
  description: "Trevail Co. Clothing",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex flex-col items-center">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
