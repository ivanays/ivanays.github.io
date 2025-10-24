const hrefPhone = (props, index = 0) => {
    return `tel:${props.dataPhone[index].code}${props.dataPhone[index].number}`;
}

export default hrefPhone;
