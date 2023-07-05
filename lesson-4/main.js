const todolistId_1 = '1214dsc21'
const todolistId_2 = 'fd788d4tb'

const todolists = [
    {
        id: todolistId_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todolistId_2,
        title: 'What to buy',
        filter: 'all',
    }
]

const tasks = {
    [todolistId_1]: [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ],
    [todolistId_2]: [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Meat', isDone: false}
    ]
}

console.log(tasks['1214dsc21'])
console.log(tasks[todolists[0].id])
console.log(tasks[todolistId_1])

const setTodolist = ([]) => {
}
const setTasks = ([]) => {
}

const addTodolist = (title) => {
    const todolistId = 'fwe68dfsa'
    const newTodolist = {
        id: todolistId, title, filter: 'all'
    }
    setTodolists([...todolists, newTodolist])
    setTasks({...tasks, [todolistId]: []})
}

