import Header from '../components/header/header'
import Layout from '../components/layout';
import React from 'react';
import Section1 from '../components/sections/section1';
import Section2 from '../components/sections/section2';
import Section3 from '../components/sections/section3';
import Section4 from '../components/sections/section4';
import Section5 from '../components/sections/section5';
import Section6 from '../components/sections/section6';
import Footer from '../components/footer/footer';
// // import Footer from "@/components/footer";

const HomePage = () => {
    return (
          <Layout pageTitle="Home | Decentrio">
            <Header currentPath={"Home"} />
            <main className="bg-[#111111] min-h-screen items-center justify-between homepage">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />

            </main>
            <Footer />
          </Layout>
        );
};

export default HomePage;