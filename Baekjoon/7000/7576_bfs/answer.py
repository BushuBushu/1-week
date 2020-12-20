import sys
from queue import Queue

# def solution():
    # print(tmts)

def find_all_index(data, target):
    if target not in data:
        return
    result, _data = [], data
    while True:
        try:
            print(_data.index(target))
            print(result[-1] + 1 if len(result) != 0 else 0)
            index = _data.index(target) + (result[-1] + 1 if len(result) != 0 else 0)
            result.append(index)
            # print(result[-1])
            # print(index)
            _data = data[index + 1:]
            # print(_data)
            # if index > len(data)
        except:
            break
    return result

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    m, n = map(int, input().split())

    q = Queue()
    tmts = []

    for row in range(n):
        _input = input().split()
        tmts.append(_input)
        cols = find_all_index(_input, '1')
        if cols:
            cnt = [0]*len(cols)
            rows = [row] * len(cols)
            print(zip(cnt, rows, cols))
        # q.put([0, row])
    # solution()