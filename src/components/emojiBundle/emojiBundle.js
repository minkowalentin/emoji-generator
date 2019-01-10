import React, { Component } from 'react';
import './emojiBundle.scss';
import GenerateEmoji from '../generateEmoji/generateEmoji';

class EmojiBundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiCount: this.props.count,
            emojis: [<GenerateEmoji />]
        };
    }

    componentDidUpdate({ count }) {

        if (this.props.count !== count) {
            this.setState({
                emojis: this.updateEmojiBundle(count),
                emojiCount: count
            })
        }

      
    }

    updateEmojiBundle = (currentCount) => {
        let newEmojiState = this.state.emojis;
        const emojiCount = this.state.emojis.length-1;

        if(emojiCount < currentCount) {
            const differenceToAdd = currentCount - emojiCount ;

            for (let index = 0; index < differenceToAdd; index++) {
                newEmojiState = newEmojiState.concat(<GenerateEmoji />);
            }

        } else {
                const differenceToSubstract =  emojiCount - currentCount;
                console.log(`Current count ${currentCount} emoji count ${emojiCount} difference ${differenceToSubstract}`);
                for (let index = 0; index < differenceToSubstract+1; index++) {
                    const endIndex= newEmojiState.length-1;
                    newEmojiState = newEmojiState.slice(0,endIndex);                
                }
        }

        if(this.props.count === '1') {
            newEmojiState = newEmojiState.slice(0,1);
        }
       
        return newEmojiState
    }

    render() {
        return (
            <div>
                <div>Emoji count</div>
                {
                    this.props.count

                }
                <div>Emoji length</div>

                {
                    this.state.emojis.length
                }
                <br/>
                {
                    this.state.emojis

                }

            </div>

        )
    }
}

export default EmojiBundle;
