import React, { useState, useCallback } from 'react'
import './Searchbar.css';
import debounce from 'lodash.debounce';
import axios from 'axios';
// import SearchIcon from '@mui/icons-material/Search';
function Searchbar() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const handleInput = (input) => {
        setSearch(input);
        // console.log(search);
        debounceHandleInput(input);

    };

    const debounceHandleInput = useCallback(
        debounce(input => fetchData(input), 300),
        [],
    );
    const fetchData = async (input) => {
        // const imgData = await axios.fetch(`https://api.nasa.gov/planetary/apod?api_key=${SE73JlZEM4UQ5rhViu0ssckbWhgQSd3lHZjei85S}`)
        const imgData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SE73JlZEM4UQ5rhViu0ssckbWhgQSd3lHZjei85S`)
        console.log(imgData);
        // await axios.fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    }

    return (
        <div className="search">
            <div className="input">
                {/* <div className="searchIcon">
                        <SearchIcon />
                    </div> */}
                <input className="input-text" type="text" placeholder="Enter a NASA image name" onChange={(e) => handleInput(e.target.value)} />


            </div>
            <div className="data-result">

            </div>
        </div>
    )

}




export default Searchbar
