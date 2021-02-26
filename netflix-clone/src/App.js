import React, { setState} from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
    return ( <div className = "app" >
       
       {/* Nav*/}

<Banner/>

 <Row title = "Trending Now"
        fetchUrl = { requests.fetchActionMovies }
       
        />
<Row title="Netflix Originals" fetchUrl ={requests.fetchNetflixOriginals}
 isLargeRow={true}
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