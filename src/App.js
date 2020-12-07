import React , {useState, useEffect, useInput} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [winner, setWinner] = useState('');
  const [tweetId, setTweetId] = useState('');
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
 
  })

  const mySubmitHandler = (event) => {
    event.preventDefault();
    fetch(proxyurl + "https://stark-peak-57271.herokuapp.com/twitterContest/"+ tweetId)
    .then(response => response.json())
    .then(data => setWinner(data.user.screen_name))
    .catch( e => {
      console.log(e);
    })
  }
  const myChangeHandler = (event) => {
    setTweetId(event.target.value);
  }

  return (
    <div class = "login">
      <form onSubmit={mySubmitHandler}>
        <h1> Retweet Contest </h1>
        <h2>Please enter your Tweet ID below:</h2>
        <input type='text' onChange={myChangeHandler}/>
        <input type='submit' class = "submit" value="Start"/>
      </form>
      <div>
      { winner !== '' && <h1> Winner is {winner} 🎉</h1>}
      </div>
    </div>
  );
}


export default App;
