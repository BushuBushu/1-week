keypads= {1:(0,0), 2:(0,1),3:(0,2),4:(1,0),5:(1,1),6:(1,2), 7:(2,0),8:(2,1),9:(2,2),'*':(3,0), 0:(3,1), '#':(3,2)}

def findHand(number, right, left, hand):
    rightDist = abs(keypads[number][0] - keypads[right][0]) + abs(keypads[number][1] - keypads[right][1])
    leftDist = abs(keypads[number][0] - keypads[left][0]) + abs(keypads[number][1] - keypads[left][1])
    if rightDist == leftDist:
        if hand == 'right':
            return 'R'
        elif hand == 'left':
            return 'L'
    elif rightDist > leftDist:
        return 'L'
    elif rightDist < leftDist:
        return 'R'

def solution(numbers, hand):
    answer = ''
    right, left = '#', '*'
    for number in numbers:
        if  number % 3 == 2 or number == 0:
            movedHand = findHand(number, right, left, hand)
            answer +=  movedHand
            if movedHand == 'R':
                right = number
            elif movedHand =='L':
                left = number
        elif number % 3 == 1:
            answer += 'L'
            left = number
        else:
            answer += 'R'
            right = number
    return answer
