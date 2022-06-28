import { checkError, client } from './client';

export async function getSongs(from = 0, to = 30) {
  const response = await client
    .from('ranked_songs')
    .select()
    .range(from, to);
  return checkError(response);
}