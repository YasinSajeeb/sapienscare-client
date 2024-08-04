import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Notice from "../Notice/Notice";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Home = () => {
    return (
        <div>
            <Notice></Notice>
            <Banner></Banner>
            <About></About>
            <FeaturedProducts></FeaturedProducts>
            <Contact></Contact>
            <WhatsAppButton></WhatsAppButton>
        </div>
    );
};

export default Home;