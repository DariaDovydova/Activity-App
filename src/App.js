import './App.css';
import { useEffect, useState } from 'react';
import busywork from './img/busywork.png';
import charity from './img/charity.png';
import cooking from './img/cooking.png';
import diy from './img/diy.png';
import education from './img/education.png';
import music from './img/music.png';
import recreational from './img/recreational.png';
import relaxation from './img/relaxation.png';
import social from './img/social.png';


function App() {

const [myActivity, setMyActivity] = useState('');
const [myType, setMyType] = useState('');
const [myParticipants, setMyParticipants] = useState('');
const [myPic, setMyPic] = useState();

const getApi = async () => {
  const response = await fetch('http://www.boredapi.com/api/activity/');
  const data = await response.json();
  setMyActivity(data.activity);
  setMyType(data.type);
  setMyParticipants(data.participants);

  if (data.type === 'busywork') {
    setMyPic(busywork);
  }

  if (data.type === 'charity') {
    setMyPic(charity);
  }

  if (data.type === 'cooking') {
    setMyPic(cooking);
  }

  if (data.type === 'diy') {
    setMyPic(diy);
  }

  if (data.type === 'education') {
    setMyPic(education);
  }

  if (data.type === 'music') {
    setMyPic(music);
  }

  if (data.type === 'recreational') {
    setMyPic(recreational);
  }

  if (data.type === 'relaxation') {
    setMyPic(relaxation);
  }

  if (data.type === 'social') {
    setMyPic(social);
  }

}

useEffect(() => {
   getApi();
}, [])

  return (
    <div className="App">

      <div className='container-btn'>
      <button className='btn' onClick={getApi}>find some activity</button>
      </div>

        <div>
        <h3>{myActivity}</h3>
        </div>

        <div className='container-icon'>
        <img src={myPic} alt='icon' width='50px' />
        </div>

        <div className='container-par'>
        <p className='par-type'>Type of activity: <span>{myType}</span></p>
        <p className='par-participants'>{myParticipants === 1 ? "for " + myParticipants + " participant" : "for " + myParticipants + " participants" }</p>
        </div>

    </div>
  )
}

export default App;
