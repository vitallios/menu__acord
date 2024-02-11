var hendler;
let menuList = document.getElementById('menu__list');

let user = {
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
}




// console.log(user.services);



function getData() {
    //fetch("https://reqres.in/api/users")
    fetch("https://reqres.in/api/users")

        .then(res => {
            return res.json();
        })
        .then(json => {
            let data = json.data;

            console.log(menuList);
            user.services.map((e) => {
                hendler = {
                    "id": e.id,
                    "head": e.head,
                    "name": e.name,
                    "node": e.node,
                    "price": e.price,
                    "sorthead": e.sorthead,
                };
                if (hendler.head == null) {
                    console.log(hendler.name);
                    let menuLi = document.createElement('li')
                    top_menu(menuLi, hendler)
                }
                if (hendler.node == 1) {
                    
                }
            })
        })
        .catch(error => {
            console.log(error);
        });

}


function top_menu (menuElem, hendlelArg){
    menuElem.classList.add('menu__li')
    menuElem.innerText = `${hendlelArg.name}`
    menuList.prepend(menuElem)
}


for (let li of menu.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('menu__span');
    li.prepend(span);
    span.append(span.nextSibling)
}




getData();