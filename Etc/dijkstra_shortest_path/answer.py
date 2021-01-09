import sys
from heapq import heappush, heappop

def dijkstra(graph, n, m, start):
    heap = []
    heappush(heap, (0, 0, start))
    time, cost = [sys.maxsize] * (n + 1), [sys.maxsize] * (n + 1)
    time[start], cost[start] = 0, 0

    while heap:
        wt, wc, index = heappop(heap)
        for e, t, c in graph[index]:
            if time[e] > wt + t and m >= wc + c:
                time[e] = wt + t
                cost[e] = wc + c
                heappush(heap, (wt + t, wc+c, e))

    return time[n]

def getGraph(n, paths):
    graph = [[] for _ in range(n + 1)]
    for start, end, time, cost in paths:
        graph[start].append((end, time, cost))
    return graph

def solution(n, m, paths):
    graph = getGraph(n, paths)
    return dijkstra(graph, n, m, 1)

if __name__ == "__main__":
    n = 5
    m = 4
    paths = [[1,2,3,2],[1,3,2,2],[2,4,1,1],[2,5,4,1],[3,5,2,3],[4,5,2,1]]
    print(solution(n, m, paths))

