# We want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.


def list_squared(m, n):
    print('START')
    solution = []
    n = n + 1

    for i in range(m, n):
        sum = 0
        # print(f'divisors of {i}:')
        for j in range(1, i + 1):
            if i % j == 0:
                # print(j)
                j = j * j
                sum += j
                # print(f'sum: {sum}')
        root = sum ** 0.5
        # print(f'root: {root}')
        root = str(root)
        # print(type(root))
        if len(root) <= 5:
            print(f'{i}, {sum}')
    print('END')


list_squared(1, 250)  # [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250)  # [[42, 2500], [246, 84100]]
list_squared(250, 500)  # [[287, 84100]]
