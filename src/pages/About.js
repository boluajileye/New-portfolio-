import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFile, FaBootstrap, FaReact, FaVuejs, FaCss3Alt, FaNodeJs, FaLaravel, } from 'react-icons/fa';
import { SiBulma, SiTailwindcss, SiMaterialui, SiJquery, SiJavascript, SiPhp, SiExpress, SiMysql, SiMongodb, SiPostgresql, SiGit } from 'react-icons/si';
import { DiYii, } from 'react-icons/di';

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
              <li><a href='https://www.linkedin.com/in/ajileye-boluwatife-168896198' target='_blank'><FaLinkedin /></a></li>
              <li><a href='https://github.com/boluajileyehttps://www.linkedin.com' target='_blank'><FaGithubSquare /></a></li>
              <li><a href='https://gitconnected.com/boluajileye/resume' target='_blank'><FaFile /></a></li>
            </ul>
          </div>

        </div>

        <div className="about-right">
          <h1>Hello<span>!</span></h1>
          <h2>Here's who I am & what I do</h2>

          <div className="about-para">
            <p>I am a software engineer who enjoys solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better.
              <br />I normally use Javascript for the front-end, either alone or in combination with popular frameworks like ReactJS and VueJS. I also use Sass, CSS, and, where necessary, any of their friends: Bootstrap, Material, and so on, to make the web seem nice. I also use Javascript for the backend (NodeJS, Express, MongoDB, etc). But, of course, I do PHP and Mysql whenever the project calls for it (Wordpress, Laravel, etc).</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="sectionin">
          <div className="wall">
            <div className="v-boxes">
              <div className="box">
                <span className="tooltip">BOOTSTRAP</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><FaBootstrap /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">BULMA</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiBulma /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">TAILWIND</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><SiTailwindcss /></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">MATERIAL-UI</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><SiMaterialui /></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes second">
              <div className="box">
                <span className="tooltip">JQUERY</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiJquery /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">REACTJS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><FaReact /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">VUEJS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><FaVuejs /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes third">
              <div className="box">
                <span className="tooltip">JS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><SiJavascript /></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">CSS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><FaCss3Alt /></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes forth">
              <div className="box link">
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <img src="https://electronjs.org/images/favicon.ico" alt="" /></div>
                </div>
              </div>
            </div>
            <div className="v-boxes third">
              <div className="box">
                <span className="tooltip">PHP</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                  <i><SiPhp /></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">NODEJS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><FaNodeJs /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes second">
              <div className="box">
                <span className="tooltip">YII2</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><DiYii /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text pl-2 pb-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">LARAVEL</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><FaLaravel /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">EXPRESSJS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiExpress/></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes">
              <div className="box">
                <span className="tooltip">MYSQL</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiMysql /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">MONGODB</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiMongodb /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">POSTGRESQL</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                  <i><SiPostgresql /></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">GIT</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiGit /></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
