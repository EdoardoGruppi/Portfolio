import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  // Blog,
  Education,
  // Experience,
  Contacts,
  Projects,
  // Services,
  IndependentProjects,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <IndependentProjects />
      <Achievement />
      {/* <Services />
      <Testimonials /> */}
      <Skills />
      {/* <Blog /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
