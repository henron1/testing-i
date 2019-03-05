// module.exports = {
//     success,
//     repair,
//     failure,
// }

// function repair(item){
//     if(item.durability !== 100) {
//         return {...item, durability:100};
//     } else {
//         null;
//     }
//  };

// function success(item) {
//     item.enhancementUp++;

//     if(item.enhancementUp < 16) {
//         item.enhancement = `+${item.enhancementUp}`;
//         item.name = `${item.name} [+${item.enhancementUp}]`;
//     }else if (item.enhancementUp <21 && item.enhancementUp > 15) {
//         if (item.enhancementUp === 16) {
//             item.enhancement = 'PRI'
//         } else if (item.enhancementUp === 17) {
//             item.enhancement = 'DUO'
//         } else if (item.enhancementUp === 18) {
//             item.enhancement = 'TRI'
//         } else if (item.enhancementUp === 19) {
//             item.enhancement = 'TET'
//         } else if (item.enhancementUp === 20) {
//             item.enhancement = 'PEN'
//         }
//         item.name = `${item.name}[+${item.enhancement}] `;
//     } else if (item.enhancementUp > 20) {
//         throw new Error('cannot enhance any higher!!');
//     }

// }

// function failure(item) {
//     if (item.enhancementUp < 15) {
//         item.durability = item.durability - 5;
//     } else if (item.enhancementUp >= 15) {
//         item.durability = item.durability - 10;
//     }
//     return item;

// }

module.exports = {
    fail,
    success,
    repair
}

function fail(item){
    if (item.enhancement < 15 && item.durability < 25) {
        return{...item};
    }

    const durability = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
    const enhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

    return {
        ...item, durability, enhancement
    };
}

function success(item) {
    const enhancement = item.enhancement;
    return {...item, enhancement: enhancement + 1 }
  }

function repair(item) {
    if(item.durability !== 100) {
        return{item, durability:100};
    } else {
        null;
    }
}