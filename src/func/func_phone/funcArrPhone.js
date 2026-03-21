const arrPhone = (props, index = 0) => {
    let arr = [];
    arr.push(props.dataPhone[index].code);
    props.dataPhone[index].number.split("").map(n => arr.push(n));
    return arr;
}

export default arrPhone;