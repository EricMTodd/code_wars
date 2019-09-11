# We want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.


# Original Solution
# def list_squared(m, n):
#     solution = []
#     for i in range(m, n):
#         sum = 0
#         for j in range(1, i + 1):
#             if i % j == 0:
#                 sum += j ** 2
#         sqrt = sum ** 0.5
#         if round(sqrt) == sqrt:
#             list = [i, sum]
#             solution.append(list)
#     print(solution)
#     return solution


# Efficient Solution
from math import sqrt
from math import ceil


def list_squared(m, n):
    solution = []
    for i in range(m, n):
        sum = 0
        for j in range(1, ceil(sqrt(i))):
            if i % j == 0:
                sum += j ** 2
                if i != 1:
                    sum += (i // j) ** 2
        if i == 1:
            sum = 1
        if round(sqrt(sum)) == sqrt(sum):
            list = [i, sum]
            solution.append(list)
    print(solution)
    return solution


list_squared(1, 250)  # [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250)  # [[42, 2500], [246, 84100]]
list_squared(250, 500)  # [[287, 84100]]
