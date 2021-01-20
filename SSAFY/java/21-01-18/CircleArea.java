package com.java.first;

import java.util.Scanner;

public class CircleArea {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int radius = sc.nextInt();
		double area = getArea(radius);
		System.out.println(toString(area));
	}
	
	public static double getArea(int radius) {
		return Math.pow(radius, 2) * Math.PI;
	}
	
	public static String toString(double area) {
		return "반지름이 5cm인 원의 넓이는 "+ area + "cm2입니다.";
	}

}
