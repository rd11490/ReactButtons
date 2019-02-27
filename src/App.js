import React, {Component} from 'react';
import './App.css';

class RadioButton extends React.Component {
    render() {
        return (
            <div>
                <input type="radio"
                       value={this.props.option.value}
                       name={this.props.option.label}
                       checked={this.props.isChecked}
                       onClick={this.props.onClick}>
                </input>
                <label>
                    {this.props.option.label}

                </label>
            </div>
        );
    }
}

class RadioGroup extends React.Component {
    constructor(props) {
        const radioOptions = [
            {label: 'Label 1', value: 1},
            {label: 'Label 2', value: 2},
            {label: 'Label 3', value: 3},
            {label: 'Label 4', value: 4}
        ];

        super(props);
        this.state = {
            options: radioOptions,
            selected: radioOptions[0]
        }
    }

    setSelected(option) {
        this.setState({
            options: this.state.options,
            selected: option
        })
    }

    renderButtonn(option) {
        return (
            <RadioButton
                option={option}
                onClick={() => this.setSelected(option)}
                isChecked={this.state.selected === option}
            />
        )
    }

    render() {
        return (
            <div>
                The Current selection is: {this.state.selected.label}
                <div>
                    {this.state.options.slice().map(option => this.renderButtonn(option))}
                </div>
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div className="RadioGroup">
                <RadioGroup/>
            </div>
        );
    }
}

export default App;
