import Copyright from "@/components/organisms/Copyright";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
}
