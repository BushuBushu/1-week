OPERATORS = {0: '+', 1: '-', 2: '*', 3: '/'}


def getOperators(count):
    operators = []
    for i, n in enumerate(count):
        if n != 0:
            for _ in range(n):
                operators.append(OPERATORS[i])
    operatorsDict = {}
    for i, operator in enumerate(operators):
        operatorsDict[i] = operator
    return operators, operatorsDict


def getOperatorSets(operators, length):
    operatorSets = []
    check = [False for _ in operators]
    def permutations(n, k, order):
        if k == n:
            operatorSets.append(''.join(order))
            return
        for index, operator in operators.items():
            if not check[index]:  # check가 false 일 때
                order.append(operator)
                check[index] = True
                permutations(n, k + 1, order)
                order.pop()
                check[index] = False
    permutations(length, 0, [])
    return set(operatorSets)


def getMaxMin(numbers, operatorSets):
    import math
    Max, Min = -math.inf, math.inf
    for operatorSet in operatorSets:
        stack = []
        for index, number in numbers.items():
            stack.append(number)
            if len(stack) == 3:  # stack 상태 예시 [1, '+', 2]
                result = int(eval("".join(stack)))
                stack = [str(result)]
            if index == len(numbers) - 1:  # 연산자의 개수는 숫자의 개수보다 작기 때문에
                break  # 마지막 숫자일 경우 반복문 멈추기
            stack.append(operatorSet[index])
        result = int(stack[0])
        Max = result if result > Max else Max
        Min = result if result < Min else Min
    return Max, Min

N = int(input())
numbers = {key: value for key, value in enumerate(input().split())}
operators, operatorsDict = getOperators(map(int, input().split()))

operatorSetsByDict = getOperatorSets(operatorsDict, len(numbers) - 1)

MaxByDict, MinByDict = getMaxMin(numbers, operatorSetsByDict)
print(MaxByDict)
print(MinByDict)