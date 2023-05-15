import {Component} from 'react'
import {v4} from 'uuid'
import TaskItem from '../TaskItem'
import Options from '../Options'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Tasks extends Component {
  state = {
    list: tagsList,
    input: '',
    option: tagsList[0].displayText,
    taskList: [],
    isClicked: true,
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onChangeOption = event => {
    this.setState({option: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {input, option} = this.state
    const newTask = {
      id: v4(),
      newInput: input,
      newOption: option,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      input: '',
    }))
  }

  updateOptionsList = optId => {
    const {taskList, isClicked} = this.state
    const singleTask = taskList.filter(single => single.optionId === optId)
    if (isClicked) {
      return this.setState(prevState => ({
        taskList: singleTask,
        isClicked: !prevState.isClicked,
      }))
    }
    return null
  }

  render() {
    const {list, input, option, taskList} = this.state
    const {optionId} = list

    return (
      <div className="container">
        <div className="first-cont">
          <h1 className="heading">Create a Task!</h1>
          <form className="form" onSubmit={this.onSubmitTask}>
            <label htmlFor="task" className="name">
              Task
            </label>
            <input
              type="text"
              id="task"
              value={input}
              className="textbox"
              placeholder="Enter the task here"
              onChange={this.onChangeInput}
            />
            <label htmlFor="tags" className="name">
              Tags
            </label>
            <select
              id="tags"
              className="textbox dropdown"
              onChange={this.onChangeOption}
            >
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
              <option value="Others">Others</option>
            </select>
            <div className="btn-cont">
              <button type="submit" className="add-btn">
                Add Task
              </button>
            </div>
          </form>
        </div>

        <div className="second-cont">
          <h1 className="tags">Tags</h1>
          <ul className="tags-list-cont">
            {list.map(each => (
              <Options
                key={each.optionId}
                optionDetails={each}
                updateOptionsList={this.updateOptionsList}
              />
            ))}
          </ul>
          <h1 className="tags">Tasks</h1>

          {taskList.length > 0 ? (
            <ul className="task-item-cont">
              {taskList.map(task => (
                <div>
                  <TaskItem key={task.id} details={task} />
                </div>
              ))}
            </ul>
          ) : (
            <p className="no-tasks">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default Tasks
