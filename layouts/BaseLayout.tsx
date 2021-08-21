import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children?: React.ReactNode;
} 

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
