import React from 'react';
import Quiz from './Quiz.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isCheck: [true, false, false, false],
        answers: ["","","",""],
        quest: "",
        isErrorShown: true,
        arrr: [1,2]
    };

    this.radioCheck = this.radioCheck.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.saveDataInState = this.saveDataInState.bind(this);
    this.addInfoFromInput = this.addInfoFromInput.bind(this);
    this.showError = this.showError.bind(this);
  };

  radioCheck(e) {
      let current = e.target.id;
      let arr = [false, false, false, false];
      arr[current] = true;

      this.setState({isCheck:[false, false, false, false]});
  
      this.setState({isCheck: arr});
  }

  addInfoFromInput(e) {
      let current = e.target.id;
      let arr = this.state.answers;
      arr[current] = e.target.value;
     
      this.setState({
          answers: arr
      });

  }

  saveDataInState(e) {
      let text = e.target.value;

      this.setState({
        quest: text
      })
  }

  saveInfo(e) {
      this.showError();
  }

  showError() {
      let answ = this.state.answers;
      let errNumber = []
      for (let i = 0; i < answ.length; i++) {
        if (answ[i] === "") {
            errNumber.push(i);
        }
      }
      console.log(errNumber);
  }

  render() {
      let errorClass = this.state.isErrorShown ? "visible" : "not_visible";
      return (
          <div>
              <button>
                  Constructor
              </button>
              <button>
                  Test
              </button>
              <div>
                  <div>
                      question
                  </div>
                  <input type="text" value={this.state.quest} onChange={this.saveDataInState}/>

                  <div>
                      <div>
                          <input type="radio" name="group" id={0} checked={this.state.isCheck[0]}  onChange={this.radioCheck} />
                          <input type="text"   id={0}   value={this.state.answers[0]} onChange={this.addInfoFromInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={1} checked={this.state.isCheck[1]} onChange={this.radioCheck} />
                          <input type="text"  id={1} value={this.state.answers[1]} onChange={this.addInfoFromInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={2} checked={this.state.isCheck[2]} onChange={this.radioCheck} />
                          <input type="text"  id={2}  value={this.state.answers[2]} onChange={this.addInfoFromInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={3} checked={this.state.isCheck[3]}  onChange={this.radioCheck} />
                          <input type="text"  id={3} value={this.state.answers[3]} onChange={this.addInfoFromInput}/>
                      </div>
                  </div>

                  <div className={errorClass}>
                    error {this.state.arrr}
                  </div>

                  <button onClick={this.saveInfo}>
                      Save
                  </button>

              </div>
              <Quiz />
          </div>
      );
  };

}
