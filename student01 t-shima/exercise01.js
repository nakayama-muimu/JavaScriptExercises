export function q01(){
    // console.log('1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50');
    let arr = [];
    for (let i = 1; i <= 50; i++){
        let ans = i % 7;
        if (ans != 0) {
            console.log(i);
        }
    }
}

export function q02(){
    // console.log([7, 14, 21, 28, 35, 42, 49]);
    let arr = [];
    for (let i = 1; i < 50; i++){
        let ans = i % 7;
        if (ans == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

export function q06() {
    //ボタン押す前提でよい？
    let inp = document.getElementById('input1').value;
    document.getElementById('q06_box').innerText = inp;
}

export function q08(){
    // let inp2 = parseInt(document.getElementById('input1').value);
    // let ans2 = inp2.toString(2);
    // console.log(ans2);
    let arr = [];
    let inp = parseInt(document.getElementById('input1').value);
    if (inp !== 0) {
        while (inp > 0) {
            let sur = inp % 2;
            inp = Math.floor(inp / 2);
            arr.unshift(sur);
        }
    }
    let sen = "";
    for (let i = 0; i < arr.length; i++){
        sen = sen + arr[i];
    }
    console.log(sen);
}