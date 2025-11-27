import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkFrom from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognization from "./components/FaceRecognization/FaceRecognization";
import "./App.css";
import ParticlesBg from "particles-bg";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

// Clarifai model info
const MODEL_ID = "face-detection";  
const PAT = import.meta.env.VITE_CLARIFAI_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      route: "signin",
      isSignedIn: false
    };
  }

  onRouteChange =async (route) => {
    if( route === 'signin'){
      this.setState({ isSignedIn : false })
    }else if( route === 'home'){
      this.setState({ isSignedIn : true })
    }
    this.setState({route: route})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmitButton = async () => {
    this.setState({ imgUrl: this.state.input });

    const raw = JSON.stringify({
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });


    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    try {
      const response = await fetch(
        `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`
,
        requestOptions
      );
      const result = await response.json();

      console.log("Clarifai Result:", result);

      const regions = result.outputs?.[0]?.data?.regions;
      if (!regions) {
        console.log("No face detected");
        return;
      }

      regions.forEach((region) => {
        const box = region.region_info.bounding_box;

        console.log(
          `Bounding Box: ${box.top_row}, ${box.left_col}, ${box.bottom_row}, ${box.right_col}`
        );
      });
    } catch (error) {
      console.error("Clarifai Error:", error);
    }
  };

  render() {
    return (
      <>
        <div>
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          { this.state.route === 'home' 
          ?<div>
              <Logo />
              <Rank />
              <ImageLinkFrom
                onInputChange={this.onInputChange}
                onSubmitButton={this.onSubmitButton}
              />
              <FaceRecognization imgUrl={this.state.imgUrl} />
            </div>
          :
            (
              this.state.route === 'signin'
            ?<SignIn onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/>
            ) 
          }
        </div> 
        <ParticlesBg type="cobweb" color="#ffffff" num={200} bg={true} />
      </>
    );
  }
}

export default App;
