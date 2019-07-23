const uuidv4 = require('uuid/v4')
let items = [
    {
        id: uuidv4(),
        name: "Đi chợ mua rau",
        level: 0
    },
    {
        id: uuidv4(),
        name: "Học bài",
        level: 1
    },
    {
        id: uuidv4(),
        name: "Đá bóng",
        level: 1
    }
    ,
    {
        id: uuidv4(),
        name: "Ăn sáng",
        level: 2
    }
    ,
    {
        id: uuidv4(),
        name: "Mua thức ăn",
        level: 1
    }
]
export default items;