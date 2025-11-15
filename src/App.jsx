import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkFrom from './components/ImageLinkForm/ImageLinkForm';
import './App.css'


class App extends Component {
  render () { 
    return (
    <div>
      <Navigation/>
      <Logo/>
      <ImageLinkFrom/>
      {/*<FaceRecognization/> */}
    </div>
    )
  }
}
export default App;