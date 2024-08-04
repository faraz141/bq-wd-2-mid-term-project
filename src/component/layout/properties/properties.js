
import React, { useState, useEffect} from 'react';
// import Footer from '../footer/footer';
import './style.css'; // Ensure to create and link the CSS file
import { useNavigate, useLocation } from 'react-router-dom';

const agentData = [
  { name: 'Ralph Edwards', image: 'https://homezennextjs.vercel.app/images/agents/agent-1.jpg' },
  { name: 'Kathryn Murphy', image: 'https://homezennextjs.vercel.app/images/agents/agent-2.jpg' },
  { name: 'Floyd Miles', image: 'https://homezennextjs.vercel.app/images/agents/agent-3.jpg' },
  { name: 'John deol', image: 'https://homezennextjs.vercel.app/images/agents/agent-4.jpg' }
];

const houseImages = [
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  'https://images.pexels.com/photos/7031400/pexels-photo-7031400.jpeg',
  'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=400'
  // Add more image URLs here as needed...
  // You can add up to 100 unique image URLs for better diversity
];

const titles = [
  'Beautiful Family House', 'Modern Apartment', 'Urban Loft', 'Luxury Villa', 
  'Rustic Farmhouse', 'Cozy Cottage', 'Beachfront Property', 'Mountain Retreat',
  'Suburban Home', 'City Penthouse', 'Historic Townhouse', 'Spacious Ranch', 
  'Luxury Condo', 'Modern Studio', 'Elegant Manor', 'Trendy Duplex', 'Stylish Bungalow', 
  'Classic Villa', 'Country Estate', 'Charming Cabin', 'Seaside Bungalow', 'Vintage Cottage',
  'Designer Villa', 'Contemporary Studio', 'Elegant Penthouse', 'Quaint Farmhouse',
  'Luxury Estate', 'Modern Townhouse', 'Scenic Apartment', 'Urban Studio', 'Forest Lodge',
  'Charming Villa', 'Majestic Manor', 'Cozy Loft', 'Opulent Mansion', 'Lakeside Retreat',
  'Suburban Villa', 'City Loft', 'Tranquil Cottage', 'Beachside Condo', 'Luxury Bungalow',
  'Riverside House', 'Secluded Cabin', 'Townhouse Retreat', 'Designer Penthouse',
  'Suburban Manor', 'City Apartment', 'Luxury House', 'Forest Cottage', 'Stylish Estate',
  'Trendy Apartment', 'Classic Townhouse', 'Modern Loft', 'Rural Farmhouse', 'Seaside Villa',
  'Lakeside Cabin', 'Elegant Studio', 'Urban Apartment', 'Spacious Villa', 'Luxury Farmhouse',
  'Mountain Cabin', 'Beach House', 'Modern Condo', 'Scenic Villa', 'Rural Retreat',
  'Classic Bungalow', 'Suburban House', 'Luxury Studio', 'Vintage Villa', 'Seaside Apartment',
  'City Cottage', 'Modern House', 'Spacious Condo', 'Forest Villa', 'Opulent House',
  'Tranquil Villa', 'Designer House', 'Lakeside Villa', 'City Bungalow', 'Luxury Retreat',
  'Contemporary Villa', 'Majestic Estate', 'Scenic House', 'Urban Loft', 'Forest House',
  'Secluded Villa', 'Beachside House', 'Classic Studio', 'Suburban Cottage', 'Designer Studio',
  'Vintage Townhouse', 'Elegant Estate', 'Trendy House', 'Mountain Villa', 'Lakeside House'
];

const locations = [
  '1040 Ocean, Santa Monica, California', '21 Hillside Drive, Beverly Hills, California',
  '8 Broadway, Brooklyn, New York', '32 Elm Street, Springfield, Illinois', 
  '19 Palm Street, Miami, Florida', '45 Sunset Blvd, Los Angeles, California', 
  '78 Oak Avenue, Dallas, Texas', '56 Pine Street, Seattle, Washington',
  '15 Maple Street, Denver, Colorado', '23 Cedar Road, Atlanta, Georgia', 
  '90 Birch Lane, San Francisco, California', '101 Walnut Street, Chicago, Illinois',
  '67 Chestnut Drive, Boston, Massachusetts', '38 Redwood Road, Phoenix, Arizona', 
  '12 Willow Lane, Portland, Oregon', '29 Cypress Street, Las Vegas, Nevada', 
  '44 Ash Avenue, Austin, Texas', '55 Sycamore Street, Philadelphia, Pennsylvania',
  '72 Poplar Drive, Nashville, Tennessee', '88 Fir Lane, Orlando, Florida',
  '1023 Cedar Street, San Diego, California', '56 Pine Avenue, Santa Clara, California',
  '78 Birch Lane, San Jose, California', '12 Oak Drive, Cupertino, California',
  '34 Maple Avenue, Palo Alto, California', '90 Cypress Road, Los Gatos, California',
  '67 Elm Street, Sunnyvale, California', '101 Walnut Drive, Mountain View, California',
  '15 Redwood Lane, Menlo Park, California', '45 Palm Avenue, Atherton, California',
  '23 Pine Street, Woodside, California', '89 Chestnut Road, Hillsborough, California',
  '56 Cedar Drive, Foster City, California', '78 Maple Street, Belmont, California',
  '12 Birch Lane, San Mateo, California', '90 Redwood Road, Burlingame, California',
  '67 Oak Avenue, Millbrae, California', '101 Pine Drive, South San Francisco, California',
  '15 Elm Street, Daly City, California', '45 Cypress Lane, San Bruno, California',
  '23 Fir Avenue, Pacifica, California', '89 Cedar Street, Half Moon Bay, California',
  '56 Palm Drive, Redwood City, California', '78 Elm Avenue, San Carlos, California',
  '12 Pine Lane, Palo Alto, California', '90 Cedar Street, Stanford, California',
  '67 Maple Drive, Los Altos, California', '101 Birch Avenue, Menlo Park, California',
  '15 Redwood Street, Atherton, California', '45 Oak Lane, Mountain View, California',
  '23 Palm Drive, Sunnyvale, California', '89 Fir Lane, Cupertino, California',
  '56 Cedar Avenue, Santa Clara, California', '78 Pine Drive, San Jose, California',
  '12 Maple Street, Los Gatos, California', '90 Elm Lane, Campbell, California',
  '67 Cedar Drive, Saratoga, California', '101 Redwood Avenue, Los Altos, California',
  '15 Palm Street, Palo Alto, California', '45 Elm Avenue, Menlo Park, California',
  '23 Pine Drive, Atherton, California', '89 Maple Lane, Mountain View, California',
  '56 Birch Street, Sunnyvale, California', '78 Fir Avenue, Cupertino, California',
  '12 Redwood Drive, Santa Clara, California', '90 Oak Street, San Jose, California',
  '67 Palm Avenue, Los Gatos, California', '101 Cedar Drive, Campbell, California',
  '15 Elm Lane, Saratoga, California', '45 Pine Street, Los Altos, California',
  '23 Maple Drive, Palo Alto, California', '89 Birch Avenue, Menlo Park, California',
  '56 Fir Street, Atherton, California', '78 Redwood Lane, Mountain View, California',
  '12 Palm Avenue, Sunnyvale, California', '90 Cedar Drive, Cupertino, California',
  '67 Elm Street, Santa Clara, California', '101 Maple Lane, San Jose, California',
  '15 Birch Drive, Los Gatos, California', '45 Fir Avenue, Campbell, California',
  '23 Redwood Street, Saratoga, California', '89 Oak Drive, Los Altos, California'
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const arr= Array.from({ length: 100 }, (_, i) => {
  const agent = getRandomItem(agentData);
  const image = getRandomItem(houseImages);
  const title = titles[i % titles.length];
  const location = locations[i % locations.length];
  
  return {
    id: i + 1,
    image: `${image}?random=${i}`,
    title: title,
    price: `$${(250000 + (i * 10000)).toLocaleString()}`,
    type: ['HOUSE', 'OFFICE', 'STUDIO'][i % 3],
    location: location,
    beds: `${1 + (i % 5)} Beds`,
    baths: `${1 + (i % 3)} Baths`,
    area: `${600 + (i * 10)} SqFT`,
    agent: agent.name,
    agentImage: agent.image,
    rent: `$${(1000 + (i * 100)).toLocaleString()}/month`,
    Link: `/property/${i + 1}`
  };
});

// console.log(properties);


// console.log(properties);

// console.log(properties)
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

// const additionalProperties = [
//     {
//         id: 4,
//         image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlmZmVyZW50JTIwcmVhbCUyMGVzdGF0ZSUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww',
//         title: 'Luxury Villa',
//         price: '$1,200,000',
//         type: 'HOUSE',
//         location: 'Some Location, California',
//         beds: '5 Beds',
//         baths: '4 Baths',
//         area: '900 SqFT',
//         agent: 'John deol',
//         agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-4.jpg',
//         rent: '$500,00/month',
//         Link: '/'
//       },
//       {
//         id: 5,
//         image: 'https://media.istockphoto.com/id/863542630/photo/summer-sunset-with-a-red-barn-in-rural-montana-and-rocky-mountains.webp?b=1&s=170667a&w=0&k=20&c=m9gz2sscNeOj6Wh9ohD0ScSs59k54VQl6hpthHDR27E=',
//         title: 'Rustic Farmhouse',
//         price: '$750,000',
//         type: 'OFFICE',
//         location: 'Some Location, Montana',
//         beds: '4 Beds',
//         baths: '3 Baths',
//         area: '1200 SqFT',
//         agent: 'Ralph Edwards',
//         agentImage:'https://homezennextjs.vercel.app/images/agents/agent-1.jpg',
//         rent: '$6000,00/SqFT',
//         Link: '/'
//       },
//       {
//         id: 6,
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat7rAccDWxeUe0xAaVp1KouK0BM7nDEGy9A&s',
//         title: 'Cozy Cottage',
//         price: '$250,000',
//         type: 'STUDIO',
//         location: '8 Broadway, Brooklyn, New York',
//         beds: '2 Beds',
//         baths: '2 Baths',
//         area: '600 SqFT',
//         agent: 'Floyd Miles',
//         agentImage: 'https://homezennextjs.vercel.app/images/agents/agent-3.jpg',
//         rent: '$250,00/SqFT',
//         Link: '/'
//       },
// ];

// const Properties = () => {
//   const [propertyList, setPropertyList] = useState(initialProperties);
//   // const [arraylist, setArrayList] = useState(arr)
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     setPropertyList([...propertyList, ...arr]);
//     // setArrayList([arraylist])
//   };

//   const handleLearnMore = (property) => {
//     navigate("/", { state: { fromProperties: true } });
//   };
  
//   return (
//     <>
//     <section className="properties">
//       <h1>Properties</h1>
//       <h2>Featured Properties</h2>
//       <div className="property-list">
//         {propertyList.map((property) => (
//           <div className="property-item" key={property.id}>
//             <div className="property-image">
//               <img src={property.image} alt={property.title} />
//               <span className="property-type">{property.type}</span>
//             </div>
//             <h3>{property.title}</h3>
//             <p className="property-location">
//               <i className="fas fa-map-marker-alt"></i> {property.location}
//             </p>
//             <div className="property-details">
//               <span><i className="fas fa-bed"></i> {property.beds}</span>
//               <span><i className="fas fa-bath"></i> {property.baths}</span>
//               <span><i className="fas fa-expand"></i> {property.area}</span>
//             </div>
//             <div className="property-agent">
//               <img src={property.agentImage} alt={property.agent} />
//               <p>{property.agent}</p>
//             </div>
//             <p className="property-price">{property.rent}</p>
//             <button className="learn-more" onClick={() => handleLearnMore(property)}><h3>Learn More →</h3></button>
//           </div>
//         ))}
//       </div>
//       <div className="view-all-container">
//         <button className="view-all-btn" onClick={handleViewAll}>View All Properties →</button>
//       </div>
//     </section>
//     </>
//   );
// };
const Properties = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { keyword, searchLocation, price, type } = location.state || {};
  
  const [propertyList, setPropertyList] = useState(initialProperties);
  

  useEffect(() => {
    let filteredProperties = arr;

    if (keyword) {
      filteredProperties = filteredProperties.filter(property => property.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    if (searchLocation) {
      filteredProperties = filteredProperties.filter(property => property.location.toLowerCase().includes(searchLocation.toLowerCase()));
    }

    if (price) {
      filteredProperties = filteredProperties.filter(property => parseFloat(property.rent.replace(/[^0-9.-]+/g,"")) <= parseFloat(price));
    }

    if (type && type !== 'all') {
      filteredProperties = filteredProperties.filter(property => property.type === type);
    }

    setPropertyList(filteredProperties.length > 0 ? filteredProperties : arr);
  }, [keyword, searchLocation, price, type]);

  const handleViewAll = () => {
    setPropertyList([...propertyList, ...arr]);
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


