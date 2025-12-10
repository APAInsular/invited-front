
import "./NameWithSeparator.css"
const NamesWithSeparator = ({ left, right, separator }) => {
    return (
        <div className="container my-4">
            <div className="names-separator">
                <div className="text-center nowrap">{left}</div>
                <div>{separator}</div>
                <div className="text-center nowrap">{right}</div>
            </div>
        </div>
    );
};

export default NamesWithSeparator;
