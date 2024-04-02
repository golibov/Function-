"use strict";


// 1. Oy raqami kiritilsa Qaysi fasli ekanini aniqlovchi funksiya yozing.
// function fasl() {
//   let a = +prompt("Oyni kiriting");
//   switch (a) {
//     case 1:
//       console.log("Qish fasli");
//       break;
//     case 2:
//       console.log("Qish fasli");
//       break;
//     case 3:
//       console.log("Bahor fasli");
//       break;
//     case 4:
//       console.log("Bahor fasli");
//       break;
//     case 5:
//       console.log("Bahor fasli");
//       break;
//     case 6:
//       console.log("Yoz fasli");
//       break;
//     case 7:
//       console.log("Yoz fasli");
//       break;
//     case 8:
//       console.log("Yoz fasli");
//       break;
//     case 9:
//       console.log("Kuz fasli");
//       break;
//     case 10:
//       console.log("Kuz fasli");
//       break;
//     case 11:
//       console.log("Kuz fasli");
//       break;
//     case 12:
//       console.log("Qish fasli");
//       break;
//   }
// }
// fasl()



// 2. Yoshingizni aniqlovchi funksiya yozing 

// function age (){
//     let a = +prompt("Yilingizni kiriting")
//     let year = 2024
//     console.log(`Siz ${year-a} yoshda siz =)`);
// }
// age()


// 4. Telefon raqam kodiga qarab qaysi "Operator" ekanini aniqlovchi dastur yozing.

// function company() {
//       let company = +prompt("Raqamez kodini kiriting");
//       switch (company) {
//         case 90:
//           console.log("Beeline");
//           break;
//         case 91:
//           console.log("Beeline");
//           break;
//         case 93:
//           console.log("Ucell");
//           break;
//         case 94:
//           console.log("Uzmobile");
//           break;
//         case 99:
//           console.log("Uzmobile");
//           break;
//         case 88:
//           console.log("Mobiuz");
//           break;
//         case 97:
//           console.log("UTC");
//           break;
//         case 33:
//           console.log("Humans");
//           break;
       
//       }
//     }
//     company()





// 3. N gacha bo'lgan juft sonlar yig'indisini , N gacha bo'lgan toq sonlar yig'indisiga nisbatini aniqlovchi dastur tuzing.

function toqJuft(){
    let a = +prompt("Sonni kiriting:");
    let b = 0;
    let c = 0;

    for( let i = 0; i=>a; i++){
        if(i%2==0){
            b+=i
        }else{
            c+=i;
        }
    }
    console.log(`Juftlar: ${a}`);
    console.log(`Toqlar: ${b}`);
    console.log(`Bo'linmasi: ${a/b}`);
}
toqJuft()