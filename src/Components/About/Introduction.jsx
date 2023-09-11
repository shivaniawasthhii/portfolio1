import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Profile from "../../Assets/images/shivani_pro.png";
export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img src={Profile} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Shivani Awasthi </span> from{" "}
                <span className="different">Kanpur, Uttar Pradesh</span> I
                embarked on my academic journey by pursuing a Bachelor's degree
                in Agriculture from the esteemed Chandra Shekhar Azad University
                Of Agriculture And Technology. However, my career trajectory
                took an exciting turn when I discovered my passion for coding. I
                eagerly delved into the world of web development and took the
                initiative to enhance my skills. I enrolled in courses on Udemy,
                focusing on frontend technologies, particularly React.js. With
                unwavering dedication and a thirst for knowledge, I honed my
                skills. As I continued to grow and gain experience, I
                transitioned into a full-stack web developer role within my
                company. This transformation allowed me to leverage my newfound
                coding skills and apply them to real-world projects. The journey
                has been both challenging and immensely rewarding, fueling my
                enthusiasm for coding and problem-solving. I am excited to
                connect with like-minded individuals, share experiences, and
                explore opportunities in the ever-evolving realm of technology.
                Let's collaborate and create together!"
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do.....!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Dancing{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Solving Problems{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning New Techniques{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
