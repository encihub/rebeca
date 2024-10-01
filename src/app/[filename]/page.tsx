import { client } from '@tina/client';
import { PageBlock } from '@blocks';

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys?.filename,
  }));

  return paths || [];
}

export default async ({ params }: { params: { filename: string } }) => {
  const result = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });
  return <PageBlock {...result} />;
};
