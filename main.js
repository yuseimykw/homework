let nowIpt = ""
let judge = 0
let ipt = document.getElementById("inputContents")
let nowTotal = ""
let sum = 0
let opr = ""

// 数値ボタン処理
function numBtn(n) {
    nowIpt += n
    sym = 0
    ipt.value = nowIpt
}

// 演算子ボタン
function calc(symbol) {
    if (judge === 0) {
        jadge = 1
        sum = nowTotal + opr + nowIpt
        nowTotal = eval(sum)
        nowIpt = ""
        ipt.value = nowTotal
    }

    if (symbol === "=") {
        nowIpt = ""//＝が押された時既にipt.valueに値が代入されているため初期化しても大丈夫
        opr = "+"//=が押された後に数値を入力すると足し算が始まる
    } else {
        opr = symbol //＝以外の演算子ボタンが押された場合に作動、演算子を記録しておく
    }
}

//clearBtn
const clearBtn = () => {
    nowTotal = ""
    sum = 0
    opr = ""
    nowIpt = ""
    judge = 0
    ipt.value = 0
}
//buttonタグはページが更新される
