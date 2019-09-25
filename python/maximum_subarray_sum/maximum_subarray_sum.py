# The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

# maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

# # should be 6: [4, -1, 2, 1]

# Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


def maxSequence(arr):
    print(arr)
    sum = 0
    max_sum = 0

    if arr == []:
        print("0")
        return 0

    for i in arr:
        print(f'i: {i}')
        for j in arr:
            j = arr.index(i) + 1
            print(f'j: {j}')

    print(sum)


maxSequence([])
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
