package com.java.algo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class DigitTest1 {

	public static void main(String[] args) {
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			StringTokenizer st = new StringTokenizer(br.readLine());
			int[] count = new int[10]; 
			while (st.hasMoreTokens()) {
				int val = Integer.parseInt(st.nextToken());
				if (val == 0) break;
				count[val/10] += 1;
			}
			System.out.println(toString(count));
		}catch(IOException e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
	}
	
	public static String toString(int[] count) {
		StringBuffer sb = new StringBuffer();
		for(int i = 0; i < count.length; i++) {
			if (count[i] > 0) {
				sb.append(i);
				sb.append(" : ");
				sb.append(count[i]);
				sb.append("개\n");
			}
		}
		return sb.toString();
	}

}
