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
        const parts = pNum.split("\n");
        const delimiterLine = parts[0].slice(2);
        pNum = parts[1];

        const multipleDelimiters = delimiterLine.match(/\[(.+?)\]/g);
        if (multipleDelimiters) {
            const escapedDelimiters = multipleDelimiters.map(d =>
                d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );
            delimiter = new RegExp(escapedDelimiters.join('|'));
            console.log("delimiter", delimiter)
        } else {
            delimiter = new RegExp(delimiterLine);
        }
    }

    const numArr = pNum.split(delimiter).map(Number).filter((num) => num <= 1000);
    const negativeNumArr = numArr.filter((num) => num < 0);

    if (negativeNumArr.length > 0) {
        throw new Error(`negative numbers not allowed as ${negativeNumArr.join(", ")}`);
    }

    return numArr.reduce((acc, num) => acc += num, 0);
}

module.exports = add;