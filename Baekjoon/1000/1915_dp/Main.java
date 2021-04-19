package com.boj.가장큰정사각형;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;
    static int numOfRow, numOfCol, maxOfSide = 0;
    static int[][] map, memo;

    public static void main(String[] args) throws IOException {
        st = new StringTokenizer(br.readLine(), " ");
        numOfRow = Integer.parseInt(st.nextToken());
        numOfCol = Integer.parseInt(st.nextToken());

        map = new int[numOfRow + 1][numOfCol + 1];
        memo = new int[numOfRow + 1][numOfCol + 1];
        char[] line;
        for (int i = 0; i < numOfRow; i++) {
            line = br.readLine().toCharArray();
            for (int j = 0; j < numOfCol; j++) {
                map[i][j] = line[j] - '0';
                if (map[i][j] == 1 && maxOfSide < 1) {
                    maxOfSide = 1;
                }
            }
        }
        // bottom up
        // b();

        // top down
        for (int i = 0; i < numOfRow; i++)
            for (int j = 0; j < numOfCol; j++)
                maxOfSide = Math.max(maxOfSide, f(i, j));


        System.out.println(maxOfSide * maxOfSide);
    }

    // bottom up
    // 서브 문제 정의
    // Dy[i][j] = (i, j)를 가장 오른쪽 아래로 하는 비어 있는 가장 큰 정사각형의 길이
    static void b(){
        for (int i = 1; i <= numOfRow; i++) {
            for (int j = 1; j <= numOfCol; j++) {
                if(map[i][j] == 0) continue;

                // 정사각형의 오른쪽 하단 점이 r, c 이라고 할 때
                memo[i][j] = Math.min(memo[i][j - 1],
                        Math.min(memo[i - 1][j], memo[i - 1][j - 1])) + 1;

                maxOfSide = Math.max(maxOfSide, memo[i][j]);
            }
        }
    }


    // topdown
    // 서브 문제 정의
    // Dy[i][j] = (i, j)를 가장 왼쪽 위로 하는 비어 있는 가장 큰 정사각형의 길이
    static int f(int r, int c) {
        if (map[r][c] == 0) return 0;
        if (memo[r][c] != 0) return memo[r][c];

        // 정사각형의 왼쪽 상단 점이 r, c 이라고 할 때
        int result = Math.min(f(r + 1, c), f(r, c + 1));
        result = Math.min(result, f(r + 1, c + 1)) + 1;

        return memo[r][c] = result;
    }
}
