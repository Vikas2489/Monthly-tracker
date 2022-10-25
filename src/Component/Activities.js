import Activity from './Activity';
export default function Activities(props) {
  console.log(props, 'props. in activity');
  return props.activities.map((activity) => {
    return (
      <Activity
        activity={activity}
        key={activity.name}
        handleDeleteActivity={props.handleDeleteActivity}
        markTheDays={props.markTheDays}
        state={props.state}
      />
    );
  });
}
