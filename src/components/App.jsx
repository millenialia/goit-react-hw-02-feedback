import { Component } from "react";
import { Section } from 'components/Feedback/Section'
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions'
import { Statistics } from 'components/Feedback/Statistics'
import { Notification } from "components/Feedback/NoFeedback";

export class App extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

  total = 0;
  positivePct = 0;

  onLeaveFeedback = e => {
    const feedback = e.target.name;
    this.setState({
      [feedback]: this.state[feedback]  + 1
    })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback() {
    this.total += 1;
  }

  countPositiveFeedbackPercentage() {

    this.positivePct = (Number(this.total===0 ? 0 : (this.state.good/this.total)*100).toFixed(0))
  }


  render() {
    const { good, neutral, bad } = this.state

    return (
      <div className="feedbackForm">
        <Section
          title="Please leave us feedback"
          className = "feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section
          title="Statistics"
          className = "statistics">
          {this.total
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
              positiveFeedbacks={this.positivePct}
            />
            :
            <Notification message="There is no feedback" />}
        </Section>



        </div>
    );
  }
};
