import React, { useEffect, useState } from 'react'
import './school.scss'
import { Award, Book, BookOpen, Command, Monitor, School, Users } from 'lucide-react'
import { api } from '../../api/api'
import { Flex, Loader } from '@mantine/core'
import { useTranslation } from   'react-i18next'
import ScrollReveal from '../../components/ScrollReveal'


const SchoolPage = () => {
  const [active, setActive] = useState("mission")
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const language = i18n.language || 'ru';

  async function getAbout() {
    setLoading(true);
    try {
      const { data } = await api.get('/main/about');
      setAbout(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <main>
        <div className='container'>
          <ScrollReveal delay={0.2}>
          <section>
            <div className="about-our-school">
              <div className="about-school-left">
                <h1>{t("about.title")}</h1>
                <div className="school-inf-ph">
                  <p>
                   {t("about.school-title")}
                  </p>
                  <p>
                    {t("about.school-p")}
                  </p>
                </div>
              </div>
              <div className="about-school-right">
                <img src="/img/about-img.jpg" alt="" />
              </div>
            </div>
          </section>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
          <section>
            <div className="tabs-wrapper">
              <div className="tabs">
                <button
                  className={`tab ${active === "mission" ? "active" : ""}`}
                  onClick={() => setActive("mission")}
                >
                  {t("about.mission-vision")}
                </button>
                <button
                  className={`tab ${active === "history" ? "active" : ""}`}
                  onClick={() => setActive("history")}
                >
                  {t("about.our-history")}
                </button>
                <button
                  className={`tab ${active === "values" ? "active" : ""}`}
                  onClick={() => setActive("values")}
                >
                  {t("about.core-values")}
                </button>
              </div>
              <div className={`tab-content ${active === "mission" ? "active" : ""}`}>
                <h3>{t("about.our-mission")}</h3>
                {loading ? (
                  <Flex justify="center" align="center" style={{ height: "200px" }}>
                    <Loader size={50} color="blue" />
                  </Flex>
                ) : (
                  <div className="tab-content-ph">
                    {about.missions?.map((el) => (
                      <div className='our-target about-history' key={el.id}>
                        <div className="target-name history-year">
                          <p>{el.name[language]}</p>
                        </div>
                        <p className='target-text history-text'>{el.description[language]}</p>
                      </div>
                    ))}
                  </div>
                )}
          
              </div>
              <div className={`tab-content ${active === "history" ? "active" : ""}`}>
                <h3>{t("about.our-history")}</h3>
                {loading ? (
                  <Flex justify="center" align="center" style={{ height: "200px" }}>
                    <Loader size={50} color="blue" />
                  </Flex>
                ) : (
                  <div className="tab-content-ph">
                    {about.histories?.map((el) => (
                      <div className='about-history' key={el.id}>
                        <div className="history-year">
                          <p>{el.year}</p>
                        </div>
                        <p className='history-text'>{el.text[language]}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={`tab-content ${active === "values" ? "active" : ""}`}>
                <h3>{t("about.core-values")}</h3>
                {loading ? (
                  <Flex justify="center" align="center" style={{ height: "200px" }}>
                    <Loader size={50} color="blue" />
                  </Flex>
                ) : (
                  <div className="tab-content-ph">
                    {about.values?.map((el) => (
                      <div className='about-history' key={el.id}>
                        <div>
                          <p>{el.name[language]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
          <section>
            <div className="leadership">
              <div className="leadership-headline">
                <h1>{t("about.school-lidership")}</h1>
              </div>
              <div className="leadership-cards">
                <div className="principal-leadership leader-card">
                  <div className="leader-card-top">
                    <div className="avatar">
                      <Users size={48} />
                    </div>
                    <div className="whois">
                      <h4>{t("about.director-name")}</h4>
                      <p>{t("about.principal")}</p>
                    </div>
                  </div>
                  <div className="leader-card-btm">
                    <p>
                    {t("about.our-director")}
                    </p>
                  </div>
                </div>

                <div className="academic-leadership leader-card">
                  <div className="leader-card-top">
                    <div className="avatar">
                      <BookOpen size={48} />
                    </div>
                    <div className="whois">
                      <h4>{t("about.academic-name")}</h4>
                      <p>{t("about.academic-director")}</p>
                    </div>
                  </div>
                  <div className="leader-card-btm">
                    <p>
                     {t("about.academic-p")}
                    </p>
                  </div>
                </div>

                <div className="student-leadership leader-card">
                  <div className="leader-card-top">
                    <div className="avatar">
                      <Award size={48} />
                    </div>
                    <div className="whois">
                      <h4>{t("about.affairs-name")}</h4>
                      <p>{t("about.affairs")}</p>
                    </div>
                  </div>
                  <div className="leader-card-btm">
                    <p>
                      {t("about.affairs-p")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </ScrollReveal>
          <ScrollReveal delay={0.2}>
          <section>
            <div className="facilityes">
              <div className="facilyties-top">
                <h1>{t("about.our-facilities")}</h1>
              </div>
              <div className="facilyties-bottom">
                <div className="facilyties-cards-top">
                  <div className="facilyties-card">
                    <div className="fac-card-top">
                      <div className='avatar'>
                        <School size={32} />
                      </div>
                      <h3>{t("about.modern")}</h3>
                    </div>
                    <div className="fac-card-btm">
                      <p>
                        {t("about.modern-p")}
                      </p>
                    </div>
                  </div>
                  <div className="facilyties-card">
                    <div className="fac-card-top">
                      <div className="avatar">
                        <Book size={32} />
                      </div>
                      <h3>{t("about.library")}</h3>
                    </div>
                    <div className="fac-card-btm">
                      <p>
                      {t("about.library-p")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="facilyties-card-bottom">
                  <div className="facilyties-card">
                    <div className="fac-card-top">
                      <div className="avatar">
                        <Monitor size={32} />
                      </div>
                      <h3>{t("about.labs")}</h3>
                    </div>
                    <div className="fac-card-btm">
                      <p>
                          {t("about.labs-p")}
                      </p>
                    </div>
                  </div>
                  <div className="facilyties-card">
                    <div className="fac-card-top">
                      <div className="avatar">
                      <Command size={32} />
                      </div>  
                      <h3>{t("about.sports")}</h3>
                    </div>
                    <div className="fac-card-btm">
                      <p>
                        {t("about.sports-p")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </ScrollReveal>
        </div>
      </main>
    </>
  )
}

export default SchoolPage