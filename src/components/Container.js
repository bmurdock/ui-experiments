import React, { Component } from 'react';
// Style it up however you like
import './Container.css';

// I'm really just making this up as I go
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
        // You need to fetch your real data here...
        if (fakeData.length) {
            this.setState({
                children: fakeData.map((data, i) => {
                    // notice how I'm just inserting the entire data object
                    // into the component as props with the spread operator
                    // {...data}
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
        // Each child has an initial state that controls the class (style)
        this.state = {
            styles: "child"
        };
        this.expand = this.expand.bind(this);
    };

    expand(event) {
        // on click we want to change the state so that it sets the class...
        // You could write a big if statement for this
        // I am going to just use a ternary...it's harder to read but easier to write
        // If the current state is "child", we set it to "child expanded"
        // Otherwise, we just set it back to "child"
        event.preventDefault();
        this.setState({
            styles: this.state.styles === "child" ? "child expanded" : "child"
        });
    }

    render() {
        // the title element is always visible
        // anything in the details element is going to be hidden until
        // the child element is clicked
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