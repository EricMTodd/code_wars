def positive_sum(arr):
    solution = 0
    for i in arr:
        if i > 0:
            solution += i

    print(solution)
    return solution


positive_sum([1, 2, 3, 4, 5])
positive_sum([1, -2, 3, 4, 5])
positive_sum([-1, 2, 3, 4, -5])
positive_sum([])
positive_sum([-1, -2, -3, -4, -5])
