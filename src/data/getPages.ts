import type { IPage } from '@declarations';
import { client } from '@tina/client';

export async function getPages(): Promise<IPage[] | undefined> {
  const { data } = await client.queries.pageConnection();
  return data?.pageConnection?.edges?.map((page) => ({
    title: page?.node?.title,
    blocks: page?.node?.blocks as any[],
    filename: page?.node?._sys?.filename,
  }));
}

