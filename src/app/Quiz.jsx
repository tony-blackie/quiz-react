import React, { Component } from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyCont: false,
            isCheck: [true, false, false, false]
        }

    };

    radioCheck(e) {
        let current = e.target.id;
        let arr = [false, false, false, false];
        arr[current] = true;

        this.setState({isCheck:[false, false, false, false]});

        this.setState({isCheck: arr});
    }



    render() {
        let showTestBlock = this.props.status ? "visible" : "not_visible";
        let showNeedBlock = this.props.answers === "" ? "visible" : "not_visible";


        return (
            <div className={showTestBlock}>
                <div className={showNeedBlock}>
                    Sorry
                </div>
                <div className={showTestBlock}>
                    <div>
                        {this.props.quest}
                    </div>
                    <div>
                        <input type="radio" name="0"  id={0} checked={this.state.isCheck[0]}  onChange={this.radioCheck}/>
                        <label for="0">{this.props.answers[0]}</label> <br/>
                        <input type="radio" name="1"  id={1} checked={this.state.isCheck[1]}  onChange={this.radioCheck}/>
                        <label for="1">{this.props.answers[1]}</label> <br/>
                        <input type="radio" name="2"  id={2} checked={this.state.isCheck[2]}  onChange={this.radioCheck}/>
                        <label for="2">{this.props.answers[2]}</label> <br/>
                        <input type="radio" name="3"  id={3} checked={this.state.isCheck[3]}  onChange={this.radioCheck}/>
                        <label for="3">{this.props.answers[3]}</label> <br/>
                        <div></div>
                        <button>Send</button>
                    </div>

                </div>
            </div>
        );
    };
}
