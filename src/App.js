import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaTwitter, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: all 0.3s ease;
  color: var(--text-color);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--section-bg);
  transition: background-color 0.3s ease;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="rgba(255,255,255,0.05)"/></svg>');
    opacity: 0.1;
  }

  h1, p {
    color: white;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-left: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px var(--shadow-color);
  transition: all 0.3s ease;
  
  h3 {
    color: var(--text-color);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--shadow-color);
  }
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--hover-color);
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-radius: 4px;
`;

const ExperienceTimeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--gradient-start);
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.4rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--gradient-start);
    border: 2px solid var(--card-bg);
  }

  h3 {
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 15px;
  box-shadow: 0 4px 20px var(--shadow-color);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--gradient-start);
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--gradient-start);
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`;

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
    image: "https://via.placeholder.com/400x200",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://via.placeholder.com/400x200",
    technologies: ["React", "Firebase", "Material-UI"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and dark mode",
    image: "https://via.placeholder.com/400x200",
    technologies: ["React", "Framer Motion", "Emotion"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  }
];

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Docker", level: 65 }
];

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    description: "Leading development of enterprise applications and mentoring junior developers."
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Startup",
    description: "Developed and maintained multiple web applications using modern technologies."
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Created responsive and interactive user interfaces for various clients."
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= scrollPosition && bottom > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Nav>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="gradient-text"
        >
          Portfolio
        </motion.h2>
        <NavLinks>
          {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                color: 'var(--text-color)', 
                textDecoration: 'none', 
                cursor: 'pointer',
                opacity: activeSection === item.toLowerCase() ? 1 : 0.7,
                fontWeight: activeSection === item.toLowerCase() ? 'bold' : 'normal'
              }}
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavLinks>
      </Nav>

      <HeroSection id="home">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'white' }}
          >
            Hi, I'm [Your Name]
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.5rem', marginBottom: '2rem' }}
          >
            Full Stack Developer & Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a href="#contact" className="button button-primary">
              Get in Touch
            </a>
            <a href="/resume.pdf" className="button button-secondary" download>
              <FaDownload /> Download CV
            </a>
          </motion.div>
          <SocialLinks>
            <IconLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </IconLink>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </IconLink>
            <IconLink href="mailto:your.email@example.com">
              <FaEnvelope />
            </IconLink>
          </SocialLinks>
        </Container>
      </HeroSection>

      <Section id="about">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', lineHeight: '1.6' }}
          >
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            I love creating beautiful and functional user interfaces while ensuring robust backend functionality.
            With over 5 years of experience in web development, I've worked on various projects ranging from
            small business websites to large-scale enterprise applications.
          </motion.p>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="skills">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{skill.name}</h3>
                <SkillBar>
                  <SkillBarFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <ExperienceTimeline>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3>{exp.title}</h3>
                  <p style={{ color: 'var(--gradient-start)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{exp.company}</p>
                  <p style={{ color: 'var(--text-color)', opacity: 0.7, marginBottom: '0.5rem' }}>{exp.year}</p>
                  <p style={{ color: 'var(--text-color)', opacity: 0.9 }}>{exp.description}</p>
                </motion.div>
              </ExperienceItem>
            ))}
          </ExperienceTimeline>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to new opportunities and collaborations.
          </motion.p>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input type="text" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="Your Message" required />
            </FormGroup>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button button-primary"
              type="submit"
            >
              Send Message
            </motion.button>
          </ContactForm>
          <SocialLinks>
            <IconLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </IconLink>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </IconLink>
            <IconLink href="mailto:your.email@example.com">
              <FaEnvelope />
            </IconLink>
          </SocialLinks>
        </Container>
      </Section>
    </div>
  );
}

export default App;
