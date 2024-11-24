import React, { useState } from "react";
import style from './Form.module.css';

export default function Form() {
  const [fortune, setFortune] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://axel-node.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFortune(data.fortune);
    } catch (error) {
      console.error("Error fetching the fortune:", error);
    }
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <button className={style.btn}>Get Fortune</button>
        </div>
      </form>
      {fortune && <p>Your fortune: {fortune}</p>}
    </div>
  );
}
