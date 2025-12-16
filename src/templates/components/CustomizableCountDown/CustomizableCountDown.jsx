import useCountdown from "../../logic/useCountdown";
import { formatDateToString } from "../../logic/utils";
import "./CustomizableCountDown.css";

const CustomizableCountDown = ({ weddingDate, text, frame = {} }) => {
  const timeLeft = useCountdown(weddingDate);
  const { frameSrc = null, frameMinsize = "80px", borderStyle = null } = frame;

  const getTimeStyle = () => {
    const style = {
      minWidth: frameMinsize,
      minHeight: frameMinsize,
      flexShrink: 0,
    };

    if (frameSrc) {
      style.backgroundImage = `url(${frameSrc})`;
      style.backgroundSize = "contain";
      style.backgroundPosition = "center";
      style.backgroundRepeat = "no-repeat";
    } else if (borderStyle) {
      style.border = borderStyle; 
      style.borderRadius = "12px";
    }

    return style;
  };

  return (
    <div className="CustomizableCountDown text-center">
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        {["days", "hours", "minutes", "seconds"].map((unit, i) => (
          <div key={i} className="time-box">
            <span className="time" style={getTimeStyle()}>
              <strong>{timeLeft[unit]}</strong>
            </span>
            <span>{text[`unit${i + 1}`]}</span>
          </div>
        ))}
      </div>

      <h4 className="p-3 mt-4">{formatDateToString(weddingDate)}</h4>
    </div>
  );
};

export default CustomizableCountDown;
