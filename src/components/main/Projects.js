import styled from "styled-components";

import geppetto from "../../imgs/geppetto.png";

const ProjectsStyled = styled.section`
  ul {
    color: black;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      width: 100%;

      background-color: lightgray;
      border-radius: 5px;
      img{
        width : 100%;
      }
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      <h2>#Projects</h2>
      <div className="Projects-container">
        <ul>
          <li>#FreeJson</li>
          <li>#Foryou</li>
          <li><img src={geppetto} alt="geppetto"/></li>
          <li>#Hellow,Youngwon!</li>
        </ul>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
