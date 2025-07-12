import React from 'react';
import './SlidingDivs.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrambledText from './Scrambledtext';
import TiltedCard from './TiltedCard';
const HeroSection = () => {
  // Create refs and inView states for each section you want to animate
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  const { ref: stackRef, inView: stackInView } = useInView({
  threshold: 0.2,
  triggerOnce: false, 
});

  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.2 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.2 });

  return (
    <div>
      <section id='home'>
      <div className="hero-container">
        <div className="left-content">
          <h1 className="name">
            <span>Leeman</span>
            <span>Kommu.</span>
          </h1>
          <div className="name-underline"></div>
          <br /><br />
          {/* Social icons under the name */}
          <div className="social-icons">
            <a href="https://github.com/leeman_kommu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/leeman_kommu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/leeman-kommu-696407324/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          {/* Keep this empty for future use */}
          <div className="image-icons-placeholder"></div>
        </div>
       <div className="center-photo">
    <img
      src="https://i.postimg.cc/2jTrNGdD/ca69ea47-c041-4f59-a936-9fa7f130d86a.png" // replace this with your hosted URL if needed
      alt="Profile"
      className="profile-image"
    />
  </div>
        <div className="right-content">
          <div className="intro-text">
            <p>- Introduction</p>
            <h5>Aspiring Web Developer & UI Designer</h5>
            <p>
              Driven by curiosity and creativity, passionate about building modern, user-friendly websites. I blend clean design with efficient code to create seamless digital experiences, and I’m constantly exploring new tools and technologies to sharpen my skills.
            </p>
            <p className="my-story">My story <span>→</span></p>
          </div>
        </div>
      </div>
      </section>
     <motion.div
  ref={aboutRef}
  className="second-section"
  initial="hidden"
  animate={aboutInView ? "visible" : "hidden"}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.10,
      },
    },
  }}
>
  <div className="about-content">
    {/* Left - Text */}
    <div className="about-text">
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-3xl font-bold text-white mb-6"
      >
        About Me
      </motion.h2>

  <motion.div
      className="min-h-screen bg-black text-white p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {[
        "I'm a B.Tech CSE student driven by curiosity and creativity, with a passion for solving problems through innovative code and intuitive design. I love diving deep into frontend animations, backend development, and crafting seamless user experiences that bring interfaces to life.I’m passionate about contributing to open-source projects, learning from the community, and collaborating with developers to create meaningful, real-world solutions.",
      ].map((text, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-white text-lg mb-4"
        >
          <ScrambledText
            className="text-xl"
            radius={80}
            duration={2}
            speed={0.5}
            scrambleChars=".:"
          >
            {text}
          </ScrambledText>
        </motion.div>
      ))}
    </motion.div>

  </div>

    {/* Right - Profile Image */}
    <motion.div
      className="about-photo"
      variants={{
        hidden: { opacity: 0, scale: 1.1 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src="/profile.jpg" alt="Profile" />
    </motion.div>
  </div>
</motion.div>

      {/* Stack Section */}
      <motion.div
        ref={stackRef}
        className="stack-section"
      >
        {/* Skills Column */}
<div className="stack-column">
  <h3 className={`stack-title ${stackInView ? 'slide-in-left' : ''}`}>Skills</h3>
  <ul className="stack-grid">
    {[
      { icon: "devicon-html5-plain", label: "HTML" },
      { icon: "devicon-css3-plain", label: "CSS" },
      { icon: "devicon-javascript-plain", label: "JavaScript" },
      { icon: "devicon-react-original", label: "React" },
      { icon: "devicon-c-plain", label: "C" },
      { icon: "devicon-python-plain", label: "Python" },
      { icon: "devicon-java-plain", label: "Java" },
      { icon: "devicon-postgresql-plain", label: "SQL" }
    ].map((item, i) => (
      <li
        key={item.label}
        className={`icon-card ${stackInView ? "floating float-loop" : ""}`}
        style={{ "--i": i + 1 }}
      >
        <i className={`${item.icon} colored`}></i>
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
</div>

       {/* Tools Column */}
<div className="stack-column">
  <h3 className={`stack-title ${stackInView ? 'slide-in-right' : ''}`}>Tools</h3>
  <ul className="stack-grid">
    {[
      { icon: "devicon-figma-plain", label: "Figma" },
      { icon: "devicon-git-plain", label: "Git" },
      { icon: "devicon-github-original", label: "GitHub" },
      { icon: "devicon-visualstudio-plain", label: "VS Code" },
      { icon: "devicon-postman-plain", label: "Postman" },
      { icon: "devicon-spring-plain", label: "Spring Boot" },
      { icon: "devicon-mysql-plain", label: "MySQL Workbench" }
    ].map((item, i) => (
      <li
        key={item.label}
        className={`icon-card ${stackInView ? "floating float-loop" : ""}`}

        style={{ "--i": i + 1 }}
      >
        <i className={`${item.icon} colored`}></i>
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
</div>
      </motion.div>

      {/* Education Section */}
 <motion.div
  ref={educationRef}
  initial={{ opacity: 0, y: 60 }}
  animate={educationInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="education-section"
>
  <h2>Education</h2>
  <div className="hanging-rope">
    {[
      {
        image: "https://i.postimg.cc/SR5QzRT9/school-pasnoor.jpg", // Example 1
        alt: "TS Model School Pasnoor",
        caption: "TS Model School Pasnoor",
        text: "SSC 2020–2021\nPercentage: 100%",
      },
      {
        image: "https://i.postimg.cc/HLXjwNJM/Chat-GPT-Image-Jul-12-2025-01-14-26-PM.png", // Example 2
        alt: "TS Model School & Jr College",
        caption: "TS Model School & Jr College",
        text: "MPC 2021–2023\nPercentage: 98%",
      },
      {
        image: "https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png", // Example 3
        alt: "KL University",
        caption: "KL University",
        text: "CSE 2023–Present\nPercentage: 93%",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 60, rotate: -5 }}
        animate={educationInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
        transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
      >
        <TiltedCard
          imageSrc={item.image}
          altText={item.alt}
          captionText={item.caption}
          containerHeight="240px"
          containerWidth="240px"
          imageHeight="240px"
          imageWidth="240px"
          rotateAmplitude={18}
          scaleOnHover={1.5}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">
              {item.text.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          }
        />
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* Projects Section */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="third-section"
      >
        <h2>My Projects</h2>
        <p>
          Check out my latest projects where I apply my skills in web development and design.
          Each project is a step towards mastering the art of creating engaging user experiences.
        </p>
      </motion.div>

    {/* Contact Section */}
    <section id="contact">
      <motion.div
  ref={contactRef}
  initial={{ opacity: 0, y: 60 }}
  animate={contactInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="fifth-section"
>
  <h2>Contact Me</h2>
  <p>
    I'm always open to discussing new projects or opportunities. Feel free to reach out!
  </p>

  {/* Email Link */}
  <a href="mailto:leemankommu@gmail.com" className="contact-email">
    📧 leemankommu@gmail.com
  </a>

  {/* Contact Form */}
  <form className="contact-form" action="mailto:leemankommu@gmail.com" method="POST" encType="text/plain">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  {/* Social Icons */}
  <div className="contact-social">
    <a href="https://linkedin.com/in/leeman_kommu" target="_blank" rel="noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/leeman-kommu" target="_blank" rel="noreferrer">
      <i className="fab fa-github"></i>
    </a>
  </div>
</motion.div>
    </section>

    </div>
  );
};

export default HeroSection;