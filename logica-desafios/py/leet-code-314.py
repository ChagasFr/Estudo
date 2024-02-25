class TreeNode:
	def __init__(self, val = 0, left = None, right = None):
	self.val = val
	self.left = left 
	self.right = right


n15 = TreeNode(15)
n7 = TreeNode(7)
n20 = TreeNode(20, n15, n7)
n9 = TreeNode(9)
n3 = TreeNode(3, n9, n20)

def certicalOrder(root: TreeNode) -> List[list[init]]:
	if not root:
		return []

	map = defaultdict(list)
	minColumn = maxColumn = 0 
	queue = deque([(root, 0)])

	while queue:
		node, column = queue.popleft()
		map[column].append(node.val)
		minColumn =  min(minColumn, column)
		maxColumn =  max(maxColumn, column)


		if node.left:
			queue.append((node.left, column - 1))
		if node.right:
			queue.append((node.right, column + 1))

	return [map[i] for i in range(minColumn, maxColumn + 1)]

print(verticalOrder(n3))