import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is you name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Kwakes'
            },
            {
              id: 'c',
              text: 'Steven'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Sara'
            },
            {
              id: 'b',
              text: 'Sue'
            },
            {
              id: 'c',
              text: 'Grace'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Joseph'
            },
            {
              id: 'b',
              text: 'Harry'
            },
            {
              id: 'c',
              text: 'Wayne'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'John'
            },
            {
              id: 'b',
              text: 'Paul'
            },
            {
              id: 'c',
              text: 'Nick'
            }
          ],
          correct: 'c'
        },
      ],
      score: 0,
      current: 1
    }
  }

  render(){
    return(
      <div>
        <QuestionList {...this.state}/>
      </div>
    )
  }
}

export default App