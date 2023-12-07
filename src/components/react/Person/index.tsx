import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "@public/assets/alex_nepsha_cv.pdf";
import myPhoto from "@public/assets/alex-nepsha.png";

import styles from "./styles.module.scss";

const isAvailable = true;
const linkedAcc = "https://www.linkedin.com/in/alex-nepsha-851a23115/";
const githubAcc = "https://github.com/Nepsha1986";

const Person: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__main}>
          <div className={styles.about__photo}>
            <img className="img-cover" src={myPhoto.src} alt="Alex Nepsha" />
          </div>
          <h2>{"Hello, I'm Alex"}</h2>

          <p>
            I am a highly skilled frontend developer with a passion for crafting
            seamless and visually appealing user experiences.
          </p>

          <div className={styles.about__socials}>
            <a href={githubAcc} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={linkedAcc} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className={styles.about__desc}>
          <h2>About Me</h2>

          <p style={{ fontWeight: "300" }}>
            Experienced in diverse web technologies, I creatively transform
            design mockups into responsive websites. I specialize in optimizing
            site performance, turning ideas into user-friendly interfaces.
            Committed to staying current with industry trends, I deliver
            high-quality code.
          </p>

          <p style={{ fontWeight: "300" }}>
            I also own{" "}
            <a href="/" target="_blank">
              <strong>gift-idea.co</strong>
            </a>
            , curating and presenting unique gift ideas to showcase my passion
            for creating engaging online experiences.
          </p>

          {isAvailable && (
            <div>
              <p style={{ fontSize: "1rem", textAlign: "left" }}>
                I am currently available for hire and enthusiastic about
                exploring new opportunities.
              </p>

              <a href={cv} target={"_blank"} rel="noreferrer">
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ marginRight: "10px" }}
                />{" "}
                <span>Download CV</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Person;
