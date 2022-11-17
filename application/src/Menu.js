import './App.css';

function Menu(props) {
    return (
      <div className={props.className}>
        <ul className='menuButtons'>
          <li>Главная</li>
          <li>Схема объектов</li>
          <li>Перечень должностей и профессий</li>
          <li>Реестр НПА</li>
          <li>Картотека граждан</li>
          <li>Отчет по бронированию</li>
          <li>Моб.план</li>
          
        </ul>
      </div>
    );
  }
  export default Menu;