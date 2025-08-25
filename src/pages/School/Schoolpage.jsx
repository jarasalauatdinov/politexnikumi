import React from "react";
import "./school.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";


const Schoolpage = () => {
  return (
    <main>
      <div className="container">
        <section className="about-our">
          <div className="about-our-l">
            <h3>About Our School</h3>
            <p>
              Our school has been providing quality education since 1998. We
              focus on developing not only academic knowledge but also critical
              thinking, creativity, and social skills in our students.
            </p>
            <p>
              We believe that every student has unique talents and abilities,
              and our mission is to help them discover and develop these talents
              to their fullest potential.
            </p>
          </div>

          <div className="about-our-r">
            <img src="/img/full-school.jpg" alt="" />
          </div>
        </section>

        <section className="about-tabs">
          <NavLink
            to="mission-vision"
            className={({ isActive }) =>
              isActive || location.pathname === "/about"
                ? "tab tabs-active"
                : "tab"
            }
          >
            Mission & Vision
          </NavLink>
          <NavLink
            to="our-history"
            className={({ isActive }) => (isActive ? "tab tabs-active" : "tab")}
          >
            Our History
          </NavLink>
          <NavLink
            to="core-values"
            className={({ isActive }) => (isActive ? "tab tabs-active" : "tab")}
          >
            Core Values
          </NavLink>
        </section>
        <Outlet />

        <section className="leadership">
          <h2>School Leadership</h2>

          <div className="leadership-cards">
            <div className="leadership-card">
              <div className="l-img-wrapper">
                <img src="/img/peoples.svg" alt="" />
              </div>
              <h3>John Smith</h3>
              <h6>Principal</h6>
              <p>
                With over 20 years of experience in education, Mr. Smith leads
                our school with vision and dedication.
              </p>
            </div>

            <div className="leadership-card">
              <div className="l-img-wrapper">
                <img src="/img/books.svg" alt="" />
              </div>
              <h3>Maria Johnson</h3>
              <h6>Principal</h6>
              <p>
                With over 20 years of experience in education, Mr. Smith leads
                our school with vision and dedication.
              </p>
            </div>

            <div className="leadership-card">
              <div className="l-img-wrapper">
                <img src="/img/medal.svg" alt="" />
              </div>
              <h3>Robert Davis</h3>
              <h6>Principal</h6>
              <p>
                With over 20 years of experience in education, Mr. Smith leads
                our school with vision and dedication.
              </p>
            </div>
          </div>
        </section>

        <section className="facilities">
          <h2>Our Facilities</h2>

          <div className="facilities-cards">
            <div className="facilities-top">
              <div className="facilities-card">
                <img src="/img/building.svg" alt="" />
                <h3>Modern Classrooms</h3>

                <p>
                  A vast collection of books, digital resources, and quiet study
                  spaces.
                </p>
              </div>

              <div className="facilities-card">
                <img src="/img/book.svg" alt="" />
                <h3>Library</h3>

                <p>
                  A vast collection of books, digital resources, and quiet study
                  spaces.
                </p>
              </div>
            </div>

            <div className="facilities-bottom">
              <div className="facilities-card">
                <img src="/img/camputer.svg" alt="" />
                <h3>Computer Labs</h3>

                <p>
                  A vast collection of books, digital resources, and quiet study
                  spaces.
                </p>
              </div>

              <div className="facilities-card">
                <img src="/img/facilities.svg" alt="" />
                <h3>Sports Facilities</h3>

                <p>
                  A vast collection of books, digital resources, and quiet study
                  spaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Schoolpage;
