import "../styles/Home.module.css";
import "../styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
