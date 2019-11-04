def highest_rank(arr):
    print(arr)

    max = 0
    key_solution = 0
    value_solution = 0
    dict = {}

    for i in arr:
        dict[i] = arr.count(i)

    for key in dict:
        if dict[key] > max:
            max = dict[key]
            key_solution = key
            value_solution = dict[key]

    for key in dict:
        if dict[key] == value_solution:
            if key > key_solution:
                key_solution = key

    print(f'key_solution: {key_solution}')
    return key_solution


highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12])
highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 10])
highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])
highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12, 13, 13, 13])
