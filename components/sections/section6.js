import React from "react";
import style from "./section6.module.css";

const Section6 = () => {
  return (
    <div className={style["section6-container"]}>
      <h1>Contact Us</h1>
      <div className={style.form}>
        <label for="category">How can we work together?</label>

        <select id="category" name="works">
          <option value="option1">Category 1</option>
          <option value="option2">Category 2</option>
          <option value="option3">Category 3</option>
        </select>

        <label for="email">Your email</label>


        <input type="email" name="email" placeholder="Email"/>

        <label for="email">Tell us more about your idea</label>

        <textarea
          type=""
          id="textInput"
          name="textInput"
          placeholder="Type something..."
        />
      </div>
      <button>
            <a>CONTACT US</a>
        </button>
    </div>
  );
};

export default Section6;
