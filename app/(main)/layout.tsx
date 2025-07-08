import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MiladeTL",
    template: "%s | MiladeTL",
  },
  description: "MiladeTL landing page",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
