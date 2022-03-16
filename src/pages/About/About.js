import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import vrushik from "./vrushik.jpeg";

const Section = styled.section`
  display: flex;
  margin: 10px 10px;
  padding: 10px 10px;
`;

const AboutMe = styled.div`
  img {
    transition: all 0.3s ease;
    border-radius: 4px;
  }
  img:hover {
    box-shadow: 0px 30px 20px -8px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    img {
      align-self: flex-start;
    }
  }
`;

const Left = styled.div`
  margin-bottom: 1em;

  p:nth-child(4) {
    margin-bottom: 0.9em;
  }

  p + p {
    margin-top: 1em;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    width: 55%;
    img {
      width: 35%;
    }
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0;
  li {
    position: relative;
    margin: 0 0 10px;
    padding-left: 20px;
  }
  li::before {
    content: "▹";
    position: absolute;
    color: #7685f9;
    left: 0;
    top: 50%;
    line-height: 1px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, minmax(140px, 200px));
    li {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(2, minmax(70px, 150px));
  }
`;

const About = () => {
  return (
    <>
      <Section id="about">
        <Container>
          <Placeholder title="About Me"></Placeholder>
          <AboutMe>
            <Left>
              <p>
                Hello! I'm Vrushik, a software engineer based in Gujarat, IN.
              </p>
              <p>
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, preferment
                experiences.
              </p>
              <p>
                I'm currently pursing Bachelor of Information Technology
                Engineering from &nbsp;
                <a
                  href="https://git.org.in"
                  style={{
                    color: "#7685f9",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                >
                  Gandhinagar Institute Of Technology.
                </a>
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <Ul>
                <li>JavaScript(ES6) </li>
                <li>HTML5</li>
                <li>React.JS </li>
                <li>CSS3</li>
                <li>Redux</li>
             
              </Ul>
            </Left>
            <img src={vrushik} alt="myimage" />
          </AboutMe>
        </Container>
      </Section>
    </>
  );
};

export default About;
