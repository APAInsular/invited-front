import { Church } from "lucide-react";
import "../styles/WeddingWebsite.css";

const ChurchLocation = ({ location, country, text }) => {
    return (
        <div className="p-4 rounded-lg shadow-md text-center flex items-center gap-2">
            <Church size={32} className="text-gray-700" />
            <div>
                <h2 className="text-xl font-semibold fontTitle"><strong>{text.title}</strong></h2>
                <p className="text-lg text-gray-700 m-1">{country}</p>
                <p className="text-lg text-gray-700 m-1">{location}</p>
            </div>
        </div>
    );
};

export default ChurchLocation;
