function add(pNum){
    if(pNum === "")
        return 0;

    if(pNum.includes(",")){
        const numArr = pNum.split(",");
        const sum = numArr.reduce((acc, ele) => {
            acc += parseInt(ele);
            return acc;
        }, 0)
        return sum;
    }

    return parseInt(pNum);
}

module.exports = add;