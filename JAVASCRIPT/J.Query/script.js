// $(document).ready(function() {
//     var currentSlide = 0
//     var totalSlide = $('.slide').length

//     function showSlide(index) {
//         $(".slide").css("transform", "translateX( - " + (index * 100) + '%')
//     }
//     $('#next').click(function() {
//         if(currentSlide < totalSlide - 1) {
//             currentSlide++
//             //console.log(currentSlide)
//             showSlide(currentSlide)
//         }
//         else {
//             currentSlide = 0
//             showSlide(currentSlide)
//         }
//         // if(currentSlide > totalSlide) {
//         //     currentSlide = 0
//         //     showSlide(currentSlide)
//         // }
//     })
// })

$(document).ready(function() {
    var currentSlide = 0
    var totalSlide = $(".slide").length

    function showSlide(index) {
        $(".slide").css("transform", "translateX(-" + (index * 100) + '%')
    }

    $("#next").click(function() {
        if(currentSlide < totalSlide - 1) {
            currentSlide++
            showSlide(currentSlide)
        }
        else {
            currentSlide = 0
            showSlide(currentSlide)
        }
    })
})