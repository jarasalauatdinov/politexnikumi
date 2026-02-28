import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, NavLink, useNavigate } from "react-router";
import { api } from "../../api/api";
import { ArrowRight } from "lucide-react";
import { Flex, Loader } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Homepage = () => {
  const [home, setHome] = useState({});
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const navigation = useNavigate();

  const teacherClick = () => {
    navigation("/teachers");
  };



  const docClick = () => {
    navigation("/rules");
  };

  async function getHome() {
    setLoading(true);
    try {
      const { data } = await api.get("/");
      setHome(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHome();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const ScrollReveal = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main>
      <div className="container">
      <section className="home-page">
  <motion.div
    className="home-place-l"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="home-place-l-wel">
      <h3>{t("home.salemberdik")}</h3>
      <p>{t("home.salem-text")}</p>
    </div>
    <div className="home-place-btns">
      <NavLink to="/support#contact" className="home-place-btn-l">
        {t("home.contact-us")} <img src="/img/right-btn.svg" alt="" />
      </NavLink>
      <NavLink to="/about" className="home-place-btn-r">
        {t("home.find-more")}
      </NavLink>
    </div>
  </motion.div>

  <motion.div
    className="home-place-r"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  >
    <div className="home-wrapper">
      <img src="/img/polii.jpg" alt="" className="classroom-img" />

      <motion.div
        className="home-p-c h-p-card-top"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img src="/img/cap.svg" alt="" />
        <div>
          <h4>{t("title-education")}</h4>
          <p>{t("title-born")}</p>
        </div>
      </motion.div>

      <motion.div
        className="home-p-c h-p-card-bottom"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <img src="/img/peoples.svg" alt="" />
        <div>
          <h4>{t("title-students")}</h4>
          <p>{t("title-community")}</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>
        
          <ScrollReveal>
        <section className="home-news">
          <div className="home-news-l">
            <div className="home-news-top">
              <h3>{t("home.last-news")}
              <div className="n-heading-divider"></div>

              </h3>
              <Link to="/news" onClick={handleClick}>
                <button className="home-news-btn">
                  {t("btn.see")} <img src="/img/blue-right-btn.svg" alt="" />
                </button>
              </Link>
            </div>

            <div className="home-news-list">
              {loading ? (
                <p>Loading...</p>
              ) : (
                home.last_news?.slice(0, 3).map((item) => (
                  <div key={item.id} className="home-n-l-card">
                  <div className="home-img-wrapper">
                    <img
                      src={item.cover_image?.path}
                      alt={item.title[language]}
                      className="home-imgs"
                    />
                  </div>
                
                  <div className="news-content">
                    <h3>{item.title[language]}</h3>
                    <p>{item.short_content[language]}</p>
                    <Link to={`/news/${item.id}`} className="news-c-a">
                      {t("news-page.read-more")}{" "}
                      <img src="/img/blue-right-btn.svg" alt="" />
                    </Link>
                  </div>
                </div>
                
                ))
              )}
            </div>
          </div>

          <div className="home-news-r">
            <div className="home-n-r-head">
              <h3>{t("home.fast-links")}</h3>
              <div className="heading-divider">
              </div>
            </div>
            <div className="home-news-r-p">
              <NavLink to="/lessons" className="nav-item">
                <img src="/img/calendar.svg" alt="" />
                {t("btn.schedule")}
              </NavLink>

              <a onClick={docClick} href="#documents">
                <img src="/img/documents.svg" alt="" />
                {t("btn.documents")}
              </a>

              <a onClick={teacherClick} href="#teachers">
                <img src="/img/peoples.svg" alt="" />
                {t("btn.teachers")}
              </a>

              <a href="#courses">
                <img src="/img/books.svg" alt="" />
                {t("btn.course")}
              </a>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="our-teachers" id="teachers">
          <div className="teacher-left">
            <h3>{t("home.our-teachers")}</h3>
            <p>
            {t("home.teachers-text")}
            </p>
          </div>
          <div className="teacher-right">
            {loading ? (
              <p>Loading...</p>
            ) : (
              home.teachers?.slice(0, 4).map((emp) => (
                <div key={emp.id} className="teacher-card">
                  <img src={emp.photo} alt={emp.full_name} />
                  <h4>{emp.full_name}</h4>
                  <p>{emp.position}</p>
                  <p>{emp.email}</p>
                  <p>{emp.phone}</p>
                </div>
              ))
            )}
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="about-school">
          <div className="about-school-l" id="documents">
            <img src="/img/full-poli.jpg" alt="" className="school-build" />
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
              {home.informations?.map((el) => (
                <div className="a-s-people" key={el.id}>
                  <h3>{el.count}</h3>
                  <p>{el.title[language]}</p>
                </div>
              ))}
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
        </ScrollReveal>

          <ScrollReveal>
        <section className="photo-gallery">
          <div className="photo-gallery-top">
            <h1>{t("btn.gallery")}</h1>
            <Link onClick={handleClick} to={"/gallery"}>
              <button>
                {t("btn.see")} <ArrowRight size={14} color='#CBD5E1' />
              </button>
            </Link>
          </div>

          <div className="photo-gallery-main">
          {loading ? (
  <Flex align="center" justify="center" style={{ width: '100%', height: '300px' }}>
    <Loader size={60} color="blue" />
  </Flex>
) : (

              home.albums
                ?.flatMap(album => album.photos ?? [])
                .slice(0, 6)
                .map(photo => (
                  <img
                    key={photo.id}
                    src={photo.path}
                    alt={photo.name}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                ))
            )}
          </div>
        </section>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Homepage;
