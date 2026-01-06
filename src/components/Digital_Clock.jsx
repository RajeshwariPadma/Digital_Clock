import { useEffect, useState } from "react"
import "./Digital_Clock.css";

export const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervel = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return ( () =>clearInterval(intervel))
    }, [])

    const displayClock = () => {
      let hours = time.getHours();
        const minuts = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return (`${pedNumber(hours)}:${pedNumber(minuts)}:${pedNumber(seconds)} ${meridiem}`)
    }

    function pedNumber(number){
        return ( number < 10 ? "0" : "" ) + number;
    }
    return (
        <>
            <div className="digitalclock">
                <div className="upperbox"/>
                <div className="clockbody">{displayClock()} </div>
                <div className="lowerbox"/>
            </div>
        </>
    )
}