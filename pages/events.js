import Layout from "@c/layout";
import Seo from "@c/layout/seo";

function Events({ data }) {
  return (
    <>
      <Layout>
        <Seo title="Etkinlikler" />
        {data?.members.map((el, i) => (
          <div key={el.name + i}>
            Name: {el.name}, Username: {el.username}
          </div>
        ))}

        <div>
          <img src={data.events[0].highlight_photo} />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.kommunity.com/api/v2/kodizim?with[]=events&with[]=members&with[]=city&with[]=country`
  );
  const i = await res.json();
  const data = i.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Events;
