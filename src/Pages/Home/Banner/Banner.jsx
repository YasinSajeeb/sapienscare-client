import banner1 from '../../../assets/images/Banner/banner_1.jpg';
import 'animate.css/animate.min.css';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="flex items-center justify-start w-full h-full pl-10 text-neutral-content">
        <div className="max-w-md animate__animated animate__fadeInLeft">
          <h1 className="mb-5 text-7xl font-bold">Step Into</h1>
          <h1 className="mb-5 text-7xl font-bold">a Taller Future</h1>
          <p className="mt-10 text-xl font-semibold">
          Boost your height naturally with our range of supplements and cartilage enhancers. Safe and proven solutions for your growth needs.
          </p>
        </div>
      </div>
    </div>

    //         <div className="carousel h-[700px] w-11/12">
    //             <div id="slide1" className="carousel-item relative w-full">
    //     <img src={banner1} className="w-full object-cover rounded-xl" />
    //     <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
    //       <div>
    //         <h2 className='text-3xl font-bold text-white'>Nurture Your Growth</h2>
    //       </div>
    //     </div>
    //     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    //                     <a href="#slide4" className="btn btn-circle mr-5">❮</a>
    //                     <a href="#slide2" className="btn btn-circle">❯</a>
    //                 </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img src={banner2} className="w-full mx-auto object-cover rounded-xl" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">❮</a>
    //       <a href="#slide3" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img src={banner3} className="w-full mx-auto object-center rounded-xl" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">❮</a>
    //       <a href="#slide1" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
