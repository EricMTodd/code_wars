def alphabet_position(text):
    print(text)

    text = text.lower()

    letters = "abcdefghijklmnopqrstuvwxyz"

    solution = ""

    for i in text:
        for j in letters:

            if i == j:
                index = str(letters.index(i) + 1)
                solution += index + " "

    solution = solution[:-1]
    print(solution)
    return solution


alphabet_position("The sunset sets at twelve o' clock.")
alphabet_position("The narwhal bacons at midnight.")
