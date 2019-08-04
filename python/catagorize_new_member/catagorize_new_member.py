def openOrSenior(data):
    solution = []

    for i in data:
        print(i[0], i[1])

        if i[0] >= 55 and i[1] > 7:
            solution.append("Senior")
        else:
            solution.append("Open")

    print(solution)
    return solution


openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])
openOrSenior([[16, 23], [73, 1], [56, 20], [1, -1]])
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
