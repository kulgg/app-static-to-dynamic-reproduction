export async function generateStaticParams() {
  return [{ slug: "one" }];
}

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <div>{slug}</div>;
}

export default page;
