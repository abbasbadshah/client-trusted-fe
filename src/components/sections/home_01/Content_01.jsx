const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id='content-section-1'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md md:order-1'
                data-jos_animation='fade-left'
              >
                <img
                  src='assets/img/th-1/about1.png'
                  alt='content-image-1'
                  width='526'
                  height='450'
                  className='h-auto w-full'
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>Empowering Businesses with Tech Solutions</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                  At Client Trusted, we specialize in leveraging cutting-edge technologies to enhance your business operations and drive growth. Our team is dedicated to crafting bespoke solutions tailored to your unique needs, ensuring unparalleled results in the dynamic world of AI and emerging technologies. With a relentless commitment to innovation and excellence, we're here to fuel your success journey and propel your business forward.
                  </p>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
