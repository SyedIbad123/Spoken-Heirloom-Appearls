import Navbar from "@/components/shared/marketing/Navbar";
import ConditionalFooter from "@/components/shared/marketing/ConditionalFooter";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ConditionalFooter />
    </>
  );
}
