import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFile } from 'react-icons/fa';

export const About = () => {
  return (
    <>

      <div className="about-wrapper bg-grey-900 dark:bg-grey-200">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src="image/boluwatife.jpg" alt="boluwatife" />
                </div>
              </div>

              <h3>AJILEYE BOLUWATIFE</h3>
              <h2>Software Engineer</h2>
            </div>

            <ul className="icons">
              <li><a href='https://www.linkedin.com/in/ajileye-boluwatife-168896198' target='_blank'><FaLinkedin/></a></li>
              <li><a href='https://github.com/boluajileyehttps://www.linkedin.com' target='_blank'><FaGithubSquare/></a></li>
              <li><a href='https://gitconnected.com/boluajileye/resume' target='_blank'><FaFile/></a></li>
            </ul>
          </div>

        </div>

        <div className="about-right">
          <h1>Hello<span>!</span></h1>
          <h2>Here's who I am & what I do</h2>

          <div className="about-para">
            <p>I am a software engineer who enjoys solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better.
              <br/>I normally use Javascript for the front-end, either alone or in combination with popular frameworks like ReactJS and VueJS. I also use Sass, CSS, and, where necessary, any of their friends: Bootstrap, Material, and so on, to make the web seem nice. I also use Javascript for the backend (NodeJS, Express, MongoDB, etc). But, of course, I do PHP and Mysql whenever the project calls for it (Wordpress, Laravel, etc).</p>
          </div>
        </div>
      </div>
    </>
  )
}
