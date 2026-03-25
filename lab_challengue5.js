function deepComp(a, b) {
    // Si son iguales directamente
    if (a === b) return true;

    // Si alguno no es objeto o es null
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false;
    }

    // Obtener propiedades
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    // Si no tienen la misma cantidad de propiedades
    if (keysA.length !== keysB.length) return false;

    // Comparar cada propiedad
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;

        if (!deepComp(a[key], b[key])) return false;
    }

    return true;
}

// Pruebas
let a={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z:{m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z:{m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z:{m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z:{m:'test', n:false}};

console.log(deepComp(a,b)); // true
console.log(deepComp(a,c)); // false
console.log(deepComp(a,d)); // false
console.log(deepComp(a,e)); // false
console.log(deepComp(a,f)); // false