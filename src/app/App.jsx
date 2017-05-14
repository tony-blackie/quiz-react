import React from 'react';
import Quiz from './Quiz.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        finalAnswer: "",
        finalQuset: "",
        finalTrueAnsw: "",
        isCheck: [true, false, false, false],
        answers: ["","","",""],
        quest: "",
        isErrorShown: false,
        isErrorQuestShown: false,
        checkArrAnsw: "",
        checkArrQuest: false,
        isTestOpen: false,
        isCreateTestOpen: true
    };

    this.radioCheck = this.radioCheck.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.saveDataInState = this.saveDataInState.bind(this);
    this.addInfoFromInput = this.addInfoFromInput.bind(this);
    this.showError = this.showError.bind(this);
    this.showQuestError = this.showQuestError.bind(this);
    this.showTestBlock = this.showTestBlock.bind(this);
    this.showCreateTestBlock = this.showCreateTestBlock.bind(this);
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

  saveInfo() {
     let a = this.showError();
     let b = this.showQuestError();

     let trueAnsArr = this.state.isCheck;
     let trueAns = this.state.answers;
     let trueQuest = this.state.quest;

     if (a && b) {

         for (let i = 0; i < trueAnsArr.length; i++) {
             if (trueAnsArr[i] === true) {
                 this.setState({
                     finalTrueAnsw: i,
                 });
             }
         }
         this.setState({
             finalAnswer: trueAns,
             finalQuset: trueQuest
         });
     }

  }

  showError() {
      let answ = this.state.answers;
      let errNumber = [];
      for (let i = 0; i < answ.length; i++) {
        if (answ[i] === "") {
            errNumber.push(i);
        }
      }
      if(errNumber.length !== 0) {
          errNumber = errNumber.join(",") + "";
          this.setState({
              isErrorShown: true,
              checkArrAnsw: errNumber
          });
          return false;
      } else {
          this.setState({
              isErrorShown: false
          });
          return true;
      }
  }

  showQuestError() {
    if (this.state.quest === "") {
        this.setState({
            isErrorQuestShown: true,
        });
        return false
    } else {
        this.setState({
            isErrorQuestShown: false,
        });
        return true
    }
  }

  showTestBlock() {
      this.setState({
          isTestOpen: false,
          isCreateTestOpen: true
      })
  }

    showCreateTestBlock() {
        this.setState({
            isTestOpen: true,
            isCreateTestOpen: false
        })
    }

  render() {
      let errorClass = this.state.isErrorShown ? "visible" : "not_visible";
      let errorQuestClass = this.state.isErrorQuestShown ? "visible" : "not_visible";
      let createTestBlock = this.state.isCreateTestOpen ? "visible" : "not_visible";

      return (
          <div>
              <button onClick={this.showTestBlock}>
                  Constructor
              </button>
              <button onClick={this.showCreateTestBlock}>
                  Test
              </button>
              <div className={createTestBlock}>
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
                    Error {this.state.checkArrAnsw} is field
                  </div>
                  <div className={errorQuestClass}>
                      Error question is field
                  </div>

                  <button onClick={this.saveInfo}>
                      Save
                  </button>

              </div>
              <Quiz status={this.state.isTestOpen} answers={this.state.finalAnswer} quest={this.state.finalQuset} />
          </div>
      );
  };

}
