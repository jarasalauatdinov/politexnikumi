import React, { useState } from "react";
import "./Rules.css";

const Rulespage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const rules = [
    {
      title: "Attendance and Punctuality",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Behavior and Discipline",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Uniform and Appearance",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Academic Integrity",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "School Facilities and Property",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
      title: "Electronic Devices",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <div className="container">
        <section className="rules-top">
          <h3>School Rules and Documents</h3>
          <p>
            Our school maintains clear rules and policies to ensure a safe,
            respectful, and productive learning environment for all students.
          </p>
        </section>

        <section className="school-content">
          <div className="school-rules">
            <h4>
              <img src="/img/shield.svg" alt="" />
              School Rules
            </h4>
            {rules.map((rule, index) => (
              <div key={index} className="accordion-item">
                <button onClick={() => toggleAccordion(index)}>
                  {rule.title}
                  <span
                    className={`arrow ${activeIndex === index ? "open" : ""}`}
                  >
                    <img src="/img/bottom.svg" alt="" />
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{rule.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="school-hours">
            <h3>
              <img src="/img/black-clock.svg" alt="" />
              School Hours
            </h3>

            <div className="s-hours-titles">
              <div className="s-hours-p">
                <h4>Regular School Days</h4>
                <p>Monday - Friday: 8:00 AM - 3:30 PM</p>
              </div>
              <div className="s-hours-p">
                <h4>Administration Office</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
              <div className="s-hours-p">
                <h4>Library</h4>
                <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
              </div>
              <div className="s-hours-p">
                <h4>Extracurricular Activities</h4>
                <p>Monday - Friday: 3:45 PM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </section>

        <section className="school-documents">
          <h3>School Documents</h3>

          <div className="school-d-cards">
            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>School Charter</h4>
                <p>Official school charter document</p>

                <div className="s-d-card-bottom">
                  <h5>1.2 MB • PDF</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>Student Handbook</h4>
                <p>Complete guide for students</p>

                <div className="s-d-card-bottom">
                  <h5>3.5 MB • PDF</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>Parent Guide</h4>
                <p>Information for parents</p>

                <div className="s-d-card-bottom">
                  <h5>2.8 MB • PDF</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>Academic Calendar</h4>
                <p>School year calendar with important dates</p>

                <div className="s-d-card-bottom">
                  <h5>0.8 MB • PDF</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>Enrollment Forms</h4>
                <p>Forms required for new student enrollment</p>

                <div className="s-d-card-bottom">
                  <h5>1.5 MB • ZIP</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="school-d-card">
              <img src="/img/documents.svg" alt="" className="s-d-card-d" />

              <div className="s-d-card-right">
                <h4>Code of Conduct</h4>
                <p>Detailed code of conduct for students</p>

                <div className="s-d-card-bottom">
                  <h5>1.1 MB • PDF</h5>
                  <button>
                    <img src="/img/download.svg" alt="" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Rulespage;
