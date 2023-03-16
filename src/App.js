import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import './assets/tailwind.css';
import MoonLoader from "react-spinners/MoonLoader";


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&orientation=horizontal`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000)

      })
      .catch(err => console.log(err))
  }, [searchTerm]);



  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setSearchTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className='text-5xl mx-auto text-center mt-32'>No Images Found!</h1>}

      {isLoading ?
        <div className='flex justify-center items-center mt-32'><MoonLoader color="#36d7b7" /></div>
        :
        <div className='grid grid-cols-3 gap-4'>
          {
            images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))
          }
        </div>}
    </div>

  );
}

export default App;
