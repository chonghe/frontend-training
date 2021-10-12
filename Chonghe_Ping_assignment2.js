const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

let newArr = (function fn() {
    let arrayMethod1 = [];
    let arrayMethod2 = [];
    let total = 0;
    return {
        doublesArr: function() {
            itemsObject.forEach(item => {
                arrayMethod1.push({
                    quantity: item.quantity * 2,
                    price: item.price * 2
                })
            })
            return arrayMethod1;
        },
        filterArr: function() {
            itemsObject.forEach(item => {
                if (item.quantity > 2 && item.price > 300) {
                    arrayMethod2.push({
                        quantity: item.quantity,
                        price: item.price
                    })
                }
            })
            return arrayMethod2;
        },
        calculateValue: function() {
            itemsObject.forEach(item => {
                let sum = item.quantity * item.price
                total = total + sum
            })
            return total;
        }
    }
})();

// console.log(newArr.doublesArr());
// console.log(newArr.filterArr());
// console.log(newArr.calculateValue());

const string = ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';

function replaceStr(str) {
    return str.replace(/[^a-zA-Z]/g, "").toLowerCase();
}
//console.log(replaceStr(string));;