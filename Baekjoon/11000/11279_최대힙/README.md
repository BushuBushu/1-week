<h1>백준 11279번 최대힙</h1>

https://www.acmicpc.net/problem/11279

<h3>간략한 Heap 설명</h3>

자료구조 **Heap**은 이진트리로, 삽입/삭제할 때 모두 O(logn)이 걸린다.

Heap은 Priority Queue를 도입한 자료구조로, <b>여러 데이터가 주어질 때, 최댓값과 최솟값을 빠르게 찾고 싶을 때</b> 사용한다.

Binary Search Tree와 다르게 Heap은 중복값을 허용하는 것을 기억해두자.

Heap은 기본적으로 배열로 나타낼 수 있다. priority queue 관련된 라이브러리를 활용해서 나타낼 수 있다.

배열로 표현할 때 인덱스 번호로 노드를 비교할 것이기 때문에 <b>인덱스 0은 안 쓴다!</b>

* 부모노드 INDEX = 자식노드 INDEX / 2

* 왼쪽자식노드 INDEX = 부모노드 INDEX * 2

* 오른쪽자식노드 INDEX = 부모노드 INDEX * 2 + 1

<h3>최대힙</h3>

<u>부모노드의 key 값 >= 자식노드의 key</u>

<h4>삽입</h4>

1. 배열의 **마지막INDEX**에 새로운 데이터를 할당한다.
2. 추가된 노드에 대한 부모 노드를 찾고, 부모노드의 값보다 추가된 노드의 값이 크면 두 노드의 위치를 서로 바꾼다.
3. 최상단 루트(root)노드까지 다 비교해본다. 이를 위해서 **자식노드INDEX에 2를 나눈 값이 부모노드INDEX가 되기 때문에 자식노드INDEX는 루트노드INDEX, 즉 1보다는 커야한다!** 

<h4>삭제</h4>

1. 루트노드INDEX, 즉 인덱스 1에 있는 값은 삭제한다. 이때 **배열에서 값이 삭제되지 않고 맨 마지막에 있는 노드와 자리를 바꾸는 것이다. 대신 Heap size(hidx)를 1만큼 줄여줘야한다.**
2. 자식노드가 2개일 때 자식노드끼리 비교하여 최댓값을 가진 노드를 결정한다.
3. 자식노드와 부모노드를 비교하여, 자식노드가 더 큰 값을 가지면 두 노드의 위치를 바꾼다.
4. **자식노드INDEX가 Heap size(hidx)보다 작거나 같을 때까지** 2,3번 과정을 반복한다.

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <algorithm>
using namespace std;
#define MAX_LEN 100001
int heap[MAX_LEN];
int answer[MAX_LEN];
int hidx = 0;
int aidx = 0;

void insertNode(int a) {
	heap[++hidx] = a;
	int child = hidx;
	int parent = child / 2;
	while (child > 1 && (heap[parent] < heap[child])) {
		swap(heap[parent], heap[child]);
		child = parent;
		parent = child / 2;
	}
}
void deleteNode(int a) {
	if (hidx < 1) {
		answer[aidx++] = 0;
		return;
	}
	else {
		answer[aidx++] = heap[1];
		swap(heap[1], heap[hidx--]);
		int parent = 1;
		int child = parent * 2;
		//child 2명 중에 큰 값을 child로 정하기  
		if (child + 1 <= hidx) {
			child = (heap[child] > heap[child + 1]) ? child : child + 1;
		}
		//1. child와 parent 비교했을 때 child가 크면 바꾸기
		//2. 그 다음 level이 있을 경우, 그 다음 level에 있는 child 중 큰 값을 child로 정한다.
		while (child <= hidx && (heap[parent] < heap[child])) {
			swap(heap[parent], heap[child]);
			parent = child;
			child = child * 2;
			if (child + 1 <= hidx) {
				child = (heap[child] > heap[child + 1]) ? child : child + 1;
			}
		}
	}
}
int main() {
	int num;
	int a;
	scanf("%d", &num);
	heap[0] = -1;
	for (int i = 0; i < num; i++) {
		scanf("%d",&a);
		if (a == 0) {
			deleteNode(a);
		}
		else {
			insertNode(a);
		}
	}
	for (int i = 0; i < aidx; i++) {
		printf("%d\n", answer[i]);
	}
	return 0;
}
```

