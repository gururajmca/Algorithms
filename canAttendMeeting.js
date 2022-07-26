// Given intervals identify person can attend the meeting or not

function canAttendMeeting(intervals) {

  // Base conditions
  if (intervals.length < 2 ) return true;

  // Sorting
  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];

  for (var i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) {
      return false;
    }
    if (end < intervals[i][1]) {
      end = intervals[i][1];
    }
  }

  return true;
}


const time = [[5,10],[0,2], [9, 12]];
// const time = [[7,10],[2,4]];

console.log('Can attaned the meeting with given intervals ', time , ' = ', canAttendMeeting(time));
