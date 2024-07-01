import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from FontAwesome
// import './WhatsAppButton';

const WhatsAppButton = () => {
    const whatsappUrl = "https://wa.me/919332538107"; // Replace with your WhatsApp number

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed right-10 bg-[#25D366] hover:ring-4 hover:ring-yellow-500 rounded-full bottom-24">
            <FaWhatsapp size={50} color="white" />
        </a>
    );
};

export default WhatsAppButton;
