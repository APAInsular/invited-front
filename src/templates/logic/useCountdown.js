import { useState, useEffect } from "react";

export default function useCountdown(date) {
    const calculate = () => {
        const now = new Date();
        const target = new Date(date);
        const diff = target - now;

        return {
            days: Math.floor(diff / (1000*60*60*24)),
            hours: Math.floor(diff / (1000*60*60) % 24),
            minutes: Math.floor(diff / (1000*60) % 60),
            seconds: Math.floor(diff / 1000 % 60),
        };
    };

    const [time, setTime] = useState(calculate());

    useEffect(() => {
        const timer = setInterval(() => setTime(calculate()), 1000);
        return () => clearInterval(timer);
    }, [date]);

    return time;
}
