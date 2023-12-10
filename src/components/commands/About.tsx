import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, this is  <HighlightSpan>Idot</HighlightSpan>!
      </p>
      <p>
        A <HighlightAlt>full-stack developer</HighlightAlt> based in MH,
        India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing various challenging applications.
      </p>
    </AboutWrapper>
  );
};

export default About;
