import { Poppins } from "next/font/google";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={`${poppins.className}`}>{children}</main>
      <Footer />
    </>
  );
}
