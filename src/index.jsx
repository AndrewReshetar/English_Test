import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  countedId = 0;
  score = 0;
  state = {
    vocabulary_questions: [
      {
        id: this.countedId++,
        question: (
          <p>
            I prefer coffee
            <select id="answers">
              <option value="on">on</option>
              <option value="than">than</option>
              <option value="with">with</option>
              <option value="to">to</option>
            </select>
            tea.
          </p>
        ),
        correctAnswer: "to",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            That boy is smiling
            <select id="answers">
              <option value="on">on</option>
              <option value="at">at</option>
              <option value="about">about</option>
              <option value="with">with</option>
            </select>
            us. Do you know him?
          </p>
        ),
        correctAnswer: "at",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            It was my first day at work so I
            <select id="answers">
              <option value="broke up">broke up</option>
              <option value="asked over">asked over</option>
              <option value="blew up">blew up</option>
              <option value="asked out">asked out</option>
            </select>
            my best friend to celebrate it with me.
          </p>
        ),
        correctAnswer: "asked out",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            Steve never
            <select id="answers">
              <option value="borrows">borrows</option>
              <option value="lends">lends</option>
              <option value="leaves">leaves</option>
              <option value="lets">lets</option>
            </select>
            his books to anybody.
          </p>
        ),
        correctAnswer: "lends",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            Tell me more about the country you come from. I'm curious
            <select id="answers">
              <option value="of">of</option>
              <option value="about">about</option>
              <option value="in">in</option>
              <option value="by">by</option>
            </select>
            it.
          </p>
        ),
        correctAnswer: "about",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            Students should have a dictionary to
            <select id="answers">
              <option value="look into">look into</option>
              <option value="look after">look after</option>
              <option value="look over">look over</option>
              <option value="look up">look up</option>
            </select>
            unknown words.
          </p>
        ),
        correctAnswer: "look up",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            I always
            <select id="answers">
              <option value="fry">fry</option>
              <option value="bake">bake</option>
              <option value="roast">roast</option>
              <option value="boil">boil</option>
            </select>
            eggs with lots of oil.
          </p>
        ),
        correctAnswer: "fry",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            He shouted
            <select id="answers">
              <option value="on">on</option>
              <option value="at">at</option>
              <option value="for">for</option>
              <option value="with">with</option>
            </select>
            me for no reason at all.
          </p>
        ),
        correctAnswer: "at",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            Don't forget to
            <select id="answers">
              <option value="turn on">turn on</option>
              <option value="turn out">turn out</option>
              <option value="turn down">turn down</option>
              <option value="turn off">turn off</option>
            </select>
            the television before you go out.
          </p>
        ),
        correctAnswer: "turn off",
        isRight: false,
      },
      {
        id: this.countedId++,
        question: (
          <p>
            I love big windows as they let in a lot of
            <select id="answers">
              <option value="sunshine">sunshine</option>
              <option value="sunlight">sunlight</option>
              <option value="shadow">shadow</option>
              <option value="sunrise">sunrise</option>
            </select>
            .
          </p>
        ),
        correctAnswer: "sunlight",
        isRight: false,
      },
    ],
    count: 1,
  };

  validate = () => {
    const options = document.querySelector("select").options;
    let selectedIndex = options.selectedIndex;
    let value = options[selectedIndex].value;
    if (this.state.count < 10) {
      if (
        value ===
        this.state.vocabulary_questions[this.state.count - 1].correctAnswer
      ) {
        this.score += 10;
        console.log("count is " + this.state.count);
        console.log("score is " + this.score);
      } else {
        console.log("count is" + this.state.count);
        console.log("score is " + this.score);
      }
      this.setState((prev) => {
        return {
          count: prev.count + 1,
        };
      });
    } else {
      const options = document.querySelector("select").options;
      let selectedIndex = options.selectedIndex;
      let value = options[selectedIndex].value;
      if (value === this.state.vocabulary_questions[9].correctAnswer) {
        this.score += 10;
      }
      alert(`Your score is ${this.score} / 100`);
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="mainPart" style={{ width: "80%", margin: "0 auto" }}>
        <p className="question">Question {this.state.count}</p>

        <h1>
          {this.state.vocabulary_questions[this.state.count - 1].question}
        </h1>

        <button onClick={this.validate}>Next</button>
        <div>
          <h2>
            Score: <span className="score">{this.score}</span>
          </h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
