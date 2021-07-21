import "./css/App.css";
import ExperienceItem from "./components/ExperienceItem";
import ResumeSection from "./components/ResumeSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="wrapper mt-lg-5">
        <Sidebar>
          <p>It me</p>
        </Sidebar>
        <main className="content">
          <ResumeSection title="About Me">
            <p>I'm a developer and I do full stack stuffs</p>
          </ResumeSection>
          <ResumeSection title="Experience">
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri"
            >
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri">
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri"
            >
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri"
            >
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
            <ExperienceItem
              position="Website Administrator"
              start="June 2020"
              end="Present"
              location="Cape Girardeau, Missouri"
            >
              <p>I do the thing with the semo website</p>
            </ExperienceItem>
          </ResumeSection>
        </main>
      </div>
      <footer className="footer">fuck</footer>
    </div>
  );
}

export default App;
