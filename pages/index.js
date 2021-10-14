import Layout from "@c/layout";
import Seo from "@c/layout/seo";
import Section from "@c/section";
import Event from "@c/event";
import Hero from "@c/hero";
import SocialMedia from "@c/social";

function LandingPage() {
  return (
    <>
      <Layout>
        <Seo />
        <Hero />
        <Section />
        <Event />
        <SocialMedia />
      </Layout>
    </>
  );
}
export default LandingPage;
