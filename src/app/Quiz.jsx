import React, { Component } from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyCont: false,
            isCheck: [true, false, false, false],
            trueAnswer: false,
            falseAnswer: false
        }
        this.radioCheck = this.radioCheck.bind(this);
        this.checkSend = this.checkSend.bind(this);
        this.func1 = this.func1.bind(this);

    };

    radioCheck(e) {
        let current = e.target.id;
        let arr = [false, false, false, false];
        arr[current] = true;

        this.setState({isCheck:[false, false, false, false]});

        this.setState({isCheck: arr});
    }

    checkSend(e) {
        let arr = this.state.isCheck;
        for( let i = 0; i < arr.length; i++ ) {
            if(arr[this.props.trueAns] === true) {
                this.setState({
                    trueAnswer: true,
                    falseAnswer: false
                })
            
            } else {
                this.setState({
                    trueAnswer: false,
                    falseAnswer: true
                })
                
            }
        }
    }

    func1() {
        this.setState({
            isCheck: [true, false, false, false],
            trueAnswer: false,
            falseAnswer: false
        });
    }

    componentWillReceiveProps() {
        this.setState({
            isCheck: [true, false, false, false],
            trueAnswer: false,
            falseAnswer: false
        });
    }



    render() {
        let showTestBlock = this.props.status ? "visible" : "not_visible";
        let showNeedBlock = this.props.answers === "" ? "visible" : "not_visible";
        let showNeed2Block = this.props.answers !== "" ? "visible" : "not_visible";

        let trueAnswer = this.state.trueAnswer ? "visible" : "not_visible";
        let falseAnswer = this.state.falseAnswer ? "visible" : "not_visible";

       


        return (
            <div className={showTestBlock}>
                <div className={showNeedBlock}>
                    Sorry, you must write test
                </div>
                <div className={showNeed2Block}>
                    <div>
                        {this.props.quest} ?
                    </div>
                    <div>
                        <input type="radio" name="0"  id={0} checked={this.state.isCheck[0]}  onChange={this.radioCheck}/>
                        <label htmlFor="0">{this.props.answers[0]}</label> <br/>
                        <input type="radio" name="1"  id={1} checked={this.state.isCheck[1]}  onChange={this.radioCheck}/>
                        <label htmlFor="1">{this.props.answers[1]}</label> <br/>
                        <input type="radio" name="2"  id={2} checked={this.state.isCheck[2]}  onChange={this.radioCheck}/>
                        <label htmlFor="2">{this.props.answers[2]}</label> <br/>
                        <input type="radio" name="3"  id={3} checked={this.state.isCheck[3]}  onChange={this.radioCheck}/>
                        <label htmlFor="3">{this.props.answers[3]}</label> <br/>
                        <div>
                            <div className={trueAnswer}>
                                YES!!!
                            </div>
                            <div className={falseAnswer}>
                                Oh no...
                            </div>
                        </div>
                        <button onClick={this.checkSend}>Send</button>
                    </div>

                </div>
            </div>
        );
    };
}
