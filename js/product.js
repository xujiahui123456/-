/**
 * Created by 忖歆 on 10/10/2017.
 */
/*点击事件不能实现*/
    //        document.getElementById('login-notic3').onclick=function () {
    //            document.getElementById('login-notic').display=none;
    //        }
    $('.login-notic3').bind('click',function(){
        $('#login-notic').css('display','none');

    });