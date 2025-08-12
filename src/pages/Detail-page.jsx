import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // All project details
  const projects = {
    1: {
      title: "Wadi-Al-Dhaid",
      description:
        "Wadi Al Dhaid is a modern, responsive travel agency platform designed to showcase curated desert tours and cultural experiences. It features engaging tour listings, vibrant imagery, booking forms, and seamless multi-device navigation. The interface prioritizes user experience with clear package details, easy-to-use filters, and contact integrations.",
      tech: "⚛️ React | ▲ Next.js | 🟨 JavaScript | 🐍 Python | 🌐 HTML | 🎨 CSS",
      main: "/image/screencapture-wadi-al-dhaid-vercel-app-2025-06-18-02_59_48.png",
      images: ["/image/detail-pic-2.png", "/image/detail-pic-3.png"],
    },
    2: {
      title: "Juanmy Records",
      description:
        "Juan My Records is a professional website designed for a music label and production company. The site showcases artists, albums, and featured releases in a clean and engaging layout. It includes smooth navigation, audio previews, and a responsive design optimized for all devices. The project focuses on delivering a modern digital presence that reflects the brand’s creative identity.",
      tech: "🟨 JavaScript | 🌐 HTML | 🎨 CSS | 🐘 PHP | 🅻 Laravel",
      main: "/image/project-2.png",
      images: ["/image/project-2-detail-1.png", "/image/project-2-detail-2.png"],
    },
    3: {
      title: "Fruair",
      description:
        "Fruair is a sleek and intuitive travel platform that blends AI-powered suggestions with social planning tools. Users can chat or upload media to receive curated itineraries, filter by style preferences, and seamlessly build personalized trip plans. The site supports collaboration—families or friends can join in on planning via group chat and shared itineraries. It also organizes booking receipts, maps, photos, and reviews in one central travel hub",
      tech: "🟨 JavaScript | 🌐 HTML | 🎨 CSS | 🐍 Python ",
      main: "/image/project3.png",
      images: ["/image/project3.png", "/image/project3.png"],
    },
    4: {
      title: "FxGlide",
      description:
        "Glide is a sleek, professional trading website for forex, indices, commodities, crypto, and shares. It guides users through account creation, funding, and trading with a clean, responsive interface. The platform highlights key features like tight spreads, high leverage (up to 1:500), and robust customer support across devices. This project emphasizes custom front‑end development, secure user flow, and intuitive dashboards to simplify complex trading activities.",
      tech: "🟨 JavaScript | 🌐 HTML | 🎨 CSS | 🐘 PHP | 🅻 Laravel ",
      main: "/image/project4-1.png",
      images: ["/image//image/project4-1.png", "/image//image/project4-1.png"],
    },
    5: {
      title: "Iqra Online Quran Accademy",
      description:
        "Iqra Online Quran Academy is a modern, comprehensive e-learning platform offering one-on-one Quran and Islamic studies to students worldwide. The site celebrates over 2,000 happy learners, 50+ qualified instructors, and is active in more than 15 countries with 5+ years of experience",
      tech: "🟨 JavaScript | 🌐 HTML | 🎨 CSS | ⚛️ React | ▲ Next.js ",
      main: "/image/project5.png",
      images: ["/image//image/project5.png", "/image//image/project5.png"],
    },
    6: {
      title: "PRM4U",
      description:
        "PRM4U is a responsive SMM service platform designed to boost engagement across 70+ social networks—including Instagram, TikTok, Telegram, YouTube, and more. It offers instant delivery of followers, likes, views, comments, and traffic, powered by a direct-provider setup (no intermediaries). The interface also includes an integrated API for resellers or agencies and 24/7 multilingual support",
      tech: "🟨 JavaScript | 🌐 HTML | 🎨 CSS | 🐘 PHP | 🅻 Laravel ",
      main: "/image/project6-1.png",
      images: ["/image/project6-1.png", "/image/project6-1.png"],
    },
  };

  const project = projects[id];

  // Default main image state
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (project) {
      setMainImage(project.main);
    }
  }, [project]);

  const handleImageClick = (img) => setMainImage(img);

  if (!project) return <p>Loading...</p>;

  return (
    <Container className="py-5">
      <Row className="gy-3 justify-center">
        <Col lg={7}>
          <div className="card p-2 border border-5 border-dark">
            {/* Main Image */}
            <img src={mainImage} alt="Main" className="img-fluid rounded-3" />
          </div>
        </Col>
        {/* Detail */}
        <div className="mt-5">
          <h5 className="fw-bold">Project Description</h5>
          <p>{project.description}</p>
          <div>
            <h5>Tech Stack Used</h5>
            <div>
              <h6>{project.tech}</h6>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
