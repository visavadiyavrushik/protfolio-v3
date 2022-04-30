import React from "react";
import styled from "styled-components";
import Container from "../../components/Container/index";
import MailTo from "../../components/Helper/MailTo";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/index";
import Footer from "../../components/Footer/Footer";
// import Experience from "../Experience/Experience";

// #ffc857

const Main = styled.main`
  color: #fdfffc;
  margin: 10px 10px;
  padding: 10px 10px;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  padding: 12px 9px;

  h1 {
    color: #fff;
    margin-bottom: 1em;
  }

  h2,
  h3 {
    font-weight: 600;
  }

  h2 {
    color: #7685f9;
    font-size: 1.9rem;
    margin-bottom: 0.2em;
  }
  h3 {
    font-size: 1.8rem;
    color: #cebbc9;
    margin-bottom: 0.3em;
  }

  p {
    margin-bottom: 1.2em;
    font-size: 1rem;
    max-width: 500px;
  }

  a {
    color: #7685f9;
    border: 1px solid #7685f9;
    border-radius: 4px;
    padding: 0.75em 1em;
    text-decoration: none;
    display: inline-block;
  }
  a:hover {
    color: #fff;
    border: 1px solid #fff;
  }

  @media screen and (max-width: 320px) {
    p {
      font-size: 1rem;
    }
    a {
      padding: 0.65em 0.5em;
    }
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 4.5rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.2rem;
    }
    a {
      padding: 0.65em 0.5em;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Section id="home">
          <Container>
            <h1>Hey, I'm</h1>
            <h2>Vrushik Visavadiya.</h2>
            <h3>I build things for the web.</h3>
            <p>
              I'm a software engineer based in Gujarat, IN specializing in
              building exceptional websites, applications, and everything in
              between.
            </p>
            <MailTo
              email="vrushik@vrushikvisavadiya.com"
              subject="Available ?"
              body="Hey Vrushik,"
            >
              Get in Touch
            </MailTo>
          </Container>
        </Section>
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
