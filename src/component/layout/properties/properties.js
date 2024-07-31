
import React, { useState } from 'react';
import './style.css'; // Ensure to create and link the CSS file
import { useNavigate } from 'react-router-dom';

const initialProperties = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMFikTWDbX3Tm6A74pxMMxrpQ-rsVUccqEg&s',
    title: 'Beautiful Family House',
    price: '$500,000',
    type: 'HOUSE',
    location: '1040 Ocean, Santa Monica, California',
    beds: '3 Beds',
    baths: '2 Baths',
    area: '600 SqFT',
    agent: 'Ralph Edwards',
    agentImage:'https://homezennextjs.vercel.app/images/agents/agent-1.jpg',
    rent: '$250,00/month',
    Link: '/'
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.webp?b=1&s=170667a&w=0&k=20&c=-D_1KGbmVkceUNHFnFaVvEMN0_x7MjhPdOZuz0kKtKY=',
    title: 'Modern Apartment',
    price: '$350,000',
    type: 'OFFICE',
    location: '21 Hillside Drive, Beverly Hills, California',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '600 SqFT',
    agent: 'Kathryn Murphy',
    agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-2.jpg',
    rent: '$7250,00/SqFT',
    Link: '/'
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/2129373307/photo/bay-of-cadiz-and-city-view-from-above.webp?b=1&s=170667a&w=0&k=20&c=YHisKs4RrC1avAgsRKeu8VY1o7nGOrHAYu4e2MC8Occ=',
    title: 'Urban Loft',
    price: '$400,000',
    type: 'STUDIO',
    location: 'Some Location, New York',
    beds: '2 Beds',
    baths: '1 Bath',
    area: '700 SqFT',
    agent: 'Floyd Miles',
    agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-3.jpg',
    rent: '$300,00/SqFT',
    Link: '/'
  }
];

const additionalProperties = [
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlmZmVyZW50JTIwcmVhbCUyMGVzdGF0ZSUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww',
        title: 'Luxury Villa',
        price: '$1,200,000',
        type: 'HOUSE',
        location: 'Some Location, California',
        beds: '5 Beds',
        baths: '4 Baths',
        area: '900 SqFT',
        agent: 'John deol',
        agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-4.jpg',
        rent: '$500,00/month',
        Link: '/'
      },
      {
        id: 5,
        image: 'https://media.istockphoto.com/id/863542630/photo/summer-sunset-with-a-red-barn-in-rural-montana-and-rocky-mountains.webp?b=1&s=170667a&w=0&k=20&c=m9gz2sscNeOj6Wh9ohD0ScSs59k54VQl6hpthHDR27E=',
        title: 'Rustic Farmhouse',
        price: '$750,000',
        type: 'OFFICE',
        location: 'Some Location, Montana',
        beds: '4 Beds',
        baths: '3 Baths',
        area: '1200 SqFT',
        agent: 'Ralph Edwards',
        agentImage:'https://homezennextjs.vercel.app/images/agents/agent-1.jpg',
        rent: '$6000,00/SqFT',
        Link: '/'
      },
      {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat7rAccDWxeUe0xAaVp1KouK0BM7nDEGy9A&s',
        title: 'Cozy Cottage',
        price: '$250,000',
        type: 'STUDIO',
        location: '8 Broadway, Brooklyn, New York',
        beds: '2 Beds',
        baths: '2 Baths',
        area: '600 SqFT',
        agent: 'Floyd Miles',
        agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-3.jpg',
        rent: '$250,00/SqFT',
        Link: '/'
      },
];

const Properties = () => {
  const [propertyList, setPropertyList] = useState(initialProperties);
  const navigate = useNavigate();

  const handleViewAll = () => {
    setPropertyList([...propertyList, ...additionalProperties]);
  };

  const handleLearnMore = (property) => {
    navigate("/", { state: { fromProperties: true } });
  };

  return (
    <section className="properties">
      <h1>Properties</h1>
      <h2>Featured Properties</h2>
      <div className="property-list">
        {propertyList.map((property) => (
          <div className="property-item" key={property.id}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              <span className="property-type">{property.type}</span>
            </div>
            <h3>{property.title}</h3>
            <p className="property-location">
              <i className="fas fa-map-marker-alt"></i> {property.location}
            </p>
            <div className="property-details">
              <span><i className="fas fa-bed"></i> {property.beds}</span>
              <span><i className="fas fa-bath"></i> {property.baths}</span>
              <span><i className="fas fa-expand"></i> {property.area}</span>
            </div>
            <div className="property-agent">
              <img src={property.agentImage} alt={property.agent} />
              <p>{property.agent}</p>
            </div>
            <p className="property-price">{property.rent}</p>
            <button className="learn-more" onClick={() => handleLearnMore(property)}><h3>Learn More →</h3></button>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-btn" onClick={handleViewAll}>View All Properties →</button>
      </div>
    </section>
  );
};

export default Properties;


