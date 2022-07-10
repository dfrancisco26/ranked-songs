import React from 'react';
import Song from './Song';

export default function SongsList({ songs }) {
  return (
    <div className='song-list'>
      {
        songs.map((song, i) =>
        {
          return <div key={song.title + i + song.rank}>
            <Song song={song} title={song.title} rank={song.rank} />
          </div>;
        })
      }
    </div>
  );
}
