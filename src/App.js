import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Images from './components/Images';
const loadingWheel = (
  <div className="lds-ring">Loading...<div className="lds-ring-inner"></div></div>
);
function App() {
  const apiKey = 'SE73JlZEM4UQ5rhViu0ssckbWhgQSd3lHZjei85S';

  const [imageData, setImageData] = useState([]);
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    fetchPlanetImages();
    if (localStorage.getItem('likedImages')) {
      setLikedImages(JSON.parse(localStorage.getItem('likedImages')));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(likedImages))
  }, [likedImages])

  const fetchPlanetImages = async () => {
    let res = await axios.get('https://api.nasa.gov/planetary/apod', { params: { api_key: apiKey, start_date: '2022-01-01' } });
    const imgData = res.data.map(item => ({
      date: item.date,
      title: item.title,
      url: item.url,
      explanation: item.explanation,
      copyright: item.copyright,
    }));
    imgData.sort((a, b) => new Date(b.date) - new Date(a.date));
    setImageData(imgData)
  }

  const handleLike = (item) => {
    updateLikedImages(item);
  }
  const updateLikedImages = (item) => {
    if (!likedImages.includes(item)) {
      setLikedImages([...likedImages, item]);
    } else {
      setLikedImages((likedImages.filter(i => i.date !== item.date)));
    }
  }

  return (
    <div className="Home">
      {imageData.length === 0 ? loadingWheel :
        <Images images={imageData} likedImages={likedImages} handleLike={handleLike} />}
    </div>
  );
}

export default App;
