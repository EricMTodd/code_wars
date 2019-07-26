def filter_list(l):
    ans = [x for x in l if type(x) == int]
    return ans


print(filter_list([1, 2, 'a', 'b']))
print(filter_list([1, 'a', 'b', 0, 15]))
print(filter_list([1, 2, 'aasf', '1', '123', 123]))
