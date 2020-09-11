def solution():
    result = string[0]
    for number in string[1:]:
        if result == 1 or result == 0:
            result += number
        else:
            result *= number
    print(result)


if __name__ == "__main__":
    string = list(map(int, list(input())))
    solution()
