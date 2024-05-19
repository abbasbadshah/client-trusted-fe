import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Portfolio_Section from "../../components/sections/inner-pages/portfolio/Portfolio_Section";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Client Trusted</title>
        <meta
          name="description"
          content="Explore our portfolio showcasing our successful projects and achievements."
        />
      </Helmet>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title="Our Portfolio" link="Portfolio" />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Portfolio Section Start :::... */}
        <Portfolio_Section />
        {/*...::: Portfolio Section End :::... */}
      </main>
    </div>
  );
};

export default Portfolio;
