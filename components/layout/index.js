import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
