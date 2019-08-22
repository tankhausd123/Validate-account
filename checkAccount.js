function checkAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)){
        alert('true');
    } else {
        alert('false')
    }
}