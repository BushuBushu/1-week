package com.ssafy.ws02.step3;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	static BufferedReader br;
	static int[] rowCnt;
	static int[] colCnt;
	// 좌 우  하 상 좌하대각선 좌상대각선 우상대각선 우하대각선
	static int dx[] = {  0, 0, 1, -1, 1, -1, -1, 1};
	static int dy[] = { -1, 1, 0, 0, -1, -1, 1, 1};
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		System.setIn(new FileInputStream("빌딩_input.txt"));
		br = new BufferedReader(new InputStreamReader(System.in));
		int tcs = Integer.parseInt(br.readLine());

		for(int tc=1; tc<=tcs; tc++) {
			int size = Integer.parseInt(br.readLine());

			String[][] grid = new String[size][size];
			rowCnt = new int[size];
			colCnt = new int[size];
			
			for(int i=0; i<size; i++) {
				StringTokenizer st = new StringTokenizer(br.readLine());
				int j = 0;
				while(st.hasMoreTokens()) {
					grid[i][j] = st.nextToken();
					if(grid[i][j].contains("B")) {
						rowCnt[i]++;
						colCnt[j]++;
					}
					j++;
				}
			}
			
			int height = 0;
			for(int row=0; row<size; row++) {
				for(int col=0; col<size; col++) {
					if(grid[row][col].contains("G")) continue;
					
					int _height = getHeight(row, col, grid);
				
					if(height < _height) height = _height;
				}
			}
			print(tc, height);
		}
	}
	
	public static int getHeight(int row, int col, String[][] grid) {
		int size = grid.length;
		for(int i=0; i<8; i++) {
			int nrow = row + dx[i];
			int ncol = col + dy[i];
			if(nrow>=0 && nrow< size && ncol>=0 && ncol<size && grid[nrow][ncol].contains("G")) return 2;
		}
		return rowCnt[row] + colCnt[col] - 1;
		
	}

	public static void print(int index, int height) {
		StringBuilder sb = new StringBuilder();
		sb.append("#").append(index).append(" ").append(height);
		System.out.println(sb.toString());
	}

}

