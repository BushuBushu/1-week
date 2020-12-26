from unittest import TestCase, main

def solution():
  answer = ""
  return answer

class Test(TestCase):
  def test_solution(self):
      self.assertEqual(solution(), 3)

if __name__ == "__main__":
  r1 = open('data/data.txt', mode='rt', encoding='utf-8')
  r2 = open('data/output.txt', mode='rt', encoding='utf-8')
  
  _inputs = r1.readlines()
  _outputs = r2.readlines()
  
  for _output in _outputs:
    print(solution())
    main()