/**
 * 日付を表示する関数
 * @param {Date} d 日付オブジェクト
 */
function printDate(d) {
    let s = d.getFullYear() + '年';
    s += d.getMonth() + 1 + '月';
    s += d.getDate() + '日';
    let yobi = ['日', '月', '火', '水', '木', '金', '土'];
    s += '（' + yobi[d.getDay()] + '）';
    console.log(s);
}



export function ex1() {
    //let d = new Date(); // 現在の日付・時刻
    let d = new Date(2022, 4, 15);
    while (d.getDay() !== 0) {
        d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    }
    printDate(d);
}

export function ex2() {
    //let d = new Date(); // 現在の日付・時刻
    let d = new Date(2022, 4, 15);
    do {
        d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    } while (d.getDay() !== 0);
    printDate(d);
}

export function _ex3() {
    let i = 10;

    i = i + 10;
    i += 10;
    console.log(i);

    i = i * 10;
    i *= 10;
    console.log(i);

    i = i - 10;
    i -= 10;
    console.log(i);

    i = i / 10;
    i /= 10;
    console.log(i);

    let j = 10;
    j = j + 1;
    j += 1;
    j++;
    console.log(j);

    j = j - 1;
    j -= 1;
    j--;
    console.log(j);

    let k = 10;
    ++k;
    console.log(k);

    i = 10;
    while (i++ < 20) {
        console.log(i);
    }

    i = 10;
    while (++i < 20) {
        console.log(i);
    }
    let m = 10;
    let n = m++;
    m = 10;
    let o = ++m;
    console.log(n, o);

}

export function ex3() {
    let ar = [];
    for (let i = 10; i < 100; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            //if(!(i % 3 === 0 || i % 5 === 0)){
            ar.push(i);
        }
    }
    console.log(ar);
}

export function ex45() {
    let ar = ['a', 'b', 'c', 'd', 'e'];
    for (let i in ar) {
        console.log(i, ar[i]);
    }

    for (let v of ar) {
        console.log(v);
    }

}





export function q00() {
    console.log('Hey');
}

export function q01() {
    let ar = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'];

    console.log('while(~){...}');
    let i1 = 0;
    while (i1 < ar.length) {
        console.log(i1, ar[i1]);
        i1++;
    }

    console.log('do{...}while(~)');
    let i2 = 0;
    do {
        console.log(i2, ar[i2]);
        i2++;
    } while (i2 < ar.length);

    console.log('for(~; ~; ~){...}');
    let i3 = 0;
    for (let i3 = 0; i3 < ar.length; i3++) {
        console.log(i3, ar[i3]);
    }

    console.log('for(let ~ in ~){...}');
    for (let i in ar) {
        console.log(i, ar[i]);
    }

    console.log('for(let ~ of ~){...}');
    for (let x of ar) {
        console.log(x);
    }
}


export function q0_pascal() {
    let ar = [1];
    for (let i = 0; i < 10; i++) {
        console.log(ar.join(' '));
        let ar2 = [1]; // 左端の 1
        for (let j = 0; j < ar.length - 1; j++) {
            ar2.push(ar[j] + ar[j + 1]);
        }
        ar2.push(1); // 右端の 1
        ar = ar2;
    }
}


export function q03() {
    let o = {
        id: '004206',
        name: 'John',
        age: 43,
        country: 'UK',
        occupation: 'lawyer'
    }

    // for(~in~)はそのまま使える
    console.log('for(let i in o){...}');
    console.log('<i>');
    for (let i in o) {
        console.log(i, o[i]);
    }

    // for(let x of o)はエラーとなる
    console.log('for(let i of Object.keys(o)){...}');
    console.log('<i, o[i]>');
    for (let i of Object.keys(o)) {
        console.log(i, o[i]);
    }

    console.log('for(let i of Object.values(o)){...}');
    console.log('<i>');
    for (let i of Object.values(o)) {
        console.log(i);
    }

}


export function q04() {
    let ar1 = [];
    ar1[3] = 'three';
    ar1[7] = 'seven';
    console.log(ar1, Array.isArray(ar1));
    console.log(ar1[0], ar1[3], ar1[5], ar1[7]);
    for (let i in ar1) {
        console.log(i, ar1[i]);
    }
    let ar2 = ['one', 'two', 'three'];
    console.log(ar2, Array.isArray(ar2));
    console.log(ar2[0], ar2[3], ar2[5]);
    for (let i in ar2) {
        console.log(i, ar2[i]);
    }
    let o1 = {};
    o1[3] = 'three';
    console.log(o1, Array.isArray(o1));
    for (let i in o1) {
        console.log(i, o1[i]);
    }
}


export function q05a() {
    let a = 1;
    let b = 2;
    let c = 3;
    let ar = [a, b, c, a];
    console.log(ar);
    let o = { a: a, b: b, c: c, d: a };
    console.log(o);
    a = 4;
    console.log(ar, o);
    o.a = 5;
    console.log(ar, o);

}

export function q05b() {
    let ar1 = [1, 2, 3];
    let ar2 = [4, 5, 6];
    let ar3 = [7, 8, 9];
    let ar = [ar1, ar2, ar3, ar1];
    console.log(ar);
    ar1[0] = 10;
    console.log(ar);
}

export function q05c() {
    let a = 'alpha';
    let b = 'beta';
    let c = 'gamma';
    let ar = [a, b, c, a];
    console.log(ar);
    a = 'delta';
    console.log(ar);
}

export function q05d() {
    let ar1 = [1, 2, 3];
    let ar2 = [4, 5, 6];
    let ar3 = [7, 8, 9];
    let o = { a: ar1, b: ar2, c: ar3, d: ar1 };
    console.log(o);
    ar1[0] = 10;
    console.log(o);
}

export function q05e() {
    let a = [1, 2, 3];
    let b = a;
    b[0] = 4;
    console.log(a, b);
}

function f(ar) {
    console.log(typeof ar);
    if (Array.isArray(ar) && ar.length > 0) {
        ar[0] = 'がちょーん';
    }
    return ar;
}


export function q05f() {

    let a = [1, 2, 3];
    let b = f(a);
    console.log(a, b);
    a[0] = '100';
    console.log(a, b);
    b[0] = '999';
    console.log(a, b);

}