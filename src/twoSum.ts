export function twoSum(nums: number[], target: number): number[] {
  // maps {diff: index}
  const diffs = new Map();

  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i];

    if (diffs.has(target - diff)) {
      return [diffs.get(target - diff), i];
    } else {
      diffs.set(diff, i);
    }
  }
  return [0, 0];
}
