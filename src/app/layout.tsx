import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaqlainHub | Saqlain Ahmad",
  description:
    "Portfolio of Saqlain Ahmad — Full Stack Software Engineer and AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var savedTheme = localStorage.getItem("saqlainhub-theme");
                  document.documentElement.dataset.theme =
                    savedTheme === "dark" ? "dark" : "light";
                } catch (error) {
                  document.documentElement.dataset.theme = "light";
                }
              })();
            `,
          }}
        />
        <meta name="google-site-verification" content="bBB7GXc_KksNbsxQhIMHq4v1q0wuuhW_oxgox7Kjkv4" />
      </head>
      <body>{children}</body>
    </html>
  );
}