import Box from './Box';
export default function Boxes(props) {
  console.log(props, 'props .in boxes');
  let arr = [];
  for (let i = 1; i <= props.totalDays; i++) {
    arr.push(
      <Box
        date={i}
        key={i}
        markTheDays={props.markTheDays}
        activity={props.activity}
        state={props.state}
      />
    );
  }
  return arr;
}
