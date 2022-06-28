import React from 'react';

export default function SongDetail(...song) {
  return (
    <div>
      <h1>{song.rank}</h1>
      <p>{song.title} by {song.artist}</p>
      <p>{song.album}</p>
    </div>
  );
}
