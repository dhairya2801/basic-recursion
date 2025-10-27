function mergeSort(li) {
    let n = li.length;
    if (n === 1) {
        return li;
    }
    const mid = Math.floor((n + 1) / 2);
    let l = mergeSort(li.slice(0, mid));
    let r = mergeSort(li.slice(mid, n));
    let out = merge(l, r);
    return out;
}

function merge(l, r) {
    let ret = [];
    while (l.length > 0 && r.length > 0) {
        const pushE = (l[0] < r[0]) ? l.shift() : r.shift();
        ret.push(pushE);
    }
    if (l.length === 0) {
        ret.push(...r);
    }
    else {
        ret.push(...l);
    }
    return ret;
}


console.log(mergeSort([5,3,8,9,5,3,6,0,4,5,2,1,6,7,9,6,9,9,3,3,7,0,3]));