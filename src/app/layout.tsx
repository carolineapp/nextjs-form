import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-8">
          {" "}
          <Image
            src="https://www.dermatica.co.uk/_next/static/media/dermatica-logo.cd9241ff.svg"
            alt="Dermatica logo"
            width={180}
            height={38}
            priority
          />
        </header>
        <div className="min-h-screen px-8">
          <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
            {children}
          </main>
        </div>
        <footer className="grid lg:grid-cols-2 bg-teal-300 p-8">
          <p>This is a footer with some useful information in it</p>
          <p>Here is some more useful information</p>
          <p>Another useful thing</p>
          <p>This is a footer with some useful information in it</p>
          <p>Here is some more useful information</p>
          <p>Another useful thing</p>
          <p>This is a footer with some useful information in it</p>
          <p>Here is some more useful information</p>
          <p>Another useful thing</p>
          <p>This is a footer with some useful information in it</p>
          <p>Here is some more useful information</p>
          <p>Another useful thing</p>
        </footer>
      </body>
    </html>
  );
}
