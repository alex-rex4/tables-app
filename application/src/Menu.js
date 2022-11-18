import { react } from "react";
import { useState } from "react";

import './App.css';

function Menu(props) {
  const [state, setState]=useState("");

    return (
      <div className={props.className}>
        <ul >
          <li className='menuButton' onClick={() => setState("home")}>Главная</li>
          <li className='menuButton' onClick={() => setState("scheme")}>Схема объектов</li>
          <li className='menuButton' onClick={() => setState("jobList")}>Перечень должностей и профессий</li>
          <li className='menuButton' onClick={() => setState("registy")}>Реестр НПА</li>
          <li className='menuButton' onClick={() => setState("cardFile")}>Картотека граждан</li>
          <li className='menuButton' onClick={() => setState("bookReport")}>Отчет по бронированию</li>
          <li className='menuButton' onClick={() => setState("mobPlan")}>Моб.план</li>
          
        </ul>
      </div>
    );
  }
  export default Menu;