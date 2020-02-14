import React, { Component } from 'react';
import './Container.css';
const fakeData = [{
    name: "Brian",
    age: 38,
    favoriteColor: "blue"
}, {
    name: "Jason",
    age: 45,
    favoriteColor: "green"
}, {
    name: "Sarah",
    age: 46,
    favoriteColor: "purple"
},
{
    name: "Amy",
    age: 17,
    favoriteColor: "mauve"
}, {
    name: "Brent",
    age: 20,
    favoriteColor: "cobalt"
}];

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: []
        }
    };

    componentDidMount() {
        if (fakeData.length) {
            this.setState({
                children: fakeData.map((data, i) => {
                    return <Child key={`child_${i}`} {...data} />;
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.children}
            </div>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: "child"
        };
        this.expand = this.expand.bind(this);
    };

    expand(event) {
        event.preventDefault();
        this.setState({
            styles: this.state.styles === "child" ? "child expanded" : "child"
        });
    }

    render() {
        return (
            <div className={this.state.styles} onClick={this.expand}>
                <div className="title">
                    {this.props.name}
                </div>
                <div className="details">
                    <p>Age: {this.props.age}</p>
                    <p>Favorite Color: {this.props.favoriteColor}</p>
                </div>
            </div>
        );
    }
}