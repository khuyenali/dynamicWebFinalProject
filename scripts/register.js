$('#cpwd').keyup(function() {
    var pwd = $('#pwd').val();
    var cpwd = $('#cpwd').val();
    if (cpwd != pwd) {
        $('#showErrorcPwd').html('Password are not matching');
        $('#showErrorcPwd').css('color', 'red');
        return false;
    } else {
        $('#showErrorcPwd').html('');
        return true;
    }


})


$(document).ready(function() {
    // console.log("hhh");
    $("#submit").click(function() {
        let info = {
            id: document.getElementById("ID").value,
            pwd: document.getElementById("pwd").value,
            cpwd: document.getElementById("cpwd").value,
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            birth: document.getElementById("birth").value,
            email: document.getElementById("email").value,
            tel: document.getElementById("tel").value
        };
        console.log(info);
        var jsonData = JSON.stringify(info);
        $.post('test1.php', jsonData)
            .done((data) => {

                console.log(JSON.parse(data));
            });




    });
});