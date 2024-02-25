function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

const levelOrder = (root) => {
	if (!root) {
		return []
	}

	const result = []
	const queue = [root]
	while (queue.length > 0) {
		const level = []
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			level.push(node.val)
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		}
	}

	return result
}


const n15 = new TreeNode(15)
const n7 = new TreeNode(7)
const n20 = new TreeNode(20, n15, n7)
const n9 = new TreeNode(9)
const n3 = new TreeNode(3, n9, n20)

console.log(levelOrder(n3))