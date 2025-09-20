import React, { useState } from 'react'
import './News.scss'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AllNews } from './new/AllNews'
import { SearchInput } from './new/search/SearchInput'
import { SearchResultsList } from './new/search/SearchResultsList'

const Newpage = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { darkMode } = useOutletContext();
  const { t } = useTranslation();

  return (
    <>
      <main className={`news-dark${darkMode ? ' dark' : ''}`}>
        <section>
          <div className='container'>
            <div className="school-news">
              <div className="school-news-headline">
                <h1>{t("news-page.news-title")}</h1>
                <p>{t("news-page.news-p")}</p>
              </div>
              <div className="news-search">
                <div className="news-search">
                  <div className="search-bar-container">
                    <SearchInput setResults={setResults} darkMode={darkMode} />
                    <SearchResultsList darkMode={darkMode} results={results} onSelect={(item) => navigate(`/news/${item.id}`)} />
                  </div>
                </div>
              </div>
              <div className="news-posts">
                <AllNews darkMode={darkMode} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Newpage