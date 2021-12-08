var dailyTemperatures = function (temperatures: number[]): number[] {
  let answer = [];
  let index = 0;
  let days = 0;
  let total = 0;
  let sumIndex = 0;
  while (answer.length < temperatures.length) {
    days++;
    if (answer.length === temperatures.length - 1) {
      answer.push(0);
      break;
    }
    total = total + temperatures[sumIndex + 1] - temperatures[sumIndex];
    if (total > 0) {
      answer.push(days);
      total = 0;
      days = 0;
      sumIndex = index;
      index++;
    } else if (sumIndex > temperatures.length) {
      answer.push(0);
      total = 0;
      days = 0;
      sumIndex = index;
      index++;
    }
    sumIndex = sumIndex + 1;
  }
  return answer;
};
