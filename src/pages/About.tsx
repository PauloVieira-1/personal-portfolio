function About() {
  return (
    <div className="container text-light pt-1 text-start">
      <h1 className="display-3 fw-bold mb-2 bottom-fade-in-fast">Welcome</h1>
      <h2 className="fs-3 text-colorRoseLight mb-4 bottom-fade-in-fast">About Me</h2>

      <p className="fs-5 text-secondary mb-4 bottom-fade-in-slow">
        I’m a creative developer with a passion for clean, maintainable code,
        elegant design, and crafting seamless digital experiences. I focus on
        building user-first interfaces that are not only intuitive but also
        visually engaging, ensuring every interaction feels natural and
        purposeful. <br />
      </p>
      <p className="fs-5 text-secondary mb-4 bottom-fade-in-slow">
        In addition to my front-end expertise, I have strong backend development
        skills, working with technologies such as Node.js, MongoDB, and Express
        to create robust, scalable server-side solutions. My technical toolkit
        spans full-stack development, allowing me to design, implement, and
        optimize both the client-facing experience and the underlying
        architecture.
      </p>

      <blockquote className="blockquote ps-3 border-start border-4 border-danger mb-4 bottom-fade-in-slow">
        <p className="mb-0 fst-italic mt-5">
          "Design is intelligence made visible." — Alina Wheeler{" "}
        </p>
      </blockquote>
    </div>
  );
}

export default About;
