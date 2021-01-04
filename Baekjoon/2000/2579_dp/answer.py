import sys

def solution(n, stairs):
    scores = [0, ]
    if n >= 1:
        scores.append(stairs[1])
    if n >= 2:
        scores.append(stairs[1] + stairs[2])
    if n >= 3:
        scores.append(max(stairs[1] + stairs[3], stairs[2] + stairs[3]))
    if n >= 4:
        for idx in range(4, n+1):
            scores.append(max(scores[idx-3] + stairs[idx-1] + stairs[idx], scores[idx-2] + stairs[idx]))
    return scores.pop()

if __name__ == "__main__":
    n = int(input())
    stairs = [0]
    for _ in range(1, n+1):
        stairs.append(int(input()))
    print(solution(n, stairs))

