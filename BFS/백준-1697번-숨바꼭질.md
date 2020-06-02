<h2>백준 1697번 숨바꼭질</h2>

https://www.acmicpc.net/problem/1697

**struct Node**를 정의하여 **자료형 Node**인 graph를 만들고자 했다. struct Node에서 **x**는 **노드번호**를 의미한다. 이 문제를 **BFS로 해결**하고자 했기 때문에 **time**은 **bfs에서 해당 노드의 depth**를 의미한다. 

```cpp
struct Node {
	int x, time;
};
```

**자료형 bool인 배열 visited를 두어 노드의 방문여부를 체크한다.** 수빈이가 지나간 노드를 true로 체크한다. 수빈이가 동생을 찾을 수 있는 가장 빠른 시간 **time**을 구해야하기 한다. 처음 방문한 노드만 queue에 추가해준다.

```cpp
#include <stdio.h>
#include <queue>
#define MAX_N 200001
using namespace std;

bool visited[MAX_N];
int X[3] = { 1,-1, 2 };
queue <Node> q;

struct Node {
	int x, time;
};

int bfs(int x, int tx) {
	Node currNode = {x, 0};
	q.push(currNode);
	visited[x] = true;
	while (!q.empty()) {
		currNode = q.front();
		q.pop();
		if (currNode.x == tx) {
			return currNode.time;
		}
        
        int nextNode = -1;
		for (int i = 0; i < 3; i++) {
			if (i == 2) {
				nextNode = currNode.x * X[i];
			}
			else {
				nextNode = currNode.x + X[i];
			}
			if (nextNode <0  || nextNode > 200000) {
				continue;
			}
			if (visited[nextNode] == false) {
				visited[nextNode] = true;
				q.push({ nextNode, currNode.time + 1 });
			}
		}
	}

}

int main() {
	int n, m, num;
	scanf("%d %d", &n, &m);
	printf("%d", bfs(n, m));
	return 0;
}
```

