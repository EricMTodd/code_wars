# We want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.


def list_squared(m, n):
    solution = []
    n = n + 1

    for i in range(m, n):
        print(f'divisors of {i}:')
        for j in range(1, i + 1):
            if i % j == 0:
                print(j)

        # print(2500 ** 0.5)


list_squared(1, 250)  # [[1, 1], [42, 2500], [246, 84100]]
# list_squared(42, 250)  # [[42, 2500], [246, 84100]]
# list_squared(250, 500)  # [[287, 84100]]
