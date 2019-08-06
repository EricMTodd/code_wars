def in_array(array1, array2):
    solution = []

    for i in array1:
        substr = array1[i]
        for j in array2:
            if array2[j].index(substr) != -1:
                solution.append(array1[i])
                break
    print(solution.sort())
    return solution.sort()


a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
in_array(a1, a2)
