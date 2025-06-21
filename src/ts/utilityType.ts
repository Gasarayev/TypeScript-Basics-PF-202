// Partial<Type>
// Partial<Type> verilmiş Type tipinin bütün xassələrini isteğe bağlı (optional) edir. Bu, bir obyektin
//  yalnız müəyyən hissələrini yeniləmək və ya ilkin dəyərlər təyin etmək istədikdə çox faydalıdır.

interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;

// PartialUser tipi aşağıdakı kimi olar:
// {
//   name?: string;
//   age?: number;
//   email?: string;
// }

const userUpdate: PartialUser = {
  name: "Elvin",
};


// Required<Type>
// Required<Type> verilmiş Type tipinin bütün xassələrini tələb olunan (required) edir. Bu, Partial tipinin əksidir 
// və bəzən bütün xassələrin mövcudluğunu təmin etmək lazım gəldikdə istifadə olunur.
interface Car {
  make?: string;
  model?: string;
  year?: number;
}

type RequiredCar = Required<Car>;

// RequiredCar tipi aşağıdakı kimi olar:
// {
//   make: string;
//   model: string;
//   year: number;
// }

const myCar: RequiredCar = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};



// ReadOnly<Type>
// ReadOnly<Type> verilmiş Type tipinin bütün xassələrini oxunma rejimində (read-only) edir.
// bir obyektin xassələrinin dəyişdirilməsinin qarşısını almaq üçün istifadə olunur.

interface Product {
  id: number;
  name: string;
  price: number;
}

type ReadOnlyProduct = Readonly<Product>;

// ReadOnlyProduct tipi aşağıdakı kimi olar:
// {
//   readonly id: number;
//   readonly name: string;
//   readonly price: number;
// }

const item: ReadOnlyProduct = {
  id: 1,
  name: "Laptop",
  price: 1200,
};

// item.price = 1300; Error: Cannot assign to 'price' because it is a read-only property.


// Pick<Type, Keys>
// Pick<Type, Keys> verilmiş Type tipindən yalnız müəyyən Keys xassələrini seçərək yeni bir tip yaradır.

interface UserDetails {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
}

type PublicUser = Pick<UserDetails, "id" | "username" | "email">;

// PublicUser tipi aşağıdakı kimi olar:
// {
//   id: number;
//   username: string;
//   email: string;
// }

const userProfile: PublicUser = {
  id: 101,
  username: "john_doe",
  email: "john@example.com",
};



// Omit<Type, Keys>
// Omit<Type, Keys> verilmiş Type tipindən müəyyən Keys xassələrini çıxararaq yeni bir tip yaradır. Pick tipinin əksidir.

interface BlogPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
}

type BlogPreview = Omit<BlogPost, "content" | "authorId">;

// BlogPreview tipi aşağıdakı kimi olar:
// {
//   id: number;
//   title: string;
//   createdAt: Date;
// }

const post: BlogPreview = {
  id: 1,
  title: "TypeScript Utility Types",
  createdAt: new Date(),
};


// Exclude<UnionType, ExcludedMembers>
// Exclude<UnionType, ExcludedMembers> verilmiş Union tipindən ExcludedMembers 
// hissələrini çıxararaq yeni bir Union tipi yaradır. Bu, daha çox Union tiplərlə işləyərkən faydalıdır.

type AllColors = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Exclude<AllColors, "yellow">;  //"red" | "green" | "blue"





// Extract<Type, Union>
// Extract<Type, Union> verilmiş Union tipindən Union hissəsində 
// mövcud olanları seçərək yeni bir Union tipi yaradır. Exclude tipinin əksidir.

type EventType = "click" | "hover" | "submit" | "focus";
type InteractiveEvents = Extract<EventType, "click" | "hover">; //"click" | "hover"



// NonNullable<Type>
// NonNullable<Type> verilmiş Type tipindən null və undefined tiplərini çıxarır.

type StringOrNull = string | null | undefined;
type NonNullableString = NonNullable<StringOrNull>;



// Record<Keys, Type>
// Record<Keys, Type> verilmiş Keys tipli açarlara və Type tipli dəyərlərə malik bir obyekt tipi yaradır. 
// Bu, sabit açarlara malik obyekt tipləri yaratmaq üçün istifadə olunur.

type Page = "home" | "about" | "contact";

interface PageInfo {
  title: string;
  path: string;
}

type PageRoutes = Record<Page, PageInfo>;

// PageRoutes tipi aşağıdakı kimi olar:
// {
//   home: { title: string; path: string; };
//   about: { title: string; path: string; };
//   contact: { title: string; path: string; };
// }

const routes: PageRoutes = {
  home: { title: "Ana Səhifə", path: "/" },
  about: { title: "Haqqımızda", path: "/about" },
  contact: { title: "Əlaqə", path: "/contact" },
};



// Parameters<Type>
// Parameters<Type> verilmiş funksiya Type tipinin parametrlərinin tuple tipini əldə edir.

function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>; //[name: string, age: number]


// ReturnType<Type>
// ReturnType<Type> verilmiş funksiya Type tipinin qaytarma dəyərinin tipini əldə edir.

function calculateSum(a: number, b: number): number {
  return a + b;
}

type SumResult = ReturnType<typeof calculateSum>;