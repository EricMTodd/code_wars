def high_and_low(numbers):
    min = 0
    max = 0
    numbers = numbers.split(" ")
    for i in numbers:

        i = int(i)
        if i > max:
            max = i
        if i < min:
            min = i

    numbers = str(max) + " " + str(min)
    return numbers


high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
