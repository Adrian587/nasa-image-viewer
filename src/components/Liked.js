import { useEffect, useState } from 'react';
import '../App.css';
import Images from './Images';

function LikedImages() {
    const [likedImages, setLikedImages] = useState([]);

    const handleLike = (item) => {
        updateLikedImages(item);

    }
    const updateLikedImages = (item) => {
        if (!likedImages.includes(item)) {
            setLikedImages([...likedImages, item]);
        } else {
            setLikedImages((likedImages.filter(i => i !== item)));
        }
    }

    useEffect(() => {
        setLikedImages(localStorage.getItem('likedImages') ? JSON.parse(localStorage.getItem('likedImages')) : []);
    }, [])

    useEffect(() => {
        localStorage.setItem('likedImages', JSON.stringify(likedImages))
    }, [likedImages])


    return (
        <div className="Liked">
            {likedImages.length === 0 ? <h1> No Liked Images</h1> :
                <Images images={likedImages} likedImages={likedImages} handleLike={handleLike} />}
        </div>
    );
}

export default LikedImages;
