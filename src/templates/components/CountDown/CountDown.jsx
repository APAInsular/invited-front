import React, { useState, useEffect } from "react";
import useCountdown from '../../logic/useCountdown';
import { formatDateToString } from '../../logic/utils';
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountDown.css";

const CountDown = ({ weddingDate, text }) => {
    const timeLeft = useCountdown(weddingDate);
    
    return (
        <div className="container text-center my-4">
            <h2 className="mb-3 fontTitle"><strong>{text.title}</strong></h2>
            <div className="countdown-box">
                <div className="time">{timeLeft.days} <span>{text.unit1}</span></div>
                <div className="time">{timeLeft.hours} <span>{text.unit2}</span></div>
                <div className="time">{timeLeft.minutes} <span>{text.unit3}</span></div>
                <div className="time">{timeLeft.seconds} <span>{text.unit4}</span></div>
            </div>
            <br />
            <h4>{formatDateToString(weddingDate)}</h4>
        </div>
    );
};

export default CountDown;
