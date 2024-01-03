import { Component } from 'react';
import { Section } from './components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleIncrement = option => {
      this.setState ( prevState =>({
        [option]: prevState[option] + 1, 
        
      }));
   };
    
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad }
  
  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
 }
 
  

  render() {
    return (
      <div >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback()?(
          <Statistics
              good = { this.state.good }
             neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
          ):(
          <Notification message="There is no feedback" />)}
        </Section>
      </div>
    );
  }
 
};
