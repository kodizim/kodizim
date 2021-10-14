import Layout from "@c/layout";
import Seo from "@c/layout/seo";
import ErrorComponent from "@c/404";

function ErrorPage() {
  return (
    <>
      <Layout>
        <Seo />
        <ErrorComponent />
      </Layout>
    </>
  );
}
export default ErrorPage;
