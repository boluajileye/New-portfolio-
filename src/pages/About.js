import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFile, FaBootstrap, FaReact, FaVuejs, FaCss3Alt, FaNodeJs, FaLaravel, FaFilePdf, FaJava, } from 'react-icons/fa';
import { SiBulma, SiTailwindcss, SiMaterialui, SiJquery, SiJavascript, SiPhp, SiExpress, SiMysql, SiMongodb, SiPostgresql, SiGit, SiSpringboot, SiLaravel, SiCodeigniter, SiSymfony, SiRedis, SiApachekafka, SiRabbitmq, SiOracle, SiMicrosoftsqlserver, SiAmazonaws, SiDigitalocean, SiLinux, SiDocker } from 'react-icons/si';
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
              <li><a href='https://www.linkedin.com/in/ajileye-boluwatife-168896198' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></li>
              <li><a href='https://github.com/boluajileye' target='_blank' rel="noopener noreferrer"><FaGithubSquare /></a></li>
              <li><a href='https://flowcv.com/resume/7n9w0vmw6g' target='_blank' rel="noopener noreferrer"><FaFilePdf /></a></li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <h1>Hello<span>!</span></h1>
          <h2>Here's who I am & what I do</h2>

          <div className="about-para"><p>
            I'm a seasoned web developer with expertise in building scalable web applications using Java, PHP, and modern development tools. I specialize in REST APIs and microservices, grounded in solid OOP principles and design patterns. My experience spans developing telecom systems and enhancing payment and investment platforms through maintenance and feature development.
            <br />
            I leverage Docker for containerization, Linux servers for deployment, and Git for version control. My workflow includes Domain-Driven Design (DDD) and Test-Driven Development (TDD) to ensure robust, high-quality code. Passionate about innovation and continuous learning, I bring strong problem-solving skills and a collaborative mindset to deliver reliable, user-focused solutions. Top projects are available on request.
          </p>

          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="sectionin">
          <div className="wall">
            <div className="v-boxes">
              <div className="box">
                <span className="tooltip">AWS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiAmazonaws /></i></div>
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
                <span className="tooltip">DIGITAL OCEAN</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiDigitalocean /></i></div>
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
                <span className="tooltip">LINUX</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><SiLinux /></i>
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
                <span className="tooltip">DOCKER</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><SiDocker /></div>
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
                <span className="tooltip">RABBITMQ</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiRabbitmq /></i></div>
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
                <span className="tooltip">APACHE KAFKA</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiApachekafka /></i></div>
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
                <span className="tooltip">REDIS</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiRedis /></i></div>
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
                <span className="tooltip">JAVA</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><FaJava /></i>
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
                <span className="tooltip">SPRINGBOOT</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3">
                    <i><SiSpringboot/></i>
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
                <span className="tooltip">LARAVEL</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiLaravel /></i></div>
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
                <span className="tooltip">CODEIGNITER</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiCodeigniter /></i></div>
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
                <span className="tooltip">SYMFONY</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiSymfony/></i></div>
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
                <span className="tooltip">MICROSOFT SQL SERVER</span>
                <div className="box-face">
                  <div className="box-text pl-2 pb-3"><i><SiMicrosoftsqlserver /></i></div>
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
