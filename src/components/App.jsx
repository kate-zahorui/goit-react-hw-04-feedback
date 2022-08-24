import { useState } from 'react';

import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

import s from './App.module.css';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const total = state.good + state.neutral + state.bad;

  const onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const positivePercentage = Math.round((good / total) * 100);
    return total > 0 ? positivePercentage : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();
  const noFeedback = !state.good && !state.neutral && !state.bad;

  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {noFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
