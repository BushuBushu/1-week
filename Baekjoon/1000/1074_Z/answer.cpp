#include <stdio.h>
#include <math.h>
using namespace std;

int N, r, c;
int cnt;

bool check(int size, int x, int y)
{
  if (x <= r && r < x + size && y <= c && c < y + size)
  {
    return true;
  }
  return false;
}

void dfs(int size, int x, int y)
{
  if (size == 1)
  {
    if (x == r && y == c)
    {
      printf("%d", cnt);
    }
    else
    {
      cnt++;
      return;
    }
  }
  //1사분면
  if (check(size / 2, x, y))
  {
    dfs(size / 2, x, y);
  }
  else
  {
    cnt += size / 2 * size / 2;
  }
  //2사분면
  if (check(size / 2, x, y + size / 2))
  {
    dfs(size / 2, x, y + size / 2);
  }
  else
  {
    cnt += size / 2 * size / 2;
  }
  //3사분면
  if (check(size / 2, x + size / 2, y))
  {
    dfs(size / 2, x + size / 2, y);
  }
  else
  {
    cnt += size / 2 * size / 2;
  }
  //4사분면
  if (check(size / 2, x + size / 2, y + size / 2))
  {
    dfs(size / 2, x + size / 2, y + size / 2);
  }
  else
  {
    cnt += size / 2 * size / 2;
  }
}
int main()
{

  scanf("%d %d %d", &N, &r, &c);
  dfs(pow(2, N), 0, 0);
  return 0;
}