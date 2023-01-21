// import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function App() {
  const folderName = './images';
  const defaultMeme = 'puffin';
  // const defaultMemeSettings = 'https://api.memegen.link/images/puffin/.png';
  const [meme, setMeme] = useState(
    // 'https://api.memegen.link/images/puffin/.png',
    'https://api.memegen.link/images/' + defaultMeme + '/.png',
  );
  let enteredUserMeme;

  const [userMeme, setUserMeme] = useState('');
  // const onClick = ({ target: { value } }) =>
  //   setMeme('https://api.memegen.link/images/' + value + '/.jpg');
  //   const onChange = ({ target: { value } }) =>
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const downloadImage = () => {
    saveAs(meme, folderName);
  };

  return (
    <section
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>A Meme Generator</h1>
      <div>
        <label>
          Meme template
          <input
            style={{ margin: 5 }}
            type=""
            value={userMeme}
            onChange={(event) => {
              enteredUserMeme = event.currentTarget.value;
              setUserMeme(enteredUserMeme);
            }}
            onKeyDown={() => {
              !topText && !bottomText
                ? setMeme(userMeme)
                : setMeme(
                    'https://api.memegen.link/images/' +
                      userMeme +
                      '/' +
                      topText +
                      '/' +
                      bottomText +
                      '/.png',
                  );
              // setMeme('https://api.memegen.link/images/' + userMeme + '/.png');
            }}
          />
        </label>
        <button
          data-test-id="generate-meme"
          onClick={() => {
            setMeme('https://api.memegen.link/images/' + userMeme + '/.png');
          }}
        >
          Generate
        </button>
      </div>
      <label>
        Top text
        <input
          style={{ margin: 5 }}
          type=""
          value={topText}
          onChange={(event) => {
            const userTopText = event.currentTarget.value;
            setTopText(userTopText);
            if (!enteredUserMeme) {
              setUserMeme(defaultMeme);
            }
            bottomText
              ? setMeme(
                  'https://api.memegen.link/images/' +
                    userMeme +
                    '/' +
                    userTopText +
                    '/' +
                    bottomText +
                    '/.png',
                )
              : setMeme(
                  'https://api.memegen.link/images/' +
                    userMeme +
                    '/' +
                    userTopText +
                    '/.png',
                );
            /* !topText && !bottomText
              ? setMeme(meme)
              : setMeme(
                  'https://api.memegen.link/images/' +
                    userMeme +
                    '/' +
                    topText +
                    '/' +
                    bottomText +
                    '/.png',
                ); */
          }}
        />
      </label>
      <label>
        Bottom text
        <input
          style={{ margin: 5 }}
          type=""
          value={bottomText}
          onChange={(event) => {
            const userBottomText = event.currentTarget.value;
            setBottomText(userBottomText);
            if (!enteredUserMeme) {
              setUserMeme(defaultMeme);
            }
            topText
              ? setMeme(
                  'https://api.memegen.link/images/' +
                    userMeme +
                    '/' +
                    topText +
                    '/' +
                    userBottomText +
                    '/.png',
                )
              : setMeme(
                  'https://api.memegen.link/images/' +
                    userMeme +
                    '/' +
                    '_' +
                    '/' +
                    userBottomText +
                    '/.png',
                );
            console.log(meme);
          }}
        />
      </label>
      {/* {<label>
        Meme template */}
      {/* <TextBox type="email" onChange={onChange} value={email} /> */}
      {/* <input
          style={{ margin: 5 }}
          type="" */}
      {/* // onKeyDown={onChange}
          // value={templateMeme}
        />
      </label>} */}
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
    </section>
  );
}
