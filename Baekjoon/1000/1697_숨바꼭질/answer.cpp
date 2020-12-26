#include <stdio.h>
#include <queue>
#define MAX_N 200001
using namespace std;

bool visited[MAX_N];
int X[3] = {1, -1, 2};
queue<Node> q;

struct Node
{
  int x, time;
};

int bfs(int x, int tx)
{
  Node currNode = {x, 0};
  q.push(currNode);
  visited[x] = true;
  while (!q.empty())
  {
    currNode = q.front();
    q.pop();
    if (currNode.x == tx)
    {
      return currNode.time;
    }

    int nextNode = -1;
    for (int i = 0; i < 3; i++)
    {
      if (i == 2)
      {
        nextNode = currNode.x * X[i];
      }
      else
      {
        nextNode = currNode.x + X[i];
      }
      if (nextNode < 0 || nextNode > 200000)
      {
        continue;
      }
      if (visited[nextNode] == false)
      {
        visited[nextNode] = true;
        q.push({nextNode, currNode.time + 1});
      }
    }
  }
}

int main()
{
  int n, m, num;
  scanf("%d %d", &n, &m);
  printf("%d", bfs(n, m));
  return 0;
}