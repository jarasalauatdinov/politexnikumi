import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Support.css";
import { api } from "../../api/api";

const Supportpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const [school, setSchool] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const currentLang = "kk";

  useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el){
      el.scrollIntoView({ behavior: "smooth"});
    }
  }
}, [location]);

  useEffect(() => {
    async function fetchSchool() {
      try {
        const { data } = await api.get("/schools/1"); 
        setSchool(data.data);
      } catch (err) {
        console.error("Error fetching school:", err);
      }
    }
    fetchSchool();
  }, []);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const { data }  = await api.get("/faqs");
        setFaqs(data.data.items);
      } catch (err) {
        console.error("Error fetching faqs:", err)
      }
    }
    fetchFaqs();
  }, []);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <div className="container">
      <section className="support">
          <h3 className="s-faq-title">Поддержка и FAQ</h3>
          <p className="s-faq-p">
            Найдите ответы на часто задаваемые вопросы и получите необходимую
            информацию о нашей школе.
          </p>

          <div className="faq-list">
            <h4>
              <img src="/img/question-mark.svg" alt="" />
              Часто задаваемые вопросы
            </h4>

            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item">
                  <button onClick={() => toggleAccordion(index)}>
                    {faq.question?.[currentLang]}
                    <span
                      className={`arrow ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <img src="/img/bottom.svg" alt="" />
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p>{faq.answer?.[currentLang]}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Загрузка FAQ...</p>
            )}
          </div>
        </section>

        <section className="contact-info" id="contact">
  <h2>Контактная информация</h2>

  {school ? (
    <div className="c-info-cards">
      <div className="c-info-card">
        <img src="/img/map.svg" alt="" />
        <h3>Адрес</h3>
        <p>{school?.location}</p>
      </div>

      <div className="c-info-card">
        <img src="/img/call.svg" alt="" />
        <h3>Телефон</h3>
        <div className="c-i-card-phone">
          <a href={`tel:${school?.phone}`}>{school?.phone}</a>
        </div>
      </div>

      <div className="c-info-card">
        <img src="/img/email.svg" alt="" />
        <h3>Название школы</h3>
        <p>{school?.name?.[currentLang]}</p>
      </div>

      <div className="c-info-card">
        <img src="/img/info.svg" alt="" />
        <h3>Описание</h3>
        <p>{school?.description?.[currentLang]}</p>
      </div>
    </div>
  ) : (
    <p>Загрузка...</p>
  )}
</section>
  
      </div>
    </main>
  );
};

export default Supportpage;
