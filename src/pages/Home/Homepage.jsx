import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router";
import { api } from "../../api/api";


const newCard = [
  {
    id: 1,
    img: "/img/home-news-first.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    text: "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады.",
    button: "Читать далее",
  },

  {
    id: 2,
    img: "/img/home-news-second.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    text: "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады.",
    button: "Читать далее",
  },

  {
    id: 3,
    img: "/img/home-news-third.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    text: "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады.",
    button: "Читать далее",
  },
];



const Homepage = () => {
  const [employees, setEmployees] = useState([]);
  const currentLang = "ru"; // bu keyin i18n bilan avtomatik bo‘ladi

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const { data } = await api.get("/employees");
        setEmployees(data.data.items);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    }
    fetchEmployees();
  }, []);

  return (
    <main>
      <div className="container">
        <section className="home-page">
          <div className="home-place-l">
            <div className="home-place-l-wel">
              <h3>Добро пожаловать в нашу школу</h3>
              <p>
                Место, где знания встречаются с инновациями, а ученики готовятся
                к вызовам завтрашнего дня.
              </p>
            </div>
            <div className="home-place-btns">
              <NavLink to="/support#contact" className="home-place-btn-l">
                Связаться с нами <img src="/img/right-btn.svg" alt="" />
              </NavLink>
              <NavLink to="/about" className="home-place-btn-r">
                Узнать больше
              </NavLink>
            </div>
          </div>

          <div className="home-place-r">
            <div className="home-wrapper">
              <img src="/img/polii.jpg" alt="" className="classroom-img" />

              <div className="home-p-c h-p-card-top ">
                <img src="/img/cap.svg" alt="" />
                <div>
                  <h4>Excellence in Education</h4>
                  <p>Since 1998</p>
                </div>
              </div>

              <div className="home-p-c h-p-card-bottom">
                <img src="/img/peoples.svg" alt="" />
                <div>
                  <h4>500+ Students</h4>
                  <p>Join our community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-news">
          <div className="home-news-l">
            <div className="home-news-top">
              <h3>Последние новости</h3>
              <button className="home-news-btn">
                Смотреть все <img src="/img/blue-right-btn.svg" alt="" />
              </button>
            </div>

            <div className="home-news-list">
              {newCard.map((item) => (
                <div key={item.id} className="home-n-l-card">
                  <img src={item.img} className="home-imgs" />

                  <div className="news-content">
                    <span>
                      <img src="/img/black-calendar.svg" alt="" />5 мая 2025
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link to="/news">
                      {item.button}
                      <img src="/img/blue-right-btn.svg" alt="" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-news-r">
            <div className="home-n-r-head">
              <h3>Быстрые ссылки</h3>
            </div>
            <div className="home-news-r-p">
              <NavLink
                to="/lessons"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <img src="/img/calendar.svg" alt="" />
                Расписание уроков
              </NavLink>

              <a href="#documents">
                <img src="/img/documents.svg" alt="" />
                Школьные документы
              </a>

              <a href="#teachers">
                <img src="/img/peoples.svg" alt="" />
                Наши учителя
              </a>

              <a href="#courses">
                <img src="/img/books.svg" alt="" />
                Доступные курсы
              </a>
            </div>
          </div>
        </section>

        <section className="our-teachers" id="teachers">
          <div className="teacher-left">
            <h3>Наши учителя</h3>
            <p>
              Встречайте нашу преданную команду педагогов, которые готовы
              обеспечить самое качественное образование для учеников.
            </p>
          </div>
          <div className="teacher-right">
            {employees.map((emp) => (
              <div key={emp.id} className="teacher-card">
                <img src={emp.photo?.path} alt={emp.full_name[currentLang]} />
                <h4>{emp.full_name[currentLang]}</h4>
                <p>{emp.position?.name[currentLang]}</p>
                <p>{emp.email}</p>
                <p>{emp.phone}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-school">
          <div className="about-school-l" id="documents">
            <img src="/img/school-build.png" alt="" className="school-build" />
            <img
              src="/img/school-build-bac.svg"
              alt=""
              className="school-build-bac"
            />

            <h3>О нашей школе</h3>

            <p>
              Наша школа предоставляет качественное образование с 1998 года. Мы
              фокусируемся на развитии не только академических знаний, но и
              критического мышления, творчества и социальных навыков у наших
              учеников.
            </p>
            <div className="about-school-peoples">
              <h5>
                <span>500+</span>
                Учеников
              </h5>
              <h5>
                <span>50+</span>
                Учителей
              </h5>
              <h5>
                <span>20+</span>
                Классов
              </h5>
              <h5>
                <span>25+</span>
                Лет опыта
              </h5>
            </div>

            <NavLink to="/about" className="a-s-peoples-btn">
              Узнать больше о нас <img src="/img/right-btn.svg" alt="" />
            </NavLink>
          </div>

          <div className="about-school-r" id="courses">
            <div className="about-school-r-title">
              <h2>Upcoming Events</h2>
            </div>

            <div className="about-s-r-card">
              <h3>Parent-Teacher Conference</h3>
              <p>
                <img src="/img/calendar.svg" alt="" />
                May 15, 2025
              </p>
              <p>
                <img src="/img/clock.svg" alt="" />
                4:00 PM - 7:00 PM
              </p>
              <p>
                <img src="/img/map.svg" alt="" />
                Main Building, Floor 2
              </p>
            </div>

            <div className="about-s-r-card">
              <h3>Science Fair</h3>
              <p>
                <img src="/img/calendar.svg" alt="" />
                May 20, 2025
              </p>
              <p>
                <img src="/img/clock.svg" alt="" />
                10:00 AM - 3:00 PM
              </p>
              <p>
                <img src="/img/map.svg" alt="" />
                School Gymnasium
              </p>
            </div>

            <div className="about-s-r-card about-s-r-c-third">
              <h3>End of Year Concert</h3>
              <p>
                <img src="/img/calendar.svg" alt="" />
                June 5, 2025
              </p>
              <p>
                <img src="/img/clock.svg" alt="" />
                6:00 PM - 8:00 PM
              </p>
              <p>
                <img src="/img/map.svg" alt="" />
                School Auditorium
              </p>
            </div>

            <button>
              View All Events <img src="/img/black-right-btn.svg" alt="" />
            </button>
          </div>
        </section>

        <section className="photo-gallery">
          <div className="gallery-top">
            <h2>Photo Gallery</h2>
            <button>
              View All Photos <img src="/img/black-right-btn.svg" alt="" />
            </button>
          </div>
          <div className="gallery-bottom">
            <img src="/img/gallery-one.jpg" alt="" />
            <img src="/img/gallery-two.jpg" alt="" />
            <img src="/img/gallery-three.jpg" alt="" />
            <img src="/img/gallery-four.jpg" alt="" />
            <img src="/img/gallery-five.jpg" alt="" />
            <img src="/img/gallery-six.jpg" alt="" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
