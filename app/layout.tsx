import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
