import type { IService } from '@declarations';
import { client } from '@tina/client';

export async function getServices(): Promise<IService[] | undefined> {
  const { data } = await client.queries.serviceConnection({ sort: 'priority' });
  return data?.serviceConnection?.edges?.map((page) => ({
    title: page?.node?.title,
    cover: page?.node?.cover,
    color: page?.node?.color,
    priority: page?.node?.priority,
    blocks: page?.node?.blocks as any[],
    filename: page?.node?._sys?.filename,
  }));
}
