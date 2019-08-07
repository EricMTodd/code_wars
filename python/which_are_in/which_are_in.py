def in_array(array1, array2):
    solution = []

    # try .sorted() to sort the strings

    for i in array1:
        substr = i
        print(substr)
        for j in array2:
            print(j)

    # for i in array1:
    #     substr = i
    #     print(substr)
    # for j in array2:
    # print(j.index(substr))
    # if j.index(substr) != -1:
    #     solution.append(i)
    # break
    # print(solution.sort())

    # return solution
    return


a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
in_array(a1, a2)
