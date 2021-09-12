export function validationFood(food1, food2, calback) {
    switch (food1.getAttribute('src')) {
        case '':
            if (food2.getAttribute('src') === './public/images/banhmi.svg' || food2.getAttribute('src') === './public/images/khuonpizza.svg' || food2.getAttribute('src') === './public/images/water.svg') {
                food1.setAttribute('src', food2.getAttribute('src'));
                calback();
            }
            break;
        case './public/images/banhmi.svg':
            if (food2.getAttribute('src') === './public/images/xuxich.svg') {
                food1.setAttribute('src', './public/images/hotdog.svg');
                calback();
            }
            else {
                alert('Món ăn không thể nấu với nguyên liệu này')
            }
            break;
        case './public/images/khuonpizza.svg':
            if (food2.getAttribute('src') === './public/images/xuxich.svg') {
                food1.setAttribute('src', './public/images/pizzaxucxic.svg');
                calback();
            } else if (food2.getAttribute('src') === './public/images/tomato.svg') {
                food1.setAttribute('src', './public/images/pizzatomatoo.svg');
                calback();
            }
            else {
                alert('Món ăn không thể nấu với nguyên liệu này');
            }
            break;
        case './public/images/water.svg':
            if (food2.getAttribute('src') === './public/images/quachanh.svg') {
                food1.setAttribute('src', './public/images/lemonade.svg');
                calback();
            }
            else {
                alert('Món ăn không thể nấu với nguyên liệu này');
            }
            break;
        default:
            alert('Bạn đang nấu ăn');
            break;
    }
}