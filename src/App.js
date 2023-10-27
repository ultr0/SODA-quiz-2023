import React, {Component} from 'react';
import quizQuestions from './api/quizQuestions';
import quizResult from './api/quizResult';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Button from './components/Button';
import logo from './svg/logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      resultText: '',
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
        this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {

    const count = Math.floor(Math.random() * (result.length - 1));
    this.setState({result: result[count]});
    this.setState({resultText: quizResult.find(resultQuestion => resultQuestion.type === result[count]).content});

  }


  renderQuiz() {
    return (
        <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
        />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} quizText={this.state.resultText}/>;
  }

  renderHeaderQuestion() {
    return <img src={logo} className="App-logo" alt="logo"/>;
  }

  renderHeaderResult() {
    return <Button/>;
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            {this.state.result ? this.renderHeaderResult() : this.renderHeaderQuestion()}

            <h2>Квиз</h2>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
    );
  }
}

export default App;
