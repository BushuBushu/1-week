def solution(n, k):
    count = 0
    # 그리디 알고리즘: n이 빠르게 k에 접근할 수 있도록
    # 시간복잡도를 줄이자
    while True:
        # k로 나누어 떨어지는 n에 가장 근접한 값: target
        target = (n//k) * k
        # n이 target이 될 때까지 1씩 빼기
        count += (n - target)
        # 결과적으로 n은 target이 된다
        n = target
        # n이 k보다 작을 경우 반복문을 탈출해서
        # 반복문 밖에 있는 빼기 과정 진행
        if n < k:
            break
        count += 1
        n//=k
    count += n-1
    print(count)

if __name__ == "__main__":
    n, k = map(int,input().split())
    solution(n, k)