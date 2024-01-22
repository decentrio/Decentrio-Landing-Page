import React from "react";
import style from "./section6.module.css";
import { useRef, useState } from "react";
import { Select } from "antd";
import emailjs from "@emailjs/browser";

const Section6 = () => {
  const form = useRef();
  const OPTIONS = [
    "Build Chains",
    "Low Level Module",
    "Audit",
    "Node Provider",
    "Relayer",
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  const sendEmail = (e) => {
    e.preventDefault();

    // Prepare the data to send
    const templateParams = {
      category: selectedItems.join(", "), 
      email: form.current.email.value,
      textInput: form.current.textInput.value,
    };
    console.log(templateParams);
    form.current.reset();
    setSelectedItems([]);
    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID", 
    //     "YOUR_TEMPLATE_ID", 
    //     templateParams,
    //     "YOUR_USER_ID" 
    //   )
    //   .then((response) => {
    //     console.log("Email sent successfully:", response);
    //     form.current.reset();
    //     setSelectedItems([]);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending email:", error);
    //   });
  };
  return (
    <div id="contact" className={style["section6-container"]}>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className={style.form}>
        <label for="category">How can we work together?</label>
        <Select
          mode="multiple"
          placeholder="What services are you interested in"
          name="test"
          value={selectedItems}
          onChange={setSelectedItems}
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
            border: "0.5px solid black",
          }}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
        <label for="email">Your email</label>

        <input type="email" name="email" placeholder="Email" />

        <label for="email">Tell us more about your idea</label>

        <textarea
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Type something..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Section6;
