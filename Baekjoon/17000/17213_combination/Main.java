package com.boj.과일서리;

import java.util.Scanner;

public class Main {

	static int total = 0;
	static int[] choices;
	static int N;
	static int M;
	static int[] num;
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();

		choices = new int[M];

		_combination(1, 0);

		System.out.println(total);
	}

	static void _combination(int startNum, int count) {
		if (count == M) {
			if (choices[M - 1] == N) {
				++total;
				append();
			}
			return;
		}
		for (int num = startNum; num <= N; num++) {
			choices[count] = num;
			if (count == 0 && choices[0] != 1) return;
			if (count > 0 && choices[count] - choices[count - 1] > 1)return;
			_combination(num, count + 1);
		}
	}

	static void append() {
		for (int i = 0; i < M; i++) 
			sb.append(choices[i]).append(" ");
		sb.append("\n");
	}

}
