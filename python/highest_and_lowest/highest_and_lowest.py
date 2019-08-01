def high_and_low(numbers):
    numbers = numbers.split(" ")
    for i in range(0, len(numbers)):
        numbers[i] = int(numbers[i])
    numbers.sort()
    solution = str(numbers[-1]) + " " + str(numbers[0])
    print(solution)

    return solution


high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
high_and_low(
    "712 463 3109 2235 2792 1497 2601 2608 2404 2698 2836 637 2102 2977 916 498 1639 1283 2429 2079 78 1958")
