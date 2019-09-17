import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: true,
        };

        this.change = this.change.bind(this);
    }

    change(event) {
        if (event.currentTarget.tagName !== "BUTTON") {
            this.setState({
                buttonDisabled: !this.state.buttonDisabled,
            });
        };
    }

    render() {
        let text = this.state.buttonDisabled ? "Click Me" : "You Figured It Out";
        let backgroundColor = this.state.buttonDisabled ? "main-container" : "change";

        return (
            <div className={backgroundColor} onClick={this.change}>
                <button disabled={this.state.buttonDisabled}>{text}</button>
            </div>
        );
    }
}

// React 
ReactDOM.render(<App />, document.getElementById('root'));

