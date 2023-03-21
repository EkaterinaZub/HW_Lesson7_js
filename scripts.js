"Use strict"
// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

{
    let Kettle = function () {
        this.state = false;

        // this.tern = function(){
        //     this.state === !this.state

        // }

        this.on = function () {
            this.state = true;
            this.get()
        }

        this.off = function () {
            this.state = false;
            return this.state
        }
        this.get = function () {
            this.power = +prompt("Введите мощность чайника");
            this.volume = +prompt("Введите объем чайника");
            this.amountWater = +prompt("Введите количество налитой воды");
            this.operation();
        }
        this.operation = function () {
            this.result = 0.000117 * this.amountWater * 80 / this.power;
            console.log(`Чайник закипит за ${this.result.toFixed(3)} c`);
        }
    }

    let kettle = new Kettle();

    kettle.on()
    // kettle.off()
    // kettle.get()
    console.log(kettle)
}
// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.

{
    let Bulb = function () {
        
        this.power = +prompt("Введите мощность лампочки, Вт");
        this.electricity = 22; /*стоимость электроэнергии*/
        this.time = +prompt("введите время горения лампочки в ч");
        

        this.on = function () {
                    this.state = true;
                    this.operation()
                    this.show()
                }
        
        this.off = function () {
                    this.state = false;
                    return this.show()
                     
                }


        this.operation = function () {
            this.result =( this.power / 1000 * this.electricity * this.time);

            console.log(`Стоимость электроэнергии за время работы лампочки ${this.result} руб.`)
        }

        this.show = function (){
            if (this.state === true){
                console.log(`Лампочка включена`)
            }else {
                console.log(`Лампочка  не включена`)
            }
            
        }

    }


    let bulb = new Bulb()
    // bulb.operation()
    // bulb.on()
    bulb.off()
    console.log(bulb)



}

//  РАБОТА В КЛАССЕ
// {
//     const questions = [{
//         question: "You name",
//         defaultValue: "karina",
//         field: "name",
//     }, {
//         question: "You age",
//         defaultValue: 25,
//         field: "age",
//     }, {
//         question: "You phone",
//         defaultValue: +375237847654,
//         field: "phone",
//     }, {
//         question: "You email",
//         defaultValue: "test@gmail.com",
//         field: "email",

//     }]

//     function createName(question) {
//         const answer = prompt(question.question, question.defaultValue)
//         let testAnswer = /^[a-z0-9_-]{3,16}$/.test(answer)

//         if (!testAnswer) {
//             alert("Invalid user name")
//             return createName(question)

//         }
//         return answer
//     }

//     function createName(question) {
//         const answer = prompt(question.question, question.defaultValue)
       
//         if (isNaN(answer) || answer < 18 || Number.isInteger(answer)) {
//             alert("Invalid user age")
//             return createAge(question)

//         }
//         return answer
//     }


//     function createPhone(question) {
//         const answer = prompt(question.question, question.defaultValue)
//         let testAnswer = /^[\d+][\d()\ -]{10,14}\d$/.test(answer)

//         if (!testAnswer) {
//             alert("Invalid user phone")
//             return createPhone(question)

//         }
//         return answer
//     }


//     function createEmail(question) {
//         const answer = prompt(question.question, question.defaultValue)
//         let testAnswer = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(answer)

//         if (!testAnswer) {
//             alert("Invalid user email")
//             return createEmail(question)

//         }
//         return answer
//     }

//     function addContact() {
//         let contactData = {}

//         questions.forEach(question => {
//             if (question.field === "name") {
//                 contactData.name = createName(question)
//             }

//             if (question.field === "age") {
//                 contactData.age = createAge(question)
//             }
//             if (question.field === "phone") {
//                 contactData.phone = createPhone(question)
//             }
//             if (question.field === "email") {
//                 contactData.email = createEmail(question)
//             }
//         })

//         return this.contacts = [...this.contacts, contactData]

//     }

//     function editeContact(name, key, value) {
//         return this.contacts = this.contacts.map(contact => {
//             if(contact.name === name) {
//                 return {...contact, [key]: value}
//             }
//             return contact
//         })

//     }

//     function removeContact(name){
//         return this.contacts = this.contacts.filter(contact => contact.name !== name)

//     }

//     function showContact(){
//         for (let prop of this.contacts){
//             console.log(prop)
//         }
//     }



//     function Contacts() {
//         this.contacts = []

//         this.addContact = addContact

//         this.editeContact = editeContact


//         this.removeContact = removeContact


//         this.showContact = showContact


//     }

//     const contacts = new Contacts()

//     contacts.addContact()
//     contacts.editeContact("karina", "age", 36)
//     contacts.editeContact("karina","name", "Sony")
//     contacts.removeContact("karina")

// }