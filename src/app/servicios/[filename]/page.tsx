import { client } from '@tina/client';
import { ServiceBlock } from '@blocks';

export async function generateStaticParams() {
  const pages = await client.queries.serviceConnection();
  const paths = pages.data?.serviceConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys?.filename,
  }));

  return paths || [];
}

export default async ({ params }: { params: { filename: string } }) => {
  const result = await client.queries.service({
    relativePath: `${params.filename}.mdx`,
  });
  return <ServiceBlock {...result} />;
};
