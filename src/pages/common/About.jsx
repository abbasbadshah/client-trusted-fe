import { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Hero from '../../components/sections/inner-pages/about/Hero';
import FunFact from '../../components/sections/inner-pages/about/FunFact';
import Content_02 from '../../components/sections/inner-pages/about/Content_02';
import CoreValue from '../../components/sections/inner-pages/about/CoreValue';
import Team from '../../components/sections/inner-pages/about/team/Team';
import Contact from '../../components/contact/Contact';
import { Helmet } from 'react-helmet-async';
import usePageTitleAnimation from '../../hooks/usePageTitleAnimation';

const About = () => {

  usePageTitleAnimation(`About | Client Trusted`, `Hey, don't leave us! 😕`);

  return (
    <div>
    <Helmet>
        <meta name="description" content="Learn more about Client Trusted, our mission, and our team." />
      </Helmet>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='About Us' link='About' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: About Us Section Start :::... */}
        <Hero />
        {/*...::: About Us Section End :::... */}
        {/*...::: About Funfact Start :::... */}
        <FunFact />
        {/*...::: About Funfact Start :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_02 />
        {/*...::: Content Section End :::... */}
        {/*...::: Core Value Section Start :::... */}
        <CoreValue />
        {/*...::: Core Value Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <Team />
        {/*...::: Team Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </div>
  );
};

export default About;
