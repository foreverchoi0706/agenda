import styled from "styled-components";

const ProjectsStyled = styled.section`
  ul {
    color: black;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      width: 100%;
      height: 333px;
      background-color: lightgray;
      border-radius: 5px;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsStyled>
      <h2>#Projects</h2>
      <div className="Projects-container">
        <ul>
          <li>#FreeJson</li>
          <li>#Foryou</li>
          <li>#Geppetto</li>
          <li>#Hellow,Youngwon!</li>
        </ul>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
