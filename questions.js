const questionData = {
  questions: [
    {
      question: "1. Write a program to search an element from a list. Give user the option to perform Linear or Binary search.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def linear_search(arr, key):
    for i in range(len(arr)):
        if arr[i] == key:
            print(f"Found at index {i} (position {i+1})")
            return
    print("Not found")

def binary_search(arr, key):
    # Bubble Sort to sort the array first
    for i in range(len(arr)-1):
        for j in range(len(arr)-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    
    low, high = 0, len(arr)-1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == key:
            print(f"Found at index {mid} (position {mid+1})")
            return
        elif key < arr[mid]:
            high = mid - 1
        else:
            low = mid + 1
    print("Not found")

def main():
    arr = []
    n = int(input("Enter number of elements: "))
    
    print(f"Enter {n} elements:")
    arr = list(map(int, input().split()))
    
    key = int(input("Enter element to search: "))
    
    print("Choose search method:\\n1. Linear Search\\n2. Binary Search")
    choice = int(input())
    
    if choice == 1:
        linear_search(arr, key)
    elif choice == 2:
        binary_search(arr.copy(), key)
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter number of elements: 5
Enter 5 elements:
10 30 20 50 40
Enter element to search: 50
Choose search method:
1. Linear Search
2. Binary Search
1
Found at index 3 (position 4)
            </pre>
        </div>
      `,
    },
    {
      question: "2. WAP to sort a list of elements. Give user the option to perform sorting using Insertion sort, Bubble sort or Selection sort.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def bubble_sort(arr):
    for i in range(len(arr)-1):
        for j in range(len(arr)-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

def selection_sort(arr):
    for i in range(len(arr)-1):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

def display(arr):
    for i in arr:
        print(i, end=" ")
    print()

def main():
    arr = []
    n = int(input("Enter number of elements: "))
    
    print("Enter elements: ", end="")
    arr = list(map(int, input().split()))
    
    print("Choose sorting method:\\n1. Bubble Sort\\n2. Insertion Sort\\n3. Selection Sort")
    choice = int(input())
    
    if choice == 1:
        bubble_sort(arr)
    elif choice == 2:
        insertion_sort(arr)
    elif choice == 3:
        selection_sort(arr)
    else:
        print("Invalid choice")
        return
    
    print("Sorted array: ", end="")
    display(arr)

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter number of elements: 5
Enter elements: 30 10 50 20 40
Choose sorting method:
1. Bubble Sort
2. Insertion Sort
3. Selection Sort
2
Sorted array: 10 20 30 40 50
            </pre>
        </div>
      `,
    },
    {
      question: "3. Implement Linked List. Include functions for insertion, deletion and search of a number, reverse the list and concatenate two linked lists.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return
        
        last = self.head
        while last.next:
            last = last.next
        
        last.next = new_node
    
    def delete_node(self, key):
        temp = self.head
        
        # If head node itself holds the key to be deleted
        if temp and temp.data == key:
            self.head = temp.next
            return True
        
        # Search for the key to be deleted
        while temp and temp.next:
            if temp.next.data == key:
                temp.next = temp.next.next
                return True
            temp = temp.next
        
        return False  # Key not found
    
    def search(self, key):
        current = self.head
        position = 0
        
        while current:
            if current.data == key:
                return position
            current = current.next
            position += 1
        
        return -1  # Not found
    
    def reverse(self):
        prev = None
        current = self.head
        
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        
        self.head = prev
    
    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()
    
    @staticmethod
    def concatenate(list1, list2):
        if list1.head is None:
            return list2
        if list2.head is None:
            return list1
        
        result = LinkedList()
        
        # Copy list1
        current = list1.head
        while current:
            result.insert_at_end(current.data)
            current = current.next
        
        # Copy list2
        current = list2.head
        while current:
            result.insert_at_end(current.data)
            current = current.next
        
        return result

def main():
    ll = LinkedList()
    
    while True:
        print("\\nLinked List Operations:")
        print("1. Insert at beginning")
        print("2. Insert at end")
        print("3. Delete a node")
        print("4. Search for an element")
        print("5. Reverse the list")
        print("6. Display the list")
        print("7. Concatenate two lists")
        print("8. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to insert: "))
            ll.insert_at_beginning(data)
        elif choice == 2:
            data = int(input("Enter data to insert: "))
            ll.insert_at_end(data)
        elif choice == 3:
            data = int(input("Enter data to delete: "))
            if ll.delete_node(data):
                print(f"{data} deleted successfully")
            else:
                print(f"{data} not found")
        elif choice == 4:
            data = int(input("Enter data to search: "))
            pos = ll.search(data)
            if pos != -1:
                print(f"{data} found at position {pos}")
            else:
                print(f"{data} not found")
        elif choice == 5:
            ll.reverse()
            print("List reversed")
        elif choice == 6:
            print("Current list:", end=" ")
            ll.display()
        elif choice == 7:
            ll2 = LinkedList()
            n = int(input("Enter number of elements for second list: "))
            print("Enter elements for second list:")
            for _ in range(n):
                data = int(input())
                ll2.insert_at_end(data)
            
            result = LinkedList.concatenate(ll, ll2)
            print("Concatenated list:", end=" ")
            result.display()
        elif choice == 8:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Concatenate two lists
8. Exit
Enter your choice: 2
Enter data to insert: 10

Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Concatenate two lists
8. Exit
Enter your choice: 2
Enter data to insert: 20

Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Concatenate two lists
8. Exit
Enter your choice: 6
Current list: 10 20

Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Concatenate two lists
8. Exit
Enter your choice: 7
Enter number of elements for second list: 2
Enter elements for second list:
30
40
Concatenated list: 10 20 30 40
            </pre>
        </div>
      `,
    },
    {
      question: "4. Implement Doubly Linked List. Include functions for insertion, deletion and search of a number, reverse the list.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return
        
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return
        
        last = self.head
        while last.next:
            last = last.next
        
        last.next = new_node
        new_node.prev = last
    
    def delete_node(self, key):
        if self.head is None:
            return False
        
        # If head node itself holds the key
        if self.head.data == key:
            if self.head.next:
                self.head = self.head.next
                self.head.prev = None
            else:
                self.head = None
            return True
        
        current = self.head
        while current and current.data != key:
            current = current.next
        
        if current is None:
            return False  # Key not found
        
        # Unlink the node from linked list
        if current.next:
            current.next.prev = current.prev
        current.prev.next = current.next
        
        return True
    
    def search(self, key):
        current = self.head
        position = 0
        
        while current:
            if current.data == key:
                return position
            current = current.next
            position += 1
        
        return -1  # Not found
    
    def reverse(self):
        if self.head is None or self.head.next is None:
            return
        
        current = self.head
        temp = None
        
        # Swap next and prev for all nodes
        while current:
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        
        # Update head
        if temp:
            self.head = temp.prev
    
    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

def main():
    dll = DoublyLinkedList()
    
    while True:
        print("\\nDoubly Linked List Operations:")
        print("1. Insert at beginning")
        print("2. Insert at end")
        print("3. Delete a node")
        print("4. Search for an element")
        print("5. Reverse the list")
        print("6. Display the list")
        print("7. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to insert: "))
            dll.insert_at_beginning(data)
        elif choice == 2:
            data = int(input("Enter data to insert: "))
            dll.insert_at_end(data)
        elif choice == 3:
            data = int(input("Enter data to delete: "))
            if dll.delete_node(data):
                print(f"{data} deleted successfully")
            else:
                print(f"{data} not found")
        elif choice == 4:
            data = int(input("Enter data to search: "))
            pos = dll.search(data)
            if pos != -1:
                print(f"{data} found at position {pos}")
            else:
                print(f"{data} not found")
        elif choice == 5:
            dll.reverse()
            print("List reversed")
        elif choice == 6:
            print("Current list:", end=" ")
            dll.display()
        elif choice == 7:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 2
Enter data to insert: 10

Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 2
Enter data to insert: 20

Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 1
Enter data to insert: 5

Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 6
Current list: 5 10 20

Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 5
List reversed

Doubly Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 6
Current list: 20 10 5
            </pre>
        </div>
      `,
    },
    {
      question: "5. Implement Circular Linked List. Include functions for insertion, deletion and search of a number, reverse the list.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        
        if self.head is None:
            new_node.next = new_node  # Point to itself
            self.head = new_node
            return
        
        # Find the last node
        current = self.head
        while current.next != self.head:
            current = current.next
        
        # Update links
        new_node.next = self.head
        current.next = new_node
        self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        
        if self.head is None:
            new_node.next = new_node  # Point to itself
            self.head = new_node
            return
        
        # Find the last node
        current = self.head
        while current.next != self.head:
            current = current.next
        
        # Update links
        current.next = new_node
        new_node.next = self.head
    
    def delete_node(self, key):
        if self.head is None:
            return False
        
        # If head node itself holds the key
        if self.head.data == key:
            # If there is only one node
            if self.head.next == self.head:
                self.head = None
                return True
            
            # Find the last node
            current = self.head
            while current.next != self.head:
                current = current.next
            
            # Update head and last node's next
            current.next = self.head.next
            self.head = self.head.next
            return True
        
        # Search for the key
        prev = self.head
        current = self.head.next
        
        while current != self.head:
            if current.data == key:
                prev.next = current.next
                return True
            prev = current
            current = current.next
        
        return False  # Key not found
    
    def search(self, key):
        if self.head is None:
            return -1
        
        current = self.head
        position = 0
        
        while True:
            if current.data == key:
                return position
            current = current.next
            position += 1
            if current == self.head:
                break
        
        return -1  # Not found
    
    def reverse(self):
        if self.head is None:
            return
        
        prev = None
        current = self.head
        next_node = None
        
        # Find the last node
        last = self.head
        while last.next != self.head:
            last = last.next
        
        # Reverse the links
        while True:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
            if current == self.head:
                break
        
        # Update head and last node's next
        self.head.next = prev
        self.head = prev
    
    def display(self):
        if self.head is None:
            print("List is empty")
            return
        
        current = self.head
        while True:
            print(current.data, end=" ")
            current = current.next
            if current == self.head:
                break
        print()

def main():
    cll = CircularLinkedList()
    
    while True:
        print("\\nCircular Linked List Operations:")
        print("1. Insert at beginning")
        print("2. Insert at end")
        print("3. Delete a node")
        print("4. Search for an element")
        print("5. Reverse the list")
        print("6. Display the list")
        print("7. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to insert: "))
            cll.insert_at_beginning(data)
        elif choice == 2:
            data = int(input("Enter data to insert: "))
            cll.insert_at_end(data)
        elif choice == 3:
            data = int(input("Enter data to delete: "))
            if cll.delete_node(data):
                print(f"{data} deleted successfully")
            else:
                print(f"{data} not found")
        elif choice == 4:
            data = int(input("Enter data to search: "))
            pos = cll.search(data)
            if pos != -1:
                print(f"{data} found at position {pos}")
            else:
                print(f"{data} not found")
        elif choice == 5:
            cll.reverse()
            print("List reversed")
        elif choice == 6:
            print("Current list:", end=" ")
            cll.display()
        elif choice == 7:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 2
Enter data to insert: 10

Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 2
Enter data to insert: 20

Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 1
Enter data to insert: 5

Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 6
Current list: 5 10 20

Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 5
List reversed

Circular Linked List Operations:
1. Insert at beginning
2. Insert at end
3. Delete a node
4. Search for an element
5. Reverse the list
6. Display the list
7. Exit
Enter your choice: 6
Current list: 20 10 5
            </pre>
        </div>
      `,
    },
    {
      question: "6. Perform Stack operations using Linked List implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.size = 0
    
    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top
        self.top = new_node
        self.size += 1
        print(f"{data} pushed to stack")
    
    def pop(self):
        if self.is_empty():
            print("Stack Underflow")
            return None
        
        popped = self.top.data
        self.top = self.top.next
        self.size -= 1
        return popped
    
    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.top.data
    
    def is_empty(self):
        return self.top is None
    
    def get_size(self):
        return self.size
    
    def display(self):
        if self.is_empty():
            print("Stack is empty")
            return
        
        temp = self.top
        print("Stack elements (top to bottom):", end=" ")
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

def main():
    stack = Stack()
    
    while True:
        print("\\nStack Operations (Linked List Implementation):")
        print("1. Push")
        print("2. Pop")
        print("3. Peek")
        print("4. Check if empty")
        print("5. Get size")
        print("6. Display")
        print("7. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to push: "))
            stack.push(data)
        elif choice == 2:
            popped = stack.pop()
            if popped is not None:
                print(f"Popped: {popped}")
        elif choice == 3:
            top = stack.peek()
            if top is not None:
                print(f"Top element: {top}")
        elif choice == 4:
            if stack.is_empty():
                print("Stack is empty")
            else:
                print("Stack is not empty")
        elif choice == 5:
            print(f"Stack size: {stack.get_size()}")
        elif choice == 6:
            stack.display()
        elif choice == 7:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Stack Operations (Linked List Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Get size
6. Display
7. Exit
Enter your choice: 1
Enter data to push: 10
10 pushed to stack

Stack Operations (Linked List Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Get size
6. Display
7. Exit
Enter your choice: 1
Enter data to push: 20
20 pushed to stack

Stack Operations (Linked List Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Get size
6. Display
7. Exit
Enter your choice: 6
Stack elements (top to bottom): 20 10

Stack Operations (Linked List Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Get size
6. Display
7. Exit
Enter your choice: 2
Popped: 20

Stack Operations (Linked List Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Get size
6. Display
7. Exit
Enter your choice: 6
Stack elements (top to bottom): 10
            </pre>
        </div>
      `,
    },
    {
      question: "7. Perform Stack operations using Array implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Stack:
    def __init__(self, capacity=100):
        self.capacity = capacity
        self.stack = [None] * capacity
        self.top = -1
    
    def push(self, data):
        if self.is_full():
            print("Stack Overflow")
            return False
        
        self.top += 1
        self.stack[self.top] = data
        print(f"{data} pushed to stack")
        return True
    
    def pop(self):
        if self.is_empty():
            print("Stack Underflow")
            return None
        
        popped = self.stack[self.top]
        self.top -= 1
        return popped
    
    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.stack[self.top]
    
    def is_empty(self):
        return self.top == -1
    
    def is_full(self):
        return self.top == self.capacity - 1
    
    def get_size(self):
        return self.top + 1
    
    def display(self):
        if self.is_empty():
            print("Stack is empty")
            return
        
        print("Stack elements (top to bottom):", end=" ")
        for i in range(self.top, -1, -1):
            print(self.stack[i], end=" ")
        print()

def main():
    stack = Stack()
    
    while True:
        print("\\nStack Operations (Array Implementation):")
        print("1. Push")
        print("2. Pop")
        print("3. Peek")
        print("4. Check if empty")
        print("5. Check if full")
        print("6. Get size")
        print("7. Display")
        print("8. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to push: "))
            stack.push(data)
        elif choice == 2:
            popped = stack.pop()
            if popped is not None:
                print(f"Popped: {popped}")
        elif choice == 3:
            top = stack.peek()
            if top is not None:
                print(f"Top element: {top}")
        elif choice == 4:
            if stack.is_empty():
                print("Stack is empty")
            else:
                print("Stack is not empty")
        elif choice == 5:
            if stack.is_full():
                print("Stack is full")
            else:
                print("Stack is not full")
        elif choice == 6:
            print(f"Stack size: {stack.get_size()}")
        elif choice == 7:
            stack.display()
        elif choice == 8:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Stack Operations (Array Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Check if full
6. Get size
7. Display
8. Exit
Enter your choice: 1
Enter data to push: 10
10 pushed to stack

Stack Operations (Array Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Check if full
6. Get size
7. Display
8. Exit
Enter your choice: 1
Enter data to push: 20
20 pushed to stack

Stack Operations (Array Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Check if full
6. Get size
7. Display
8. Exit
Enter your choice: 7
Stack elements (top to bottom): 20 10

Stack Operations (Array Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Check if full
6. Get size
7. Display
8. Exit
Enter your choice: 2
Popped: 20

Stack Operations (Array Implementation):
1. Push
2. Pop
3. Peek
4. Check if empty
5. Check if full
6. Get size
7. Display
8. Exit
Enter your choice: 7
Stack elements (top to bottom): 10
            </pre>
        </div>
      `,
    },
    {
      question: "8. Perform Queues operations using Circular Array implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class CircularQueue:
    def __init__(self, capacity=5):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = -1
        self.rear = -1
        self.size = 0
    
    def enqueue(self, data):
        if self.is_full():
            print("Queue is full")
            return False
        
        if self.is_empty():
            self.front = 0
        
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = data
        self.size += 1
        print(f"{data} enqueued to queue")
        return True
    
    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        
        data = self.queue[self.front]
        
        if self.front == self.rear:  # Last element
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity
        
        self.size -= 1
        return data
    
    def get_front(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.queue[self.front]
    
    def get_rear(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.queue[self.rear]
    
    def is_empty(self):
        return self.size == 0
    
    def is_full(self):
        return self.size == self.capacity
    
    def get_size(self):
        return self.size
    
    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        
        print("Queue elements (front to rear):", end=" ")
        i = self.front
        count = 0
        
        while count < self.size:
            print(self.queue[i], end=" ")
            i = (i + 1) % self.capacity
            count += 1
        print()

def main():
    queue = CircularQueue()
    
    while True:
        print("\\nCircular Queue Operations:")
        print("1. Enqueue")
        print("2. Dequeue")
        print("3. Get front")
        print("4. Get rear")
        print("5. Check if empty")
        print("6. Check if full")
        print("7. Get size")
        print("8. Display")
        print("9. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to enqueue: "))
            queue.enqueue(data)
        elif choice == 2:
            dequeued = queue.dequeue()
            if dequeued is not None:
                print(f"Dequeued: {dequeued}")
        elif choice == 3:
            front = queue.get_front()
            if front is not None:
                print(f"Front element: {front}")
        elif choice == 4:
            rear = queue.get_rear()
            if rear is not None:
                print(f"Rear element: {rear}")
        elif choice == 5:
            if queue.is_empty():
                print("Queue is empty")
            else:
                print("Queue is not empty")
        elif choice == 6:
            if queue.is_full():
                print("Queue is full")
            else:
                print("Queue is not full")
        elif choice == 7:
            print(f"Queue size: {queue.get_size()}")
        elif choice == 8:
            queue.display()
        elif choice == 9:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Circular Queue Operations:
1. Enqueue
2. Dequeue
3. Get front
4. Get rear
5. Check if empty
6. Check if full
7. Get size
8. Display
9. Exit
Enter your choice: 1
Enter data to enqueue: 10
10 enqueued to queue

Circular Queue Operations:
1. Enqueue
2. Dequeue
3. Get front
4. Get rear
5. Check if empty
6. Check if full
7. Get size
8. Display
9. Exit
Enter your choice: 1
Enter data to enqueue: 20
20 enqueued to queue

Circular Queue Operations:
1. Enqueue
2. Dequeue
3. Get front
4. Get rear
5. Check if empty
6. Check if full
7. Get size
8. Display
9. Exit
Enter your choice: 8
Queue elements (front to rear): 10 20

Circular Queue Operations:
1. Enqueue
2. Dequeue
3. Get front
4. Get rear
5. Check if empty
6. Check if full
7. Get size
8. Display
9. Exit
Enter your choice: 2
Dequeued: 10

Circular Queue Operations:
1. Enqueue
2. Dequeue
3. Get front
4. Get rear
5. Check if empty
6. Check if full
7. Get size
8. Display
9. Exit
Enter your choice: 8
Queue elements (front to rear): 20
            </pre>
        </div>
      `,
    },
    {
      question: "9. Create and perform different operations on Double-ended Queues using Linked List implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class Deque:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0
    
    def insert_front(self, data):
        new_node = Node(data)
        
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            new_node.next = self.front
            self.front.prev = new_node
            self.front = new_node
        
        self.size += 1
        print(f"{data} inserted at front")
    
    def insert_rear(self, data):
        new_node = Node(data)
        
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            new_node.prev = self.rear
            self.rear.next = new_node
            self.rear = new_node
        
        self.size += 1
        print(f"{data} inserted at rear")
    
    def delete_front(self):
        if self.is_empty():
            print("Deque is empty")
            return None
        
        data = self.front.data
        
        if self.front == self.rear:  # Only one element
            self.front = self.rear = None
        else:
            self.front = self.front.next
            self.front.prev = None
        
        self.size -= 1
        return data
    
    def delete_rear(self):
        if self.is_empty():
            print("Deque is empty")
            return None
        
        data = self.rear.data
        
        if self.front == self.rear:  # Only one element
            self.front = self.rear = None
        else:
            self.rear = self.rear.prev
            self.rear.next = None
        
        self.size -= 1
        return data
    
    def get_front(self):
        if self.is_empty():
            print("Deque is empty")
            return None
        return self.front.data
    
    def get_rear(self):
        if self.is_empty():
            print("Deque is empty")
            return None
        return self.rear.data
    
    def is_empty(self):
        return self.front is None
    
    def get_size(self):
        return self.size
    
    def display(self):
        if self.is_empty():
            print("Deque is empty")
            return
        
        print("Deque elements (front to rear):", end=" ")
        current = self.front
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

def main():
    deque = Deque()
    
    while True:
        print("\\nDouble-ended Queue Operations:")
        print("1. Insert at front")
        print("2. Insert at rear")
        print("3. Delete from front")
        print("4. Delete from rear")
        print("5. Get front")
        print("6. Get rear")
        print("7. Check if empty")
        print("8. Get size")
        print("9. Display")
        print("10. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            data = int(input("Enter data to insert at front: "))
            deque.insert_front(data)
        elif choice == 2:
            data = int(input("Enter data to insert at rear: "))
            deque.insert_rear(data)
        elif choice == 3:
            deleted = deque.delete_front()
            if deleted is not None:
                print(f"Deleted from front: {deleted}")
        elif choice == 4:
            deleted = deque.delete_rear()
            if deleted is not None:
                print(f"Deleted from rear: {deleted}")
        elif choice == 5:
            front = deque.get_front()
            if front is not None:
                print(f"Front element: {front}")
        elif choice == 6:
            rear = deque.get_rear()
            if rear is not None:
                print(f"Rear element: {rear}")
        elif choice == 7:
            if deque.is_empty():
                print("Deque is empty")
            else:
                print("Deque is not empty")
        elif choice == 8:
            print(f"Deque size: {deque.get_size()}")
        elif choice == 9:
            deque.display()
        elif choice == 10:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Double-ended Queue Operations:
1. Insert at front
2. Insert at rear
3. Delete from front
4. Delete from rear
5. Get front
6. Get rear
7. Check if empty
8. Get size
9. Display
10. Exit
Enter your choice: 1
Enter data to insert at front: 10
10 inserted at front

Double-ended Queue Operations:
1. Insert at front
2. Insert at rear
3. Delete from front
4. Delete from rear
5. Get front
6. Get rear
7. Check if empty
8. Get size
9. Display
10. Exit
Enter your choice: 2
Enter data to insert at rear: 20
20 inserted at rear

Double-ended Queue Operations:
1. Insert at front
2. Insert at rear
3. Delete from front
4. Delete from rear
5. Get front
6. Get rear
7. Check if empty
8. Get size
9. Display
10. Exit
Enter your choice: 1
Enter data to insert at front: 5
5 inserted at front

Double-ended Queue Operations:
1. Insert at front
2. Insert at rear
3. Delete from front
4. Delete from rear
5. Get front
6. Get rear
7. Check if empty
8. Get size
9. Display
10. Exit
Enter your choice: 9
Deque elements (front to rear): 5 10 20
            </pre>
        </div>
      `,
    },
    {
      question: "10. WAP to calculate factorial and to compute the factors of a given no. (i) using recursion, (ii) using iteration",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def factorial_recursive(n):
    """Calculate factorial using recursion"""
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    """Calculate factorial using iteration"""
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def factors_recursive(n, i=1, result=None):
    """Find factors using recursion"""
    if result is None:
        result = []
    
    if i > n:
        return result
    
    if n % i == 0:
        result.append(i)
    
    return factors_recursive(n, i + 1, result)

def factors_iterative(n):
    """Find factors using iteration"""
    factors = []
    for i in range(1, n + 1):
        if n % i == 0:
            factors.append(i)
    return factors

def main():
    while True:
        print("\\nFactorial and Factors Calculator:")
        print("1. Calculate factorial (recursive)")
        print("2. Calculate factorial (iterative)")
        print("3. Find factors (recursive)")
        print("4. Find factors (iterative)")
        print("5. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice in [1, 2, 3, 4]:
            n = int(input("Enter a number: "))
            
            if choice == 1:
                print(f"Factorial of {n} (recursive): {factorial_recursive(n)}")
            elif choice == 2:
                print(f"Factorial of {n} (iterative): {factorial_iterative(n)}")
            elif choice == 3:
                print(f"Factors of {n} (recursive): {factors_recursive(n)}")
            elif choice == 4:
                print(f"Factors of {n} (iterative): {factors_iterative(n)}")
        elif choice == 5:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Factorial and Factors Calculator:
1. Calculate factorial (recursive)
2. Calculate factorial (iterative)
3. Find factors (recursive)
4. Find factors (iterative)
5. Exit
Enter your choice: 1
Enter a number: 5
Factorial of 5 (recursive): 120

Factorial and Factors Calculator:
1. Calculate factorial (recursive)
2. Calculate factorial (iterative)
3. Find factors (recursive)
4. Find factors (iterative)
5. Exit
Enter your choice: 4
Enter a number: 12
Factors of 12 (iterative): [1, 2, 3, 4, 6, 12]
            </pre>
        </div>
      `,
    },
    {
      question: "11. (ii) WAP to display fibonacci series (i) using recursion, (ii) using iteration",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def fibonacci_recursive(n):
    """Generate fibonacci number at position n using recursion"""
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

def fibonacci_series_recursive(n):
    """Generate fibonacci series up to n terms using recursion"""
    return [fibonacci_recursive(i) for i in range(n)]

def fibonacci_iterative(n):
    """Generate fibonacci series up to n terms using iteration"""
    fib_series = [0, 1]
    
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    for i in range(2, n):
        fib_series.append(fib_series[i-1] + fib_series[i-2])
    
    return fib_series

def main():
    while True:
        print("\\nFibonacci Series Generator:")
        print("1. Generate fibonacci series (recursive)")
        print("2. Generate fibonacci series (iterative)")
        print("3. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice in [1, 2]:
            n = int(input("Enter number of terms: "))
            
            if choice == 1:
                print(f"Fibonacci series (recursive): {fibonacci_series_recursive(n)}")
            elif choice == 2:
                print(f"Fibonacci series (iterative): {fibonacci_iterative(n)}")
        elif choice == 3:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Fibonacci Series Generator:
1. Generate fibonacci series (recursive)
2. Generate fibonacci series (iterative)
3. Exit
Enter your choice: 2
Enter number of terms: 8
Fibonacci series (iterative): [0, 1, 1, 2, 3, 5, 8, 13]
            </pre>
        </div>
      `,
    },
    {
      question: "12. WAP to calculate GCD of 2 number (i) with recursion (ii) without recursion",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def gcd_recursive(a, b):
    """Calculate GCD using recursion (Euclidean algorithm)"""
    if b == 0:
        return a
    return gcd_recursive(b, a % b)

def gcd_iterative(a, b):
    """Calculate GCD using iteration (Euclidean algorithm)"""
    while b:
        a, b = b, a % b
    return a

def main():
    while True:
        print("\\nGCD Calculator:")
        print("1. Calculate GCD (recursive)")
        print("2. Calculate GCD (iterative)")
        print("3. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice in [1, 2]:
            a = int(input("Enter first number: "))
            b = int(input("Enter second number: "))
            
            if choice == 1:
                print(f"GCD of {a} and {b} (recursive): {gcd_recursive(a, b)}")
            elif choice == 2:
                print(f"GCD of {a} and {b} (iterative): {gcd_iterative(a, b)}")
        elif choice == 3:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
GCD Calculator:
1. Calculate GCD (recursive)
2. Calculate GCD (iterative)
3. Exit
Enter your choice: 1
Enter first number: 48
Enter second number: 18
GCD of 48 and 18 (recursive): 6
            </pre>
        </div>
      `,
    },
    {
      question: "13. WAP to create a Binary Search Tree and include following operations in tree: (a) Insertion (Recursive and Iterative Implementation) (b) Deletion by copying (c) Deletion by Merging (d) Search a no. in BST (e) Display its preorder, postorder and inorder traversals Recursively (f) Display its preorder, postorder and inorder traversals Iteratively (g) Display its level-by-level traversals (h) Count the non-leaf nodes and leaf nodes (i) Display height of tree (j) Create a mirror image of tree (k) Check whether two BSTs are equal or not",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None
    
    # Recursive insertion
    def insert_recursive(self, root, key):
        if root is None:
            return Node(key)
        
        if key < root.key:
            root.left = self.insert_recursive(root.left, key)
        elif key > root.key:
            root.right = self.insert_recursive(root.right, key)
        
        return root
    
    # Wrapper for recursive insertion
    def insert(self, key):
        self.root = self.insert_recursive(self.root, key)
        print(f"{key} inserted recursively")
    
    # Iterative insertion
    def insert_iterative(self, key):
        new_node = Node(key)
        
        if self.root is None:
            self.root = new_node
            print(f"{key} inserted iteratively")
            return
        
        current = self.root
        parent = None
        
        while current:
            parent = current
            if key < current.key:
                current = current.left
            elif key > current.key:
                current = current.right
            else:  # Duplicate key
                print(f"{key} already exists")
                return
        
        if key < parent.key:
            parent.left = new_node
        else:
            parent.right = new_node
        
        print(f"{key} inserted iteratively")
    
    # Find minimum value node
    def min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current
    
    # Deletion by copying
    def delete_by_copying(self, root, key):
        if root is None:
            return root
        
        if key < root.key:
            root.left = self.delete_by_copying(root.left, key)
        elif key > root.key:
            root.right = self.delete_by_copying(root.right, key)
        else:
            # Node with only one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            
            # Node with two children: Get the inorder successor
            temp = self.min_value_node(root.right)
            
            # Copy the inorder successor's content to this node
            root.key = temp.key
            
            # Delete the inorder successor
            root.right = self.delete_by_copying(root.right, temp.key)
        
        return root
    
    # Wrapper for deletion by copying
    def delete(self, key):
        self.root = self.delete_by_copying(self.root, key)
        print(f"{key} deleted by copying")
    
    # Deletion by merging
    def delete_by_merging(self, root, key):
        if root is None:
            return root
        
        if key < root.key:
            root.left = self.delete_by_merging(root.left, key)
        elif key > root.key:
            root.right = self.delete_by_merging(root.right, key)
        else:
            # Node with only one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            
            # Node with two children
            # Find the rightmost node in the left subtree
            current = root.left
            while current.right:
                current = current.right
            
            # Connect the right subtree to the rightmost node of the left subtree
            current.right = root.right
            
            # Replace the node to be deleted with its left child
            return root.left
        
        return root
    
    # Wrapper for deletion by merging
    def delete_by_merge(self, key):
        self.root = self.delete_by_merging(self.root, key)
        print(f"{key} deleted by merging")
    
    # Search operation
    def search(self, key):
        result = self._search_recursive(self.root, key)
        if result:
            print(f"{key} found in the tree")
        else:
            print(f"{key} not found in the tree")
        return result
    
    def _search_recursive(self, root, key):
        if root is None or root.key == key:
            return root
        
        if key < root.key:
            return self._search_recursive(root.left, key)
        return self._search_recursive(root.right, key)
    
    # Iterative search
    def search_iterative(self, key):
        current = self.root
        
        while current:
            if current.key == key:
                print(f"{key} found in the tree")
                return current
            elif key < current.key:
                current = current.left
            else:
                current = current.right
        
        print(f"{key} not found in the tree")
        return None
    
    # Recursive traversals
    def inorder_recursive(self, root, result=None):
        if result is None:
            result = []
        
        if root:
            self.inorder_recursive(root.left, result)
            result.append(root.key)
            self.inorder_recursive(root.right, result)
        
        return result
    
    def preorder_recursive(self, root, result=None):
        if result is None:
            result = []
        
        if root:
            result.append(root.key)
            self.preorder_recursive(root.left, result)
            self.preorder_recursive(root.right, result)
        
        return result
    
    def postorder_recursive(self, root, result=None):
        if result is None:
            result = []
        
        if root:
            self.postorder_recursive(root.left, result)
            self.postorder_recursive(root.right, result)
            result.append(root.key)
        
        return result
    
    # Iterative traversals
    def inorder_iterative(self):
        result = []
        stack = []
        current = self.root
        
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
            
            current = stack.pop()
            result.append(current.key)
            current = current.right
        
        return result
    
    def preorder_iterative(self):
        if not self.root:
            return []
        
        result = []
        stack = [self.root]
        
        while stack:
            node = stack.pop()
            result.append(node.key)
            
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        
        return result
    
    def postorder_iterative(self):
        if not self.root:
            return []
        
        result = []
        stack1 = [self.root]
        stack2 = [] 
            return []
        
        result = []
        stack1 = [self.root]
        stack2 = []
        
        while stack1:
            node = stack1.pop()
            stack2.append(node)
            
            if node.left:
                stack1.append(node.left)
            if node.right:
                stack1.append(node.right)
        
        while stack2:
            node = stack2.pop()
            result.append(node.key)
        
        return result
    
    # Level order traversal
    def level_order_traversal(self):
        if not self.root:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            node = queue.pop(0)
            result.append(node.key)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        return result
    
    # Count leaf and non-leaf nodes
    def count_nodes(self):
        leaf_count, non_leaf_count = self._count_nodes_recursive(self.root)
        return leaf_count, non_leaf_count
    
    def _count_nodes_recursive(self, root):
        if root is None:
            return 0, 0
        
        if root.left is None and root.right is None:
            return 1, 0  # Leaf node
        
        left_leaf, left_non_leaf = self._count_nodes_recursive(root.left)
        right_leaf, right_non_leaf = self._count_nodes_recursive(root.right)
        
        return left_leaf + right_leaf, left_non_leaf + right_non_leaf + 1
    
    # Height of the tree
    def height(self):
        return self._height_recursive(self.root)
    
    def _height_recursive(self, root):
        if root is None:
            return 0
        
        left_height = self._height_recursive(root.left)
        right_height = self._height_recursive(root.right)
        
        return max(left_height, right_height) + 1
    
    # Create mirror image
    def mirror(self):
        self._mirror_recursive(self.root)
        print("Tree mirrored")
    
    def _mirror_recursive(self, root):
        if root is None:
            return
        
        # Swap left and right subtrees
        root.left, root.right = root.right, root.left
        
        # Recursively mirror the subtrees
        self._mirror_recursive(root.left)
        self._mirror_recursive(root.right)
    
    # Check if two BSTs are equal
    @staticmethod
    def are_equal(root1, root2):
        if root1 is None and root2 is None:
            return True
        
        if root1 is None or root2 is None:
            return False
        
        return (root1.key == root2.key and
                BinarySearchTree.are_equal(root1.left, root2.left) and
                BinarySearchTree.are_equal(root1.right, root2.right))

def main():
    bst = BinarySearchTree()
    
    while True:
        print("\\nBinary Search Tree Operations:")
        print("1. Insert (Recursive)")
        print("2. Insert (Iterative)")
        print("3. Delete by Copying")
        print("4. Delete by Merging")
        print("5. Search")
        print("6. Inorder Traversal (Recursive)")
        print("7. Preorder Traversal (Recursive)")
        print("8. Postorder Traversal (Recursive)")
        print("9. Inorder Traversal (Iterative)")
        print("10. Preorder Traversal (Iterative)")
        print("11. Postorder Traversal (Iterative)")
        print("12. Level Order Traversal")
        print("13. Count Leaf and Non-leaf Nodes")
        print("14. Height of Tree")
        print("15. Create Mirror Image")
        print("16. Check if Two BSTs are Equal")
        print("17. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            key = int(input("Enter key to insert: "))
            bst.insert(key)
        elif choice == 2:
            key = int(input("Enter key to insert: "))
            bst.insert_iterative(key)
        elif choice == 3:
            key = int(input("Enter key to delete: "))
            bst.delete(key)
        elif choice == 4:
            key = int(input("Enter key to delete: "))
            bst.delete_by_merge(key)
        elif choice == 5:
            key = int(input("Enter key to search: "))
            bst.search(key)
        elif choice == 6:
            print("Inorder Traversal (Recursive):", bst.inorder_recursive(bst.root))
        elif choice == 7:
            print("Preorder Traversal (Recursive):", bst.preorder_recursive(bst.root))
        elif choice == 8:
            print("Postorder Traversal (Recursive):", bst.postorder_recursive(bst.root))
        elif choice == 9:
            print("Inorder Traversal (Iterative):", bst.inorder_iterative())
        elif choice == 10:
            print("Preorder Traversal (Iterative):", bst.preorder_iterative())
        elif choice == 11:
            print("Postorder Traversal (Iterative):", bst.postorder_iterative())
        elif choice == 12:
            print("Level Order Traversal:", bst.level_order_traversal())
        elif choice == 13:
            leaf, non_leaf = bst.count_nodes()
            print(f"Leaf nodes: {leaf}, Non-leaf nodes: {non_leaf}")
        elif choice == 14:
            print(f"Height of tree: {bst.height()}")
        elif choice == 15:
            bst.mirror()
        elif choice == 16:
            print("Creating a second BST for comparison...")
            bst2 = BinarySearchTree()
            n = int(input("Enter number of nodes for second BST: "))
            print("Enter keys for second BST:")
            for _ in range(n):
                key = int(input())
                bst2.insert(key)
            
            if BinarySearchTree.are_equal(bst.root, bst2.root):
                print("The two BSTs are equal")
            else:
                print("The two BSTs are not equal")
        elif choice == 17:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Binary Search Tree Operations:
1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Inorder Traversal (Recursive)
7. Preorder Traversal (Recursive)
8. Postorder Traversal (Recursive)
9. Inorder Traversal (Iterative)
10. Preorder Traversal (Iterative)
11. Postorder Traversal (Iterative)
12. Level Order Traversal
13. Count Leaf and Non-leaf Nodes
14. Height of Tree
15. Create Mirror Image
16. Check if Two BSTs are Equal
17. Exit
Enter your choice: 1
Enter key to insert: 50
50 inserted recursively

Binary Search Tree Operations:
1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Inorder Traversal (Recursive)
7. Preorder Traversal (Recursive)
8. Postorder Traversal (Recursive)
9. Inorder Traversal (Iterative)
10. Preorder Traversal (Iterative)
11. Postorder Traversal (Iterative)
12. Level Order Traversal
13. Count Leaf and Non-leaf Nodes
14. Height of Tree
15. Create Mirror Image
16. Check if Two BSTs are Equal
17. Exit
Enter your choice: 2
Enter key to insert: 30
30 inserted iteratively

Binary Search Tree Operations:
1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Inorder Traversal (Recursive)
7. Preorder Traversal (Recursive)
8. Postorder Traversal (Recursive)
9. Inorder Traversal (Iterative)
10. Preorder Traversal (Iterative)
11. Postorder Traversal (Iterative)
12. Level Order Traversal
13. Count Leaf and Non-leaf Nodes
14. Height of Tree
15. Create Mirror Image
16. Check if Two BSTs are Equal
17. Exit
Enter your choice: 2
Enter key to insert: 70
70 inserted iteratively

Binary Search Tree Operations:
1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Inorder Traversal (Recursive)
7. Preorder Traversal (Recursive)
8. Postorder Traversal (Recursive)
9. Inorder Traversal (Iterative)
10. Preorder Traversal (Iterative)
11. Postorder Traversal (Iterative)
12. Level Order Traversal
13. Count Leaf and Non-leaf Nodes
14. Height of Tree
15. Create Mirror Image
16. Check if Two BSTs are Equal
17. Exit
Enter your choice: 6
Inorder Traversal (Recursive): [30, 50, 70]
            </pre>
        </div>
      `,
    },
    {
      question: "14. WAP to convert the Sparse Matrix into non-zero form and vice-versa.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
def convert_to_sparse(matrix):
    """Convert a regular matrix to sparse matrix representation"""
    rows = len(matrix)
    cols = len(matrix[0]) if rows > 0 else 0
    
    # Count non-zero elements
    non_zero_count = sum(1 for i in range(rows) for j in range(cols) if matrix[i][j] != 0)
    
    # Create sparse matrix representation [row, col, value]
    sparse = [[rows, cols, non_zero_count]]
    
    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] != 0:
                sparse.append([i, j, matrix[i][j]])
    
    return sparse

def convert_to_regular(sparse):
    """Convert sparse matrix representation to regular matrix"""
    rows, cols, _ = sparse[0]
    
    # Create a matrix filled with zeros
    matrix = [[0 for _ in range(cols)] for _ in range(rows)]
    
    # Fill in the non-zero values
    for i in range(1, len(sparse)):
        row, col, value = sparse[i]
        matrix[row][col] = value
    
    return matrix

def display_matrix(matrix):
    """Display a regular matrix"""
    for row in matrix:
        print(row)

def display_sparse(sparse):
    """Display a sparse matrix representation"""
    print("Row\\tColumn\\tValue")
    for i, row in enumerate(sparse):
        if i == 0:
            print(f"Dimensions: {row[0]}x{row[1]}, Non-zero elements: {row[2]}")
        else:
            print(f"{row[0]}\\t{row[1]}\\t{row[2]}")

def main():
    while True:
        print("\\nSparse Matrix Operations:")
        print("1. Convert Regular Matrix to Sparse Matrix")
        print("2. Convert Sparse Matrix to Regular Matrix")
        print("3. Exit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            rows = int(input("Enter number of rows: "))
            cols = int(input("Enter number of columns: "))
            
            print("Enter the matrix elements row by row:")
            matrix = []
            for i in range(rows):
                row = list(map(int, input().split()))
                matrix.append(row)
            
            sparse = convert_to_sparse(matrix)
            
            print("\\nRegular Matrix:")
            display_matrix(matrix)
            
            print("\\nSparse Matrix Representation:")
            display_sparse(sparse)
            
        elif choice == 2:
            non_zero_count = int(input("Enter number of non-zero elements: "))
            rows = int(input("Enter number of rows: "))
            cols = int(input("Enter number of columns: "))
            
            sparse = [[rows, cols, non_zero_count]]
            
            print("Enter the non-zero elements (row, column, value):")
            for _ in range(non_zero_count):
                row, col, value = map(int, input().split())
                sparse.append([row, col, value])
            
            matrix = convert_to_regular(sparse)
            
            print("\\nSparse Matrix Representation:")
            display_sparse(sparse)
            
            print("\\nRegular Matrix:")
            display_matrix(matrix)
            
        elif choice == 3:
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Sparse Matrix Operations:
1. Convert Regular Matrix to Sparse Matrix
2. Convert Sparse Matrix to Regular Matrix
3. Exit
Enter your choice: 1
Enter number of rows: 3
Enter number of columns: 3
Enter the matrix elements row by row:
1 0 0
0 2 0
0 0 3

Regular Matrix:
[1, 0, 0]
[0, 2, 0]
[0, 0, 3]

Sparse Matrix Representation:
Row	Column	Value
Dimensions: 3x3, Non-zero elements: 3
0	0	1
1	1	2
2	2	3
            </pre>
        </div>
      `,
    },
    {
      question: "15. WAP to reverse the order of the elements in the stack using additional stack.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def display(self):
        return self.items.copy()

def reverse_stack_using_stack(stack):
    """Reverse a stack using an additional stack"""
    aux_stack = Stack()
    
    # Pop from original stack and push to auxiliary stack
    while not stack.is_empty():
        aux_stack.push(stack.pop())
    
    return aux_stack

def main():
    stack = Stack()
    
    # Push some elements to the stack
    elements = list(map(int, input("Enter elements to push to stack (space-separated): ").split()))
    for element in elements:
        stack.push(element)
    
    print("Original stack:", stack.display())
    
    # Reverse the stack
    reversed_stack = reverse_stack_using_stack(stack)
    
    print("Reversed stack:", reversed_stack.display())

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter elements to push to stack (space-separated): 1 2 3 4 5
Original stack: [1, 2, 3, 4, 5]
Reversed stack: [5, 4, 3, 2, 1]
            </pre>
        </div>
      `,
    },
    {
      question: "16. WAP to reverse the order of the elements in the stack using additional Queue.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-python">
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def display(self):
        return self.items.copy()

class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def display(self):
        return self.items.copy()

def reverse_stack_using_queue(stack):
    """Reverse a stack using an additional queue"""
    queue = Queue()
    
    # Pop from stack and enqueue to queue
    while not stack.is_empty():
        queue.enqueue(stack.pop())
    
    # Dequeue from queue and push back to stack
    while not queue.is_empty():
        stack.push(queue.dequeue())
    
    return stack

def main():
    stack = Stack()
    
    # Push some elements to the stack
    elements = list(map(int, input("Enter elements to push to stack (space-separated): ").split()))
    for element in elements:
        stack.push(element)
    
    print("Original stack:", stack.display())
    
    # Reverse the stack
    reversed_stack = reverse_stack_using_queue(stack)
    
    print("Reversed stack:", reversed_stack.display())

if __name__ == "__main__":
    main()
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter elements to push to stack (space-separated): 1 2 3 4 5
Original stack: [1, 2, 3, 4, 5]
Reversed stack: [5, 4, 3, 2, 1]
            </pre>
        </div>
      `,
    },
  ]
};

// Vanilla JS implementation with loader
function renderQuestions() {
  const container = document.getElementById("questions-container");
  if (!container) {
    console.error('Element with ID "questions-container" not found.');
    return;
  }

  // Hide loader after questions are rendered
  const loader = document.getElementById("loader");
  
  questionData.questions.forEach((q) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("mb-6");
    questionElement.innerHTML = `
      <h2 class="text-lg font-semibold mb-2">${q.question}</h2>
      ${q.solution}
    `;
    container.appendChild(questionElement);
  });
  
  // Apply syntax highlighting
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
  
  // Hide loader after questions are rendered
  if (loader) {
    loader.style.display = "none";
  }
}

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      button.innerText = "Copied!"; // Change button text
      setTimeout(() => {
        button.innerText = "Copy Code"; // Reset after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
    });
}

// Create and show loader when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");
  if (container) {
    // Create loader element
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.className = "flex justify-center items-center py-20";
    loader.innerHTML = `
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
      <p class="ml-4 text-lg font-medium text-blue-900">Loading ...</p>
    `;
    container.appendChild(loader);
    
    // Render questions after a small delay to ensure loader is visible
    setTimeout(renderQuestions, 800);
  }
});
