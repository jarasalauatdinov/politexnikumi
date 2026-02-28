import React, { useState } from 'react'
import './News.scss'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AllNews } from './new/AllNews'
import { SearchInput } from './new/search/SearchInput'
import { SearchResultsList } from './new/search/SearchResultsList'

const Newpage = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className='container'>
          <div className="school-news">
            <div className="school-news-headline">
              <h1>{t("news-page.news-title")}</h1>
              <p>{t("news-page.news-p")}</p>
            </div>
            <div className="news-search">
              <div className="news-search">
                <div className="search-bar-container">
                  <SearchInput setResults={setResults}  />
                  <SearchResultsList  results={results} onSelect={(item) => navigate(`/news/${item.id}`)} />
                </div>
              </div>
            </div>
            <div className="news-posts">
              <AllNews/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Newpage