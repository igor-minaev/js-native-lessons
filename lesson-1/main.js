// Примитивы
// 1. string
// 2. number
// - number
// - Infinity
// - NaN

const a = 5
console.log(typeof a)

const b = 'a' * 2
console.log(typeof b)  //NaN
console.log(Number.isNaN(b))

const c = 5 / 0
console.log(typeof c) // Infinity
console.log(Number.isFinite(c))

// 3. boolean
// - true
// - false
// 4. undefined
// 5. null

console.log(typeof null)  // object

// 6. bigint
// 7. symbol

// Объекты
// - более сложная структкра(имеют свойства)
// - имеют свойства и методы(поведение)
// - ссылочный тип данных


// 8. object
// - object
console.log(typeof {}) // object
// - array
console.log(typeof []) //object
console.log(Array.isArray([])) // - function
console.log(typeof (() => {
})) //function

console.log({}) // new Object() или {}
console.log([]) // new Array() или []

const refObj = {}  //#2334
const refArr = {}  //#3456
const xxx = refObj //#2334

xxx.name = 'Anna'
console.log(refObj.name)

let num = 5
let num2 = num
// иммутабельно:
// делаем копию = вносим изменения в копию = используем копию с изменениями


const user = {
    name: 'Bob',
    age: 24, //-> 25
    isStudent: false,
    address: {
        country: "Belarus",
        city: "Bobruisk" //-> Minsk
    }
}

const addData = {
    technology: "front-end developer"
}

user.age = 25

const copyUser = {...user, age: 25}
// {
// name: user.name,
// age: user.age,
// isStudent: user.isStudent
// ...user
// }

// copyUser.age = 25
console.log(user === copyUser) //false

// Bob is married

const copyUser2 = {...copyUser, isMarried: true}

const copyUser3 = {...user, address: {...user.address, city: "Minsk"}}

const concat = {...user, ...addData}
console.log(concat)

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true
    }
]

const newUser = {
    id: 5,
    name: "Joe",
    isStudent: true
}
// create
const usersCopy = [...users, newUser]
// update
const usersCopy2 = usersCopy.map(st => st.id === 2 ? {...st, isStudent: false} : st)
// delete
const usersCopy3 = usersCopy2.filter(u => u.id !== 4)

