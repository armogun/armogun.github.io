import random

objectives = open('objectives.txt', 'r').readlines()
people = open('people.txt', 'r').readlines()
targets = open('people.txt', 'r').readlines()

def generateKey():
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    key = ''
    for i in range(16):
        key += random.choice(alphabet)
    return key

def encrypt(line, key):
    encrypted = ''
    for i in range(len(line)):
        encrypted += str(ord(line[i]) ^ ord(key[i % len(key)])) + " "
    return encrypted

random.shuffle(objectives)
x = random.randint(1, len(targets))
targets = targets[-x:] + targets[:-x]
mapping = {}
for i in range(len(people)):
    person = people[i].strip('\n')
    target = targets[i].strip('\n')
    objective = objectives.pop().strip('\n')
    text = "STARTLIST" + person + "|" + target + "|" + objective[:-1] + "ENDLIST"
    key = generateKey()
    mapping[person] = key
    text = encrypt(text, key)
    print(text)

print(mapping)