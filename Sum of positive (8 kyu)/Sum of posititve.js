function positiveSum(arr) {
  let arr_sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr_sum = arr_sum + arr[i];
    }
  }
  return arr_sum
}