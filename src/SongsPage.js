import { useEffect, useState } from 'react';
import './App.css';
import { getSongs } from './services/fetch-utils';
import SongsList from './SongsList';

function App() {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 30;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const songs = await getSongs(from, to);
  
      setSongs(songs);
    }
  
    fetch();
  }, [page, setPage]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button onClick={ () => {page > 1 && setPage(page - 1);}}>Previous Page</button>
        <button onClick={ () => {page < 17 && setPage(page + 1);}}>Next Page</button>
      </div>
      <SongsList songs={songs} />
    </>
  );
}

export default App;