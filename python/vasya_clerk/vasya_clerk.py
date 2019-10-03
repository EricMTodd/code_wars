def tickets(people):
    till = {
        25: 0,
        50: 0,
        100: 0
    }

    for i in people:

        if i == 25:
            till[25] += 1
        elif i == 50:
            if till[25] < 1:
                print("NO")
                return "NO"
            till[50] += 1
            till[25] -= 1
        else:
            if till[50] >= 1 and till[25] >= 1:
                till[100] += 1
                till[50] -= 1
                till[25] -= 1

    people_sum = sum(people)


tickets([25, 25, 50])
tickets([25, 100])
