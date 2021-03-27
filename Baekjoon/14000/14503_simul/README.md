## 풀이
### 1. 입력
- 로봇이 움직이는 map의 크기: numberOfRow, numberOfCol
- 초기 로봇청소기 위치-:  initCleaner
- 움직일 map 정보: map ( 0 : 청소해야하는 공간, 1 벽 )

```java
numberOfRow = Integer.parseInt(st.nextToken());
numberOfCol = Integer.parseInt(st.nextToken());

st = new StringTokenizer(br.readLine());
Cleaner initCleaner = new Cleaner(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));

map = new int[numberOfRow][numberOfCol];
for (int i = 0; i < numberOfRow; i++) {
	st = new StringTokenizer(br.readLine());
	for (int j = 0; j < numberOfCol; j++) {
		map[i][j] = Integer.parseInt(st.nextToken());
	}
}
```

### 2. 청소하기
#### 1) 현재 칸 기준으로 4방향에 있는 칸 청소할 수 있는 지 확인하기
#### 2) 4방향에 있는 칸을 청소할 수 없다면, 현재 칸 기준 현재 방향은 유지한 채 후진하기

```java
isCleaned = new boolean[numberOfRow][numberOfCol];
Queue<Cleaner> q = new ArrayDeque<>();
numberOfCleaned++;
q.add(initCleaner);
isCleaned[initCleaner.x][initCleaner.y] = true;
while (!q.isEmpty()) {
	Cleaner cleaner = q.poll();
	int nx, ny, ndir = cleaner.dir;
	boolean canMove = false;
	for (int i = 0; i < 4; i++) { //1) 현재 칸 기준으로 4방향에 있는 칸 청소할 수 있는 지 확인
		ndir = (ndir + 3) % 4;
		nx = cleaner.x + dirs.get(ndir)[0];
		ny = cleaner.y + dirs.get(ndir)[1];
		if (0 > nx || nx >= numberOfRow || 0 > ny || ny >= numberOfCol) continue;
		if (map[nx][ny] == 1 || isCleaned[nx][ny]) continue;
		numberOfCleaned++;
		q.add(new Cleaner(nx, ny, ndir));
		isCleaned[nx][ny] = true;
		canMove = true;
		break;
	}
	if (!canMove) { //2)  4방향에 있는 칸을 청소할 수 없다면
		ndir = (ndir + 2) % 4; // 현재 칸 기준 후진하기
		nx = cleaner.x + dirs.get(ndir)[0];
		ny = cleaner.y + dirs.get(ndir)[1];
		if (0 > nx || nx >= numberOfRow || 0 > ny || ny >= numberOfCol) continue;
		if (map[nx][ny] == 1) continue;
		q.add(new Cleaner(nx, ny, cleaner.dir)); // 현재 방향은 유지한 채로
	}
}
```

## 후기
- 처음에 문제를 접할 때, bfs로 풀 수 있을 것 같아서 queue를 선언해두어 코드를 작성했다. 하지만 굳이 queue를 사용하지 않고 반복문, 재귀로 `현재 칸 기준 4방향에 있는 칸 탐색하고 청소할 수 있는 칸이 하나라도 없으면 후진해서 청소가능한지 확인`하는 과정을 반복하면 된다. 이러한 방법으로 다음 로봇청소기 위치를 저장하기 위해 불필요한 객체를 만들지 않고 하나의 객체  Cleaner로 정보를 업데이트하며 관리하면 되는 것을 알게 되었다.  