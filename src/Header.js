import React, { useState } from "react";
import style from './Header.module.css';
import Form from './Form.js';

export default function Header() {
  return (
    <header>
        <h1>Predict My Fortune!</h1>
        <Form/>
    </header>
  );
}