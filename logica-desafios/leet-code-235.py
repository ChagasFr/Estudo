class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if root == p.val or root == q.val:
        return root
    
    if (p.val > root.val and q.val < root.val) or (p.val < root.val and q.val > root.val):
        return root
    
    if p.val < root.val:
        return lowestCommonAncestor(root.left, p, q)
    else:
        return lowestCommonAncestor(root.right, p, q)

# Left view of the binary tree
n3 = TreeNode(3)
n5 = TreeNode(5)
n4 = TreeNode(4, n3, n5)
n0 = TreeNode(0)
n2 = TreeNode(2, n0, n4)

# Right view of the binary tree
n7 = TreeNode(7)
n9 = TreeNode(9)
n8 = TreeNode(8, n7, n9)

# root
n6 = TreeNode(6, n2, n8)

print(lowestCommonAncestor(n6, n2, n8). val)
