import 'animate.css/animate.min.css';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Section 1 */}
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white py-16 px-8 rounded-lg mb-12 animate__animated animate__fadeInLeft">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Welcome to <span className="font-semibold">Sapienscare</span>, the premier destination for high-quality health and wellness supplements. We are committed to providing our customers with top-tier dietary supplements, prioritizing excellence, customer satisfaction, and dependability.
          </p>
        </div>
        {/* Section 2 */}
        <div className="bg-white py-16 px-8 rounded-lg mb-12 shadow-lg animate__animated animate__fadeInRight">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Established in 2022 by <span className="font-semibold text-sky-600">NUTRIJA</span>, Sapienscare has evolved from a humble beginning in the USA to a leading name in the industry. Our founder's dedication to promoting health and well-being inspired the creation of a business that prioritizes the health goals of our customers.
          </p>
        </div>
        {/* Section 3 */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white py-16 px-8 rounded-lg mb-12 animate__animated animate__fadeInLeft">
          <p className="text-lg lg:text-xl leading-relaxed">
            Today, we proudly serve a diverse clientele globally, delivering exceptional products and outstanding service. Our commitment to quality is reflected in every supplement we offer, ensuring that our customers receive only the best.
          </p>
        </div>
        {/* Section 4 */}
        <div className="bg-white py-16 px-8 rounded-lg mb-12 shadow-lg animate__animated animate__fadeInRight">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            At <span className="font-semibold text-sky-600">Sapienscare</span>, we are passionate about helping you achieve your health and wellness objectives. We invite you to explore our extensive range of products and experience the difference of shopping with a trusted partner in health.
          </p>
        </div>
        {/* Section 5 */}
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white py-16 px-8 rounded-lg animate__animated animate__fadeInLeft">
          <p className="text-lg lg:text-xl leading-relaxed">
            For any inquiries or feedback, please do not hesitate to reach out to us. We value your input and are here to assist you on your wellness journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
