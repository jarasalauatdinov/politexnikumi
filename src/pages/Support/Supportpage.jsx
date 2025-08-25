import React, { useState } from "react";
import "./Support.css";

const Supportpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const supports = [
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      question: "What are the school hours?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  ];

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
            {supports.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button onClick={() => toggleAccordion(index)}>
                  {faq.question}
                  <span
                    className={`arrow ${activeIndex === index ? "open" : ""}`}
                  >
                    <img src="/img/bottom.svg" alt="" />
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-info">
          <h2>Контактная информация</h2>

          <div className="c-info-cards">
            <div className="c-info-card">
              <img src="/img/map.svg" alt="" />
              <h3>Адрес</h3>
              <a>123 School Street, City, Country</a>
            </div>
            <div className="c-info-card">
              <img src="/img/call.svg" alt="" />
              <h3>Телефон</h3>
              <div className="c-i-card-phone">
                <a href="tel:+1234567890">+1 234 567 890</a>
                <a href="tel:+1234567891">+1 234 567 891</a>
              </div>
            </div>
            <div className="c-info-card">
              <img src="/img/email.svg" alt="" />
              <h3>Email</h3>
              <a>info@schoolname.edu</a>
              <a>support@schoolname.edu</a>
            </div>
          </div>
          <div className="c-info-bottom">
            <h2>Часы работы</h2>
            <div className="c-info-b-cards">
              <div className="c-info-b-card">
                <h3>Администрация</h3>
                <p>
                  Понедельник - Пятница: 8:00 - 17:00 Суббота - Воскресенье:
                  Закрыто
                </p>
              </div>
              <div className="c-info-b-card">
                <h3>Учебные часы</h3>
                <p>
                  Понедельник - Пятница: 8:00 - 15:30 Суббота - Воскресенье:
                  Закрыто
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Supportpage;
