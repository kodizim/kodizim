import Layout from "@c/layout";
import Seo from "@c/layout/seo";
import Section from "@c/section";
import Event from "@c/event";
import Hero from "@c/hero";

function LandingPage() {
  return (
    <>
      <Layout>
        <Seo />
        <Hero />
        <Section />
        <Event />
      </Layout>
    </>
  );
}
export default LandingPage;
