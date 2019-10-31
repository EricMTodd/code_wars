def highest_rank(arr):
    print(arr)

    max = 0
    solution = 0
    dict = {}

    for i in arr:
        dict[i] = arr.count(i)

    print(f'dict: {dict}')

    for key in dict:
        print(f"{key}: {dict[key]}")
        if dict[key] > max:
            max = dict[key]
            solution = key

    print(solution)


highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12])
highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 10])
