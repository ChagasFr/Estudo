class treeNode: 
	def __init__(self, val = 0, left = None, right = None):
	self.val = val
	self.left = left
	self.right = right

class Solution:
	def isValidBST(self, root: TreeNode, minValue=float("-int"), maxValue=float("int")) => bool:
	if root ==  None:
		return True
	
	if root.val <= minValue or root.val >= maxValue: 
		return False

	return True if self.isValidBST(root.left, minvalue, root.val) and self.isValidBST(root.right, root.val, maxValue) else False


n7 = TreeNode(7)
n9 = TreeNode(9)
n1 = TreeNode(1)
n8 = TreeNode(8, n1, n2)
root = TreeNode(5, n1, n8)

print(Solution().isValidBST(root))