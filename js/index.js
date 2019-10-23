$(function() {
    //初始化fullpage文件
    //设置每一个屏幕的类型颜色
    //设置屏幕内容的对齐方式默认是垂直居中，顶部对齐
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function(link, index) {
            $('.section').eq(index - 1).addClass('now');
        },
        /*俩开页面触发* */
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $(".section").eq(index - 1).addClass("leaved");

                /*3-4*/
            } else if (index == 3 && nextIndex == 4) {
                /*当前是从第三页到第四页*/
                $('.section').eq(index - 1).addClass('leaved');
            }
        },

        /*点击更多切换下一页*/
        afterRender: function() {
            $(".more").on("click", function() {
                /*自己添加一个插件方法 */
                $.fn.fullpage.moveSectionDown();
            })

            $('.screen04 .cart').on('transitionend', function() {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
        },
        scrollingSpeed: 1000,
    });

 /*loading */
 loading.showLoading({
    type:1,
    tip:"type 1"
})
loading.hideLoading();
