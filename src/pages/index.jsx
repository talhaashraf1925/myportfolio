import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } else {
      alert("❌ Failed to send message: " + data.message);
    }
  } catch (err) {
    console.error(err);
    alert("❌ Something went wrong. Try again later.");
  }
};

  return (
    <main>
      <>
        {/* section hero */}
        <section className="hero bg-gradient-to-b from-[#03045E] to-[#4B0082] min-h-screen text-white">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="content text-center pt-[250px]">
                  <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                    <Typewriter
                      words={[
                        "Hi, I'm Muhammad Talha — Full Stack Developer & UI Designer",
                        "Building Responsive & Scalable Applications",
                        "Designing Interfaces That Convert",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={2000}
                    />
                  </h2>
                  <p className="text-[17px] mt-3">
                    I build fast, responsive, and scalable web applications
                    using Laravel, React, and Next.js
                  </p>

                  <div className="d-flex justify-center gap-3 mt-4">
                    <a href="#projects" className="text-decoration-none">
                      <button className="btn border text-white rounded-0">
                        View Work
                      </button>
                    </a>
                    <a href="#contact">
                      <button className="btn border text-white px-4 rounded-0">
                        Hire Me
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* section about */}
        <section className="about py-4" id="about">
          <Container fluid>
            <Row className="gy-4 justify-center">
              <Col lg={5} md={12} sm={12} xs={12}>
                <div className="relative w-full">
                  <Image
                    src="/image/talha.png"
                    alt="Muhammad Talha"
                    width={550}
                    height={550} // Keep square ratio for proper scaling
                    className="img-fluid rounded-3 border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col lg={7} md={12} sm={12} col={12}>
                <div className="detail mt-3">
                  <h4>🧑‍💻 2. About Me</h4>
                  <p>
                    Hi, I’m Muhammad Talha — a full-stack developer specializing
                    in Laravel, React.js, and Next.js. I build clean, scalable
                    web apps with a focus on great user experience and modern
                    design. From backend APIs to frontend interfaces, I help
                    businesses turn their ideas into fast, responsive, and
                    high-converting websites. Let’s collaborate!
                  </p>
                  <hr />
                  <Row className="gy-4">
                    <Col lg={6} md={6} sm={12} col={12}>
                      <div className="detail-2">
                        <h4>🧰 Tech Stack</h4>
                        <span className="text-[19px]">
                          ⚙️ Tools & Technologies I Work With:
                        </span>
                        <div className="mt-3 ms-2">
                          <h6>
                            <li>Laravel </li>
                          </h6>
                          <h6>
                            <li>PHP </li>
                          </h6>
                          <h6>
                            <li>React.js </li>
                          </h6>
                          <h6>
                            <li>Next.js </li>
                          </h6>
                          <h6>
                            <li>Tailwind CSS </li>
                          </h6>
                          <h6>
                            <li>JavaScript </li>
                          </h6>
                          <h6>
                            <li>MySQL </li>
                          </h6>
                          <h6>
                            <li>Git & GitHub </li>
                          </h6>
                          <h6>
                            <li>Figma </li>
                          </h6>
                          <h6>
                            <li>REST APIs</li>
                          </h6>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} col={12}>
                      <div className="study-detail">
                        <h4>📘 Education</h4>
                        <b className="ms-2">FSC [ Pre-Medical ]</b>
                        <p className="ms-2">( 2021-2023 )</p>
                      </div>
                      <hr />
                      <div className="exp-detail">
                        <h4>💼 Experience</h4>
                        <div>
                          <b className="text-[17px]">
                            <li>Full Stack Web Developer (2023 – 2025)</li>
                          </b>
                          <span className="text-[15px] fw-bold">
                            [ Maxcore Technologies ]
                          </span>
                          <p>
                            Worked with startups and clients globally to build
                            websites, APIs, and admin panels using Laravel,
                            React, and Next.js.
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="crtf-detail">
                        <h4>📜 Certification</h4>
                        <div>
                          <span>
                            <li>Full Stack Developer / Maxcore Technologies</li>
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <p>
                    Let’s turn your vision into a clean, functional, and
                    impactful digital experience:<br></br>
                    I’m always excited to collaborate with passionate people and
                    bring great ideas to life and for your satisfaction<br></br>
                    — Muhammad Talha, Full Stack Developer & UI Designer
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* section skills */}
        <section className="services py-5" id="services">
          <Container>
            <div className="text-center mt-4">
              <h3 className="fw-bold">🚀 My Services</h3>
            </div>
            <Row className="text-center gy-4 mt-4">
              {[
                { emoji: "💻", title: "Web Development" },
                { emoji: "🎨", title: "UI/UX Design" },
                { emoji: "📱", title: "Responsive Design" },
                { emoji: "🛠️", title: "Backend (Laravel)" },
                { emoji: "⚛️", title: "React / Development" },
                { emoji: "🛒", title: "E-Commerce" },
                { emoji: "📈", title: "SEO Optimization" },
                { emoji: "🔗", title: "API Integration" },
              ].map((service, idx) => (
                <Col key={idx} lg={3} md={6} sm={12} xs={12}>
                  <div className="service-card">
                    <div className="service-card-body">
                      <h4 className="fw-bold">
                        {service.emoji} <br /> {service.title}
                      </h4>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* section Projects */}
        <section className="projects py-5" id="projects">
          <Container>
            <div className="text-center mt-4">
              <h3 className="fw-bold">📂 My Projects</h3>
            </div>
            <Row className="gy-4 mt-4">
              {/* Project Card 1 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/screencapture-wadi-al-dhaid-vercel-app-2025-06-18-02_59_48.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="fw-bold">Wadi-Al-Dhaid</h4>
                    <p>
                      Wadi Al Dhaid is a modern, responsive travel agency
                      platform <Link href="/Detail-page?id=1">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://wadi-al-dhaid.vercel.app/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Project Card 2 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/project-2.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body mt-5">
                    <h4 className="fw-bold">Juanmy Records</h4>
                    <p>
                      Juan My Records is a professional website designed for a
                      music label and production{" "}
                      <Link href="/Detail-page?id=2">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://juanmyrecords.com/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Project Card 3 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/project3.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body mt-5">
                    <h4 className="fw-bold">Fruair</h4>
                    <p>
                      Fruair is a sleek and intuitive travel platform that
                      blends AI-powered suggestions{" "}
                      <Link href="/Detail-page?id=3">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://fruair.com/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Project Card 4 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/project4-1.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="fw-bold">FxGlide</h4>
                    <p>
                      Glide is a sleek, professional trading website for forex,
                      indices <Link href="/Detail-page?id=4">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://www.fxglide.com/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Project Card 5 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/project5.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body mt-5">
                    <h4 className="fw-bold">Iqra Quran Academy</h4>
                    <p>
                      Iqra Online Quran Academy is a modern, comprehensive
                      e-learning platform{" "}
                      <Link href="/Detail-page?id=5">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://iqraonlinequranacademy.vercel.app/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* /* Project Card 6 */}
              <Col lg={4}>
                <div className="card p-2 h-100">
                  <div className="card-head">
                    <img
                      src="/image/project6-1.png"
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-body mt-5">
                    <h4 className="fw-bold">PRM4U</h4>
                    <p>
                      PRM4U is a responsive SMM service platform designed{" "}
                      <Link href="/Detail-page?id=6">view more</Link>
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://prm4u.com/"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <button
                          className="btn border text-white"
                          style={{ background: "#03045E" }}
                        >
                          Online Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Contact */}
        <section className="contact py-5" id="contact">
          <Container>
            <Row className="gy-4 mt-4">
              <Col lg={12}>
                <form
                  onSubmit={handleSubmit}
                  className="p-4 shadow-lg rounded-4 border border-3 border-dark"
                  style={{ background: "#f8f9fa" }}
                >
                  <h3
                    className="fw-bold text-center mb-4"
                    style={{ color: "#03045E" }}
                  >
                    📩 Contact Me
                  </h3>

                  <Row className="gy-3">
                    <Col lg={6}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control py-2 shadow-sm rounded-3 border border-2 border-dark"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control py-2 shadow-sm rounded-3 border border-2 border-dark"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control py-2 shadow-sm rounded-3 border border-2 border-dark"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control py-2 shadow-sm rounded-3 border border-2 border-dark"
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control py-2 shadow-sm rounded-3 border border-2 border-dark"
                      ></textarea>
                    </Col>
                  </Row>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn px-5 py-2 mt-4 fw-bold shadow-sm rounded-3"
                      style={{
                        background: "#03045E",
                        color: "white",
                        border: "none",
                      }}
                    >
                      🚀 Send Message
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </main>
  );
}
