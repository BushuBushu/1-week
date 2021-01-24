function getTimestamps(lines) {
  const timestamps = [];
  lines.map((line) => {
    const [_, time, duration] = line.split(" ");

    _time = time.split(":");
    hour = parseInt(_time[0]) * 1000;
    min = parseInt(_time[1]) * 1000;
    sec = parseFloat(_time[2]) * 1000;
    mil = hour * 3600 + min * 60 + sec;

    _duration = parseFloat(duration.substr(0, duration.length - 1)) * 1000;

    timestamps.push([mil - _duration + 1, mil]);
  });
  return timestamps;
}

function check(time, timestamps) {
  let count = 0;
  let start = time;
  let end = time + 1000;

  for (let timestamp of timestamps) {
    const [_start, _end] = timestamp;

    if (
      (_start >= start && _start < end) ||
      (_end >= start && _end < end) ||
      (_start <= start && _end >= end)
    ) {
      ++count;
    }
  }
  return count;
}

function solution(lines) {
  let timestamps = getTimestamps(lines);

  let counts = [];

  timestamps.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  timestamps.forEach((timestamp) => {
    let count1 = check(timestamp[0], timestamps);
    let count2 = check(timestamp[1], timestamps);

    counts.push(count1);
    counts.push(count2);
  });

  const max = counts.reduce(function (previous, current) {
    return previous > current ? previous : current;
  });

  return max;
}

// console.log(
//   solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])
// );
console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);
