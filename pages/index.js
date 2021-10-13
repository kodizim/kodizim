import Layout from "@c/layout";
import Seo from "@c/layout/seo";
import Section from "@c/section";
import Event from "@c/event";

function LandingPage() {
  return (
    <>
      <Layout>
        <Seo />
        <Section />
        <Event />
      </Layout>
    </>
  );
}
export default LandingPage;
