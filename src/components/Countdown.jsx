import { useEffect, useState } from "react";

export default function Countdown() {

  const weddingDate =
    new Date("2027-07-03T11:00:00");

  const [time, setTime] = useState({});

  useEffect(() => {

    const timer = setInterval(() => {

      const diff =
        weddingDate - new Date();

      setTime({
        days:
          Math.floor(diff /
          (1000*60*60*24)),

        hours:
          Math.floor(
            (diff/(1000*60*60)) % 24
          ),

        minutes:
          Math.floor(
            (diff/(1000*60)) % 60
          ),

        seconds:
          Math.floor(
            (diff/1000)%60
          )
      });

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (
    <section className="bg-maroon py-20">

      <h2 className="text-center text-gold text-5xl font-display mb-10">
        Counting The Moments
      </h2>

      <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto px-4">

        {Object.entries(time).map(([k,v])=>(
          <div
            key={k}
            className="bg-cream rounded-xl p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-gold">
              {v}
            </h3>

            <p className="uppercase text-sm">
              {k}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
