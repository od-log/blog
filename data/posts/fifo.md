큐는 First In First Out 자료 구조이다.

줄을 서는 것처럼 먼저 들어온 데이터가 먼저 처리된다.

큐는 백그라운드 작업, 리소스를 업로드할 때, 프린트 작업, 작업처리 시스템에서 활용된다.

## Enqueue

큐의 끝(rear)에 데이터를 추가한다.

## Dequeue

큐에 먼저 들어온 순서대로 데이터를 제거한다.

## 큐를 구현하는 방법

큐는 push(), shift()를 통해 배열로 구현할 수 있지만 데이터가 제거될 때 마다 인덱스가 다시 부여되기 때문에 성능이 좋지 않다.

연결 리스트를 통해 큐를 구현할 수 있다.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

## BigO

큐의 Enqueue와 Dequeue는 O(1)의 값을 가진다.
