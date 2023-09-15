import Link from "next/link";

export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on Next JS. {formattedDate}</p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}