// //---------------------------------TASK------------------------------------------------

// // `string` tipində olan bir array yaradın
// // Əlavə olaraq həmin array-də olan bütün sözləri böyük hərflə yazan bir funksiya yaradın

const fruit: string[] = ["apple", "banana", "strawberry"];

function toUpperCaseAll(arr: string[]): string[] {
  return arr.map((item) => item.toUpperCase());
}

console.log(toUpperCaseAll(fruit));

// // Bir `User` və bir `Admin` üçün `interface` və `type` istifadə et
// // İkisinin ortaq və fərqli propertiləri olsun

// interface User {
//   name: string;
//   age: number;
// }

// type Admin = User & {
//   role: "admin";
// };

// const createAdmin = (admin: Admin) => {
//   console.log(`Admin: ${admin.name} - ${admin.role}`);
// };

// createAdmin({
//   name: "Emil",
//   age: 30,
//   role: "admin",
// });

// // Literal və Union Tip
type Status = "active" | "banned";

function userStatus(status: Status): void {
  console.log(`User is ${status}`);
}

userStatus("active");

// // `Person` adlı class yazın, ad və yaş qəbul etsin
// // getInfo() metodu istifadəçini təqdim etsin

class Person {
  constructor(public name: string, public age: number) {}

  getInfo(): string {
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

const inp = document.getElementById("nameInput") as HTMLInputElement;
const button = document.getElementById("showBtn") as HTMLButtonElement;

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

enum Role {
  Admin,
  SuperAdmin,
  User,
}

function whoAreYou(role: Role) {
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
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray<string>("salam"));
console.log(wrapInArray<number>(42));




// //Mini task: ToDo List (DOM + OOP + Array)

class Todo {
  constructor(public task: string) {}
}

// const todo = new Todo("test");
// console.log(todo.task);


const input = document.getElementById("todoInput") as HTMLInputElement;
const btn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

const todos: Todo[] = [];

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