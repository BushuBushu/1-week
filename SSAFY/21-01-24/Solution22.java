package com.ssafy.algo;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution22 {
	static BufferedReader br;
	static StringTokenizer st;
	
	// 상하좌우
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	final static int MAX_JUMP = 3;

	public static void main(String[] args) throws NumberFormatException, IOException {
		System.setIn(new FileInputStream("input.txt"));
		br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.parseInt(br.readLine());
		for (int i = 0; i<T; i++) {
			st = new StringTokenizer(br.readLine());
			
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
				
				JUMP: for (int jump=MAX_JUMP; jump > 0; jump--) {
					curX += dirX * jump;
					curY += dirY * jump;
					
					boolean check = curX < n && curX >= 0 && curY < n && curY >= 0 && (!lake[curX][curY]);
	
					if(!check) {
						count--;
						break JUMP;
					}
					
					if(jump == 1) {
						if(lake[curX][curY]) count--;
						else lake[curX][curY] = true;	
					}
				}
				
			}
			System.out.println("#"+(i+1)+" " + count);
		}
		
	}

}
