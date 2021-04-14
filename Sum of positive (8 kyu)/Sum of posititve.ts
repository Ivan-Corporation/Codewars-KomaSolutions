export function positiveSum(arr:number[]):number {
  let ts_arr_sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      ts_arr_sum = ts_arr_sum + arr[i];
    }
  }
  return ts_arr_sum;
}
