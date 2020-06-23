const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['hello', 'Vladilen']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
function reverse1(array){
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrings)
reverse1(arrayOfNumbers)
reverse1(arrayOfStrings)