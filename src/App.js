import "./css/App.css";
import ExperienceItem from "./components/ExperienceItem";
import ResumeSection from "./components/ResumeSection";
import Sidebar from "./components/Sidebar";
import Project from './components/Project';
import ProjectList from './components/ProjectList';
import Skill from './components/Skill'
import Profile from "./components/Profile";
import Container from './components/Container'
import EducationItem from "./components/EducationItem";

function App() {
  return (
    <div>
      <div className="wrapper mt-lg-5">
        <Sidebar>
          <Profile name="Jordan Renaud" tagline="Full Stack Developer" />
          <Container>
            <ul className="list-unstyled spread">
              <li>jtrenaud1s@gmail.com</li>
              <li>(636) 692-3698</li>
              <li>subspacedev.io</li>
              <li><a href="https://www.linkedin.com/in/jordan-renaud-75a6751a4/">LinkedIn</a></li>
              <li>github.com/jtrenaud1s</li>
            </ul>
          </Container>
          <Container title="Education">
            <EducationItem degree="BS Computer Science" start="2016" end="2022" school="Southeast Missouri State University" />
          </Container>
          <Container title="Interests">
            <ul className="list-unstyled spread">
              <li>Programming</li>
              <li>Percussion</li>
              <li>Guitar</li>
              <li>Space</li>
            </ul>
          </Container>
        </Sidebar>
        <main className="content">
          <ResumeSection title="About Me">
            <p>A passionate programmer with web development programming experience, with the goal of simplifying processes to assist others.</p>
          </ResumeSection>
          <ResumeSection title="Experience">
            <ExperienceItem position="Independent Contractor, Plugin Developer" start="Jan 2016" end="Jan 2017">
              <p>Developed plugins from the ground up for a popular game server, utilizing existing APIs to create new features, take advantage of existing features, and make them more functional.</p>
            </ExperienceItem>
            <ExperienceItem
              position="University Web Administrator"
              start="August 2020"
              end="Present"
              location="SEMO University Marketing">
                <p>Update university website content according to staff and faculty submitted tickets, design and build web pages, modify Wordpress installations to meet specific requirements</p>
            </ExperienceItem>
            <ExperienceItem
              position="Web Content Migrator"
              start="Summer 2021"
              end="Present"
              location="SEMO University Marketing">
                <p>Assist in testing website components, mass manual content migrations, automated content migration.</p>
            </ExperienceItem>
          </ResumeSection>
          <ResumeSection title="Projects">
            <ProjectList>
              <Project name="Page Replacement Algorithm Simulator" url="https://replit.com/@JordanRenaud/PRSProject2">
                A website written in HTM5, CSS3, and JavaScript with the intent of giving others the ability to simulate algorithms which tell a CPU how and when to replace pages of memory on the disk. 
              </Project>
              <Project name="Fraternity Portal">
              A website written in HTM5, CSS3, and JavaScript that utilizes the many features of Google’s Firebase and other notable JavaScript APIs to allow member account creation, member management, member ratings, and new member vote presentations with a PowerPoint-esque visual.
              </Project>
              <Project name="Resume">
                This resume was written using react.js.
              </Project>
            </ProjectList>
          </ResumeSection>
          <ResumeSection title="Skills">
            <Skill name="Java" confidence="100" />
            <Skill name="HTML5 + CSS3" confidence="95" />
            <Skill name="PHP + MySQL" confidence="80" /> 
            <Skill name="Javascript + jQuery" confidence="78" />
            <Skill name="Python" confidence="75" />
            <Skill name="git + GitHub" confidence="75" />
            <Skill name="React.js" confidence="25" />
          </ResumeSection>
        </main>
      </div>
      <footer className="footer">Written in React.js</footer>
    </div>
  );
}

export default App;
