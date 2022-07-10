import { Link } from 'react-router-dom';


export default function Song({ song }, i) {
  return (
    <><Link key={song.title + song.rank + i} to={`./SongDetail/${song.rank}`}>
      <div className='song'>
        <h1>{song.rank}</h1>
        <p>{song.title}</p>
      </div>
    </Link>
    </>
  );
}
