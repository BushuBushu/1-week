import sys
from queue import Queue

def getGraph(n, m):
    graph = {}
    for key in range(1, n+1):
        graph[key] = set()
    for _ in range(m):
        key, value = input().split()
        graph[key] .add(value)
    return graph

def dfs(graph, v):
    start = v

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n, m, v = map(int, input().split())
    graph = getGraph()
    print(dfs(graph, v))
