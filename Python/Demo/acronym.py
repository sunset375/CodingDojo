# acronym()


def acronym(s):
    newStr = s[0].upper()

    for x in range(len(s)):
        if s[x] == " ":
            newStr += s[x + 1].upper()
    return newStr

print(acronym("there's no free lunch - gotta pay your way"))