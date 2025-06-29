
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickSpark from "@/Click/ClickSpark/ClickSpark";
import "./globals.css";


export const metadata = {
  title: "BitLinks - Your Trusted URL Shortner",
  description: "Bitlinks helps you shorten your URL easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-purple-50`}
      >
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          {children}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
