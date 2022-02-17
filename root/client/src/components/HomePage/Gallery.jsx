import React, { useState, useEffect } from "react";
import Card from "../Reusables/Card";
import axios from "axios";

const Gallery = ({ currentUserData }) => {
  // gallery holds an array of BOBAcreations objects
  const [gallery, setGallery] = useState([]);

  // Make api call to get cards data
  useEffect(async () => {
    // response => { data: { data } } -> inner data, i.e array, is defined by destructuring
    await axios.get("/api/teacardsinfo").then( ({ data:{data} }) => {
      setGallery(data);
    });
  }, []);

  const galleryDisplay = gallery.map((e) => (
    <Card key={e._id} info={e} currentUserData={currentUserData} />
  ));

  return <div className="p-4 flex flex-wrap gap-4">{galleryDisplay}</div>;
};

export default Gallery;
