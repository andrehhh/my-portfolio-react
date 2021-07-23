import React from "react";

import htmlLogo from "../images/html-logo.svg";
import cssLogo from "../images/css-logo.svg";
import javascriptLogo from "../images/javascript-logo.svg";
import reactLogoRect from "../images/react-logo-2.svg";
import sassLogo from "../images/sass-logo.svg";
import jqueryLogo from "../images/jquery-logo.svg";
import nodeLogoRect from "../images/node-logo-2.svg";
import expressLogo from "../images/express-logo.svg";
import mongoLogo from "../images/mongo-logo.svg";
import mysqlLogo from "../images/mysql-logo.svg";
import phpLogo from "../images/php-logo.svg";
import pythonLogo from "../images/python-logo.svg";
import flaskLogo from "../images/flask-logo.svg";
import javaLogo from "../images/java-logo.svg";
import gitLogo from "../images/git-logo.svg";
import emotionLogo from "../images/emotion-logo.png";
import graphqlLogo from "../images/graphql-logo.svg";
// import figmaLogoRect from '../images/figma-logo-2.svg';
// import adobexdLogo from '../images/adobexd-logo.svg';

const SkillCard = ({ skillName }) => {
  if (skillName === "html") {
    return (
      <div className="card">
        <img src={htmlLogo} alt="htmlLogo" />
      </div>
    );
  }
  if (skillName === "css") {
    return (
      <div className="card">
        <img src={cssLogo} alt="cssLogo" />
      </div>
    );
  }
  if (skillName === "javascript") {
    return (
      <div className="card">
        <img src={javascriptLogo} alt="javascriptLogo" />
      </div>
    );
  }
  if (skillName === "react") {
    return (
      <div className="card">
        <img src={reactLogoRect} alt="reactLogo" />
      </div>
    );
  }
  if (skillName === "sass") {
    return (
      <div className="card">
        <img src={sassLogo} alt="sassLogo" />
      </div>
    );
  }
  if (skillName === "jquery") {
    return (
      <div className="card">
        <img src={jqueryLogo} alt="jqueryLogo" />
      </div>
    );
  }
  if (skillName === "node") {
    return (
      <div className="card">
        <img src={nodeLogoRect} alt="nodeLogo" />
      </div>
    );
  }
  if (skillName === "express") {
    return (
      <div className="card">
        <img src={expressLogo} alt="expressLogo" />
      </div>
    );
  }
  if (skillName === "mongo") {
    return (
      <div className="card">
        <img src={mongoLogo} alt="mongoLogo" />
      </div>
    );
  }
  if (skillName === "mysql") {
    return (
      <div className="card">
        <img src={mysqlLogo} alt="mysqlLogo" />
      </div>
    );
  }
  if (skillName === "php") {
    return (
      <div className="card">
        <img src={phpLogo} alt="phpLogo" />
      </div>
    );
  }
  if (skillName === "python") {
    return (
      <div className="card">
        <img src={pythonLogo} alt="pythonLogo" />
      </div>
    );
  }
  if (skillName === "flask") {
    return (
      <div className="card">
        <img src={flaskLogo} alt="flaskLogo" />
      </div>
    );
  }
  if (skillName === "java") {
    return (
      <div className="card">
        <img src={javaLogo} alt="javaLogo" />
      </div>
    );
  }
  if (skillName === "git") {
    return (
      <div className="card">
        <img src={gitLogo} alt="gitLogo" />
      </div>
    );
  }
  if (skillName === "emotion") {
    return (
      <div className="card">
        <img src={emotionLogo} alt="emotionLogo" />
      </div>
    );
  }
  if (skillName === "graphql") {
    return (
      <div className="card">
        <img src={graphqlLogo} alt="graphqlLogo" />
      </div>
    );
  }

  return <></>;
};

export default SkillCard;
