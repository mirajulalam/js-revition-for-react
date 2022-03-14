// 1. template string
const str1 = 'would ';
const str2 = 'you ';
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
// console.log('hello ' + str1 + 'how are ' + str2)
//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  বাববার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
const templateString = `hello ${str1} how are ${str2}`;
// console.log(templateString);

// 2. spread oparator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [9, 10];
// console.log(...numbers, ...numbers2);

// 3.Array & object Destructuring with condition || or
const animal = {
    name: 'Dog',
    color: 'brown',
    age: 7
};
const { name, age } = animal || {};
// console.log(name, age);
const { color, ...rest } = animal;
// console.log(color, rest)

// const sum = (info) => {
//     console.log(info?.name)
//     console.log(info?.color)
//     console.log(info?.age)
// }
// sum(animal);

// const sum = ({ name, color, age }) => {
//     console.log(name, color, age)
// }
// sum(animal);

// 4. Nested object with array

const dreameGirl1 = [
    {
        dream1: {
            name: 'babu',
            height: '5.4',
            family: [{ father: 'rock', nother: 'shilla', sister: "chinki" }],
            age: undefined,
            constactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: '1234',
                        status: 'single',
                        friendsList: [
                            { name: 'rofik' },
                            { name: 'salam' },
                            { name: 'borkat' },
                            { name: 'abdur' },
                            undefined,
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
            ],
        },
    },
];

// console.log(dreameGirl1[0].dream1?.constactInfo[0].facebook.friendsList)


const friends = dreameGirl1[0].dream1?.constactInfo[0].facebook.friendsList;

for (const element in friends) {
    // console.log(friends[element]?.name)
}


// 5. for loop
const friendsName = [
    'hero',
    'alom',
    'how',
    'are',
    'you',
];
// console.log(friendsName[0])
// console.log(friendsName[1])
// console.log(friendsName[2])
// console.log(friendsName[3])
// console.log(friendsName[4])
for (let i = 0; i < friendsName.length; i++) {
    const element = friendsName[i];
    // console.log(element)
}

// 5. for of array ar jonno
for (const element of friendsName) {
    // console.log(element)
}

// 6. for in object ar jonno

const object = {
    a: 1,
    b: 2,
    c: 3,
    name: 'akbor'
};
// console.log(object['name'])

for (const property in object) {
    // console.log(property, object[property])
}
// 7. map
// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const temp = [];

// for (const element of numbers1) {
//     const squere = sum(element);
//     temp.push(squere)
// }
// console.log(temp);
const sum = (num) => num * num;
// এক লাইনেই  ম্যাপ করে   ফেলা
const result = numbers.map((x) => x * x);
// console.log(result)
// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে

// 8. filter
// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |
const products = [
    { id: 1, name: 'apple', price: 150, color: 'golden' },
    { id: 2, name: 'laptop', price: 300, color: 'yellow' },
    { id: 3, name: 'lamp', price: 250, color: 'blue' },
    { id: 4, name: 'samsung', price: 200, color: 'black' }
];
const result3 = products.map((pd, index) => {
    console.log(index);
    console.log(pd)
})
// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const result1 = products.filter((product) => product.id != 1);
// console.log(result1)

// 9. find
// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে
const result2 = products.find((product1) => product1.color == 'black')
// console.log(result2)
//একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে

// 10. optional chaining

const number4 = null;

console.log(number4?.age, number4?.name);
console.log(number4);


// 10. Api
const data = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => console.log(data));
}
data();

// 11. ternary oparator

const number = 'hello';
// if (number == false) {
//     console.log('bro eita true');
// }
// else {
//     console.log('bro eita false')
// }
console.log(number ? 'bro eita true' : "bro eita false");