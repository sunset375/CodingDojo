import random

action_list= ["Rock", "Paper", "Scissors"]
user_input = input("Choose your action: Rock, Paper, Scissors")
computer_action = random.choice(action_list)
print(user_input)
print(computer_action)

