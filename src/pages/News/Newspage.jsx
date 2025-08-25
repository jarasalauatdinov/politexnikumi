import React from "react";
import "./News.css";
import { NavLink } from "react-router-dom";

const newsData = [
  {
    id: 1,
    img: "/img/home-news-first.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    text: "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады. В этом году мероприятие собрало рекордное…",
  },
  {
    id: 2,
    img: "/img/home-news-first.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    text: "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады. В этом году мероприятие собрало рекордное…",
  },
];

const Newspage = () => {
  return (
    <main>
      <div className="container">
        <section className="school-news">
          <h3 className="school-news-title">Школьные новости</h3>
          <p className="school-news-p">
            Будьте в курсе последних новостей, событий и объявлений нашего
            школьного сообщества.
          </p>

          <div className="news-search">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск новостей..." />
          </div>

          <div className="s-news-cards">
            {newsData.map((item) => (
              <div key={item.id} className="s-news-card">
                <img src={item.img} className="news-img-first" />

                <div className="s-n-card-content">
                  <h5>
                    <img
                      src="/img/black-calendar.svg"
                      alt="calendar"
                      className="news-calendar"
                    />
                    {item.date}
                  </h5>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <NavLink to={`/news/${item.id}`}>
                    Читать далее <img src="/img/blue-right-btn.svg" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Newspage;
