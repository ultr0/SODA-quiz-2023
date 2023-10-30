import React, {Component} from 'react';
import quizQuestions from './api/quizQuestions';
import quizResult from './api/quizResult';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Button from './components/Button';
import 'normalize.css';
import './App.css';
import IntroScreen from "./components/IntroScreen";
import FinishVideo from "./components/FinishVideo";


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
      intro: false,
      result: '',
      finish: false,
      resultText: '',
      resultHeader: '',
      resultImg: '',
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
        this.shuffleArray(question.answers)
        // question.answers
    );
    // console.log(shuffledAnswerOptions);
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

  onChangeFinishBtn = () => {
    this.setState({finish: true})
  }

  onChangeStartBtn = () => {
    this.setState({intro: true})
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
    this.setState({resultHeader: quizResult.find(resultQuestion => resultQuestion.type === result[count]).header});
    this.setState({resultImg: quizResult.find(resultQuestion => resultQuestion.type === result[count]).image});

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
    return <Result finishPressBtn={this.onChangeFinishBtn} quizResult={this.state.result}
                   quizText={this.state.resultText} quizHeader={this.state.resultHeader}
                   resultImg={this.state.resultImg}/>;
  }

  renderFinish() {
    return <FinishVideo/>;
  }


  renderHeaderResult() {
    return <Button/>;
  }


  renderIntroText() {
    return <IntroScreen start={this.onChangeStartBtn}/>;
  }

  render() {
    return (
        <div className="App">
          {this.state.intro ? this.state.result ? this.state.finish ? this.renderFinish() : this.renderResult() : this.renderQuiz() : this.renderIntroText()}
        </div>
    );
  }
}

export default App;
