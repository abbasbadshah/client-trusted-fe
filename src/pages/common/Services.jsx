import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Faq_Section from "../../components/sections/inner-pages/service/Faq_Section";
import Service_Section from "../../components/sections/inner-pages/service/service_section/Service_Section";
import Testimonial_Section from "../../components/sections/inner-pages/service/testimonial/Testimonial_Section";
import { Helmet } from "react-helmet-async";
import usePageTitleAnimation from "../../hooks/usePageTitleAnimation";

const Services = () => {
  usePageTitleAnimation('Services | Client Trusted', `Don't miss our top-notch services! 💼`)
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Explore our wide range of services designed to help your business succeed."
        />
      </Helmet>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title="Our Services" link="Services" />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Service Section Start :::... */}
        <Service_Section />
        {/*...::: Service Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <Faq_Section />
        {/*...::: FAQ Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <Testimonial_Section />
        {/*...::: Testimonial Section Start :::... */}
      </main>
    </div>
  );
};

export default Services;
