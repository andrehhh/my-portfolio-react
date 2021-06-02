import './App.scss';

import stripes from './images/2stripes.png';
import landingImage from './images/landing-photo.jpg';
import myImage from './images/photo-portrait.jpg';
import myPortfolioImage from './images/MyPortfolioScreenshot.png';
import airAndSoundPollutionImage from './images/AirAndSoundPollutionScreenshot.png';
// import myPortfolioImage from './images/MyPortfolioScreenshot.png';

import mailLogo from './images/mail-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import githubLogo from './images/github-logo.svg';
import phoneLogo from './images/phone-logo.svg';
import whatsappLogo from './images/whatsapp-logo.svg';
import instagramLogo from './images/instagram-logo.svg';
import twitterLogo from './images/twitter-logo.svg';
import facebookLogo from './images/facebook-logo.svg';

import figmaLogo from './images/figma-logo.svg';
import reactLogo from './images/react-logo.svg';
import nodeLogo from './images/node-logo.svg';
import htmlLogo from './images/html-logo.svg';
import cssLogo from './images/css-logo.svg';
import javascriptLogo from './images/javascript-logo.svg';
import reactLogo2 from './images/react-logo-2.svg';
import sassLogo from './images/sass-logo.svg';
import jqueryLogo from './images/jquery-logo.svg';
import nodeLogo2 from './images/node-logo-2.svg';
import expressLogo from './images/express-logo.svg';
import mongoLogo from './images/mongo-logo.svg';
import mysqlLogo from './images/mysql-logo.svg';
import phpLogo from './images/php-logo.svg';
import pythonLogo from './images/python-logo.svg';
import flaskLogo from './images/flask-logo.svg';
import javaLogo from './images/java-logo.svg';
import gitLogo from './images/git-logo.svg';
import figmaLogo2 from './images/figma-logo-2.svg';
import adobexdLogo from './images/adobexd-logo.svg';

function App() {
  return (
    <div className="App">

      <section className="landing">
        <div className="landing-container">
          <div className="landing-left">
            <div className="navbar">
              <div className="navbar-container container">
                <div className="logo">Dre</div>
                <ul>
                  <li><a href="#">What I Do</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">About Me</a></li>
                </ul>
              </div>
            </div>
            <div className="landing-left-container container">
              <h1 className="slogan">User First Web Application to fit Your Needs. ✌️</h1>
            </div>
          </div>
          <div className="landing-right">
            <div className="landing-right-container">
              <ul>
                <li><img src={mailLogo} alt="mail-logo" /></li>
                <li><img src={linkedinLogo} alt="linkedin-logo" /></li>
                <li><img src={githubLogo} alt="github-logo" /></li>
              </ul>
            </div>
          </div>
        </div>
        
        <img className="stripes-img" src={stripes} />
        <img className="landing-image" src={landingImage} alt="landing-image" />
      </section>
      
      {/* What I Do */}
      <section className="what-i-do">
        <div className="what-i-do-container container">
        <h1>What I Do</h1>
          <ul>
            <li>
              <img src={figmaLogo} />
              <h3>UI/UX Design</h3>
              <p>I am capable of using prototyping tools such as Figma and Adobe XD to design the application to ease the development process.</p>
            </li>
            <li>
              <img src={reactLogo} />
              <h3>Frontend Web Developer</h3>
              <p>As a developer, it is our first priority to build user-friendly applications. I specialize in frontend frameworks such as React.js, Sass, JQuery, and Ajax.</p>
            </li>
            <li>
              <img src={nodeLogo} />
              <h3>Backend Web Developer</h3>
              <p>Storing data in the server is essential in web applications. Building connections to the server using Node.js and Express JS is one of my strong abilities.</p>
            </li>
          </ul>
        </div>
      </section>


      {/* Projects */}
      <section className="projects">
        <div className="projects-container container">
          <h1>Projects</h1>
            <ul>
              <li>
                <img src={myPortfolioImage} />
                <div>
                  <h3>My Portfolio V2</h3>
                  <p>My second version of my personal portfolio which is fully responsive for both tablets and mobile phones. It is built on React.js and Sass, and the UI/UX design is developed with Figma.</p>
                  <a href="#">View on Github &#62;</a>
                </div>
              </li>
              <li>
                <img src={airAndSoundPollutionImage} />
                <div>
                  <h3>Air and Sound Pollution Monitoring System</h3>
                  <p>An Arduino-based IoT project that allows users to measure different gas concentration levels as well as noise levels remotelt. From the carbon dioxide concentration, an Air Quality Index Value and Rating is calculated and shown to the user to ease understanding.</p>
                  <a href="#">View on Github &#62;</a>
                </div>
              </li>
              <li>
                <img src={airAndSoundPollutionImage} />
                <div>
                  <h3>Water Sedimentation Analysis</h3>
                  <p>This project enables users to measure the water sedimentation level by taking a picture with their mobile phones. I am responsible of handling the backend system of this project. I used Python’s Flask and other libraries such as pandas, boto3, and os that is essential for this project. We used Amazon’s S3 as our database system as well as Amazon’s EC2 for hosting the Flask application.</p>
                  <a href="#">View on Github &#62;</a>
                </div>
              </li>
            </ul>
          <p><a href="#">View Complete Projects in Github &#62;</a></p>
        </div>
      </section>


      {/* About Me */}
      <section className="about-me">
        <div className="about-me-container container">
          <h1>About Me</h1>
          <div className="introduction-container">
            <div className="introduction-left">
              <img src={myImage} />
            </div>
            <div className="introduction-right">
              <h4>Hello, I am Andre!</h4>
              <p>I am a final year Computer Science student who loves to design application user interfaces, as well as develop web applications, both frontend and backend. I specialize in developing web applications using frameworks such as React and Node.</p>
            </div>
          </div>
          <div className="skills-container">
            <h4>Programming Skills</h4>
            <ul>
              <li><img src={htmlLogo} /></li>
              <li><img src={cssLogo} /></li>
              <li><img src={javascriptLogo} /></li>
              <li><img src={reactLogo2} /></li>
              <li><img src={sassLogo} /></li>
              <li><img src={jqueryLogo} /></li>
              <li><img src={nodeLogo2} /></li>
              <li><img src={expressLogo} /></li>
              <li><img src={mongoLogo} /></li>
              <li><img src={mysqlLogo} /></li>
              <li><img src={phpLogo} /></li>
              <li><img src={pythonLogo} /></li>
              <li><img src={flaskLogo} /></li>
              <li><img src={javaLogo} /></li>
              <li><img src={gitLogo} /></li>
            </ul>
          </div>
          <div className="skills-container-2">
            <h4>Design Skills</h4>
            <ul>
              <li><img src={figmaLogo2} /></li>
              <li><img src={adobexdLogo} /></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="contact-me container">
        <h3>Contact Me</h3>
        <div className="contact-me-container">
          <div className="contact-me-left">
            <ul>
              <li>
                <img src={mailLogo} />
                <p>andrehanjaya9@gmail.com</p>
              </li>
              <li>
                <img src={phoneLogo} />
                <p>+60-166933058</p>
              </li>
            </ul>
          </div>
          <div className="contact-me-right">
            <ul>
              <li>
                <a href="#">
                  <img src={whatsappLogo} />
                  <p>Whatsapp</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagramLogo} />
                  <p>Instagram</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterLogo} />
                  <p>Twitter</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedinLogo} />
                  <p>LinkedIn</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebookLogo} />
                  <p>Facebook</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
