import { useParams, useNavigate } from "react-router-dom";
import "./New.css";

const newsData = [
  {
    id: 1,
    img: "/img/home-news-first.jpg",
    date: "5 мая 2025",
    title: "Объявлены победители школьной олимпиады",
    fullText:
      "Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады. В этом году мероприятие собрало рекордное количество школьников. Здесь можно написать длинный текст с подробностями.",
  },
  {
    id: 2,
    img: "/img/home-news-first.jpg",
    date: "10 мая 2025",
    title: "Новый спортивный клуб открыт в школе",
    fullText:
      "В нашей школе начал работу новый спортивный клуб. Теперь ученики могут заниматься различными видами спорта после уроков. Здесь тоже будет длинный текст.",
  },
];

const Newpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = newsData.find((n) => n.id === Number(id));

  if (!news) {
    return <h2>Новость не найдена</h2>;
  }

  return (
    <main>
      <div className="container">
        <div className="new-content">
        <button onClick={() => navigate(-1)} className="back-btn">
          Назад
        </button>

        <div className="news-detail">
          <img src={news.img} alt={news.title} className="news-detail-img" />
          <h5>{news.date}</h5>
          <h2>{news.title}</h2>
          <p>{news.fullText}</p>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Newpage;
