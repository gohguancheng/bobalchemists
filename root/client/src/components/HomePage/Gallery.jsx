import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '../Reusables/Card';
import { cardInfo } from './seedCards';

const Gallery = () => {
    const [gallery, setGallery] = useState(cardInfo)
    const galleryDisplay = gallery.map(e=><Link to={`/${e._id}`}><Card key={e._id} info={e} />/</Link>);
  return (
  <div className='p-4 flex inline-flex gap-4'>
      {galleryDisplay}
  </div>)
}

export default Gallery
