const maxArea = function (height: number[]) {
  let max: number = 0;
  let start: number = 0;
  let last: number = height.length - 1;

  while (start < last) {
    const targetHeight = Math.min(height[start], height[last]);
    const area = (last - start) * targetHeight;

    height[last] > height[start] ? start++ : last--;
    max = Math.max(max, area);
  }

  return max;
};
