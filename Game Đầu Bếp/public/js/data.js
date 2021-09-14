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
            chiliSauce: 20, //tuong ot
            cheddar: 20, //sot pho mai
            salt:20, //muoi
            sugar:20 //duong
        },
        time:40, //thoi gian nau
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
        time:40
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

function checkFood(food1,food2) {
    let pointMunus = 0;
    let messages = [];
    if (food1.source === food2.source) {
        // Kiem tra xem dung cac thanh phan yeu cau khong
        if ((food1.spice.chiliSauce === 0 && food2.spice.chiliSauce !== 0) || (food1.spice.cheddar === 0 && food2.spice.cheddar !== 0) || 
        (food1.spice.salt === 0 && food2.spice.salt !== 0) || (food1.spice.sugar === 0 && food2.spice.sugar !== 0) ) {
            messages.push(errors.err2);
            pointMunus++;
        }

        //Kiem tra tuong ot
        if (food1.spice.chiliSauce +2 < food2.spice.chiliSauce) {
            messages.push(errors.err3);
            pointMunus++;
        }else if (food1.spice.chiliSauce -2 > food2.spice.chiliSauce) {
            messages.push(errors.err4);
            pointMunus++;
        }

        //Kiem tra sot pho mai
        if (food1.spice.cheddar +2 < food2.spice.cheddar) {
            messages.push(errors.err5);
            pointMunus++;
        }else if (food1.spice.cheddar -2 > food2.spice.cheddar) {
            messages.push(errors.err6);
            pointMunus++;
        }

        //Kiem tra muoi
        if (food1.spice.salt +2 < food2.spice.salt) {
            messages.push(errors.err7);
            pointMunus++;
        }else if (food1.spice.salt -2 > food2.spice.salt) {
            messages.push(errors.err8);
            pointMunus++;
        }

        //Kiem tra duong
        if (food1.spice.sugar +2 < food2.spice.sugar) {
            messages.push(errors.err9);
            pointMunus++;
        }else if (food1.spice.sugar -2 > food2.spice.sugar) {
            messages.push(errors.err10);
            pointMunus++;
        }

        //Kiem tra thoi gian
        if (food2.source !== './public/images/lemonade.svg') {
            if (food2.time > 12) {
                messages.push(errors.err11);
                pointMunus++;
            }else if (food2.time < 8) {
                messages.push(errors.err12);
                pointMunus++;
            }
        }  
    }
    else{
        messages.push(errors.err1)
        pointMunus--;
    }

    return {
        messages,
        pointMunus
    }
  
}

const errors = {
    err1: 'Không giống với món tôi đã đặt',
    err2: 'Có vị lạ, không giống với mô tả của quán',
    err3: 'Có vị hơi cay',
    err4: 'Thiếu một xíu vị cay',
    err5: 'Có vị hơi béo',
    err6: 'Thiếu một xíu vị béo',
    err7: 'Có vị hơi mặn',
    err8: 'Thiếu một xíu vị mặn',
    err9: 'Có vị hơi ngọt',
    err10: 'Thiếu một xíu vị ngọt',
    err11: 'Hơi bị khét',
    err12: 'Chưa đủ độ nóng',
}

export {validationFood,foods,units,unitNames,checkFood};