$(function () {
    var falg = true
    $(".musics").on("click", function () {
        $(".cover").css({ display: 'block' })
        $(this).find("span")
        //让当前li添加类样式

        if (falg) {
            $("span:eq(0)").css({ display: 'block' });
            $("span:eq(1)").css({ display: 'none' });

            falg = false
        } else {
            $("span:eq(0)").css({ display: 'none' });
            $("span:eq(1)").css({ display: 'block' });

            falg = true
        }
    })
   
})