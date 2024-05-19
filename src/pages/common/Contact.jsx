import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Contact_Section from "../../components/sections/inner-pages/contact/contact_section/Contact_Section";
import Map from "../../components/sections/inner-pages/contact/Map";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Client Trusted</title>
        <meta name="description" content="Get in touch with us" />
      </Helmet>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title="Contact Us" link="Contact" />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <Contact_Section />
        {/*...::: Contact Section End :::... */}
        {/*...::: Map Section Start :::... */}
        <Map />
        {/*...::: Map Section Start :::... */}
      </main>
    </div>
  );
};

export default Contact;
