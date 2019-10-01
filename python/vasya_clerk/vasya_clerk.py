def tickets(people):
    print(people)
    till = 0

    for i in people:
        till += i
        print("till: " + str(till))
        change = i - 25
        print("change: " + str(change))
        if change != 0:
            till
        print("YES")


tickets([25, 25, 50])
tickets([25, 100])
