import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkFrom from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognization from './components/FaceRecognization/FaceRecognization';
import './App.css'
import ParticlesBg from 'particles-bg';


class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
      imgUrl : '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value });
  }
  
  onSubmitButton = async () => {
    this.setState({ imgUrl : this.state.input })

    const raw = JSON.stringify({
      "model_id": "face-detection",
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.input
            }
          }
        }
      ]
    });

    try {
      const response = await fetch(
        "https://api.clarifai.com/v2/models/face-detection/outputs",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Authorization": `Key ${import.meta.env.VITE_CLARIFAI_API_KEY}`
          },
          body: raw
        }
      );

      const result = await response.json();
      console.log(result.outputs[0].data);
    } catch (error) {
      console.error("Clarifai Error:", error);
    }
};

  
  render(){
    return (
      <>
        <div>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkFrom onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton}/>
          <FaceRecognization imgUrl={this.state.imgUrl}/>
        </div>
        <ParticlesBg type="cobweb" color="#ffffff" num={200} bg={true} />
      </>
    )
  }
}

export default App;