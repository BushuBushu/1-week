import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;
    static Room[] room;
    static int[] before, memo;

    public static void main(String[] args) throws IOException {
        int numOfRoom = Integer.parseInt(br.readLine());

        room = new Room[numOfRoom];
        for (int i = 0; i < numOfRoom; i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            int capacity = Integer.parseInt(st.nextToken());
            room[i] = new Room(s, e, capacity);
        }

        // 끝나는 시간으로 오름차순 정렬
        Arrays.sort(room, (a, b) -> {
            if (a.e == b.e) return Integer.compare(a.s, b.s); // 끝나는 시간 같으면 시작 시간 기준 오름차순 정렬
            return Integer.compare(a.e, b.e);
        });

        memo = new int[numOfRoom + 1];
        Arrays.fill(memo, -1);

        before = new int[numOfRoom];
        for (int i = numOfRoom - 1; i > 0; i--) {
            // i 개 회의실의 시작 시간 바로 직전에 회의를 끝내는 회의실 중에
            // 가장 큰 index 를 가진 회의실 찾기
            int l = 0, r = i;
            while (l + 1 < r) {
                int mid = (l + r) / 2;
                if (room[i].s >= room[mid].e) l = mid;
                else r = mid;
            }

            // ** 주의
            // l이 0인 경우 해당 조건에 맞는지 확인 해주어야 한다
            if (room[i].s >= room[l].e) before[i] = l;
            else before[i] = -1;
        }

        memo[0] = room[0].capacity;
        f(numOfRoom - 1);
        System.out.println(memo[numOfRoom-1]);
    }

    // 서브 문제 정의
    // memo[index] : 1번째부터 index 번째 회의실을 고려햇을 때 최대 인원 수
    static int f(int index) {
        if (index < 0) return 0;
        if (memo[index] != -1) return memo[index];

        // ** 조심
        // memo 배열의 index 번째 원소에 저장해 두기
        return memo[index] = Math.max(f(index - 1), f(before[index]) + room[index].capacity);
    }

    static class Room {
        int s, e, capacity;

        Room(int s, int e, int capacity) {
            this.s = s;
            this.e = e;
            this.capacity = capacity;
        }
    }
}