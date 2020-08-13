import React, {Component} from 'react';
import "../styles/home.css";

class Home extends Component{
  constructor(){
    super();
    this.state={
      cpu:"",
      player:"",
      done:false,
      first:0,
    };
    this.playerChoice=this.playerChoice.bind(this);
    // this.playGame=this.playGame.bind(this)
  }

  getCPUchoice(){
    var array = ['Rock','Paper', 'Scissors'];

    const choice = array[Math.floor(Math.random() * array.length)];

    return choice;
  }
  playerChoice(choice){
    var choice=choice.currentTarget.dataset.id
    this.setState({
      player:choice,
      done:true,
      first:this.state.first+1,
    })

  }

  playGame(cpu,p){

    // console.log("p", p)
    if (cpu=="Rock"){
      if (p=="Rock"){
        localStorage.setItem('prev', "Paper");

        return "Tie"
      }
      else if (p=="Paper"){
        localStorage.setItem('prev', "Scissors");

        return "Player Wins"

      }
      else if (p=="Scissors"){
        localStorage.setItem('prev', "Rock");

        return "Computer Wins"

      }
    }
    else if (cpu=="Paper"){
      if (p=="Rock"){
        localStorage.setItem('prev', "Paper");

        return "Computer Wins"
      }
      else if (p=="Paper"){
        localStorage.setItem('prev', "Scissors");

        return "Tie"

      }
      else if (p=="Scissors"){
        localStorage.setItem('prev', "Rock");

        return "Player Wins"

      }
    }
    else if (cpu=="Scissors"){
      if (p=="Rock"){
        localStorage.setItem('prev', "Paper");

        return "Player Wins"
      }
      else if (p=="Paper"){
        localStorage.setItem('prev', "Scissors");

        return "Computer Wins"
      }
      else if (p=="Scissors"){
        localStorage.setItem('prev', "Rock");

        return "Tie"

      }
    }

  }

  zoom(e) {
    e.target.style.fontSize = '20px';
    e.target.style.color =  'rgb(49, 180, 99)';
    e.target.style.fontWeight =  'bold';


  }
  leave(e){
    e.target.style.fontSize='16px';
      e.target.style.color =  'black';
      e.target.style.fontWeight =  'normal';

  }
  get_tact()  {
    var t=localStorage.getItem('prev');
    return t;
  }
  render(){
    const cpu=this.getCPUchoice();
    const tact_cpu=this.get_tact();


    return (
      <div className="home-container">
      <div className="title">
      Rock, Paper, Scissors!
      </div>
      Choose one of the following:
      <div>
        <ol>
          <li  onMouseOver={this.zoom.bind(this)}
            onMouseLeave={this.leave.bind(this)}
              onClick={this.playerChoice.bind(this)}
               data-id="Rock">Rock</li>
          <li  onMouseOver={this.zoom.bind(this)}
            onMouseLeave={this.leave.bind(this)}
              onClick={this.playerChoice.bind(this)} data-id="Paper">Paper</li>
          <li  onMouseOver={this.zoom.bind(this)}
            onMouseLeave={this.leave.bind(this)}
            onClick={this.playerChoice.bind(this)} data-id="Scissors">Scissors</li>
        </ol>
      </div>
      <div>
      The computer chose:
      {this.state.done?
        <span className="cpu_choice"> {cpu}</span>:
        <div></div>
      }
      </div>
      <div>
        You chose:<span className="p_choice"> {this.state.player}</span>

      </div>
      <div className="result">
      {this.playGame(cpu,this.state.player)}
      </div>
      <div className="tac_choice">
      The tactical computer chose:
      {(this.state.first>1)?
        <span className="tac_choice"> {tact_cpu}</span>:
        <div></div>
      }
      </div>
      <div className="result">
      {this.playGame(tact_cpu,this.state.player)}
      </div>
      <div className="footer">
        Click another option to play again!
      </div>
      </div>
    );
  }
}
export default Home;
