function CheckName() {
    var val = document.getElementById('Name').value;
    var matches = val.match(/\d+/g);
    if (matches != null) {
        alert('Name should not contain any number');
    }
}
// function CheckAge() {
//     var x = document.getElementById('dob').value;
//     dob = new Date(x);
//     //document.getElementById('banner').innerHTML = document.getElementById('Name').value + ", your age is " + dob;
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms);

//     var out = Math.abs(age_dt.getUTCFullYear() - 1970);
//     document.getElementById('banner').innerHTML = document.getElementById('Name').value + ", your age is " + out;
// }
function ageCalculate() {
    var birthDate = document.getElementById('dob').value;
    var d = new Date(birthDate);
    var mdate = birthDate.toString();
    var yearThen = parseInt(mdate.substring(0, 4), 10);
    var monthThen = parseInt(mdate.substring(5, 7), 10);
    var dayThen = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();


    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
        alert("Happy B'day!!!");
    }

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;

    var tMnt = (month_age + (year_age * 12));
    var tDays = (tMnt * 30) + day_age;

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
        document.getElementById("banner").innerHTML = ("Invalid birthday - Please try again!");
    }
    else {
        var age = year_age + " years " + month_age + " months " + day_age + " days";
        document.getElementById("banner").innerHTML = age;
        console.log(age);
    }

}