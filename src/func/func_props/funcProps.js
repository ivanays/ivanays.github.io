const propsData = (props, [...arg] = []) => {
    let propsAll = props;
    let arrImages = [...arg];
    arrImages.length !== -1 ? arrImages.map((value, i) => (propsAll.data[i].src = value)) : null;
    return propsAll.data;
};

export default propsData;