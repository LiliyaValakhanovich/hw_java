let products=[];
const elementWrapper=document.querySelector('.wrapper');
const form=document.querySelector('.form');
const input=document.querySelector('.form-input');

const buttonOpenCart=document.querySelector('.btn-success');
const buttonCloseCart=document.querySelector('.btn-close');
const cartList=document.querySelector('.cart-list');

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
  const products=data.products;
  console.log(products);
  
  addProducts(products);

  form.addEventListener('submit', searchItem);
  
  function searchItem(event){  
    event.preventDefault(); 
  
    const itemSearch=input.value;
    console.log(itemSearch);

    if (itemSearch===''){
      return addProducts(products);
    } const someProducts=products.filter(product=> product.title.includes(itemSearch));
    console.log(someProducts);
    return addProducts(someProducts);
  }
  
  buttonOpenCart.addEventListener('click', ()=>{
    document.querySelector('.cart-window').style.display='block';
  })

  buttonCloseCart.addEventListener('click', ()=>{
    document.querySelector('.cart-window').style.display='none';
  });

  const cardBody=document.querySelectorAll('.card-body');
  console.log(cardBody);
  cardBody.forEach((el)=>{
    el.addEventListener('click', addElementToCart);
  }); 
 
});
 
function addElementToCart(event){
  console.log(event.target.parentElement);

  const nameElementInCart=event.target.parentElement.querySelector('.card-title');
  const liTitle=nameElementInCart.textContent;
  console.log(liTitle);

  const priceElementInCart=event.target.parentElement.querySelector('.card-price');
  const liPrice=priceElementInCart.textContent;
  console.log(liPrice);

  const imageElementInCart=event.target.parentElement.parentElement.querySelector('.card-image');
  const liImg=imageElementInCart.getAttribute('src');
  console.log(liImg);

  const liItem=createLiItem(liImg, liTitle, liPrice);
  cartList.append(liItem);

  const sum=document.querySelector('.you-cart');
  sum.textContent=`You cart - ${liPrice}$`;
};

function createLiItem(liImg, liTitle, liPrice){
  const imageElement=createImageEl(liImg);
  const titleElement=createTitleEl(liTitle);
  const buttonMinus=createButtonMinus();
  const countElement=createCountEl(liPrice);
  const buttonPlus=createButtonPlusEl();
  const buttonRemove=createButtonRemove();
  const li=createElement('li',['card-list-item', 'd-flex', 'align-items-center','justify-content-around'], null, null, null,[imageElement, titleElement, buttonMinus, countElement, buttonPlus, buttonRemove], 'append');
  return li;
}

function createImageEl(liImg){
  const ImageElAttributes= [
    {
      prop: 'src',
      value: liImg,
    },

  ]
  const imageEl=createElement('img',['cart-imageEl'], ImageElAttributes);
    return imageEl;
}

function createTitleEl(liTitle){
  return createElement('h5',['cart-title'],null, liTitle);
}

function createButtonMinus(){
  return createElement('button',['minus', 'button-success'],null, '-');
}

let i=1;

function createCountEl(i,liPrice){
  return createElement('button', ['count','btn','btn-primary'], null, `${i}X${liPrice}`);
}

function createButtonPlusEl(){
  const plusHeandlers=[
    {
      event: 'click',
      heandler: plusFunction,
    },
  ]
  return createElement('button',['button-success','plus'],null, '+', plusHeandlers);
}

function createButtonRemove(){
  const removeHeandlers=[
    {
      event: 'click',
      heandler: deleteElement,
    },
  ]
  return createElement('button',['btn', 'btn-danger'], null, 'Remove from order', removeHeandlers);
}

function deleteElement(event){
  const li=event.target.parentElement;
  li.remove();
}

function plusFunction(){
 
}

function addProducts(products){
  products.forEach((product)=>{
    const column=createColumn();
    const card=createCard();
    const cardImage=createImage(product);
    const cardButton=createButton(product);
    const cardBody=createBody(product);

    cardBody.append(cardButton);
    card.append(cardImage, cardBody);
    column.append(card);
    elementWrapper.append(column);
  });
}

function createColumn(){
  return createElement('div', ['col-sm-12', 'col-md-3', 'column-item']);
}

function createCard(){
  return createElement('div',['card', 'card-item'])
}

function createImage(product){
  const imageAttributes= [
    {
      prop: 'src',
      value: product.thumbnail,
    }
  ];

  const image=createElement('img', ['card-image', 'card-image-top'], imageAttributes);
  const cardImage=createElement('div',['cardImg'], null, null, null, [image], 'append');
  return cardImage;
}

function createButton(product){
  const buttonAttributes= [
    {
    prop: 'type',
    value: 'button',
    },
    {
      prop: 'data-title',
      value: products.title,
    }
  ]

  const button=createElement('button', ['btn', 'btn-primary', 'btn-card'], buttonAttributes, 'Add to cart', null);
  return button;
}

function createBody(product){
  
  const title=createElement('h5', ['card-title'], null, product.title);
  const paragraph=createElement('p', null, null, product.description);
  const propPrice=createElement('p',['prop-price'], null,'Price:');
  const price=createElement('p', ['card-price'], null, `${ product.price}`);
  const propRating=createElement('p',['prop-rating'], null,'Rating:');
  const rating=createElement('p', ['card-rating'], null, `${product.rating}`);
  const footer=createElement('div', ['card-footer'], null, null, null, [propPrice, price, propRating, rating], 'append');
  const cardBody=createElement('div', ['card-body'], null, null, null, [title, paragraph, footer], 'append');
  return cardBody;
}

function createElement(tag, classList, attributes, textContent, heandlers, children, childrenAction){
  const element=document.createElement(tag);

  if (classList?.length){
    element.classList.add(...classList);
    
  }

  if (attributes?.length){
    attributes.forEach(({prop, value})=>{
      element.setAttribute(prop, value);
    });
  }

  if (textContent){
    element.textContent=textContent;
  }

  if (heandlers?.length){
    heandlers.forEach(({event, heandler})=>{
      element.addEventListener(event,heandler);
    });
  }

  if (children){
    element[childrenAction](...children);
  }

  return element;
}

 







