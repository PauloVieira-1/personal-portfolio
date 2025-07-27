function About() {
  return (
    <div className="container text-light pt-5 text-start">
      <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Welcome</h1>
      <h2 className="fs-3 text-danger mb-4 bottom-fade-in-fast">About Me</h2>

      <p className="fs-5 text-secondary mb-4 bottom-fade-in-slow">
        I'm a creative developer with a passion for clean code, elegant design, and building
        seamless digital experiences. My focus is on creating user-first interfaces that are both
        intuitive and beautiful.
      </p>

      <blockquote className="blockquote ps-3 border-start border-4 border-danger mb-4 bottom-fade-in-slow">
        <p className="mb-0 fst-italic">
          “Great design is not just what it looks like — it's how it works.”
        </p>
      </blockquote>

      <p className="text-muted bottom-fade-in-fast">
        With experience in both front-end design and back-end logic, I love working on full-stack
        projects. Whether I'm prototyping in React or structuring APIs in Node.js, I’m always
        learning and iterating to make things better.
      </p>
    </div>
  );
}

export default About;
