import type { ISocial } from '@declarations';
import { client } from '@tina/client';

export async function getSocials(): Promise<ISocial[] | undefined> {
  const { data } = await client.queries.socialConnection();
  return data?.socialConnection?.edges?.map((social) => ({
    title: social?.node?.title,
    icon: social?.node?.icon,
    url: social?.node?.url,
  }));
}
