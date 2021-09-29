import React from 'react'
import '../Styles/Search.css'
import { useState} from 'react';
import { BrowserRouter,
         Link,
         Route
       } from 'react-router-dom';

function Search() {
  const [txtSearch, setTxtSearch] = useState("");
  const [locations,setLocations] = useState([]);
  const [item,setItem] = useState("")
  const handleClickSearch = (event) => {
    fetch(`https://powerful-mountain-49469.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${txtSearch}`)
      .then(response => response.json())
      .then(response => setLocations(response));
  }
  /* const handleClickItem = (event) => {
    setItem(event.target.value);
    if(item === 0){
      document.querySelector('item').classList
    }else{
      document.querySelector('item').classList.remove('activeItem');
    }
  } */
  return (
    <BrowserRouter>
    <section className="scrSearch">
      <div>
        <a href="#" className="btnCancel">X</a>
      </div>
      <div className="frmSearch">
        <input type="text" placeholder="Search Location" class="txtSearch" id="txtSearch" onChange={(event) => setTxtSearch(event.target.value)} value={txtSearch}></input>
        <button type="button" className="btn btn-primary btn-sm btnSearch" onClick={handleClickSearch}>Search</button>
      </div>
      <ul>{
        locations.slice(0,10).map(
          (location, index) => {    
            return <div>
            <li key ={index} className="item"><a href="#" className="itemLink" id="lnkItem">{location.title}</a><Link className="btnGo" to="/">></Link></li>
            </div>
          })
      }</ul>
    </section>
    </BrowserRouter>
  )
}

export default Search
