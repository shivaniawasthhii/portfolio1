import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import DescriptionIcon from "@material-ui/icons/Description";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Shivani Awasthi</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Full-stack web developer with expertise in MERN stack, currently
          engaged in building dynamic web applications using React, Next.js,
          MongoDB, and Node.js
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Awasthiishivanii"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:shivani28f23@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/shivani-awasthi-51b18a284/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/drive/u/1/folders/1-rsSZjDgjAiDIfEy991TPL6j5d-XxkIk"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <section id="#timeline">
        <Timeline />
      </section>
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
