import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Nav from './Components/Navbar'
import LoadPictures from './Components/LoadPictures';
import pics from './picData.json';

class App extends Component {
  // Setting this.state.pics to the pics json array
  state = {
    pics,
    score: 0,
    topScore: 0,
    message: "",
    clickedIds: []
  }

  clickingThePic = (id) => {
    // Set clickedIds property in this.state to a variable
    const clickedIds = this.state.clickedIds;
    const randomizePics = this.randomizePics(pics);
    console.log(id);

    this.setState({cards: randomizePics});

    // Game over logic
    if(clickedIds.includes(id)){
      this.setState({
        clickedIds: [],
        score: 0,
        message: "Game Over! Click image to start again"
      });

      return;

    }else{
      clickedIds.push(id);
      
      this.setState({
        clickedIds: this.state.clickedIds.push(id),
        score: this.state.score + 1,
        message: "Good Job!!!"
      });
    }

    // Set the top score to score if score > top score
    if(this.state.score > this.state.topScore){
      this.setState({topScore: this.state.score});
    }

    
  }
  randomizePics = (picArr) => {
      for(let i = picArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [picArr[i], picArr[j]] = [picArr[j], picArr[i]];
      }
      return picArr;
  }

  // Map over this.state.pics and render a LoadPictures component for each picture object
  render() {
    return (
      <div className="App">
        <Nav 
          score={this.state.score}
          topScore={this.state.topScore}

        />
        <Jumbotron />
        <header className="App-header">
          
          
        </header>
        <div id="imgContainer">
          {console.log(pics)}
          
          {this.state.pics.map(pic => (
            <LoadPictures
              picture={pic.url}
              key={pic.id}
              clickPic={this.clickingThePic}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
