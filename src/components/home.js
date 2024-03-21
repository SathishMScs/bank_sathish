import React from 'react';

export default function Home() {
  return (
    <div style={{
        backgroundImage: 'url("https://miro.medium.com/v2/resize:fit:828/format:webp/1*vhoE-Yw2HgrlScZmR_L1zA.gif")', // Corrected background image URL with "url()"
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height to cover the entire viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <div className="Home-page text-center">
        <h1 className="heading" style={{ fontSize: '3rem', color: 'white' }}>bank of tirupur</h1>
        <div className="gif-container">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*zdaj_q66kjXS8rygZ7hOEw.gif" alt="GIF" className="gif rounded" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}
