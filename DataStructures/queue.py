class Queue:

    def __init__(self):
        self.queue = []

    # Add an element
    def enqueue(self, item):
        self.queue.append(item)

    # Remove an element
    def dequeue(self):
        if len(self.queue) < 1:
            return None
        return self.queue.pop(0)

    # Display  the queue
    def display(self):
        print(self.queue)

    def size(self):
        return len(self.queue)

# using built-in queue

from collections import deque

q = deque() #can be stack or queue

q.appendleft(5)
q.appendleft(8)
q.appendleft(27)
q.pop()