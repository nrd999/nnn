// 1) Haytarareq popoxakan ev veragreq 0: 6 angam tpeq popoxakan@ aynpes vor tpi 0, 1 ev 2 tvern hetevyal hertakanutyamb
// 0
// 2
// 1
// 1
// 2
// 0
// ogtagorceq increment decrement

// Answer 1)
// let y = 0
// console.log(y++)
// console.log(++y)
// console.log(--y)
// console.log(y++)
// console.log(y--)
// console.log(--y)

// 2) Greq nuyn code@ switch case-i mijocov
// let x = 5;
// if (x > 7) {
//     console.log('big')
// } else if (x >= 5) {
//     console.log('equal')
// } else {
//     console.log("i don't know");
// }
//    Answer 2)
//    let x =5;
//    switch(x) {
//        case x >7:
//            console.log('big');
//            break;
//        case x >=5:
//             console.log('equal');
//             break;
//        default:
//            console.log("i don't know");
//    }

// 3) Greq nuyn cod@ if else-i mijocov
// let y = 'some';
// switch (y) {
//     case 'some text':
//         console.log('some text');
//         break;
//     case 'some':
//         console.log('some');
//         break;
//     default:
//         console.log('no text')
// }
// // Answer 3)
//     let y="some";
//     y==="some text" ? console.log("some text"): y==="some" ? console.log("some") : console.log("no text")
        //   OR  
             // let y='some';
                    // if (y==='some text'){
                    //     console.log('some text')
                    // } else { if (y==='some'){
                    //         console.log('some')
                    // } else {console.log('no text')
                    // }
                    // }
            //   ______________________________________________

// 4) Inch ktpi ev inchu?
// let num = 0;
// num++ ? console.log(num) : console.log('no-num');
// if (num) {
//     console.log(num && 5)
// }

// Answer 4)
// կարտատպի առաջին տողում no-num, երկրորդ տողում ՝ 5
// քանզի առաջին տողում պայմանի մեջ PostFixValue- ին գումարվում է 1 աջից, 
// այսինքն արժեքը կմնա 0 նույն տողում, հաջորդ տողում արդեն 
// num-ը հավասար է 1 այսինքն (true), 
// պայմանից ելնելով, այսինքն և-ից կտպվի վերջին ճիշտ արժեքը՝ այսինքն 5

// 5) Inch ktpi ev inchu?
// let count = 0;
// if(count.toString()) {
//     count++;
//     if(count > 0) {
//         count++;
//         if(!count) {
//             console.log('no-count')
//         }else {
//             console.log(--count)
//         }
//     }
// }

// Answer 5)
// Առաջին պայմանով մեր փոփոխականը թիվը վերածում ենք տեքստի 
// և տպում ենք նրա արժեքին + 1 ԱՋ ից, այսինքն վերածում ենք նորից 
// թվի մաթեմատիկական գործողությունով
// հաջորդ տողում համեմատում ենք արդեն արժեքը փոփոխված փոփոխականին 
// այսինքն 1ը 0ի հետ "1>0" և տպում ենք 1 ++ ԱՋ ից, 
// հանդիպելով ճիշտ պայմանի կտպվի 1 անտեսելով մնացաց պայմանները