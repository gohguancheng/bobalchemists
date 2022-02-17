import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Reusables/Card";
import { cardInfo } from "./seedCards";
import axios from "axios";

const Gallery = () => {
  const [gallery, setGallery] = useState(cardInfo);

  // Make api call
  useEffect(async () => {
    await axios.get("/api/teacardsinfo").then((res) => {
      console.log("res", res.data.data);
      setGallery(res?.data?.data);
    });
  }, [gallery]);

  const galleryDisplay = gallery.map((e) => (
    <Link key={e._id} to={`/show/${e._id}`}>
      <Card key={e._id} info={e} />
    </Link>
  ));

  return <div className="p-4 flex gap-4">{galleryDisplay}</div>;
};

export default Gallery;
