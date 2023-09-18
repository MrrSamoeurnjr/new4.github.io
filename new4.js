const btns = [
    {
        id:0,
        name:'All',
    },
    {
        id:1,
        name:'Shirt',
    },
    {
        id:2,
        name:'Watch',
    },
    {
        id:3,
        name:'Shoes',
    },
    {
        id:4,
        name:'Phone',
    },
]
const filterbuttons = [...new Set(btns.map((itembtns)=>{
    return itembtns;
}))]
document.querySelector(".filterbuttons").innerHTML = filterbuttons.map((itembtns)=>{
    var { id  , name } = itembtns; 
    return (
        "<button class = 'edit_buttons' onclick = 'filterItembuttons("+(id)+`)'>${name}</button>`
    )
}).join('')
const filterItembuttons = (e)=>{
    const sambath = categoreis;
    if( e === 0 ) {
        function item(value){
            return(
                value.id
            )
        }
        displayItem(sambath)
    }
    else {
        const channy = categoreis.filter((item)=>{
            return (
                item.id == e
            )
        })
        function item(value){
            value.id
        }
        displayItem(channy)
    }
}
const product = [
    {
        id:1,
        image:'https://contents.mediadecathlon.com/p2178285/k$3b52bc7baac1870dd6d1c5a56cb94124/men-s-nh500-off-road-hiking-t-shirt.jpg?format=auto&quality=70&f=768x768',
        title:'Shirt',
        price:29
    },
    {
        id:2,
        image:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwxMDIzNzB8aW1hZ2UvanBlZ3xoZTUvaDFlLzEzODUxNTczNjgyMjA2L3dhdC1qb3VybmV5LTI0MTk4MC4xLTY0MHgzNTAuanBnfDMxOGNlYjIwM2EzYTc2MDc4M2JmMDFkMWY2ZjQ3NWI1YTg5YzFhM2Q5MjFiYzY0ODFiYTNkMWYyNjA0ZjgyOGE',
        title:'Watch',
        price:149
    },
    {
        id:3,
        image:'https://contents.mediadecathlon.com/p2153181/k$be8bc3d9588b54af503e67bfa50b498b/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=452x452',
        title:'Shoes',
        price:249
    },
    {
        id:1,
        image:'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7242/524/711/7242524711_2_6_8.jpg?t=1685029722736&imwidth=1125',
        title:'Shirt',
        price:29
    },
    {
        id:2,
        image:'https://rukminim2.flixcart.com/image/850/1000/kxgfzbk0/smartwatch/k/n/y/-original-imag9wz384kvusv3.jpeg?q=90',
        title:'Watch',
        price:149
    },
    {
        id:4,
        image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/iphone_15_pro_max-sixteen_nine.jpg?VersionId=IS2eaXHIZNNCdvvtAxvNyeyQEYfekCkM&size=690:388',
        title:'i phone 15',
        price:1500
    },
    {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOvBZBEJaiXFFmzTBgkdU7k-wUJAOGVhRtQ&usqp=CAU',
        title:'Shirt',
        price:29
    },
    {
        id:2,
        image:'https://images.priceoye.pk/zero-terra-fit-smart-watch-pakistan-priceoye-hnbz2.jpg',
        title:'Watch',
        price:149
    },
    {
        id:3,
        image:'https://images.meesho.com/images/products/119544768/7pyu4_512.jpg',
        title:'Shoes',
        price:249
    },
    {
        id:4,
        image:'https://imageio.forbes.com/specials-images/imageserve/6321aca5df0a9fa9eee9950b/0x0.jpg?format=jpg&crop=1456,970,x63,y104,safe&width=1200',
        title:'i phone 14',
        price:1200
    },
    {
        id:3,
        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9989cd60-470b-4c37-b61c-d94a019819ce/freak-4-basketball-shoes-zmXv3D.png',
        title:'Shoes',
        price:249
    },
    {
        id:4,
        image:'https://i.pcmag.com/imagery/reviews/07GmIupznWhAzDQ3Z7li99a-1.fit_scale.size_760x427.v1632849626.jpg',
        title:'i phone 13',
        price:1050
    },
]
const categoreis = [...new Set(product.map((item)=>{
    return item;
}))]
const displayItem = (sambath) => {
    document.querySelector(".filterCards").innerHTML = sambath.map((item)=>{
        var { title , image , price } = item; 
        return (
            `
                <div class = 'box'>
                    <div class = 'box-img'>
                        <img class = 'box-image' src = ${image}></img>
                    </div>
                    <div class = 'bottom'>
                        <h3>${title}</h3>
                        <h4>$ ${price}.00</h4>
                    </div>
                    <div class = 'bottom2'>
                        <h3>Color</h3>
                        <div class = 'edit_solid'>
                            <i class="fa-solid fa-circle cell1"></i>
                            <i class="fa-solid fa-circle cell2" ></i>
                            <i class="fa-solid fa-circle cell3"></i>
                        </div>
                        <div class = 'edit_button'>
                            <button class = 'button_first'>AddCart</button>
                            <button class = 'button_second'>Buy Now</button>
                        </div>
                    </div>
                </div>
            `
        )
    }).join('')
}
displayItem(categoreis)
const product2 = [
    {
        id:1,
        image:'https://contents.mediadecathlon.com/p2178285/k$3b52bc7baac1870dd6d1c5a56cb94124/men-s-nh500-off-road-hiking-t-shirt.jpg?format=auto&quality=70&f=768x768',
        title:'Shirt',
        price:29
    },
    {
        id:2,
        image:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHRpbXwxMDIzNzB8aW1hZ2UvanBlZ3xoZTUvaDFlLzEzODUxNTczNjgyMjA2L3dhdC1qb3VybmV5LTI0MTk4MC4xLTY0MHgzNTAuanBnfDMxOGNlYjIwM2EzYTc2MDc4M2JmMDFkMWY2ZjQ3NWI1YTg5YzFhM2Q5MjFiYzY0ODFiYTNkMWYyNjA0ZjgyOGE',
        title:'Watch',
        price:149
    },
    {
        id:3,
        image:'https://contents.mediadecathlon.com/p2153181/k$be8bc3d9588b54af503e67bfa50b498b/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=452x452',
        title:'Shoes',
        price:249
    },
    {
        id:4,
        image:'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7242/524/711/7242524711_2_6_8.jpg?t=1685029722736&imwidth=1125',
        title:'Shirt',
        price:29
    },
    {
        id:5,
        image:'https://rukminim2.flixcart.com/image/850/1000/kxgfzbk0/smartwatch/k/n/y/-original-imag9wz384kvusv3.jpeg?q=90',
        title:'Watch',
        price:149
    },
    {
        id:6,
        image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/iphone_15_pro_max-sixteen_nine.jpg?VersionId=IS2eaXHIZNNCdvvtAxvNyeyQEYfekCkM&size=690:388',
        title:'i phone 15',
        price:1500
    },
    {
        id:7,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOvBZBEJaiXFFmzTBgkdU7k-wUJAOGVhRtQ&usqp=CAU',
        title:'Shirt',
        price:29
    },
    {
        id:8,
        image:'https://images.priceoye.pk/zero-terra-fit-smart-watch-pakistan-priceoye-hnbz2.jpg',
        title:'Watch',
        price:149
    },
    {
        id:9,
        image:'https://images.meesho.com/images/products/119544768/7pyu4_512.jpg',
        title:'Shoes',
        price:249
    },
    {
        id:10,
        image:'https://imageio.forbes.com/specials-images/imageserve/6321aca5df0a9fa9eee9950b/0x0.jpg?format=jpg&crop=1456,970,x63,y104,safe&width=1200',
        title:'i phone 14',
        price:1200
    },
    {
        id:11,
        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9989cd60-470b-4c37-b61c-d94a019819ce/freak-4-basketball-shoes-zmXv3D.png',
        title:'Shoes',
        price:249
    },
    {
        id:12,
        image:'https://i.pcmag.com/imagery/reviews/07GmIupznWhAzDQ3Z7li99a-1.fit_scale.size_760x427.v1632849626.jpg',
        title:'i phone 13',
        price:1050
    },
]
const categories2 = [...new Set(product2.map((item2)=>{
    return item2
}))]
let i = 0 ;
document.querySelector(".root").innerHTML = categories2.map((item2)=>{
    var { image , title , price } = item2; 
    return (
        `
            <div class = 'box2'>
                <div class = 'box2-img'>
                    <img class = 'box2-image' src = ${image}></img>
                </div>
                <div class = 'box2_bottom2'>
                    <p>${title}</p>
                    <h3>$ ${price}.00</h3>
                </div> ` +
                "<button class = 'button2' onclick = 'addtocart("+(i++)+")'>Add to card</button>" + `
            </div>
        `
    )
}).join('')
var cart = []
function addtocart(a){
    cart.push({...categories2[a]})
    displayfilterItem();
}
function delelement(a){
    cart.splice(a,1);
    displayfilterItem();
}
function displayfilterItem (a) { 
    let j = 0;
    let total = 0
    document.querySelector(".count").innerHTML = cart.length;
    if ( cart.length == 0 ) {
        document.querySelector(".emp_ty").innerHTML = 'Your cart is empty'
        document.querySelector(".sum_price").innerHTML = "$" +0+ ".00"
    } 
    else {
        document.querySelector(".emp_ty").innerHTML = cart.map((item2)=>{
            var { title , image , price } = item2;
            total = total + price
            document.querySelector(".sum_price").innerHTML = "$" +total+".00"
            return (
                `
                    <div class = 'sel_box2'>
                        <div class = 'sel_img'>
                            <img class = 'sel_image' src = ${image}></img>
                        </div>
                        <div class = 'sel_bottom'>
                            <p>${title}</p>
                            <h4>$ ${price}</h4>
                        </div>
                `+
                "<i class='fa-solid fa-trash fa-solid1' onclick = 'delelement("+(j++)+")'></i></div>"
            )
        }).join('')
   }
}