import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow-color);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px var(--shadow-color);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  transition: color 0.3s ease;
`;

const Description = styled.p`
  color: var(--text-color);
  opacity: 0.8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: var(--hover-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-start);
    color: white;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: ${props => props.primary ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' : 'var(--hover-color)'};
  color: ${props => props.primary ? 'white' : 'var(--text-color)'};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px var(--shadow-color);
  }
`;

const ProjectCard = ({ title, description, image, technologies, githubLink, liveLink }) => {
  return (
    <Card
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <ImageContainer>
        <ProjectImage 
          src={image} 
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechStack>
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        <Links>
          <LinkButton href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </LinkButton>
          <LinkButton href={liveLink} target="_blank" rel="noopener noreferrer" primary>
            <FaExternalLinkAlt /> Live Demo
          </LinkButton>
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard; 