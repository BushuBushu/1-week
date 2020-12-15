def solution():
    pos = {'U': (0, -1),'D': (0, 1),'R': (1, 0), 'L': (-1, 0)}
    now = {'x': 1, 'y': 1}
    for move in moves:
        # 방법1
        # if pos[move][0] != 0 and (0 < now['y'] + pos[move][0] < n):
        #     now['y'] += pos[move][0]
        # if pos[move][1] != 0 and (0 < now['x'] + pos[move][1] < n):
        #     now['x'] += pos[move][1]

        # 방법2
        nx, ny = now['x'], now['y']
        if move in pos.keys():
            ny += pos[move][0]
            nx += pos[move][1]
        if not (0 < nx < n) or not (0 < ny < n):
            continue
        now['x'] = nx
        now['y'] = ny
    result = ' '.join(map(str, now.values()))
    print(result)


if __name__ == "__main__":
    n = int(input())
    moves = input().split()
    solution()
