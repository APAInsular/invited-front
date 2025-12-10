import useCountdown from "../../../logic/useCountdown";
import { formatDateToString } from "../../../logic/utils";
import "./HavanaCountDown.css";

const HavanaCountDown = ({ weddingDate, text }) => {
  const timeLeft = useCountdown(weddingDate);

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <div className="time-box">
          <strong>{timeLeft.days}</strong>
          <span>{text.unit1}</span>
        </div>

        <div className="time-box">
          <strong>{timeLeft.hours}</strong>
          <span>{text.unit2}</span>
        </div>

        <div className="time-box">
          <strong>{timeLeft.minutes}</strong>
          <span>{text.unit3}</span>
        </div>

        <div className="time-box">
          <strong>{timeLeft.seconds}</strong>
          <span>{text.unit4}</span>
        </div>
      </div>

      <h4 className="mt-4">{formatDateToString(weddingDate)}</h4>
    </div>
  );
};

export default HavanaCountDown;
