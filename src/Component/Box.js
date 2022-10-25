import React from 'react';
export default class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  makeTheDayActive = () => {
    console.log(this.props);
    let index = this.props.state.activities.findIndex(
      (activity) => activity.name == this.props.activity
    );
    let activity = this.props.state.activities[index];
    return activity.days.includes(this.props.date)
      ? 'border-[2px] border-[#66D2B3] text-white bg-[#66D2B3] mr-4 my-2 rounded border-solid text-sm py-2 px-5 hover:border-[blue] inline-block'
      : 'border-[2px] mr-4 my-2 rounded border-solid text-sm py-2 px-5 hover:border-[blue] inline-block';
  };
  render() {
    return (
      <div
        onClick={() =>
          this.props.markTheDays(this.props.activity, this.props.date)
        }
        className={this.makeTheDayActive()}
      >
        {this.props.date}
      </div>
    );
  }
}
