import { Link } from "react-router-dom";
import aboutBack from "../../../assets/images/About/About_back.png";
import aboutFront from "../../../assets/images/About/About_front.png";
import 'animate.css/animate.min.css';

const About = () => {
    return (
        <div className="hero min-h-[40vh] lg:min-h-screen bg-base-200">
            <div className="hero-content flex-row">
                <div className='w-1/2 relative'>
                    <img src={aboutBack} className="w-4/5 lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={aboutFront} className="w-3/5 lg:w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-yellow-100 shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-2 lg:space-y-5 lg:p-4 animate__animated animate__fadeInRight'>
                    <h3 className='text-lg lg:text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-xl lg:text-5xl font-bold">Your Trusted Source for Quality Supplements</h1>
                    <p className="py-3 lg:py-6 text-xs lg:text-base">At Sapiens' Care, we provide top-quality supplements that meet the highest standards of purity and potency. Our mission is to support your health and wellness journey with products you can trust. Join the many satisfied customers who have experienced the benefits of our premium supplements.</p>
                    <Link to="/aboutus"><button className="btn sm:btn-sm md:btn-md btn-info text-sm">Get More Info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;