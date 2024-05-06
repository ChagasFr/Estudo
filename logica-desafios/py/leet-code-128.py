from typing import List

def LongestConsecutive(nums: List[int]) -> int:
    setNums = set(nums)
    maxCount = 0
    for num in setNums:
        if not (num -1 in setNums):
            counter = 1
            currentNum = num + 1
            while currentNum in setNums:
                counter += 1
                currentNum += 1
            maxCount = max(maxCount, counter)
    return maxCount

print(LongestConsecutive([100, 4, 200, 1, 3, 2]))