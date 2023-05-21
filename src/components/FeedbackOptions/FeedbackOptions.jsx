export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    {options.map(option => (
      <button onClick={onLeaveFeedback(option)} type="button">
        {option}
      </button>
    ))}
  </>
);