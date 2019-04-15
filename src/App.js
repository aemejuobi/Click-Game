import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Nav from './Components/Navbar'
import LoadPictures from './Components/LoadPictures';
import pics from './picData.json';

class App extends Component {
  // Setting this.state.pics to the pics json array
  state = {
    pics
  }

  pictureRandomizer = () => {
    const arrLength = this.state.pics.length;
    let randomIndex = Math.floor(Math.random()* (arrLength - 0));
    console.log(randomIndex);
    const itemInArr = this.state.pics;
    let differentURL = itemInArr[randomIndex].url;
    this.setState({
      id: itemInArr.id,
      url: differentURL,
      isClicked: itemInArr.isClicked,
      numOfClicks: itemInArr.numOfClicks
    })
    // return differentURL;
  }

  // Map over this.state.pics and render a LoadPictures component for each picture object
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <header className="App-header">
          
          
        </header>
        <div id="imgContainer">
          {console.log(pics)}
          
          {this.state.pics.map(pic => (
            <LoadPictures
              picture={pic.url}
              key={pic.id}
              randomizer={this.pictureRandomizer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
