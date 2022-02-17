import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Reusables/Card";
import axios from "axios";

const Gallery = () => {
  // gallery holds an array of BOBAcreations objects
  const [gallery, setGallery] = useState([]);
  console.log("gallery: ", gallery);

  // Make api call
  useEffect(async () => {
    // response => { data: { data } } -> inner data, i.e array, is defined by destructuring
    await axios.get("/api/teacardsinfo").then( ({ data:{data} }) => {
      // console.log("data:", data);
      setGallery(data);
    });
  }, []);

  const galleryDisplay = gallery.map((e) => (
    <Link key={e._id} to={`/show/${e._id}`}>
      <Card key={e._id} info={e} />
    </Link>
  ));

  return <div className="p-4 flex flex-wrap gap-4">{galleryDisplay}</div>;
};

export default Gallery;
