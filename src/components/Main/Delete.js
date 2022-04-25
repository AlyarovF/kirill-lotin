// delete func
function Delete() {
    let left = document.getElementsByTagName("textarea")[0].id;
    document
        .getElementById(left)
        .value = '';

    let right = document.getElementsByTagName("textarea")[1].id;
    document
        .getElementById(right)
        .innerHTML = '';
}

export default Delete;