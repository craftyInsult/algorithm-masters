function binarySort(list, val) {
    var beg = 0;
    var end = list.length - 1;

    function divideAndConquer() {
        var middle = Math.ceil((beg + end) / 2);
        console.log(middle);
        var currVal = list[middle];
        if (end > beg) {
            if (currVal === val) {
                return middle;
            }
            if (val < currVal) {
                end = middle - 1;
                return divideAndConquer(beg, middle - 1);
            }
            if (val > currVal) {
                beg = middle + 1;
                return divideAndConquer(beg + 1, end);
            }
        }
        else {
            return -1;
        }
    }
    return divideAndConquer(beg, end);
}
var result = binarySort(new Array(11, 22, 44, 55, 99, 100, 222, 555, 999, 1000), 1000);
console.log("Value is at index ".concat(result));
