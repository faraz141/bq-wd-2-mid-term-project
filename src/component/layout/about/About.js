// AboutUs.js
import React, { useState } from 'react';
// import Footer from '../footer/footer';
import './style.css';
import { useNavigate } from 'react-router-dom';

const agents = [
  {
    id: 1,
    image: 'https://homezennextjs.vercel.app/images/agents/agent-1.jpg', 
    name: 'Ralph Edwards',
    contact: '123-456-7890',
    email: 'ralphedwards223@example.com',
    link: '/properties'
  },
  {
    id: 2,
    image: 'https://homezennextjs.vercel.app/images/agents/agent-2.jpg',
    name: 'Kathryn Murphy',
    contact: '123-456-7890',
    email: 'kMurphy322@example.com',
    link: '/properties'
  },
  {
    id: 3,
    image: 'https://homezennextjs.vercel.app/images/agents/agent-3.jpg',
    name: 'Floyd Miles',
    contact: '123-456-7890',
    email: 'FMiles131@example.com',
    link: '/properties'
  }
];

const About = () => {
  const [agentList] = useState(agents);
  const navigate = useNavigate();

  const handleLearnMore = (agent) => {
    navigate("/properties", { state: { fromAbout: true } });
  };

  return (
    <>
    <section className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img
          src="https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
        />
        <div className="about-text">
          <p>
            Welcome to Real Estate, your number one source for all things real
            estate. We're dedicated to giving you the very best properties, with a
            focus on reliability, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2024, Real Estate has come a long way from its beginnings.
            When we first started out, our passion for helping people find their
            dream homes drove us to do intense research and gave us the impetus to
            turn hard work and inspiration into a booming online platform. We now
            serve customers all over the country and are thrilled to be a part of
            the fair trade wing of the real estate industry.
          </p>
          <p>
            We hope you enjoy our services as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
        </div>
      </div>
      <h2>About Our Agents</h2>
      <div className='agent-list'>
        {agentList.map((agent) => (
           <div className="agent-item" key={agent.id}>
             <div className="agent-image">
               <img src={agent.image} alt={agent.name} />
             </div>
             {/* <div className="property-details"> */}
               <h3>{agent.name}</h3>
               <h3><i className="fa-solid fa-phone"></i>  {agent.contact}</h3>
               <h3><i className="fas fa-envelope"></i>  {agent.email}</h3>
             {/* </div> */}
             <button className="learn-more" onClick={() => handleLearnMore(agent)}><h3>Learn More →</h3></button>
           </div>
        ))}
      </div>
    </section>
    {/* <Footer/> */}
    </>
  );
};

export default About;
