const events = [
  {
    title:"Yellow Affair",
    date:"2nd July",
    time:"10:00 AM"
  },
  {
    title:"Sangeet",
    date:"2nd July",
    time:"7:00 PM"
  },
  {
    title:"Barat",
    date:"3rd July",
    time:"10:40 AM"
  },
  {
    title:"Akshata",
    date:"3rd July",
    time:"12:40 PM"
  },
  {
    title:"Wedding Ceremony",
    date:"3rd July",
    time:"2:00 PM"
  }
];

export default function Events() {

  return (
    <section className="py-20">

      <h2 className="text-center text-gold text-6xl font-display">
        Wedding Events
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10 px-4">

        {events.map((event)=>(
          <div
            key={event.title}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h3 className="text-3xl font-display text-gold">
              {event.title}
            </h3>

            <p className="mt-4">
              {event.date}
            </p>

            <p>
              {event.time}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
