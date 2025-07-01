import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />

      <section id="home">
        <ImageSlider />
      </section>

      <section
        id="about"
        style={{
          height: '100vh',
          padding: '4rem',
          backgroundImage: `url('/images/banner2.jpg')`, // <-- update path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: 'white',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // low opacity overlay
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Sparkle</h2>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', margin: '0 auto' }}>
            Sparkle is your go-to destination for quality products delivered with care.
            Our brand represents trust, trend, and tech — we bring you products that brighten your lifestyle.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
