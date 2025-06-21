"use strict";
// Partial<Type>
// Partial<Type> verilmiş Type tipinin bütün xassələrini isteğe bağlı (optional) edir. Bu, bir obyektin
//  yalnız müəyyən hissələrini yeniləmək və ya ilkin dəyərlər təyin etmək istədikdə çox faydalıdır.
// PartialUser tipi aşağıdakı kimi olar:
// {
//   name?: string;
//   age?: number;
//   email?: string;
// }
const userUpdate = {
    name: "Elvin",
};
// RequiredCar tipi aşağıdakı kimi olar:
// {
//   make: string;
//   model: string;
//   year: number;
// }
const myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
// ReadOnlyProduct tipi aşağıdakı kimi olar:
// {
//   readonly id: number;
//   readonly name: string;
//   readonly price: number;
// }
const item = {
    id: 1,
    name: "Laptop",
    price: 1200,
};
// PublicUser tipi aşağıdakı kimi olar:
// {
//   id: number;
//   username: string;
//   email: string;
// }
const userProfile = {
    id: 101,
    username: "john_doe",
    email: "john@example.com",
};
// BlogPreview tipi aşağıdakı kimi olar:
// {
//   id: number;
//   title: string;
//   createdAt: Date;
// }
const post = {
    id: 1,
    title: "TypeScript Utility Types",
    createdAt: new Date(),
};
// PageRoutes tipi aşağıdakı kimi olar:
// {
//   home: { title: string; path: string; };
//   about: { title: string; path: string; };
//   contact: { title: string; path: string; };
// }
const routes = {
    home: { title: "Ana Səhifə", path: "/" },
    about: { title: "Haqqımızda", path: "/about" },
    contact: { title: "Əlaqə", path: "/contact" },
};
// Parameters<Type>
// Parameters<Type> verilmiş funksiya Type tipinin parametrlərinin tuple tipini əldə edir.
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// ReturnType<Type>
// ReturnType<Type> verilmiş funksiya Type tipinin qaytarma dəyərinin tipini əldə edir.
function calculateSum(a, b) {
    return a + b;
}
