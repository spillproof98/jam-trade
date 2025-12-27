import "./globals.css";
import Providers from "./providers";
import BackgroundVideo from "@/components/background/BackgroundVideo";

export const metadata = {
  title: "Jam Trade",
  description: "Next-gen trading platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-textPrimary">
        <Providers>
          
          <BackgroundVideo />

          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
