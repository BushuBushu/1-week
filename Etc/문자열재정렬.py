import re


def solution():
    numbers = re.findall('[0-9]', string)
    alphabets = re.findall('[A-Z]', string)
    alphabets.sort()
    print(f'{"".join(alphabets)}{sum(map(int, numbers))}')


if __name__ == "__main__":
    string = input()
    solution()
