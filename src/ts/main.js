"use strict";
// //---------------------------------TASK------------------------------------------------
// // `string` tipində olan bir array yaradın
// // Əlavə olaraq həmin array-də olan bütün sözləri böyük hərflə yazan bir funksiya yaradın
const fruit = ["apple", "banana", "strawberry"];
function toUpperCaseAll(arr) {
    return arr.map((item) => item.toUpperCase());
}
console.log(toUpperCaseAll(fruit));
function userStatus(status) {
    console.log(`User is ${status}`);
}
userStatus("active");
// // `Person` adlı class yazın, ad və yaş qəbul etsin
// // getInfo() metodu istifadəçini təqdim etsin
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} ${this.age}`;
    }
}
const p = new Person("Emil", 27);
console.log(p);
// // HTML faylında bir button və input olsun
// // Button kliklənəndə input-dakı dəyəri konsola yazdır
// // type assertion
// // HTML:
// // <input id="nameInput" />
// // <button id="showBtn">Show</button>
const inp = document.getElementById("nameInput");
const button = document.getElementById("showBtn");
button.addEventListener("click", () => {
    console.log(`input value ${input.value}`);
});
// // Enum və switch-case
// // Role adlı bir enum yaradin
// whoAreYou adlı bir funksiya yazasınız. Bu funksiya Role tipində bir parametr qəbul etməlidir və aşağıdakı qaydalara
// // əsasən istifadəçinin rolunu string kimi geri qaytarmalıdır:
// // Əgər rol Admin-dirsə → "Admin"
// // Əgər rol SuperAdmin-dirsə → "Super Admin"
// // Əgər rol User-dirsə → "User"
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["SuperAdmin"] = 1] = "SuperAdmin";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
function whoAreYou(role) {
    switch (role) {
        case Role.Admin:
            return "Admin";
        case Role.SuperAdmin:
            return "Super Admin";
        case Role.User:
            return "User";
    }
}
console.log(whoAreYou(Role.SuperAdmin));
// // Array-i geri qaytaran generic funksiya yazın
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("salam"));
console.log(wrapInArray(42));
// //Mini task: ToDo List (DOM + OOP + Array)
class Todo {
    constructor(task) {
        this.task = task;
    }
}
// const todo = new Todo("test");
// console.log(todo.task);
const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const todos = [];
btn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        const newTodo = new Todo(task);
        todos.push(newTodo);
        const li = document.createElement("li");
        li.textContent = newTodo.task;
        list.appendChild(li);
        input.value = "";
    }
});
