package com.java.algo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class DigitTest2 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 

	public static void main(String[] args) throws IOException{
		HashMap<Integer, Integer> count = new HashMap<>(); 
		String temp;
		loop: while((temp = br.readLine() ) != null) {
			StringTokenizer st = new StringTokenizer(temp);			
			while (st.hasMoreTokens()) {
				int val = Integer.parseInt(st.nextToken());
				if (val == 0) break loop;
				if (count.containsKey(val/10)) count.put(val/10, count.get(val/10)+1);
				else count.put(val/10, 1);
			}
		}		
		System.out.println(toString(count));
	}
	
	public static String toString(HashMap<Integer, Integer> count) {
		StringBuffer sb = new StringBuffer();
		for(Integer key : count.keySet()) {
			sb.append(key);
			sb.append(" : ");
			sb.append(count.get(key));
			sb.append("개\n");	
		}
		return sb.toString();
	}
}
