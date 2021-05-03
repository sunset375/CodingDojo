num1 = 42 
#variable declaration, initialize nubmer (int)

num2 = 2.3
#variable declaration, initialize float decimal

boolean = True
#variable declaration, initialize boolean

string = 'Hello World'
#variable declaration, initialize string

pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
#initialize List

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
#initialize Dictionary

fruit = ('blueberry', 'strawberry', 'banana')
#initialize Tuple
print(type(fruit))
#typecheck fruit = tuple

print(pizza_toppings[1])
#access value in list index of 1

pizza_toppings.append('Mushrooms')
#adding value into the list

print(person['name'])
#print a key matching value from the person dictionary 

person['name'] = 'George'
#initialize avalue to a key

person['eye_color'] = 'blue'
#initialize avalue to a key

print(fruit[2])
#print thrid string in the fruit tuple.

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
# if num1 is greater than 45, prints It's greater
# else prints It's lower


if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")
# if length of a string is less than 5 prints "It's a short word!"
# else if length of a string is greater than 15 prints "It's a long word!"
#else prints "Just right!"

for x in range(5):
    print(x)
#if x is in range between 0 to 5, print x
#for loop

for x in range(2,5):
    print(x)
# if  x ranges between 2 to 5, print x

for x in range(2,10,3):
    print(x)
# if x ranges between 2 to 10, and increments by 3, print x

x = 0
while(x < 5):
    print(x)
    x += 1
# x starts 0 , if x is less than 5, add x +1

pizza_toppings.pop()
#delete value in list
pizza_toppings.pop(1)
#delete value of index 1 in list

print(person)
person.pop('eye_color')
print(person)
#delete key, value in the dctionary.

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break
#for loop to access value in the list and see if value exist

def print_hello_ten_times():
    for num in range(10):
        print('Hello')
#function, prints hello 10times

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')
#function, takes argument as range, and prints hello * x

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')
#function, takes argument and put it in to for loop.

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)