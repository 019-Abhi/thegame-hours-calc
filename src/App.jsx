import { useState } from 'react'
import './App.css'

//returns numbers of days left
function DaysUntilDeadline(deadlineD) {

  const x = /^(\d{4})-(\d{2})-(\d{2})$/.exec(deadlineD)
  if (!x) return null 
  const year = 2026
  const month = Number(x[2]) - 1
  const day = Number(x[3])
  const deadline = new Date(year, month, day)
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((deadline - start) / (1000 * 60 * 60 * 24))

}

function App() {
  const [deadlineDate, setDeadlineDate] = useState('')
  const [completedHours, setCompletedHours] = useState('')
  const [goalHours, setGoalHours] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const daysLeft = DaysUntilDeadline(deadlineDate)

  function CalculateDaysLeft() {
    const done = parseFloat(completedHours)
    const goal = parseFloat(goalHours)

    if (done === '' || goalHours === '') {
      setErrorMsg('Fill in both boxes')
      setShowResult(false)
      return
    }

    if (goal < done) {
      setErrorMsg('Goal hours cannot be < done hours')
      setShowResult(false)
      return
    }

    if (daysLeft === null) { 
      setErrorMsg('Invalid deadline')
      setShowResult(false)
      return
    }

    if (daysLeft < 0) {
      setErrorMsg('Deadline is already past')
      setShowResult(false)
      return
    }

    if (!deadlineDate.startsWith('2026')) {
      setErrorMsg('Please select a date in the year 2026')
      setShowResult(false)
      return
    }

    setErrorMsg('')
    setShowResult(true)
  }

  const done = parseFloat(completedHours)
  const goal = parseFloat(goalHours)
  const hoursLeft = goal - done

  const hoursPerDay =
    daysLeft !== null && daysLeft >= 0 ? daysLeft === 0 ? hoursLeft : hoursLeft / daysLeft : NaN

  return (
    <main className="page">
        <div className="vl"></div>

        <div className="calculator-card">

          <div className="title-wrap">
            <h1 align="center">Calculate your hours needed for HCTG</h1>
          </div>

          <div className="input-grid">
            <label className="field field-full">
              <span>Deadline</span>
              <input type="date"value={deadlineDate} min="2026-01-01" max="2026-12-31"
                onChange={(e) => {
                  setDeadlineDate(e.target.value)
                  setShowResult(false)
                }}
              />
            </label>

            <label className="field">
              <span>Hours so far</span>
              <input
                type="number"
                min="0"
                placeholder="40"
                value={completedHours}
                onChange={(e) => setCompletedHours(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Target total</span>
              <input
                type="number"
                min="0"
                placeholder="150"
                value={goalHours}
                onChange={(e) => setGoalHours(e.target.value)}
              />
            </label>

            <div className='calc-button-row'>
              <button className="calculate-btn" onClick={CalculateDaysLeft}>
                Calculate
              </button>
            </div>

            <div className="results">
              <div className="result-tile">
                <p className="tile-label">Days left</p>
                <p className="tile-value">
                  {daysLeft === null ? '--' : daysLeft < 0 ? 'Past' : daysLeft}
                </p>
              </div>
              <div className="result-tile">
                <p className="tile-label">Hours left</p>
                <p className="tile-value">{showResult ? hoursLeft.toFixed(1) : '--'}</p>
              </div>
              <div className="result-tile">
                <p className="tile-label">Hours/Day</p>
                <p className="tile-value">
                  {showResult && Number.isFinite(hoursPerDay)
                    ? hoursPerDay.toFixed(2)
                    : '--'}
                </p>
              </div>
            </div>
          </div>

        </div>
    </main>
  )
}
export default App