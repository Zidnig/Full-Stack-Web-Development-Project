import "./globals.css";

export const metadata = { title: "Simple Task App" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-xl p-6">{children}</body>
    </html>
  );
}
