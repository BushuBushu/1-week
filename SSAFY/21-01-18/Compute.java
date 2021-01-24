package com.java.first;

import java.util.Scanner;

public class Compute {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int num1 = sc.nextInt();
		int num2 = sc.nextInt();
		int res1 = multiply(num1, num2);
		int res2 = getShare(num1, num2);
		System.out.println(toString(res1, res2));
	}
	public static int multiply(int num1, int num2) {
		return num1 * num2;
	}
	public static int getShare(int num1, int num2) {
		return num1/num2;
	}	
	public static String toString(int res1, int res2) {
		return "곱 = "+ res1 + "\n"
				+ "몫  = " + res2 ;
		
	}
}
