def positive_sum(arr):
    list_sum = 0
    for num in arr:
        if num > 0:
            list_sum += num
    return list_sum
