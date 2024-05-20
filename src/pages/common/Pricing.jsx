import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Faq_Section from "../../components/sections/inner-pages/pricing/Faq_Section";
import Pricing_Section from "../../components/sections/inner-pages/pricing/Pricing_Section";
import { Helmet } from "react-helmet-async";
import usePageTitleAnimation from "../../hooks/usePageTitleAnimation";

const Pricing = () => {
  usePageTitleAnimation('Pricing | Client Trusted', `Don't miss out on our great deals! 💰`)
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Discover our pricing plans and find the best solution for your business needs."
        />
      </Helmet>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title="Pricing Plans" link="Pricing" />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Pricing Section Start :::... */}
        <Pricing_Section />
        {/*...::: Pricing Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <Faq_Section />
        {/*...::: FAQ Section End :::... */}
      </main>
    </div>
  );
};

export default Pricing;
