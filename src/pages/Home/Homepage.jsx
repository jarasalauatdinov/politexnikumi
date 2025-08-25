import React from "react";
import "./Home.css";
import { NavLink } from "react-router";

const Homepage = () => {
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
            <a href="/Footer" className="home-place-btn-l">
              Связаться с нами <img src="/img/right-btn.svg" alt="" />
            </a>
            <button className="home-place-btn-r">Узнать больше</button>
          </div>

          <div className="home-place-r">
            <div className="home-wrapper">
              <img src="/img/classroom.svg" alt="" className="classroom-img" />

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
              <div className="home-n-l-card">
                <img
                  src="/img/home-news-first.jpg"
                  alt=""
                  className="home-imgs"
                />

                <div className="news-content">
                  <span>
                    <img src="/img/black-calendar.svg" alt="" />5 мая 2025
                  </span>
                  <h3>Объявлены победители школьной олимпиады</h3>
                  <p>
                    Поздравляем всех участников и победителей нашей ежегодной
                    школьной олимпиады.
                  </p>
                  <button>
                    Читать далее <img src="/img/blue-right-btn.svg" alt="" />
                  </button>
                </div>
              </div>

              <div className="home-n-l-card">
                <img
                  src="/img/home-news-second.jpg"
                  alt=""
                  className="home-imgs"
                />
                <div className="news-content">
                  <span>
                    <img src="/img/black-calendar.svg" alt="" />
                    28 апреля 2025
                  </span>
                  <h3>Объявлены победители школьной олимпиады</h3>
                  <p>
                    Поздравляем всех участников и победителей нашей ежегодной
                    школьной олимпиады.
                  </p>
                  <button>
                    Читать далее <img src="/img/blue-right-btn.svg" alt="" />
                  </button>
                </div>
              </div>

              <div className="home-n-l-card">
                <img
                  src="/img/home-news-third.jpg"
                  alt=""
                  className="home-imgs"
                />
                <div className="news-content">
                  <span>
                    <img src="/img/black-calendar.svg" alt="" />
                    15 апреля 2025
                  </span>
                  <h3>Объявлены победители школьной олимпиады</h3>
                  <p>
                    Поздравляем всех участников и победителей нашей ежегодной
                    школьной олимпиады.
                  </p>
                  <button>
                    Читать далее <img src="/img/blue-right-btn.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>  

          <div className="home-news-r">
            <div className="home-n-r-head">
              <h3>Быстрые ссылки</h3>
            </div>
            <div className="home-news-r-p">
              <NavLink   to="/news"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}>
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
            <h3>Our Teachers</h3>
            <p>
              Meet our dedicated team of educators committed to providing the
              highest quality education and support for our students.
            </p>
          </div>
          <div className="teacher-right">
            <div className="teacher-card">
              <img src="/img/teacher-first.png" alt="" />
              <h4>Dr. Sarah Johnson</h4>
              <p>Principal</p>
            </div>
            <div className="teacher-card">
              <img src="/img/teacher-second.png" alt="" />
              <h4>Prof. Michael Chen</h4>
              <p>Mathematics</p>
            </div>
            <div className="teacher-card">
              <img src="/img/teacher-third.png" alt="" />
              <h4>Dr. Emily Rodriguez</h4>
              <p>Science</p>
            </div>
            <div className="teacher-card">
              <img src="/img/teacher-fourth.png" alt="" />
              <h4>Prof. David Kim</h4>
              <p>Literature</p>
            </div>
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

            <button>
              Узнать больше о нас <img src="/img/right-btn.svg" alt="" />
            </button>
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
