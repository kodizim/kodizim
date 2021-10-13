import Header from "./header";
import Section from "./section";
import Seo from "./seo";

function Layout({ children }) {
  return (
    <>
      <div>
        <Seo />
        <Header />
      </div>
      <Section />
      <main>{children}</main>
    </>
  );
}

export default Layout;
