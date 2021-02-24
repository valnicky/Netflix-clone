import React, { setState} from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
    return ( <div className = "App" >
        <h1 > Netflix Clone Front - end </h1>
        
 <Row title = "Trending Now"
        fetchUrl = { requests.fetchActionMovies }
        isLargeRow
        />


        </div >
    );
}


/* <Row title = "NETFLIX ORIGINALS"
        fetchUrl = { requests.fetchNetflixOriginals } />
          
         <Row title = "Trending Now"
        fetchUrl = { requests.fetchTrending }
        /> */
export default App