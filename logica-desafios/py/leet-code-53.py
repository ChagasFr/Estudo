def maxSubArray(nums):
	currentSubArray = maxSubArray = nums[0]
	for num in nums[1:]:
		currentSubArray = max(num, currentSubArray + num)
		maxSubArray = max(maxSubArray, currentSubArray)
	return maxSubArray

print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))