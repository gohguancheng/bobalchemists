import React, { useState, useEffect } from "react";
import Card from "../Reusables/Card";
import axios from "axios";

const Gallery = ({ currentUserData, selectedFilters}) => {
  // gallery holds an array of BOBAcreations objects
  const [gallery, setGallery] = useState([]);

  // Make api call to get cards data
  useEffect(async () => {
    
    // response => { data: { data } } -> inner data, i.e array, is defined by destructuring
    if(selectedFilters.length <= 0){
      await axios.get("/api/teacardsinfo").then( ({ data:{data} }) => {
        setGallery(data);
      });
    }
    else{
      await axios.post("/api/teacardsinfo/filterbyingredients", {filters: selectedFilters})
      .then( ({ data:{data} }) => {
        setGallery(data);
      });
    }

  }, [selectedFilters]);

  const galleryDisplay = gallery.map((e) => (
    <Card key={e._id} info={e} currentUserData={currentUserData} />
  ));

  return <div className="p-4 flex flex-wrap gap-4">{galleryDisplay}</div>;
};

export default Gallery;
