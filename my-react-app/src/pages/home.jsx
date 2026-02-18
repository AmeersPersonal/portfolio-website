import NavBar from "../components/navBar.jsx";
import "./home.css";
import img1 from "../imgs/img1.jpg"

function HomePage() {
  return (
    <>
 
      <div className="home-page-container">

        <div className="intro-text">
          <h1 className="sub-title">About Me</h1>
          <p className="about-me-text">
            My name is Ameer Tayeh, and I'm currently enrolled at the New York Institution of Technology to complete my Bachelor of Science in Computer Science by 2028. I am currently working at the ITS Help Desk at NYIT as a student aid worker, and I am inspired to be a backend developer to create innovative solutions to enhance current cybersecurity and AI tactics. One of the few ways I plan on doing this is by developing a cybersecurity glove powered by a Raspberry Pi 5 with some enhanced AI tools coded using C++ and libraries such as SFML.
          </p>
        </div>

        <div className="bottom-section">
          <div className="intro-img">
            <img src={img1} alt="Ameer Tayeh" />
            <p className="img-caption">A photo of me at the Meta Lab at NY.</p>
          </div>

          <div className="skill-box">
            <h3>Skills I Have Obtained </h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>C++</li>
              <li>Cybersecurity</li>
              <li>Linux</li>
              <li>AWS</li>
              <li>Agentic AI</li>
              <li>Full Stack</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;