import { useEffect, useState } from "react";
import "./lesson.css";
import { api } from "../../api/api";

function ScheduleCard() {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function fetchSchedules() {
      try {
        const { data } = await api.get("/schedules");
        setSchedules(data.data.items);
        if (data.data.items.length > 0) {
          setSelectedSchedule(data.data.items[0]); // birinchi fayl default
        }
      } catch (err) {
        console.error("Error fetching schedules:", err);
      }
    }
    fetchSchedules();
  }, []);

  const handleDownload = () => {
    if (selectedSchedule?.download_url) {
      window.open(selectedSchedule.download_url, "_blank");
    } else {
      alert("Файл недоступен для скачивания");
    }
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
            Выберите файл и скачайте расписание
          </p>

          {schedules.length > 0 ? (
            <div className="lesson-block">
              <label>
                Выберите файл:
                <select
                  value={selectedSchedule?.id || ""}
                  onChange={(e) =>
                    setSelectedSchedule(
                      schedules.find((s) => s.id === Number(e.target.value))
                    )
                  }
                >
                  {schedules.map((sch) => (
                    <option key={sch.id} value={sch.id}>
                      {sch.description || sch.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="lesson-class">
                Выбран файл: <span>{selectedSchedule?.description}</span>
              </div>

              <button className="download-btn" onClick={handleDownload}>
                <img src="/img/download-icon.svg" alt="" />
                Скачать расписание
              </button>
            </div>
          ) : (
            <p>Загрузка расписаний...</p>
          )}

          <div className="update-info">
            Последнее обновление расписаний:{" "}
            {schedules[0]?.created_at
              ? new Date(schedules[0].created_at).toLocaleDateString("ru-RU")
              : "—"}
          </div>
        </section>

        <section className="lesson-bottom">
          <h3>Доступные расписания</h3>
          <p className="l-bottom-p">
            Список всех доступных для скачивания расписаний
          </p>

          <div className="lesson-b-cards">
            {schedules.map((sch) => (
              <div
                key={sch.id}
                className={`lesson-b-card ${
                  selectedSchedule?.id === sch.id ? "active" : ""
                }`}
                onClick={() => setSelectedSchedule(sch)}
              >
                <h4>
                  <img src="/img/lesson-doc.svg" alt="" />
                  {sch.description || sch.name}
                </h4>
                <p>{sch.size}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ScheduleCard;
