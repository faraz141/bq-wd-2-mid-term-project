import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../footer/footer';
import './style.css';

const servicesData = [
  {
    title: "Buy A New Home",
    description: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    icon: "buy-icon", // Placeholder for the buy icon class or image
    link: "/",
  },
  {
    title: "Rent A Home",
    description: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    icon: "rent-icon", // Placeholder for the rent icon class or image
    link: "/",
  },
  {
    title: "Sell A Home",
    description: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    icon: "sell-icon", // Placeholder for the sell icon class or image
    link: "/",
  },
  // Additional sections
  {
    title: "Home Insurance",
    description: "Get comprehensive home insurance plans to protect your property and belongings with peace of mind.",
    icon: "insurance-icon", // Placeholder for the insurance icon class or image
    link: "/",
  },
  {
    title: "Home Renovation",
    description: "Upgrade your home with our expert renovation services to increase its value and comfort.",
    icon: "renovation-icon", // Placeholder for the renovation icon class or image
    link: "/",
  },
  {
    title: "Mortgage Services",
    description: "Secure the best mortgage rates and terms with our expert financial advice and assistance.",
    icon: "mortgage-icon", // Placeholder for the mortgage icon class or image
    link: "/",
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
    <section className="services">
      <div className="header">
        <h2>Our Services</h2>
        <h3>What We Do?</h3>
      </div>
      <div className="services-container">
        {displayedServices.map((service, index) => (
          <div className="service" key={index}>
            <div className={service.icon}></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <Link to={service.link} className="learn-more">Learn More →</Link>
          </div>
        ))}
      </div>
      {!showAll && (
        <button onClick={handleShowAll} className="view-all">View All Services →</button>
      )}
    </section>
    {/* <Footer/> */}
    </>
  );
};

export default Services;

