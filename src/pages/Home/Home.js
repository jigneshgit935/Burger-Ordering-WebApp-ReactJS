import React from 'react';
import Layout from '../../Components/Layouts/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
const Home = () => {
  return (
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1 />

      {/* Home Section About */}
      <Section2 />

      {/* Menu Section 3 */}
      <Section3 />

      {/* Home Section Promotion */}
      <Section4 />

      {/* Shop Section */}
      <Section5 />

      {/* Blog */}
      <Section6 />

      {/* Cotact */}
      <Section7 />
    </Layout>
  );
};

export default Home;
