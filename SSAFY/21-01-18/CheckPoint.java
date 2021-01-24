package com.java.first;

import java.util.Scanner;

public class CheckPoint {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int height = sc.nextInt();
		int weight = sc.nextInt();
		int level = compute(height, weight);
		System.out.println(toString(level));	
	}
	
	public static int compute(int height, int weight) {
		return weight + 100 - height;
	}
	
	public static String toString(int level) {
		String result = "비만수치는 "+ level + "\n";
		if (level > 0) {
			return result + "당신은 비만이군요";	
		}
		return result;
	}
}
