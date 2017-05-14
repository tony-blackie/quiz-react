import React, { Component } from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyCont: false,

        }

    };



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

                </div>
            </div>
        );
    };
}
