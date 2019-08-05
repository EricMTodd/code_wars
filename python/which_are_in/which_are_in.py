def in_array(array1, array2):
    letters = "abcdefghijklmnopqrstuvwxyz"
    target = 0
    print(target)
    prev = -1
    print(prev)

    for i in letters:
        target = letters.index(i)
        # print(i)
        # print(letters.index(i))
        # print(array1[0][0])
        for j in array1:
            # print(j[0])
            if j[0] == i:
                # print(i)
                # print(target)
                if target < prev:
                    print(target)
                else:
                    prev = target
                    print(prev)

    return


a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
in_array(a1, a2)
