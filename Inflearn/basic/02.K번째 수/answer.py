import glob
import sys
import math
from unittest import TestCase, main, TestSuite


def solution(idx):
    _, s, e, k = map(int, input().split())
    num = list(map(int, input().split()))
    cut_num = num[s - 1:e]
    cut_num.sort()
    print(f'#{idx} {cut_num[k-1]}')


def Test(TestCase):
    def setUp(self):
        _in = glob.glob('in*.txt')
        _out = glob.glob('out*.txt')
        for file in _in:
            with open(file, 'r') as f:
                self._input.append(f.read())
        for file in _out:
            with open(file, 'r') as f:
                self._output.append(f.read())
        # self.n, self.k = open("data/data.txt", "rt")

    def test_solution(self):
        # sys.stdin = open("data/in1.txt", "rt")
        n, k = 8, 4
        self.assertEqual(solution(n, k), 2)


if __name__ == "__main__":
    sys.stdin = open("data/in1.txt", "rt")
    tcs = int(input())
    for idx in range(1, tcs+1):
        solution(idx)
    # main()
