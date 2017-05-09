import React from 'react';
import Quiz from './Quiz.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        questions:[],
        isCheck: {
            answerCheck1: true,
            answerCheck2: false,
            answerCheck3: false,
            answerCheck4: false
        },
        valueInput: {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            addProp: (number) => {
                let preName = "answer" + number;
                this.preName = 1;
            }
        },
        quest: "",
        isErrorShown: true
    };

    this.radioCheck = this.radioCheck.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.saveDataInState = this.saveDataInState.bind(this);
    this.addInfoWithInput = this.addInfoWithInput.bind(this);
  };

  radioCheck(e) {
      let current = "answerCheck" + e.target.id;

      this.setState({isCheck: {
          answerCheck1: false,
          answerCheck2: false,
          answerCheck3: false,
          answerCheck4: false
      }});

      this.setState({isCheck: {
          current: true
      }});

  }

  addInfoWithInput(e) {
      let current = "answer" + e.target.id;

     console.log(e.target.value);

      this.setState({
          valueInput: {
              current: e.target.value
          }
      });

      console.log(this.state.valueInput.answer1);


  }

  saveDataInState(e) {
      let text = e.target.value;

      this.setState({
        quest: text
      })
  }

  saveInfo(e) {
      console.log(this.state.quest);
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
                          <input type="radio" name="group" id={1} checked={this.state.isCheck.answerCheck1}  onChange={this.radioCheck} />
                          <input type="text"   id={1}   value={this.state.valueInput.answer1} onChange={this.addInfoWithInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={2} checked={this.state.isCheck.answerCheck2} onChange={this.radioCheck} />
                          <input type="text"  id={2} value={this.state.valueInput.answer2} onChange={this.addInfoWithInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={3} checked={this.state.isCheck.answerCheck3} onChange={this.radioCheck} />
                          <input type="text"  id={3}  value={this.state.valueInput.answer3} onChange={this.addInfoWithInput}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={4} checked={this.state.isCheck.answerCheck4}  onChange={this.radioCheck} />
                          <input type="text"  id={4} value={this.state.valueInput.answer4} onChange={this.addInfoWithInput}/>
                      </div>
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
