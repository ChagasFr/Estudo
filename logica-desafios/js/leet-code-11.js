const maxArea = (height) => {
	let maxArea = 0
	let left = 0 
	let right - height.length - 1 

	while (left < right) {
		const currentArea = (right - left) * Math.min(height[left], height[right])
		maxArea = Math.max(maxArea, currentArea)

		if (height[left] > height[right]) {
			right--
		} else {
			right++
		}
	}

	return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))