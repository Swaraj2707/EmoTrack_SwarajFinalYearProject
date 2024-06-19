/* eslint-disable no-dupe-keys */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";
import LogoColouredLandscape from "../../assets/images/emotrack.png";
import "../../../css/styles/pages/LandingPage.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
     navigate("/auth/login");
    // window.location.reload();
  };

  return (
    <div className="landingPage">
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease-in-quart"
        data-easing2="ease-out-quart"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container nav w-container">
          <div className="logo-wrapper">
            <img
              src={LogoColouredLandscape}
              loading="lazy"
              width="220"
              alt="Great Minds Logo"
            />
          </div>
          <div className="nav-wrapper">
            <nav role="navigation" glass="2" className="nav-menu w-nav-menu">
              <a href="#feature" className="nav-link w-inline-block">
                <div>Features</div>
              </a>

              <a href="#Benefits" className="nav-link w-inline-block">
                <div>Benefits</div>
              </a>
              <a href="#EAP" className="nav-link w-inline-block">
                <div>SAP</div>
              </a>
            </nav>

            <button
              data-w-id="c25a8e20-cb14-d39c-5bae-82075acd46a9"
              href="#"
              className="button mobile w-button"
              onClick={handleNavigation}
            >
              <span className="free-copy-switch">Sign In</span>{" "}
            </button>
            <div className="menu-button w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-curves-wrapper">
        <div
          style={{
            transform:
              "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="top-curve-background"
        ></div>
        <div
          style={{
            transform:
              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="background-curve-fill-block"
        ></div>
        <div
          style={{
            transform:
              "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="top-curve-foreground"
        ></div>
      </div>

      <main className="main">
        <header id="Introduction" className="header wf-section">
          <div className="container w-container">
            <div className="w-layout-grid grid-two introduction">
              <motion.div initial={{opacity:0, x:-50}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}} className="introduction-headings">
                <h1>
                  <strong>EmoTrack</strong>
                </h1>
                <h4 className="subheading employee-fontSize">
                  Strengthening Mental Health
                </h4>
                <p>
                  <strong>
                    A digital solution dedicated to enhancing the mental health
                    and well-being surveillance, assessment, and tracking among
                    children.
                  </strong>
                </p>
              </motion.div>
              <motion.img initial={{opacity:0, x:50}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}} viewport={{once:true}}
                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/6102a5804733360b13bd1fd4_great-minds-introduction-working.svg"
                loading="lazy"
                id="w-node-_749094cd-3351-73b1-4786-0f89e0b5a528-0862c5d4"
                alt="Office workers enjoying nature and relaxing"
                className="introduction-illustration"
              />
            </div>
          </div>
        </header>

        <section id="MHFA" className="xl-gap wf-section">
          <div className="container w-container">
            <div className="w-layout-grid grid-two">
              <motion.img initial={{opacity:0,x:110}} whileInView={{opacity:1, x:0}} transition={{type:spring, duration:0.8}} 
                src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610130d39366c32014e41b48_mhfa-illustration.svg"
                loading="lazy"
                alt="Managing stress during the "
              />
              <div>
                <p className="employee-fontSize">
                  <strong>
                    76% of students have experienced at least one symptom of a
                    mental health condition
                  </strong>
                </p>
                <p>
                  The current academic and societal challenges have emphasized
                  the urgent need for effective, inclusive mental health
                  solutions that students can access. The pressures of student
                  life, including academic demands, social pressures, and
                  personal challenges, have a significant impact on mental
                  health. Many students experience increased levels of stress,
                  anxiety, and emotional distress.
                </p>
                <p>
                  Offering comprehensive mental health resources and support
                  within educational institutions can create an environment that
                  promotes student mental health and well-being. It is crucial
                  to address the unique needs and challenges faced by students
                  and raise awareness about mental health issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="xl-gap wf-section">
          <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1, y:0}} transition={{type:spring, delay:0.3, duration:0.8}} className="container w-container">
            <h2>Mental Health and Awareness for Today's Students</h2>
            <p>
              —{" "}
              <span className="cite">
                <strong>EmoTrack for Educational Institutions </strong>
              </span>{" "}
              <br />
              Students' well-being directly impacts their academic performance,
              learning environment, and overall educational outcomes. With
              EmoTrack, educational institutions can promote mental health
              awareness, reduce stress, and improve the overall well-being of
              students. Our application provides accessible and convenient
              support for students, helping them thrive academically and
              emotionally.
              <br />
              <br />—{" "}
              <span className="cite">
                <strong>EmoTrack for Students </strong>
              </span>
              <br />
              EmoTrack offers students valuable resources to manage stress,
              anxiety, depression, or other mental health challenges. Our
              application equips students with a comprehensive solution to
              address mental health issues, reduce academic stress, and enhance
              their overall well-being, fostering a positive and balanced
              student life.
              <br />
              <br />—{" "}
              <span className="cite">
                <strong>EmoTrack for Self-Care</strong>
              </span>
              <br />
              Individuals, including students, who aspire to improve their
              mental health and overall wellness and establish positive habits,
              can utilize EmoTrack as a tool to achieve their goals.
            </p>
          </motion.div>
        </section>

        <section id="feature" className="xl-gap wf-section">
          <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1, y:0}} transition={{type:spring, duration:0.8, delay:0.3}}  className="container w-container">
            <h2>What we Offer</h2>
            <div className="w-layout-grid grid-four">
              <div
                id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4"
                className="relative organic-wrapper"
              >
                <div
                  data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  }}
                  className="organic-background"
                ></div>
                <div
                  data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                  }}
                  className="organic-foreground"
                ></div>
                <div className="organic yohan"></div>
              </div>
              <div>
                <h2>Consult with an expert</h2>
                <p>
                  Student Assistance program, that offers employees access to
                  confidential counseling and other resources to address
                  personal and work-related issues, including mental health
                  concerns.{" "}
                </p>
              </div>
              <div
                id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4"
                className="relative organic-wrapper"
              >
                <div
                  data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  }}
                  className="organic-background tips"
                ></div>
                <div
                  data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                  }}
                  className="organic-foreground tips"
                ></div>
                <div className="organic tips"></div>
                <img
                  src="	https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/61004406ed607b6cff48225f_develop-your-wellbeing-strategy.svg"
                  loading="lazy"
                  width="238"
                  alt="Wellness Tips Illustration"
                  className="wb-tips-illustration"
                />
              </div>
              <div>
                <h2>Track your goals</h2>
                <p>
                  Equipped with a health tracker that enables individuals to
                  monitor various aspects of their health and wellness, such as
                  physical activity, water intake, meditation durations and
                  heart rate.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="xl-gap wf-section">
          <div className="container w-container">
            <div className="w-layout-grid grid-four">
              <div
                id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4"
                className="relative organic-wrapper"
              >
                <div
                  data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  }}
                  className="organic-background"
                ></div>
                <div
                  data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                  }}
                  className="organic-foreground tips"
                ></div>
                <div className="organic tips"></div>
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610044069f63d42429095115_tangible-business-benefits.svg"
                  loading="lazy"
                  width="238"
                  alt="Wellness Tips Illustration"
                  className="wb-tips-illustration"
                />
              </div>
              <div>
                <h2>Track mood changes with a questionnaire</h2>
                <p>
                  Questionnaires designed to ask a series of questions that are
                  intended to measure various aspects of mental health, such as
                  mood, anxiety, or stress
                </p>
              </div>
              <div
                id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4"
                className="relative organic-wrapper"
              >
                <div
                  data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                  }}
                  className="organic-background tips"
                ></div>
                <div
                  data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                  style={{
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)",
                  }}
                  className="organic-foreground tips"
                ></div>
                <div className="organic tips"></div>
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b5ac028a714ee1d543_course-illustration-6.svg"
                  loading="lazy"
                  width="238"
                  alt="Wellness Tips Illustration"
                  className="wb-tips-illustration"
                />
              </div>
              <div>
                <h2>Engage in relaxing activities</h2>
                <p>
                  Engaging in a relaxing activity during your break can be a
                  great way to take care of your mental health and well-being.
                  Whether it's reading a book, listening to music, or any other
                  activity you enjoy.{" "}
                </p>
              </div>
            </div>

            <br />
            <p style={{ textAlign: "right" }}>and much more...</p>
          </div>
        </section>

        <section id="Benefits" className="xl-gap wf-section">
          <div className="container w-container">
            <h2>All-in-one solution for students</h2>
            <div className="w-layout-grid grid-three">
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b5e74ecc5ae470c3cc_course-illustration-3.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Mental health &amp; wellbeing training"
                />
                <h3> Improved mental health </h3>
                <p>
                  App offers self-assessment tools and access to mental health
                  resources and support providers to improve the user's mental
                  health.
                </p>
              </div>
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610044069b7545647841852b_safe-environment.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Tangible business benefits"
                />
                <h3>Achieve health goals and track progress </h3>
                <p>
                  Improves mental health by promoting target change strategies,
                  self-care goals, reminders and progress tracking through an
                  interactive dashboard.
                </p>
              </div>
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/6100440670493706fba22711_highly-experienced-trainer.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Positive training experience"
                />
                <h3> Encourages healthy competition</h3>
                <p>
                  The leaderboard is an effective way to track progress, set
                  goals and promote a culture of support and accountability for
                  employees' mental health.
                </p>
              </div>
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610117b564e81445d889c51c_course-illustration-5.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Develop your wellbeing strategy"
                />
                <h3> Increase Self Awareness</h3>
                <p>
                  Individuals can monitor their own behaviors, be more
                  self-aware, and be empowered to seek medical attention as they
                  see negative trends.
                </p>
              </div>
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/61004406b605fd16f533b8a6_mental-health-wellbeing-training.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Highly experienced trainer"
                />
                <h3> Prevents Burnout</h3>
                <p>
                  By taking breaks and participating in engaging activities like
                  mediation and exercise, the user can avoid burnout and
                  maintain a peaceful state of mind.
                </p>
              </div>
              <div className="feature-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/60fff0c2ee17fc46c9f078db/610135017eb6bbc2630138f2_contact_form_illustration.svg"
                  loading="lazy"
                  width="120"
                  height="120"
                  alt="Safe environment"
                />
                <h3> Increased access to mental health resources</h3>
                <p>
                  Provides convenient and accessible resources to support mental
                  health, including self-help tools, articles and guided
                  meditations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="EAP" className="relative xxl-gap wf-section">
          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1, x:0}} transition={{type:spring, duration:0.8, delay:0.3}} viewport={{once:true}}  className="container w-container">
            <h2>Enhance Your Mental Health Support with EmoTrack</h2>
            <p>
              Mental health and well-being are essential aspects of overall
              health, and organizations can play a vital role in supporting
              their employees' mental wellness. EmoTrack is a comprehensive
              digital solution designed to foster mental health and well-being
              among individuals and organizations. It offers a wide range of
              features to complement and expand on your existing support system,
              making it easier for individuals to monitor, assess, and improve
              their mental health.
              <br />
              <br />—{" "}
              <span className="cite">
                <strong>EmoTrack for Comprehensive Mental Wellness</strong>
              </span>
              <span className="cite"></span>
            </p>
          </motion.div>
        </section>
      </main>

      <footer className="footer wf-section">
        <div className="footer-curve-wrapper">
          <div className="footer-piece background"></div>
          <div className="footer-piece foreground"></div>
          <div className="footer-piece solids"></div>
          <div className="footer-piece curve"></div>
        </div>

        <div className="container footer w-container">
          <h2>
            <img
              src={LogoColouredLandscape}
              loading="lazy"
              alt="Great Minds Logo"
              className="footer-logo"
            />
          </h2>
          <div className="w-layout-grid grid-three">

            <div>
              <a href="tel:(+91) 123456789" className="footer-link">
                (+91) 123456789
              </a>
              <a
                href="mailto:@EmoTrack.training?subject=Hello%20From%20EmoTrack"
                className="footer-link"
              >
                `EmoTrack@gmail.com`
              </a>
            </div>
            <div>
              © EmoTrack
              <br />
              G H Raisoni College of Engineering and Management, Pune
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;