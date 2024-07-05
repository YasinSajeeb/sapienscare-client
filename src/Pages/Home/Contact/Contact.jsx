import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+919332538107"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div id="contact-section" className="hero min-h-[40vh] bg-green-300">
      <div className="hero-content">
        <div className="text-center lg:text-left lg:w-1/2 md:space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
          <p className="py-6">
            Have any questions or need assistance? Reach out to us on WhatsApp and we'll be happy to help!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success text-white">
              <FaWhatsapp className="mr-2" /> Contact us on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
