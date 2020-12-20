number, base = map(int, input().split())
newNumber = []
while number:
    remainder = number % base
    x = str(remainder) if remainder < 10 else chr(65 + (remainder - 10))
    newNumber.append(x)
    number = number//base
print(''.join(newNumber[::-1]))
