$('#cpwd').keyup(function(){
    var pwd=$('#pwd').val();
    var cpwd=$('#cpwd').val();
    if(cpwd!=pwd){
        $('#showErrorcPwd').html('Password are not matching');
        $('#showErrorcPwd').css('color','red');
        return false;
    }
         

})