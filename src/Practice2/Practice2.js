import React from 'react';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';

class Practice2 extends React.Component {
  state = {
    input: ''
  }

  deleteWordHandler = (index) => {
    const text = this.state.input.toString().split('');
    text.splice(index, 1);
    const newText = text.join('');
    
    const input = [...this.state.input];
    input[0] = newText;

    this.setState({
      input
    });
  }

  inputOnChangeHandler = (event) => {
    let text = {...this.state.input};
    text = event.target.value;

    const input = [...this.state.input];
    input[0] = text;

    this.setState({
      input
    });
  }

  render() {
    let result;

    if(this.state.input.length > 0) {
      const text = [...this.state.input];
      result = (
        <div>
          {text.toString().split('').map((word, index) => {
            return <CharComponent word={word} delete={() => this.deleteWordHandler(index)}/>;
          })}
        </div>
      );
    }

    return (
      <div>
        <input type="text" onChange={this.inputOnChangeHandler} value={this.state.input}/>
        <p>Text: {this.state.input}</p>
        <ValidationComponent textLength={this.state.input.toString().length} />
        {result}
      </div>
    );
  }
}

export default Practice2;