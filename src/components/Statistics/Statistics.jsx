import React from 'react'
import css from './Statistics.module.css'

const Statistics = ({title, good, neutral, bad, positivePercentage, total, }) => {
  return (
    <div className={css.list}>{title}
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p onClick={() => total()}>total: {total}</p>
      <p onClick={() => positivePercentage()}>positivePercentage: {positivePercentage}%</p>
    </div>
    

  )
}

export { Statistics };