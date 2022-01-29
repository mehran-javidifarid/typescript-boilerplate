export const RialSeparator = (price = "") => {
    const price_arr = price.toString().split("").reverse();
    let new_price: string[] = [];
    price_arr.map((p, i) => {
        if (i % 3 === 0 && i !== 0 && i !== price_arr.length) {
            new_price.push(",");
        }
        new_price.push(p)
    });
   
    
    return new_price.reverse().join("").toString();
};