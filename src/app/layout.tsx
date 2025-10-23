import { NuqsAdapter } from "nuqs/adapters/next/app";
import { IRANSans } from "./fonts";
import "../../public/variables.css"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const stored = localStorage.getItem('theme-storage');
          const data = stored ? JSON.parse(stored) : null;
          const isDark =
            data?.state?.isDark ??
            window.matchMedia('(prefers-color-scheme: dark)').matches;

          if (isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (_) {}
      })();
    `,
          }}
        />
      </head>
      <body
        className={`${IRANSans.className} min-h-dvh relative bg-gray-400 dark:bg-zinc-900 bg-fixed bg-cover bg-center bg-no-repeat antialiased`}
        style={{
          backgroundImage: "var(--custom-background-image)",
        }}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
