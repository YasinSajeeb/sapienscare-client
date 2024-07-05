import banner1 from '../../../assets/images/Banner/banner_1.jpg';
import 'animate.css/animate.min.css';

const Banner = () => {
  return (
    <div
      className="hero w-full h-[26vh] md:h-[37vh] lg:min-h-screen"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
    </div>
  );
};

export default Banner;
