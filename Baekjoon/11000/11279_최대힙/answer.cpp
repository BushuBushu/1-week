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