# reverseString()


def reverseString(s):
    newStr = ""
    for n in range(len(s)-1, -1, -1):
        newStr += s[n]
    return newStr

print(reverseString("creature"))