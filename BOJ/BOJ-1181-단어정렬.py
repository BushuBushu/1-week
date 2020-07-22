
wordDict = {}
for _ in range(int(input())):
    word = input()
    if word not in wordDict.values():
        if len(word) not in wordDict.keys():
            wordDict[len(word)] = {word}
        else:
            wordDict[len(word)].add(word)
for key, value in wordDict.items():
    wordDict[key] = sorted(list(value))

for idx, words in sorted(wordDict.items()):
    for word in words:
        print(word)