import java.util.*;
import java.io.*;


class Z{
    private static int N, r, c, count=0;

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = stoi(st.nextToken());
        r = stoi(st.nextToken());
        c = stoi(st.nextToken());
        dfs((int) Math.pow(2, N), 0, 0);
    }

    private static int stoi(String s){
        return Integer.parseInt(s);
    }

    static void dfs(int size, int x, int y){
        if(size == 1){
            if(x == r && y == c){
                System.out.println(count);
            }
            else{
                count++;
                return;
            }
        }
        int divSize = size/2;
        //1사분면
        if(check(divSize, x, y)){
            dfs(divSize, x, y);
        }
        else{
            count += divSize * divSize;
        }
        //2사분면
        if(check(divSize, x, y+divSize)){
            dfs(divSize, x, y+divSize);
        }
        else{
            count += divSize * divSize;
        }
        //3사분면
        if(check(divSize, x+divSize, y)){
            dfs(divSize, x+divSize, y);
        }
        else{
            count += divSize * divSize;
        }
        //4사분면
        if(check(divSize, x+divSize, y+divSize)){
            dfs(divSize, x+divSize, y+divSize);
        }
        else{
            count += divSize * divSize;
        }
    }

    static boolean check(int size, int x, int y){
        if(x<= r && r <x+size && y <= c && c<y+size){
            return true;
        }
        return false;
    }
}