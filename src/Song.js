import React from 'react';



export default function Song({ song }) {
  return (
    <div className='song'>
      <h1>{song.rank}</h1>
      <p>{song.title}</p>
    </div>
  );
}
