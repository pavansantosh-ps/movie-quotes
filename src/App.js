import React, { useState,useEffect } from 'react';import './App.css';
import './index.css';
import axios from 'axios';

function App() {

  const [movieData,setMovieData] = useState({});
  const [showLoading,setShowLoading] = useState(true);
  const url = 'https://movie-quote-api.herokuapp.com/v1/quote/'

  const getMoviequote = () => {
    setShowLoading(true);
    axios.get(`${url}`)
    .then((response) => {
      const movie = response.data;
      setShowLoading(false)
      setMovieData(movie)
    })

  }

  function Load(props){
    const showLoading = props.showLoading
    if(showLoading){
      return(
        <div>
          Loading ....
        </div>
      )
    }else{
      return(
        <div>
          <div className='inline-flex items-start'>
          <img src="/images/quote.svg" alt="" />
          <p className='text-3xl max-w-2xl pb-5 pt-5'>{movieData.quote}</p>
          </div>
          <p className='pb-5'>Role: {movieData.role} | Show: {movieData.show}</p>
        </div>
      )
    }
  }


  useEffect(() => {
    getMoviequote();
}, []);



  return (
    <>
      <div class="flex flex-col justify-between items-center  h-screen bg-slate-800 text-white">
          <div className="inline-flex items-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#06B6D4">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
            </svg>
            <h1 className="text-xl">MovieQuotes</h1>
          </div>
          <div className="text-center">
            <Load showLoading = {showLoading}></Load>
            <button className=" w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-700 text-white" onClick={getMoviequote}>
              <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div>
            <img src="/images/Vector.svg"  alt="" srcset="" />
          </div>
      </div>
    </>
  );
}


export default App;
