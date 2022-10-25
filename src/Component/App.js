import React from 'react';
import Activities from './Activities';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [{ name: 'vikas', days: [] }],
    };
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem('activities', JSON.stringify(this.state.activities));
  };

  componentDidMount = () => {
    if (localStorage.activities) {
      this.setState({
        activities: JSON.parse(localStorage.getItem('activities')),
      });
    }
    window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
  };

  componentWillUnmount = () => {
    window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let activity = event.target[0].value;
    event.target[0].value = '';
    let allActivityNames = this.state.activities.map((obj) => obj.name);

    if (activity) {
      if (!allActivityNames.includes(activity)) {
        return this.setState({
          activities: this.state.activities.concat({
            name: activity,
            days: [],
          }),
        });
      } else {
        alert(`Sorry, you had already added ${activity} as an acitivty`);
      }
    }
  };

  markTheDays = (activityName, day) => {
    this.setState((prevState) => {
      return {
        activities: prevState.activities.map((activity) => {
          if (activity.name === activityName) {
            return {
              ...activity,
              days: !activity.days.includes(day)
                ? activity.days.concat(day)
                : activity.days.filter((activityDay) => activityDay !== day),
            };
          } else {
            return activity;
          }
        }),
      };
    });
  };

  handleDeleteActivity = (activityToRemove) => {
    this.setState({
      activities: this.state.activities.filter(
        (activity) => activity !== activityToRemove
      ),
    });
  };
  render() {
    return (
      <>
        <h1
          className="text-center text-3xl font-medium py-8"
          style={{ color: '#3E8FD1' }}
        >
          Monthly Activity Tracker!
        </h1>
        <form action="#" className="text-center" onSubmit={this.handleSubmit}>
          <input
            className="border-2  border-solid rounded-tl rounded-bl px-5 py-2 text-l"
            type="text"
            placeholder="eg: Coding"
          />
          <button
            type="submit"
            className="bg-[#66D2B3] text-l text-white border-2 rounded-tr rounded-br border-solid border-[#66D2B3] px-6 py-2 font-thin"
          >
            Add Activity
          </button>
        </form>
        <Activities
          activities={this.state.activities}
          handleDeleteActivity={this.handleDeleteActivity}
          markTheDays={this.markTheDays}
          state={this.state}
        />
      </>
    );
  }
}

export default App;
