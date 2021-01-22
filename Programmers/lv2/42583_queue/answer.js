function solution(bridge_length, weight, truck_weights) {
  const trucks = truck_weights.map((weight, index) => ({
    index: index,
    weight: weight,
    location: 1,
  }));

  let bridge = [trucks[0]];
  let seconds = 1;
  while (bridge.length) {
    const number = bridge.length;

    const next = bridge[number - 1].index + 1;
    let totalWeight = 0;

    for (let i = 0; i < number; i++) {
      let now = bridge.shift();

      if (now.location === bridge_length) continue;

      totalWeight += now.weight;
      bridge.push({ ...now, location: now.location + 1 });
    }

    if (next < trucks.length && totalWeight + trucks[next].weight <= weight) {
      bridge.push(trucks[next]);
    }
    seconds++;
  }

  return seconds;
}

// solution(2, 10, [7, 4, 5, 6]);

// solution(100, 100, [10]);

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
