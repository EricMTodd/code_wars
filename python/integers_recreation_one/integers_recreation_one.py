# We want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

# from math import ceil


def list_squared(m, n):
    solution = []

    for i in range(m, n + 1):
        sum = 0
        for j in range(1, i + 1):
            if i % j == 0:
                j = j * j
                sum += j
        root = sum ** 0.5
        root = str(root)
        if len(root) <= 5:
            list = [i, sum]
            solution.append(list)
    print(solution)
    return solution


list_squared(1, 250)  # [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250)  # [[42, 2500], [246, 84100]]
list_squared(250, 500)  # [[287, 84100]]
