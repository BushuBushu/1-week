# 21-01-24 

## 03-2 소금쟁이

### #️⃣ 문제정보

#### 제한 조건

```
- N은 자연수 5~20 의 값이다.
- 소금쟁이의 처음 위치와 방향이 주어진다.
- 여러 마리의 소금쟁이가 순서대로 3번씩 뛴다. 뛸 때 마다 3칸, 2칸 1칸씩 뛴다. 3번 뛴 소금쟁이는 그 자리에 머문다.
- 뛰는 도중 연못 밖으로 나가거나 다른 소금쟁이가 머물러 있는 곳으로 뛰면 죽 는다.
- 시작위치에 이미 다른 소금쟁이가 있다면 죽는다.
```

#### 입력 정보

```
첫 줄에는 테스트 케이스 T가 주어진다.
두 번째 줄에는 배열의 크기인 N과 소금쟁이 수가 주어진다.
그 다음 줄부터 시작위치(행,열), 방향(상:1, 하:2, 좌:3, 우:4)가 소금쟁이 수만큼 주어진다.
다음 테스트 케이스가 반복적으로 주어진다
```

입력 예시

```
3
9 5
6 2 4
1 5 2
0 0 4
6 6 1
2 4 3
11 6
0 0 4
6 0 1
2 4 3
4 2 4
1 5 2
10 8 1
7 5
5 2 1
1 6 2
0 6 3
1 0 2
2 4 4
```

#### 출력예시

```
#1 3
#2 4
#3 1
```

### 🅰 설계

#### 1. 소금쟁이 뛰기 전 준비

- n : 호수 크기 (n x n)
- num : 소금쟁이 수
- lake : 호수에서 소금쟁이들이 있는 위치를 나타내는 2차원 배열
- count : 살아남은 소금쟁이 수
- x, y : 소금쟁이 처음 위치
- dir : 소금쟁이가 뛰는 방향
  - dirX : 행 기준으로 소금쟁이가 뛰는 방향
  - dirY: 열 기준으로 소금쟁이가 뛰는 방향
- curX : 행 기준 소금쟁이의 현재 위치 (뛰면 값이 바뀐다)
- curY: 열 기준 소금쟁이의 현재 위치 (뛰면 값이 바뀐다)

```java
// 상하좌우
static int[] dx = {-1, 1, 0, 0};
static int[] dy = {0, 0, -1, 1};

int n = Integer.parseInt(st.nextToken());
int num = Integer.parseInt(st.nextToken());
boolean[][] lake = new boolean[n][n];

int count = num;
for(int j = 0; j<num; j++) {
    st = new StringTokenizer(br.readLine());

    int x = Integer.parseInt(st.nextToken());
    int y = Integer.parseInt(st.nextToken());

    int dir = Integer.parseInt(st.nextToken());
    int dirX = dx[dir-1];
    int dirY = dy[dir-1];

    int curX = x;
    int curY = y;
	...
}
```



#### 2. 3만큼, 2만큼, 1만큼 순서로 소금쟁이 뛰기 

소금쟁이가 죽는 경우에 살아남은 소금쟁이 수 `count`를 1씩 감소시켰다.

- lake 밖으로 벗어났을 때 죽음
- 해당 소금쟁이가 마지막으로 뛴 자리가 이전 소금쟁이가 있으면 죽음

```java
JUMP: for (int jump=MAX_JUMP; jump > 0; jump--) {
    curX += dirX * jump;
    curY += dirY * jump;

    boolean check = curX < n && curX >= 0 && curY < n && curY >= 0 && !lake[curX][curY];

    if(!check) {
        count--;
        break JUMP;
    }

    if(jump == 1) {
        if(lake[curX][curY]) count--;
        else lake[curX][curY] = true;	
    }
}
```



### ✅ 후기
- 혜인님의 리뷰를 통해서 소금쟁이가 매번 뛸때마다 true인 곳에 가는지 확인해주는 조건이 빠진 것을 알게되었다. 문제를 꼼꼼히 설계하고 경우의 수를 고려하는 습관을 갖추고 싶다.. 화이팅!