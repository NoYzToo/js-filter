console.log("1")
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

let emails = {
    org: [],
    net: [],
    info: []
}


let other = []

// 1 способ

// emails.org.push(users.filter(item => item.email.slice(-3) == "org"))
// emails.net.push(users.filter(item => item.email.slice(-3) == "net"))
// emails.info.push(users.filter(item => item.email.slice(-4) == "info"))

// other.push(users.filter(item => item.email.slice(-4) != "info" && item.email.slice(-3) != "net" && item.email.slice(-3) != "org"))

// 2 способ

for (let item of users) {
    if (item.email.slice(-3) == "org") {
        emails.org.push(users.filter(item => item.email.slice(-3) == "org"))
    }
    else if (item.email.slice(-3) == "net") {
        emails.net.push(users.filter(item => item.email.slice(-3) == "net"))
    }
    else if (item.email.slice(-4) == "info") {
        emails.info.push(users.filter(item => item.email.slice(-3) == "info"))
    } else {
        other.push(item)
    }
}

console.log(emails)
console.log(other)

console.log("")
//////////////////////////////////////////////////////////////////////
console.log("2")

let discount = parseInt(prompt("Какая скидка?"))

let totalSale

let total

let max

let min

let average

let arr = [
    {
        name: 'Milk',
        price: 3.25
    },
    {
        name: 'Coffee',
        price: 1.5
    },
    {
        name: 'Ice Cream',
        price: 7.85
    },
    {
        name: 'Tomatos',
        price: 4.14
    },
    {
        name: 'Onion',
        price: 2.25
    }
]

let arr_sale = []


let prices = []

for (let item of arr) {
    prices.push(item.price)
}

for (let item of arr) {
    if (item.price == Math.max.apply(null, prices)) {
        max = Object.assign({}, item)
    }
    if (item.price == Math.min.apply(null, prices)) {
        min = Object.assign({}, item)
    }
}



total = prices.reduce((acc, item) => acc + item, 0)

totalSale = prices.reduce((acc, item) => acc + (item - item / 100 * discount), 0)



for (let item of arr) {
    arr_sale.push(Object.assign({}, item))
}

for (let item of arr_sale) {
    item.price = item.price - (item.price / 100 * discount)
}



average = total / prices.length
average = +average.toFixed(2)
totalSale = +totalSale.toFixed(2)



console.log(prices)

console.log(max)

console.log(min)

console.log(total)

console.log(totalSale)

console.log(arr)

console.log(arr_sale)

console.log(average)



console.log("")
//////////////////////////////////////////////////////////////////////
console.log("3")

let arr3 = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {
        course: '   BACKEND',
        count: 0
    },
]

let SMM = []
let PROGRAMMING = []
let MAX3ds = []
let DIZAYN = []
let BACKEND = []

for (let item of arr3) {
    if (item.info.faculity.toUpperCase().trim() == "SMM") {
        SMM.push(item)
    }
    else if (item.info.faculity.toUpperCase().trim() == "PROGRAMMING") {
        PROGRAMMING.push(item)
    }
    else if (item.info.faculity.toUpperCase().trim() == "3DSMAX") {
        MAX3ds.push(item)
    }
    else if (item.info.faculity.toUpperCase().trim() == "DIZAYN") {
        DIZAYN.push(item)
    }
    else if (item.info.faculity.toUpperCase().trim() == "BACKEND") {
        BACKEND.push(item)
    }
}

console.log(SMM)
console.log(PROGRAMMING)
console.log(MAX3ds)
console.log(DIZAYN)
console.log(BACKEND)


for (let item of categories) {
    if (item.course.toUpperCase().trim() == SMM[0].info.faculity.toUpperCase().trim()) {
        item.count = SMM.length
    }
    else if (item.course.toUpperCase().trim() == PROGRAMMING[0].info.faculity.toUpperCase().trim()) {
        item.count = PROGRAMMING.length
    }
    else if (item.course.toUpperCase().trim() == MAX3ds[0].info.faculity.toUpperCase().trim()) {
        item.count = MAX3ds.length
    }
    else if (item.course.toUpperCase().trim() == DIZAYN[0].info.faculity.toUpperCase().trim()) {
        item.count = DIZAYN.length
    }
    else if (item.course.toUpperCase().trim() == BACKEND[0].info.faculity.toUpperCase().trim()) {
        item.count = BACKEND.length
    }
}


console.log(arr3)
console.log(categories)



console.log("")
//////////////////////////////////////////////////////////////////////
console.log("4")



// let arr4 = [[{ a: { price: 20 } }][{ a: { price: 5 } }][{ a: { price: 44 } }]]

// let total4 = 0

// console.log(arr4[0][1])


console.log("")
//////////////////////////////////////////////////////////////////////
console.log("5")



let zvezd = "*"

let HowMuch = +prompt("из скольки звезд должна быть ёлочка?")

let tree = `${zvezd}`

for (let i = 0; i < HowMuch; i++) {
    console.log(tree)
    tree = tree + zvezd
    if (i == HowMuch - 1) {
        for (let i = HowMuch; i != 0; i--) {
            tree = tree.slice(0, -1)
            console.log(tree)
        }
    }
}



console.log("")
//////////////////////////////////////////////////////////////////////
console.log("6")

let n_arr = [[1, 2, 3], 4, 5, [[6, 7], 10], 8, 9]

console.log(n_arr)

// первый способ

// n_arr = n_arr.flat(3)

// второй способ

function skobka(array) {
    if (Array.isArray(array)) {
        for (let item of array) {
            if (Array.isArray(item)){
                array = array.flat()
                skobka(item)
            }
        }
    }
    return array
}

console.log(skobka(n_arr))
