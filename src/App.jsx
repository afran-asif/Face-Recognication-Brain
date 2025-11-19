import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkFrom from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css'
import ParticlesBg from 'particles-bg';


class App extends Component {
  render () { 
    return (
      <>
        <div>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkFrom/>
          {/*<FaceRecognization/> */}
        </div>
        <ParticlesBg type="cobweb" color="#ffffff" num={200} bg={true} />
      </>
    )
  }
}
export default App;