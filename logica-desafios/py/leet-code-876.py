# Dado o nó cabeca de uma lista ligada, retorne o nó do meio
# se existirem dois nós do meio, retorne o segundo nó do meio

class ListNode: 
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast.fast.next.next
    
    return slow

n5 = ListNode(5)
n4 = ListNode(4, n5)
n3 = ListNode(3, n4)
n2 = ListNode(2, n3)
n1 = ListNode(1, n2)

print(middleNode(n1).val)