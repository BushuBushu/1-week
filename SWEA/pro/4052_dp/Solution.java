import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringTokenizer st;
    static StringBuilder sb = new StringBuilder();
    static int numOfSchedule, entirePeriod;
    static Schedule[] schedules;
    static int[] before, memo;

    public static void main(String[] args) throws IOException {
        int T = Integer.parseInt(br.readLine());
        for (int tc = 1; tc <= T; tc++) {
            st = new StringTokenizer(br.readLine());
            numOfSchedule = Integer.parseInt(st.nextToken());
            entirePeriod = Integer.parseInt(st.nextToken());
            schedules = new Schedule[numOfSchedule];
            for (int i = 0; i < numOfSchedule; i++) {
                st = new StringTokenizer(br.readLine());
                int s = Integer.parseInt(st.nextToken());
                int e = Integer.parseInt(st.nextToken());
                int period = Integer.parseInt(st.nextToken());
                schedules[i] = new Schedule(s, e, period);
            }

            // 끝나는 시간으로 오름차순 정렬
            Arrays.sort(schedules, (a, b) -> {
                if (a.e == b.e) return Integer.compare(a.s, b.s); // 끝나는 시간 같으면 시작 시간 기준 오름차순 정렬
                return Integer.compare(a.e, b.e);
            });

            memo = new int[numOfSchedule + 1];
            Arrays.fill(memo, -1);

            before = new int[numOfSchedule + 1];
            for (int i = numOfSchedule - 1; i > 0; i--) {
                int l = 0, r = i;
                while (l + 1 < r) {
                    int mid = (l + r) / 2;
                    if (schedules[i].s > schedules[mid].e) l = mid;
                    else r = mid;
                }

                // ** 주의
                // l이 0인 경우 해당 조건에 맞는지 확인 해준다
                if (schedules[i].s >= schedules[l].e) before[i] = l;
                else before[i] = -1;
            }

            memo[0] = schedules[0].period;
            f(numOfSchedule - 1);

            sb.append("#").append(tc).append(" ").append(memo[numOfSchedule - 1]).append("\n");
        }
        System.out.println(sb);
    }

    // 서브 문제 정의
    // memo[index] : 1번째부터 index 번째 일정을 고려햇을 때 최대 금액
    static int f(int index) {
        if (index < 0) return 0;
        if (memo[index] != -1) return memo[index];
        return memo[index] = Math.max(f(index - 1), f(before[index]) + schedules[index].period);
    }

    static class Schedule {
        int s, e, period;

        Schedule(int s, int e, int period) {
            this.s = s;
            this.e = e;
            this.period = period;
        }
    }
}