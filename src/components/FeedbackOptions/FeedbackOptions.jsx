import React from 'react'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) =>
{
    
    return <div className={css.btnlist}>
        
  {options.map(option =>(
      <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}
    </div>
}

export { FeedbackOptions }
