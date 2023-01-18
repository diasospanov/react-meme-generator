import { useState } from 'react';

export default function App() {
  const defaultMeme = (
    <img
      alt="Puffin"
      src="https://api.memegen.link/images/puffin/I_don't_find_Mitch_Hedberg/all_the_funny.png"
    />
  );
  const [meme, setMeme] = useState(defaultMeme);
  return (
    <body
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>A Meme Generator</h1>
      <div>
        <button>Generate</button>
      </div>
      <label>
        Top text
        <input style={{ margin: 5 }} type="" />
      </label>
      <label>
        Bottom text
        <input style={{ margin: 5 }} type="" />
      </label>
      <label>
        Meme template
        <input style={{ margin: 5 }} type="" />
      </label>
      <div>
        <button>Download</button>
      </div>
      <div>
        <img
          data-test-id="meme-image"
          alt="A generated meme"
          src="https://api.memegen.link/images/puffin/I_don't_find_Mitch_Hedberg/all_the_funny.png"
        />
      </div>
    </body>
  );
}
