export function App() {
  return (
    <div className="container">
      <header>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href="Resume.pdf" target="_blank">
            <li id="resume">Resume</li>
          </a>
        </ul>
      </header>

      <section id="about">
        <div>
          <h2>Hi, I'm Asad</h2>
          <p style={{ marginBottom: "1rem" }}>
            I'm a second year computer programming student at St.Clair college
            that specializes in web development using react. During my studies I
            also work at a tutor which allows me to teach other students
            programming concepts, which in turn builds my technical,
            communication and leadership skills.
          </p>
          <p>
            I'm exited to contribute to new projects, thank you for considering
            me!
          </p>
        </div>

        <img style={{ marginTop: "1rem" }} src="profile.png" alt="Profile" />
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div>
          <figure>
            <img src="html.png" alt="html icon" />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <img src="css.png" alt="css icon" />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <img src="js.png" alt="js icon" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src="php.png" alt="php icon" />
            <figcaption>PHP</figcaption>
          </figure>
          <figure>
            <img src="mysql.png" alt="mysql icon" />
            <figcaption>MySql</figcaption>
          </figure>
          <figure>
            <img src="java.png" alt="java icon" />
            <figcaption>Java</figcaption>
          </figure>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div style={{ marginBottom: "1rem" }}>
          <a
            href="https://asad-bashir-96.github.io/tea-haven.github.io/"
            target="_blank"
          >
            <img src="tea-haven.png" alt="tea-haven" />
          </a>
          <p>
            Tea haven is a fake tea website that I created originally for a
            school project.
          </p>
        </div>

        <div>
          <a
            href="https://github.com/asad-bashir-442/BudgetWise"
            target="_blank"
          >
            <img src="demo.png" alt="BudgetWise" />
          </a>
          <p>
            BudgetWise is a budget tracking application my group and I built for
            our Java 3 course.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <form action="mailto:ab442@myscc.ca" method="get" enctype="text/plain">
          <div>
            <label for="name">Name</label>
            <input required type="text" id="name" name="name" />
          </div>

          <div>
            <label for="email">Email</label>
            <input required type="email" id="email" name="email" />
          </div>

          <div>
            <label for="message">Message</label>
            <textarea required rows="5" name="message" id="message"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
