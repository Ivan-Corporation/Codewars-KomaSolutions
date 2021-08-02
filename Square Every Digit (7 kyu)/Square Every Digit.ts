export class Kata {
  static squareDigits(num: any) {
   let numString = num.toString()
   let arr = []

  for(var i = 0; i < numString.length; i++) {
    arr[i] = numString[i] * numString[i]
  }
  return Number(arr.join(''))

  }
}
