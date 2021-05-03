# Part 1 Write a program that asks for a users name, and greets them with their name

name = input("What is your name?")
print(f"Hi {name}, it's nice to meet you")


# Part 2 If the name given is the same as your name, say "Hey, that's my name too!"

name = input("What is your name?")
if name == "Jay":
    print("Hey that's my name too!")


# Part 3 Ask for 10 names and keep a record of them.  After 10 names are given, say 'It was nice to meet all of you'.
names = []
count = 0
while(count < 10):
    name = input("What is your name?")
    names.append(name)
    count += 1


print("It was nice to meet all of you")
for name in names:
    print(name)

# Part 4 Ask for 10 names again.  This time check to see if the name was already given.  If it hasn't greet them other wise ask for a new name.  At the end of the program, you should have greeted 10 unique names.

names = []
count = 0
while(count < 10):
    name = input("What is your name?")
    if name in names:
        print("The name already exists.")
    else:
        names.append(name)
        count += 1


print("It was nice to meet all of you")
for name in names:
    print(name)