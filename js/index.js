$(function () {
    //music暂停播放
    var audio = document.getElementById('music1');
    function bf() {
        if (audio !== null) {
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
            if (audio.paused) {
                audio.play();//audio.play();// 这个就是播放  
            } else {
                audio.pause();// 这个就是暂停
            }
        }
    }
    $(".musics").on("click", function () { bf(); })

    var falg = true
    $(".musics").on("click", function () {
        $(".cover").css({ display: 'block' })
        //让当前li添加类样式
        if (falg) {
            $(".spone").css({ display: 'none' });
            $(".sptwo").css({ display: 'block' });
            falg = false
            //播放 falg = false
        } else {
            $(".spone").css({ display: 'block' });
            $(".sptwo").css({ display: 'none' });
            falg = true
        }
    })
    $('html').on('touchstart', function (event) {
        //如果暂停了就不播放了
        
        // console.log(event.target)
        // console.log($(event.target).parents('.musics'))
        // console.log($(event.target).hasClass('musics'))
        //需求点击其他地方 隐藏cover
        //问题：点击盒子上元素也会发生隐藏
        //所以我们要判断是不是当前盒子
        //不是的判断是$(event.target).parents('.musics').length == 0 && !$(event.target).hasClass('musics')
        //只要&&两边有一个是true则就是触碰到了盒子 所以不隐藏
        if ($(event.target).parents('.musics').length == 0 && !$(event.target).hasClass('musics')) {
            // console.log($(event.target))
            audio.play();
            // console.log($(event.target).parents('.cover').length)
            $('.cover').hide()
            console.log(111)
        }
        $(".onebtmhi").delay(2000).show(2000);
    });
    //fullpage
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        scrollingSpeed: 1000,
    });
    //载入页面
    $('#loading').delay(3).fadeOut(1500, function () {
        bf();
    });
    //汉堡
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    $(".hamburger").on("click", function () {
        $(".zhezhao").toggle();
        $(".navigation").toggle();
        $("#menu").toggle();
    })
    //点击a 隐藏面板 添加样式
    $("#menu>li").on("click", "a", function () {
        $(this).parent().siblings("li").find("a").removeClass("aactive")
        $(this).addClass("aactive")
        //修改span长度
        $(this).parent().siblings("li").find("span").removeClass("span-active")
        $(this).find("span").addClass("span-active")
        $(".zhezhao").hide();
        $(".navigation").hide();
        $("#menu").hide();
        $(".hamburger").toggleClass("is-active");
    })
})
