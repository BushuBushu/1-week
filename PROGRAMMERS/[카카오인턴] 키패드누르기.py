keypads= {1:(0,0), 2:(0,1),3:(0,2),4:(1,0),5:(1,1),6:(1,2), 7:(2,0),8:(2,1),9:(2,2),'*':(3,0), 0:(3,1), '#':(3,2)}

def findHand(number, rightHand, leftHand, hand):
    rightDist = abs(keypads[number][0] - keypads[rightHand][0]) + abs(keypads[number][1] - keypads[rightHand][1])
    leftDist = abs(keypads[number][0] - keypads[leftHand][0]) + abs(keypads[number][1] - keypads[leftHand][1])
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
    movedHand, rightHand, leftHand = '', '#', '*'
    for number in numbers:
        if number in [3, 6, 9]:
            movedHand = 'R'
        elif number in [1, 4, 7]:
            movedHand = 'L'
        else:
            movedHand = findHand(number, rightHand, leftHand, hand)
        if movedHand == 'R':
            rightHand = number
        elif movedHand == 'L':
            leftHand = number
        answer += movedHand
    return answer
