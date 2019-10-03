def tickets(people):
    print(people)
    till = {
        25: 0,
        50: 0,
        100: 0
    }

    for i in people:
        print("i: " + str(i))
        if i == 25:
            till[25] += 1
            print("till: " + str(till))
        elif i == 50:
            till[50] += 1
            if till[25] < 1:
                print("NO")
                return "NO"
            till[25] -= 1
            print("till: " + str(till))
        else:
            till[100] += 1
            if till[50] < 1:
                if till[25] >= 3:
                    till[25] -= 3
                    print("till: " + str(till))
                elif till[50] >= 1 and till[25] >= 1:
                    till[50] -= 1
                    till[25] -= 1
                    print("till: " + str(till))
                else:
                    print("NO")
                    return "NO"

    print("YES")
    return "YES"


tickets([25, 25, 50])
tickets([25, 100])
tickets([25, 25, 25, 25, 25, 100, 100])
tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100,
         25, 25, 50, 100, 25, 50, 25, 100, 25, 50, 50, 50])
tickets([25, 25, 25, 100, 25, 25, 25, 100, 25,
         25, 50, 100, 25, 25, 50, 100, 50, 50])
tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
