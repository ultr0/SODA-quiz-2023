import React, {Component} from 'react';
import quizQuestions from './api/quizQuestions';
import quizResult from './api/quizResult';
import Quiz from './components/Quiz';
import Result from './components/Result';
import 'normalize.css';
import './App.css';
import IntroScreen from "./components/IntroScreen";


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
      resultHeader: '',
      resultImg: '',
      resultURL: '',
      resultQR: '',
      isIntro: true,
      isQuiz: false,
      isFinish: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
        question.answers
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }


  onChangeStartBtn = () => {
    this.setState({isIntro: false})
    this.setState({isQuiz: true})
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
    this.setState({isQuiz: false});
    this.setState({isFinish: true});
    this.setState({resultText: quizResult.find(resultQuestion => resultQuestion.type === result[count]).content});
    this.setState({resultHeader: quizResult.find(resultQuestion => resultQuestion.type === result[count]).header});
    this.setState({resultImg: quizResult.find(resultQuestion => resultQuestion.type === result[count]).image});
    this.setState({resultURL: quizResult.find(resultQuestion => resultQuestion.type === result[count]).url});
    this.setState({resultQR: quizResult.find(resultQuestion => resultQuestion.type === result[count]).qr});

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
    return <Result resultQR={this.state.resultQR}
                   quizResult={this.state.result}
                   quizText={this.state.resultText} quizHeader={this.state.resultHeader} quizURL={this.state.resultURL}
                   resultImg={this.state.resultImg}/>;
  }

  renderIntroText() {
    return <IntroScreen start={this.onChangeStartBtn}/>;
  }

  render() {
    return (
        <div className="App">
          {this.state.isIntro ? this.renderIntroText() : null}
          {this.state.isQuiz ? this.renderQuiz() : null}
          {this.state.isFinish ? this.renderResult() : null}
        </div>
    );
  }
}

export default App;
