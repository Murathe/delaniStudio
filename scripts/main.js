$(document).ready(function(){
    $("#img-p0").click(function(){
        $("#design").show(2000);
        $("#d_image").hide(2000);
    });
    $("design-p").click(function(){
        $('#d_image').show(2000);
        $('#design').hide(2000);
    });

    $("#img-p1").click(function(){
        $('#dev').show(2000);
        $('#de_image').hide(2000);
    });
    $("#dev-p").click(function(){
        $('#de_image').show(2000);
        $('#dev').hide(2000);
    });

    $("#img-p2").click(function(){
        $('#prod').show(2000);
        $('#p_image').hide(2000);
    });
    $("#prod-p").click(function(){
        $('#p_image').show(2000);
        $('#prod').hide(2000);
    });
});

