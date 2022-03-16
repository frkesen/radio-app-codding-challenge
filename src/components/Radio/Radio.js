import React, { useState } from "react";
import { useEffect } from "react";
import Channels from "../Channel/Channels";

import "./Radio.scss";

export default function Radio() {
  const [radio, setRadio] = useState([1, 2, 3, 4]);
  const [isPlaying, setIsPlaying] = useState(false);

  // import getRequest func and fetch radio data

  const footer = (isPlaying) => {
    return isPlaying ? (
      <div>
        <span id="playing-text">CURRENTLY PLAYING</span>
        <div className="">{null}</div> {/*channel name*/}
      </div>
    ) : (
      <div>
        <span id="playing-text">NOTHING PLAYING</span>
      </div>
    );
  };
  return (
    <div className="main">
      <header className="radio_header">
        <span>STATIONS</span>
      </header>
      <section className="channel_list">
        {/* map Channel comp. with radio data */}
        {radio?.map((channel, index) => {
          return <Channels key={index} />;
        })}
      </section>
      <footer>{footer(isPlaying)}</footer>
    </div>
  );
}
