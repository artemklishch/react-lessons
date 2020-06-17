//bool
const isFetching: boolean = true
const isLoading: boolean = true

//number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

//string
const message: string = 'Hello typescript'

//arrays
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'something']

//combine
const contact: [string, number] = ['Vladilen', 1234567]

//any
let variable: any = 42
variable = 'Hello'
variable = []

//funcs
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Bob')

//never
function throwError(message: string): never {
    throw new Error(message)
};
function infinite(): never {
    while (true) { }
}

//Type
type Login = string
const login: Login = 'admin'
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

//type, undefined
type someType = string | null | undefined

