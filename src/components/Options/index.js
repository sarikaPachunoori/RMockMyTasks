import './index.css'

const Options = props => {
  const {optionDetails, updateOptionsList} = props
  const {displayText, optionId} = optionDetails

  const getFilteredOptions = () => {
    updateOptionsList(optionId)
  }

  return (
    <li>
      <button className="list-btn" type="button" onClick={getFilteredOptions}>
        {displayText}
      </button>
    </li>
  )
}

export default Options
