import React, { Component } from 'react';
import './layout.scss';
import {
    RangeInput,
    TextInput
 } from "grommet";
const LayoutContext = React.createContext({
    emojiCount: 1,
    changeEmojCount: () => null,
})

export const LayoutConsumer = LayoutContext.Consumer;


class LayoutProvider extends Component {
    constructor() {
        super();
        this.state = {
            emojiCount: 1,
            maxNumber: 100
        };
    }

    changeEmojCount = event => this.setState({ emojiCount: event.target.value });

    render() {
        return (
            <LayoutContext.Provider
                value={{
                    emojiCount: this.state.emojiCount,
                    changeEmojCount: this.changeEmojCount
                }}
            >
                <div className="menuContainer">

                    <RangeInput
                    id="rangeBar"
                    max={100}
                    min={1}
                    value={this.state.emojiCount}
                    onChange={this.changeEmojCount} />
                    
                    <TextInput
                    value={this.state.maxNumber}
                    onChange={event => 
                        this.setState({ 
                        text: event.target.value 
                    })}
        />
                </div>
                {this.props.children}
            </LayoutContext.Provider>
        )
    }
}

export default LayoutProvider;
