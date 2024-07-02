import banner1 from '../../../assets/images/Banner/banner_1.jpg';
import 'animate.css/animate.min.css';

const Banner = () => {
  return (
    <div
      className="hero w-full h-[25vh] md:h-[30vh] lg:min-h-screen"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      {/* <div className="hero-overlay"></div>
      <div className="flex items-center justify-start w-full h-full pl-10 text-neutral-content">
        <div className="max-w-md animate__animated animate__fadeInLeft">
          <h1 className="md:mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">Step Into</h1>
          <h1 className="md:mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">a Taller Future</h1>
          <p className="mt-4 md:mt-10 text-xs md:text-xl font-semibold max-w-48 lg:max-w-none">
          Boost your height naturally with our range of supplements and cartilage enhancers. Safe and proven solutions for your growth needs.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
