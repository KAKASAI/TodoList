const inputText = document.getElementById('missionInput');
const btn = document.querySelector('.add');
const missionUnit = document.querySelector('.missionUnit');

let dataArray = [''];

btn.addEventListener('click', checkMission, false);
missionUnit.addEventListener('click', delList, false);

//初始化資料
initialData()
// console.log(dataArray);
function initialData(e) {
    let getLStorage = JSON.parse(localStorage.getItem('mission')) || [];
    // console.log(getLStorage);
    dataArray = getLStorage;
    // console.log(dataArray);
    let missionListAll = '';
    for (let i = 0; i < dataArray.length; i++) {
        missionListAll += '<li class="missionList">' + dataArray[i] + '<button data-num="' + i + '"class="btnDel">刪除</button></li>';
        // console.log(missionListAll);
    }
    missionUnit.innerHTML = missionListAll;
}

//增加資料 並再次初始化資料
function checkMission(e) {
    if (inputText.value !== '') {
        dataArray.push(inputText.value);
        console.log(dataArray);
    }
    localStorage.setItem('mission', JSON.stringify(dataArray));
    initialData()
}
//點選任務刪除
function delList(e) {
    // console.log(e.target.dataset.num);
    console.log(e.target.nodeName)
    let num = e.target.dataset.num;
    if (e.target.nodeName == 'BUTTON') {
        console.log(num);
        dataArray.splice(num, 1);
        // console.log(dataArray);
        localStorage.setItem('mission', JSON.stringify(dataArray));
    };
    initialData();
}