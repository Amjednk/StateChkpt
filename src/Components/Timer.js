import React from "react";

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            interval:0,
        };

    }
componentDidMount(){
    this.setState({
        interval : setInterval(()=>this.setState({timer:this.state.timer + 1}), 1000)
    });
}
    render() {
        return (
            <div>
                
                <h4 style = {{color: "red"}}> <br/> Mounted since {this.state.timer} </h4>
            </div>
        );
    }
};
