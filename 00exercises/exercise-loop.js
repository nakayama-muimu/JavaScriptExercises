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

