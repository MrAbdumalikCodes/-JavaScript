document.body.cssText = `
display:flex;
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');
background: #F2F2F2;
`
let container = document.createElement('div')
container.style.cssText = `
    width:600px;
    height:450px;
    background: #FFFFFF;
    margin:0 auto;
    margin-top:120px;
    border-radius:10px;
    display:flex;
    `
container.innerHTML = `  <div style = 'width:300px;'><img style = "border-radius:10px 0px 0px 10px" src="img/Bitmap.png" alt=""></div>`
let box_about = document.createElement('div')
document.body.append(container)
let title = document.createElement('p')
container.append(box_about)
title.innerText = `Perfume`
title.style.cssText = `
    width:100px;
    height: 15px;
    text-transform:uppercase;
    letter-spacing:5px;
    margin-left:32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 5px;
    color: #6C7289;
    margin-top:32px;
    
    `
    container.append(title)
    box_about.append(title)
    
    let bold_title = document.createElement('p')
    bold_title.innerText = `Gabrielle Essence Eau De Parfum`
    bold_title.style.cssText = `
    width:236px;
    height: 96px;
    margin-left:32px;
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #1C232B;
`
container.append(bold_title)
box_about.append(bold_title)

let info = document.createElement('p')
info.innerText = `A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.`
info.style.cssText = `
    width:237px;
    height: 92px;
    margin-left:32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #6C7289;
`
container.append(info)
box_about.append(info)

let boxPrice = document.createElement('div')
boxPrice.style.cssText = `
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:19px;
    margin-top:-20px;
`
box_about.append(boxPrice)
let price1 = document.createElement('p')
price1.innerText = `$149.99`
price1.style.cssText = `
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #3D8168;
`
boxPrice.append(price1)

let price2 = document.createElement('p')
price2.innerText = `$169.99`
price2.style.cssText = `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #6C7289;
    text-decoration:line-through;
`
boxPrice.append(price2)

let cardBtn = document.createElement('div')
cardBtn.style.cssText = `
    display:flex;
    justify-content:center;
    align-items:center;
    width:236px;
    height:48px;
    background-color: #3D8168;
    border-radius: 8px;
    margin-top:-27px;
    transition:0.2s
`
boxPrice.append(cardBtn)
let texts = document.createElement('p')
texts.innerText = 'Add to Cart'
texts.style.cssText = `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`
cardBtn.prepend(texts)
cardBtn.innerHTML = `
    <img src="img/Cart.svg" alt="img">
    <p style="font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-left:11px;
    color: #FFFFFF;
    ">Add to Cart</p>
`
style.cssText = `
    cardBtn:hover{
        background-color:red;
        cursor:pointer;
    }
`

