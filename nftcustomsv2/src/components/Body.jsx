import { useEffect, useState, useRef } from "react";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./base.css";

const Body = () => {
  const bubble = React.createElement("div", { className: "bubble" });

  ReactDOM.render(bubble);
  return (
    <div className="justify-center">
      {/* <h1 className="text-white pt-10 font-pop text-8xl">
        Learn more about React
      </h1>

      <ol className="text-2xl mt-10 mr-5 text-white text-right font-pop">
        <li>Was first released in 2013</li>
        <li>Was originaly created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>

      <button
        type="button"
        class=" text-center mt-10 ml-10 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button> */}
      <h1 className="text-white pt-10 font-pop text-8xl">NFTCOUSTOMS</h1>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        store
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Phygitalize
      </button>
      <div className={styles.bubbleWrapper}>
        <div className={styles.bubble}></div>
      </div>
    </div>
  );
};
export default Body;
