import React from "react";
import Card from "./Card";
import image1 from "../assets/1296309 (4).png";
import image2 from "../assets/call-of-the-night-anime-wallpaper-2400x1350_50.jpg";
import image3 from "../assets/wp11159921.jpg";

const cards = [
  {
    id: 1,
    title: "Anime 1",
    image: image1,
    instructor: "mona 1",
  },
  {
    id: 2,
    title: "Anime 2",
    image: image2,
    instructor: "mona 2",
  },
  {
    id: 3,
    title: "Anime 3",
    image: image3,
    instructor: "mona 3",
  }
]
export default function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
        cards.map(c => (
          <div className="col-md-4" key={cards.id}>
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.title}
              instructor={c.instructor}
            />
          </div>
        ))
        }
      </div>
    </div>
  );
}
