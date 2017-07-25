/**
 * Created by lwj_312 on 17-7-24.
 */
function InfoCheck(information) {
    let student=[];
    if (information.studyNumber.value.charAt(0) != 'U' || parseFloat(information.mathGrade.value).toString() != information.mathGrade.value || parseFloat(information.chineseGrade.value).toString() != information.chineseGrade.value || parseFloat(information.englishGrade.value).toString() != information.englishGrade.value || parseFloat(information.programGrade.value).toString() != information.programGrade.value) {
        alert("请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：");
        return false;
    }
    else {
            student.push(JSON.stringify({name:information.name.value,studyNumber:information.studyNumber.value,
                nation:information.nation.value,klass:information.class.value,
                mathGrade:information.mathGrade.value,chineseGrade:information.chineseGrade.value,
                englishGrade:information.englishGrade.value,programGrade:information.programGrade.value}));
       localStorage.setItem(information.studyNumber.value,student);
        }


    if(localStorage){
        loadLocalStorage();
    }
}

function loadLocalStorage() {
    let tr = document.getElementById("grades");
    for (let i in localStorage) {
        let td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
    }
}
