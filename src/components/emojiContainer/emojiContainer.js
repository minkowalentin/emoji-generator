import React, { Component } from 'react';
import './emojiContainer.scss';
import { LayoutConsumer } from '../layout/layout';
import EmojiBundle from '../emojiBundle/emojiBundle';
class EmojiContainer extends Component {

  render() {
    return (
      <div className="emojiContainer">
        <LayoutConsumer>
          {({ emojiCount}) => (
            <EmojiBundle count ={emojiCount} round='small'/>
          )}
        </LayoutConsumer>

      </div>
    )
  }
}

export default EmojiContainer;