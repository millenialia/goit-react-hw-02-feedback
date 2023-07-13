import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (

       <ul className="btnList">
        {options.map((option, index) =>{
          return (
        <li key={index}>
              <button className="btn" type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
            </li>
          )
          })}
      </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}
