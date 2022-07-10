import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleSong } from './services/fetch-utils';

export default function SongDetail() {
  const params = useParams();
  const [song, setSong] = useState({});
  // you'll need to track the current beanieBaby in state
  // you'll need to get the route param using the appropriate react router hook

  useEffect(() => {
    async function doFetch() {
      const data = await getSingleSong(params.rank);

      setSong(data);
    }

    doFetch();
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler

  }, [params.rank]); 
  return (
    <><Link to="/">Home</Link>
      <div className='song-detail'>
        <p>Song Rank: {song.rank}</p>
        <p>Title: {song.title}</p>
        <p>Artist:{song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Year released: {song.year}</p>
      </div>
    </>
  );
}