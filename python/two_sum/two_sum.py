def two_sum(numbers, target):
    print(numbers, target)

    if numbers[0] + numbers[1] == target:
        print(f'match: {numbers[0]} + {numbers[1]} = {target}')
        return (0, 1)

    for i in numbers:
        for j in numbers:
            if i + j == target and numbers.index(i) != numbers.index(j):
                print(f'match: {i} + {j} = {target}')
                return (numbers.index(i), numbers.index(j))


two_sum([1, 2, 3], 4)
two_sum([1234, 5678, 9012], 14690)
two_sum([2, 2, 3], 4)
