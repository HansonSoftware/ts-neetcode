export function containsDuplicate(nums: number[]) {
  if (nums.length == 0 || nums.length == 1) {
    return false;
  }

  const set = new Set(nums);
  return !(set.size == nums.length);
}
