import './Notice.css'; // Import the CSS file for styling

const Notice = () => {
    return (
        <div className="notice-container skeleton rounded-none">
            <p className="notice-text">
                <span className="font-bold">📢 Notice: </span>
                As our supplements are out of stock, shipments are closed now. It will be started again from <span className="font-bold">August 8, 2024.</span> Pre-order your supplement now to get quickly.
                <span className="text-red-700 font-bold"> Don't order same product twice!!</span>
            </p>
        </div>
    );
};

export default Notice;
