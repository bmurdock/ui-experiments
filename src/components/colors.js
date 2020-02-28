function color(col) {
    if (col === 'red') {
        return 'FF0000';
    }
    if (col === 'blue') {
        return '0000FF';
    }
    if (col === 'green') {
        return '00FF00';
    }

    // you get the point
    return "FFFFFF";

}

const colors = {
    red: "FF0000",
    blue: "0000FF",
    green: "00FF00"
};

console.log(color('red'));
console.log(colors['red']);