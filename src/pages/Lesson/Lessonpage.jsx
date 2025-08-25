import { useState } from "react";
import "./lesson.css";

function ScheduleCard() {
  const [selectedClass, setSelectedClass] = useState("10A");

  const classes = [
    "5A", "5B", "6A", "6B",
    "7A", "7B", "8A", "8B",
    "9A", "9B", "10A", "10B",
    "11A", "11B"
  ];

  const handleDownload = () => {
    alert(`Скачивается расписание для класса: ${selectedClass}`);
  };

  return (
    <main>
      <div className="container">
      <section className="lesson-card">
        <h3>
          <img className="lesson-doc" src="/img/lesson-doc.svg" alt="" />
          Скачать расписание занятий
        </h3>

        <p className="lesson-desc">
          Выберите класс и формат для скачивания расписания
        </p>

        <div className="lesson-block">
          <label>
            Выберите класс: 
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </label>

        <div className="lesson-class">
          Выбран класс: <span>{selectedClass}</span>
        </div>

          <button className="download-btn" onClick={handleDownload}>
            <img src="/img/download-icon.svg" alt="" />
            Скачать расписание
          </button>
        </div>

        <div className="update-info">
          Последнее обновление расписаний: 15 сентября 2025
        </div>
      </section>

      <section className="lesson-bottom">
        <h3>Доступные расписания</h3>
        <p className="l-bottom-p">
          Список всех доступных для скачивания расписаний
        </p>

        <div className="lesson-b-cards">
          {classes.map((cls) => (
            <div
              key={cls}
              className={`lesson-b-card ${
                selectedClass === cls ? "active" : ""
              }`}
              onClick={() => setSelectedClass(cls)}
            >
              <h4>
                <img src="/img/lesson-doc.svg" alt="" />
                Класс {cls}
              </h4>
              <p>Нажмите для выбора</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}

export default ScheduleCard;
