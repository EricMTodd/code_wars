def find_missing_letter(chars):
    print("START")
    letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    key = []
    start = 0
    end = 0

    for i in letters:
        if i == chars[0]:
            start = letters.index(i)
        if i == chars[-1]:
            end = letters.index(i)

    for i in letters[start:end + 1]:
        key.append(i)

    print(chars)
    print(key)

    for i in key:
        if i not in chars:
            print(i)
            return i


find_missing_letter(['a', 'b', 'c', 'd', 'f'])
find_missing_letter(['O', 'Q', 'R', 'S'])
find_missing_letter(['U', 'V', 'W', 'Y'])
