import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FeatureCard from "../../components/FeatureCard/FeaturedCard.jsx";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to MyShop!</h1>
          <p>Best deals on all your favorite products.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="/src/assets/shop-banner.png" alt="Shopping banner" />
        </div>
      </section>

      <section className="features">
        <FeatureCard
          icon="🚚"
          title="Free Delivery"
          text="On all orders above ₹500"
        />
        <FeatureCard
          icon="💳"
          title="Secure Payment"
          text="100% safe transactions"
        />
        <FeatureCard
          icon="⭐"
          title="Top Quality"
          text="Best brands and items"
        />
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
