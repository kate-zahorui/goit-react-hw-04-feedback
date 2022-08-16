import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map((item, index) => (
        <li key={`id-${index}`} className={s.item}>
          <button
            type="button"
            name={item}
            onClick={onLeaveFeedback}
            className={s.button}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
