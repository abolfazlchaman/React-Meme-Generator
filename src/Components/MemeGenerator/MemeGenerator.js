import React, { Component } from "react";

import "./MemeGenerator.css";
import "./InputBox.css";
import "./MemeImage.css";

export default function Button() {
  let randomNum, randomImageUrl;

  const [allMemesFromApi, setAllMemesFromApi] = React.useState([]);
  const [currentMeme, setCurrentMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/c2qn.jpg",
  });

  //fetch data from api in json
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memeData) => setAllMemesFromApi(memeData.data.memes));
  }, []);

  //generates and sets a random image
  function clickHandler() {
    //random meme object within the array length (0-100)
    randomNum = Math.floor(
      Math.random() * allMemesFromApi.length //100
    );

    //random image
    randomImageUrl = allMemesFromApi[randomNum].url;
    setCurrentMeme((prevmeme) => ({
      ...prevmeme,
      randomImage: randomImageUrl,
    }));
  }

  //handle input field value changes
  function handleChange(event) {
    const { name, value } = event.target;
    setCurrentMeme((prevMemeDetails) => ({
      ...prevMemeDetails,
      [name]: value,
    }));
  }
  return (
    <div>
      <div className="input--container">
        <input
          type="text"
          name="topText"
          value={currentMeme.topText}
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={currentMeme.bottomText}
          placeholder="Bottom text"
          onChange={handleChange}
        />
      </div>

      <div className="button--container">
        <button onClick={clickHandler}>Get a new meme image 🖼️</button>
      </div>
      <section className="container">
        <div className="image--container">
          <img className="meme--image" src={currentMeme.randomImage} />
          <div className="top meme--text">{currentMeme.topText}</div>
          <div className="bottom meme--text">{currentMeme.bottomText}</div>
        </div>
      </section>
    </div>
  );
}
