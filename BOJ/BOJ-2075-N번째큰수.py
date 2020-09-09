import heapq

if __name__ == "__main__":
    numbers = []
    n = int(input())
    for _ in range(n):
        for number in map(int, input().split()):
            if len(numbers) < n :
                heapq.heappush(numbers,number)
            elif numbers[0] < number :
                heapq.heappop(numbers)
                heapq.heappush(numbers,number)
    print(numbers[0])

# min heap
# 크기를 n으로 고정하고
# root랑 들어올 수를 비교하기
