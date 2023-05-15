import './index.css'

const TaskItem = props => {
  const {details} = props
  const {newOption, newInput} = details

  return (
    <li className="item-cont">
      <p className="new-input">{newInput}</p>
      <button type="button" className="new-option">
        {newOption}
      </button>
    </li>
  )
}
export default TaskItem
