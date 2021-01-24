package com.ssafy.ws02.step3;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution {
	static BufferedReader br;
	static int MAX_SIZE = 20;
	static String[][] grid = new String[MAX_SIZE][MAX_SIZE];
	static int[] rowCnt = new int[MAX_SIZE];
	static int[] colCnt = new int[MAX_SIZE];
	
	// 좌 우  하 상 좌하대각선 좌상대각선 우상대각선 우하대각선
	static int dx[] = {  0, 0, 1, -1, 1, -1, -1, 1};
	static int dy[] = { -1, 1, 0, 0, -1, -1, 1, 1};
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		System.setIn(new FileInputStream("빌딩_input.txt"));
		br = new BufferedReader(new InputStreamReader(System.in));
		int tcs = Integer.parseInt(br.readLine());

		for(int tc=1; tc<=tcs; tc++) {
			int size = Integer.parseInt(br.readLine());

			Arrays.fill(rowCnt, 0);
	        Arrays.fill(colCnt, 0);
	       
			
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
	}
	
	public static int getHeight(String[][] grid, int row, int col, int size) {
		for(int i=0; i<8; i++) {
			int nrow = row + dx[i];
			int ncol = col + dy[i];
			
			boolean check = nrow>=0 && nrow < size && ncol>=0 && ncol< size && grid[nrow][ncol].equals("G");
			
			if(check) return 2;
		}
		return rowCnt[row] + colCnt[col] - 1;
		
	}

	public static void print(int index, int height) {
		StringBuilder sb = new StringBuilder();
		sb.append("#").append(index).append(" ").append(height);
		System.out.println(sb.toString());
	}

}

