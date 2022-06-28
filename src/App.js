import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { getSongs } from './services/fetch-utils';

import './App.css';
import SongsList from './SongsList';
import SongDetail from './SongDetail';
import SongsPage from './SongsPage';

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
    <Router>
      <div className="App">
        <div className='header'>
          <h2>500 Songs, Ranked by ???</h2>
        </div>
        <Switch>
          <Route exact path="/">
            <SongsPage songs={songs} />
          </Route>
          <Route exact path="/SongDetail/:rank">
            <SongDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
