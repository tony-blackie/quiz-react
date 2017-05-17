import React, { Component } from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck: [true, false, false, false],
            isTrueTest: false,  // names are not really descriptive
            isFalseTest: false  // names are not really descriptive
        }
        this.changeRadioBnt = this.changeRadioBnt.bind(this);
        this.checkTest = this.checkTest.bind(this);
    };

    changeRadioBnt(e) {
      let currentNumber = e.target.id;
      let arr = [false, false, false, false];
      arr[currentNumber] = true;

      this.setState({isCheck:[false, false, false, false]});
  
      this.setState({isCheck: arr});
  }

    checkTest(e) {
        let currentAnswers = this.state.isCheck;
        for( let i = 0; i < currentAnswers.length; i++ ) {
            if(currentAnswers[this.props.trueNumberAnswer] === true) {
                this.setState({
                    isTrueTest: true,
                    isFalseTest: false
                })
            
            } else {
                this.setState({
                    isTrueTest: false,
                    isFalseTest: true
                })
            }
        }
    }

    componentWillReceiveProps() {
        this.setState({
            isCheck: [true, false, false, false],
            isTrueTest: false,
            isFalseTest: false
        });
    }



    render() {
        let testBlock = this.props.status ? "visible" : "not_visible";
        let messageIfNotTest = this.props.answers === "" ? "visible" : "not_visible";
        let test = this.props.answers !== "" ? "visible" : "not_visible";

        let isTrueTest = this.state.isTrueTest ? "visible" : "not_visible";
        let isFalseTest = this.state.isFalseTest ? "visible" : "not_visible";

       


        return (
            <div className={testBlock}>
                <div className={messageIfNotTest}>
                    Sorry, you must write test
                </div>
                <div className={test}>
                    <div>
                        {this.props.question} ?
                    </div>
                    <div>
                        <input type="radio" name="0"  id={0} checked={this.state.isCheck[0]}  onChange={this.changeRadioBnt}/>
                        <label htmlFor="0">{this.props.answers[0]}</label> <br/>
                        <input type="radio" name="1"  id={1} checked={this.state.isCheck[1]}  onChange={this.changeRadioBnt}/>
                        <label>{this.props.answers[1]}</label> <br/>
                        <input type="radio" name="2"  id={2} checked={this.state.isCheck[2]}  onChange={this.changeRadioBnt}/>
                        <label>{this.props.answers[2]}</label> <br/>
                        <input type="radio" name="3"  id={3} checked={this.state.isCheck[3]}  onChange={this.changeRadioBnt}/>
                        <label>{this.props.answers[3]}</label> <br/>
                        <div>
                            <div className={isTrueTest}>
                                YES!!!
                            </div>
                            <div className={isFalseTest}>
                                Oh no...
                            </div>
                        </div>
                        <button onClick={this.checkTest}>Send</button>
                    </div>

                </div>
            </div>
        );
    };
}
