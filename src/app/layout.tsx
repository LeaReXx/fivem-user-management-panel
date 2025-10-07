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
      <body>{children}</body>
    </html>
  );
}
