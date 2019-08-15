def in_array(array1, array2):
    solution = []
    for a1 in array1:
        for a2 in array2:
            if a1 in a2 and not a1 in solution:
                solution.append(a1)
    solution.sort()
    print(solution)
    return solution


a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
in_array(a1, a2)
