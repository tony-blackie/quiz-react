import React from 'react';
import Quiz from './Quiz.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        finalAnswers: "",
        finalQuestion: "",
        finalNumberCorrectAnswer: "",
        /* answers and isChecked may possibly be grouped into an array of obects like [{answer: "", isChecked: true}, ...]*/ 
        isCheck: [true, false, false, false], //"is" prefix is commonly used to indicate boolean values
        answers: ["","","",""], // you may use just an empty array as a starting value
        question: "",
        isErrorShownForAnswer: false,
        isErrorShownForQuestion: false,
        arrayNumberFieldWhenError: "",
        isAllFieldIsTrue: false,
        isTestOpen: false,
        isCreateTestOpen: true
    };

    this.changeRadioBnt = this.changeRadioBnt.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.checkCorrectAnswers = this.checkCorrectAnswers.bind(this);
    this.checkCorrectQuestion = this.checkCorrectQuestion.bind(this);
    this.showTestBlock = this.showTestBlock.bind(this);
    this.showConstructor = this.showConstructor.bind(this);
  };

  changeRadioBnt(e) {
      let currentNumber = e.target.id;
      let arr = [false, false, false, false];
      arr[currentNumber] = true;

      this.setState({isCheck:[false, false, false, false]});
  
      this.setState({isCheck: arr});
  }

  addAnswer(e) {
      let currentNumberAnswer = e.target.id;
      let arr = this.state.answers;
      arr[currentNumberAnswer] = e.target.value; //you mutate the state object here, by using link to the state. arr needs to be a copy, to avoid problems
     
      this.setState({
          answers: arr
      });
  }

  addQuestion(e) {
      let text = e.target.value;

      this.setState({
        question: text
      })
  }

  saveInfo() {
     let isCorrectAnswers = this.checkCorrectAnswers();
     let isCorrectQuestion = this.checkCorrectQuestion();

     let currentStateCheck = this.state.isCheck;
     let answers = this.state.answers;
     let question = this.state.question;

     if (isCorrectAnswers && isCorrectQuestion) {

         for (let i = 0; i < currentStateCheck.length; i++) { //for is not commonly used, maybe forEach is a better solution? (it has element, index, array parameters)
             if (currentStateCheck[i] === true) {
                 this.setState({
                     finalNumberCorrectAnswer: i,
                 });
             }
         }
         this.setState({
             finalAnswers: answers, //here you pass a link to the other state field. they may be changed both at once after that. safer to pass a copy here
             finalQuestion: question, //same as previous
             isCheck: [true, false, false, false],
             answers: ["","","",""],
             question: "",
             isAllFieldIsTrue: true
         });

         setTimeout(()=>{ // I don't see what are you trying to achieve here? why not just set this prop false in the previous setState?
             this.setState({
                 isAllFieldIsTrue: false
             })
         }, 2000)
     }

  }

  checkCorrectAnswers() {
      let currentAnswers = this.state.answers;
      let numberEmptyAnswers = [];
      for (let i = 0; i < currentAnswers.length; i++) {
        if (currentAnswers[i] === "") {
            numberEmptyAnswers.push(i); 
        }
      }
      if(numberEmptyAnswers.length !== 0) {
          numberEmptyAnswers = numberEmptyAnswers.join(",") + "";
          this.setState({
              isErrorShownForAnswer: true,
              arrayNumberFieldWhenError: numberEmptyAnswers
          });
          return false;
      } else {
          this.setState({
              isErrorShownForAnswer: false
          });
          return true;
      }
  }

  checkCorrectQuestion() {
    if (this.state.question === "") {
        this.setState({
            isErrorShownForQuestion: true,
        });
        return false
    } else {
        this.setState({
            isErrorShownForQuestion: false,
        });
        return true
    }
  }

  showConstructor() {
      this.setState({
          isTestOpen: false,  //maybe it's better to use one option for this? something like 'isEditMode'
          isCreateTestOpen: true  //I suppose you use two just to explain what is going on. But they are not that clear anyway :)
      })
  }

    showTestBlock() {
        this.setState({
            isTestOpen: true,
            isCreateTestOpen: false
        })
    }

  render() {
      let errorClassForAnswers = this.state.isErrorShownForAnswer ? "visible" : "not_visible";
      let errorClassForQuestion = this.state.isErrorShownForQuestion ? "visible" : "not_visible";
      let showConstructor = this.state.isCreateTestOpen ? "visible" : "not_visible";

      let testIsCorrect = this.state.isAllFieldIsTrue ? "visible" : "not_visible";

      return (
          <div>
              <button onClick={this.showConstructor}>
                  Constructor
              </button>
              <button onClick={this.showTestBlock}>
                  Test
              </button>
              <div className={showConstructor}>
                  <div>
                      question
                  </div>
                  <input type="text" value={this.state.question} onChange={this.addQuestion}/>

                  <div>
                      <div>
                          <input type="radio" name="group" id={0} checked={this.state.isCheck[0]}  onChange={this.changeRadioBnt} />
                          <input type="text"   id={0}   value={this.state.answers[0]} onChange={this.addAnswer}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={1} checked={this.state.isCheck[1]} onChange={this.changeRadioBnt} />
                          <input type="text"  id={1} value={this.state.answers[1]} onChange={this.addAnswer}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={2} checked={this.state.isCheck[2]} onChange={this.changeRadioBnt} />
                          <input type="text"  id={2}  value={this.state.answers[2]} onChange={this.addAnswer}/>
                      </div>
                      <div>
                          <input type="radio" name="group" id={3} checked={this.state.isCheck[3]}  onChange={this.changeRadioBnt} />
                          <input type="text"  id={3} value={this.state.answers[3]} onChange={this.addAnswer}/>
                      </div>
                  </div>

                  <div className={errorClassForAnswers}>
                    Error {this.state.arrayNumberFieldWhenError} is field
                  </div>
                  <div className={errorClassForQuestion}>
                      Error question is empty
                  </div>
                

                  <button onClick={this.saveInfo}>
                      Save
                  </button>

                  <div className={testIsCorrect}>
                    You question is save
                  </div>

              </div>
              <Quiz status={this.state.isTestOpen} answers={this.state.finalAnswers} question={this.state.finalQuestion} trueNumberAnswer={this.state.finalNumberCorrectAnswer}/>
          </div>
      );
  };

}
