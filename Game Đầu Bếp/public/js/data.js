function validationFood(food1, food2, calback) {
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

const foods = [
    {
        nameFood: 'Pizza xúc xích',
        source:'./public/images/pizzaxucxic.svg',
        description: 'Chọn mua bánh pizza không, chọn mua xúc xích sau đó nêm nếm gia vị theo công thức phía dưới, cho vào lò vi sóng khoảng 10s và giao hàng cho khách',
        spice:{
            chiliSauce: 20,
            cheddar: 20,
            salt:20,
            sugar:20
        },
        time:40
    },
    {
        nameFood: 'Pizza cà chua',
        source:'./public/images/pizzatomatoo.svg',
        description: 'Chọn mua bánh pizza không, chọn mua cà chua sau đó nêm nếm gia vị theo công thức phía dưới, cho vào lò vi sóng khoảng 10s và giao hàng cho khách',
        spice:{
            chiliSauce: 20,
            cheddar: 20,
            salt:20,
            sugar:20
        },
        time:40
    },
    {
        nameFood: 'Hotdog',
        source:'./public/images/hotdog.svg',
        description: 'Chọn mua bánh mì không, chọn mua xúc xích sau đó nêm nếm gia vị theo công thức phía dưới, cho vào lò vi sóng khoảng 10s và giao hàng cho khách',
        spice:{
            chiliSauce: 30,
            cheddar: 30,
            salt:20,
            sugar:20
        },
        time:50
    },
    {
        nameFood: 'Nước chanh',
        source:'./public/images/lemonade.svg',
        description: 'Chọn mua ly nước lọc, chọn mua trái chanh sau đó nêm nếm gia vị theo công thức phía dưới và giao cho khách',
        spice:{
            chiliSauce: 0,
            cheddar: 0,
            salt:0,
            sugar:50
        },
        time:25
    }
]
const units = {
    chiliSauce: 'ml',
    cheddar: 'ml',
    salt:'g',
    sugar:'g' 
}
const unitNames = {
    chiliSauce: 'Tương ớt',
    cheddar: 'Sốt phô mai',
    salt:'Muối',
    sugar:'Đường' 
}
export {validationFood,foods,units,unitNames};