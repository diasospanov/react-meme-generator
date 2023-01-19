// import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function App() {
  // const defaultMeme = (
  //   <img
  //     alt="Puffin"
  //     src="https://api.memegen.link/images/puffin/I_don't_find_Mitch_Hedberg/all_the_funny.png"
  //   />
  // );
  const folderName = './images';
  /* if (!path.existsSync(folderName)) {
    path.mkdirSync(folderName);
  } */
  const [meme, setMeme] = useState(
    'https://api.memegen.link/images/puffin/.jpg',
  );
  const [userMeme, setUserMeme] = useState('');
  // const onClick = ({ target: { value } }) =>
  //   setMeme('https://api.memegen.link/images/' + value + '/.jpg');
  //   const onChange = ({ target: { value } }) =>
  const downloadImage = () => {
    saveAs(meme, folderName);
  };
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
        <button
          onClick={() => {
            setMeme('https://api.memegen.link/images/' + userMeme + '/.jpg');
          }}
        >
          Generate
        </button>
        {/* <TextBox type="email" onChange={onChange} value={email} /> */}
        <input
          style={{ margin: 5 }}
          type=""
          value={userMeme}
          onChange={(event) => {
            setUserMeme(event.currentTarget.value);
          }}
        />
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
        {/* <TextBox type="email" onChange={onChange} value={email} /> */}
        <input
          style={{ margin: 5 }}
          type=""
          // onKeyDown={onChange}
          // value={templateMeme}
        />
      </label>
      <div>
        <button
          onClick={() => {
            downloadImage();
          }}
        >
          Download
        </button>
      </div>
      <div>
        <img data-test-id="meme-image" alt="A generated meme" src={meme} />
      </div>
    </body>
  );
}
