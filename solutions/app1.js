const removeDuplicatesFromArray = (array) => {
    const newArray = array.filter((item, index) => array.indexOf(item) === index);
    return newArray;
}

export default removeDuplicatesFromArray