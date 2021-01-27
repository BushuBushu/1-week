# 21-01-20 

## 03-1 신도시 빌딩 세우기

### #️⃣ 문제정보

#### 입력 조건

```
- 첫 줄에는 테스트 케이스 T 가 주어진다.
- 다음 줄에는 배열의 크기인 N 이 주어진다.
- 각 배열의 값들이 빌딩 구획이면 B 입력되고 공원조성단지이면 G 가 입력된다.
```

입력 예시

```
3
6
G B G G B B
G B G G B G 
B B B B G B
B G B B B B
G B B B B G
G B B B B G
5
G B G G B 
G B G G B  
B B B B G 
B G B B B 
G B B B B 
3
G G B
G B B
B B B
```

#### 출력예시

```
#1 7
#2 7
#3 5
```

### 🅰 설계

#### 1. 부지 grid 정보 입력받기

부지 크기만큼 String 배열을 만들었다. 부지를 순회하며 각 구획에 대한 정보를 지정하는 것과 동시에 그 구획이 B인지를 체크하고 rowCnt와 colCnt를 업데이트하였다.

- size : 사용자 입력으로 받은 **부지 grid 크기**
- rowCnt : 행별로 "B"가 있는 구획을 센 배열
- colCnt : 열별로 "B"가 있는 구획을 센 배열

```java
int size = Integer.parseInt(br.readLine());

String[][] grid = new String[size][size];
rowCnt = new int[size];
colCnt = new int[size];

for(int i=0; i<size; i++) {
    StringTokenizer st = new StringTokenizer(br.readLine());
    int j = 0;
    while(st.hasMoreTokens()) {
        grid[i][j] = st.nextToken();
        if(grid[i][j].equals("B")) {
            rowCnt[i]++;
            colCnt[j]++;
        }
        j++;
    }
}
```



#### 2. 부지 gird의 모든 구획 확인하며 빌딩 최대 층수 구하기 

전체 부지를 순회하며 해당 구획 기준으로 지을 수 있는 빌딩 층수를 구한다. 내가 확인해야할 **'주변'**은 해당 구획을 기준으로 **상하좌우 + 대각선** 모두 8방향을 봐야한다. 

주변 구획 중 `G`가 하나라도 있으면 해당 구획에서 지을 수 있는 빌딩 층수는 2로 한정된다. 반면에 `G`가 없을 경우, 해당 구획이 있는 행과 열에서 `B`의 개수를 세주어야 한다. 앞서 구획의 정보를 입력받을 때 구한 rowCnt와 colCnt를 이용한다.  

```java
// 좌 우  하 상 좌하대각선 좌상대각선 우상대각선 우하대각선
static int dx[] = {  0, 0, 1, -1, 1, -1, -1, 1};
static int dy[] = { -1, 1, 0, 0, -1, -1, 1, 1};
	
// main() 함수
public static void main(String[] args) throws NumberFormatException, IOException {
    ...
    int height = 0;
    for(int row=0; row<size; row++) {
        for(int col=0; col<size; col++) {
            if(grid[row][col].equals("G")) continue;

            int _height = getHeight(row, col, grid);

            if(height < _height) height = _height;
        }
    }
    ...
}

//getHeight() 함수
public static int getHeight(int row, int col, String[][] grid) {
    int size = grid.length;
    for(int i=0; i<8; i++) {
        int nrow = row + dx[i];
        int ncol = col + dy[i];
        if(nrow>=0 && nrow< size && ncol>=0 && ncol<size && grid[nrow][ncol].equals("G")) return 2;
    }
    return rowCnt[row] + colCnt[col] - 1;

}
```



### ✅ 후기

- `System.setIn()`로 input 파일을 표준입력으로 받아올 수 있다는 것을 알게 되었다. 매번 인풋을 복붙할 필요가 없다!

- 사실은 2차원 배열 grid를 char 타입으로 만들고 싶었다. 하지만 `char` 관련된 함수가 아직 익숙하지 않아 와 `String`으로 지정하였다. 처음에 `String`의 `contains()`를 썼는데 조금 더 정확한 비교를 위해 `equals()`를 사용하였다.

  - `contains()`
  - `equals()`

- 사용자 입력받을 때 구획(땅) 정보를 알 수 있다. 그래서 각 행과 열에 대하여 그 구획이 "B"일 경우를 세기  위해 rowCnt와 colCnt 배열을 만들었다.

  ```java
  static int MAX_SIZE = 20;
  static int[] rowCnt = new int[MAX_SIZE];
  static int[] colCnt = new int[MAX_SIZE];
  
  public static void main(String[] args) throws NumberFormatException, IOException {
      ...
      for(int tc=1; tc<=tcs; tc++) {
          int size = Integer.parseInt(br.readLine());
  
          String[][] grid = new String[size][size];
          rowCnt = new int[size];
          colCnt = new int[size];
      ...
  }
  ```

  매번  **객체를 새롭게 생성**하는 것보다 **변수**를 두어서 **해당 객체를 초기화**를 하는 게 더 좋을 것 같다는 피드백을 해주셨다. 

  `Arrays`의 `fill()`을 써서 매 테스트케이스마다 rowCnt와 colCnt를 초기화하는 코드를 적용해보았다. 2차원 배열 grid가 최대 크기로 선언해두었기 때문에 `getHeight()`에 현재 부지 grid의 크기를 인자로 추가적으로 넘겨주었다.

  ```java
  static int MAX_SIZE = 20;
  static String[][] grid = new String[MAX_SIZE][MAX_SIZE];
  static int[] rowCnt = new int[MAX_SIZE];
  static int[] colCnt = new int[MAX_SIZE];
  
  public static void main(String[] args) throws NumberFormatException, IOException {
      ...
      for(int tc=1; tc<=tcs; tc++) {
          int size = Integer.parseInt(br.readLine());
  
          Arrays.fill(rowCnt, 0);
          Arrays.fill(colCnt, 0);
      ...
      int height = 0;
      for(int row=0; row<size; row++) {
          for(int col=0; col<size; col++) {
              if(grid[row][col].equals("G")) continue;
  
              int _height = getHeight(grid, row, col, size);
  
              if(height < _height) height = _height;
          }
      }
      print(tc, height);
  }
      
  // getHeight()
  public static int getHeight(String[][] grid, int row, int col, int size) {
      for(int i=0; i<8; i++) {
          int nrow = row + dx[i];
          int ncol = col + dy[i];
  
          boolean check = nrow>=0 && nrow < size && ncol>=0 && ncol< size && grid[nrow][ncol].equals("G");
  
          if(check) return 2;
      }
      return rowCnt[row] + colCnt[col] - 1;
  		
  }
  ```

  