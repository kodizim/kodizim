import Header from "./header";
import Seo from "./seo";

function Layout({ children }) {
  return (
    <>
      <div>
        <Seo />
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
}

export default Layout;
