import Header from "./header";
import Section from "./section";
import Event from "./event";
import Seo from "./seo";

function Layout({ children }) {
  return (
    <>
      <div>
        <Seo />
        <Header />
      </div>
      <Event />
      {/*<Section />*/}
      <main>{children}</main>
    </>
  );
}

export default Layout;
