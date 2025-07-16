function add(pNum) {
    if (pNum === "")
        return 0;

    // if(pNum.includes(",")){
    //     const numArr = pNum.split(/,|\n/);
    //     const sum = numArr.reduce((acc, ele) => {
    //         acc += parseInt(ele);
    //         return acc;
    //     }, 0)
    //     return sum;
    // }

    let delimiter = /,|\n/;
    if (pNum.startsWith("//")) {
        const parts = pNum.split("\n")
        delimiter = new RegExp(parts[0].slice(2));
        pNum = parts[1]
    }

    const parts = pNum.split(delimiter)
    return parts.reduce((acc, num) => acc += parseInt(num), 0);
}

module.exports = add;