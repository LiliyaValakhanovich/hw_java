fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
  const products=data.products;
  console.log(products);


  products.forEach(product=>{
    const el=document.querySelector('.wrapper');
    el.classList.add('gy-5');

    const column=document.createElement('div');
    column.classList.add('col-md-3');
    el.append(column);

    const cardEl=document.createElement('div');
    cardEl.classList.add('card');
    
    const imgCont=document.createElement('div');
    imgCont.classList.add('header');
    const image=document.createElement('img');
    image.classList.add('picture');
    image.setAttribute('src', product.thumbnail);
    imgCont.append(image);
    cardEl.append(imgCont);

    const main=document.createElement('div');
    main.classList.add('card-body');
    const title=document.createElement('h5');
    title.textContent=product.title;
    const par=document.createElement('p');
    par.textContent=product.description;
    main.append(title);
    main.append(par);
    cardEl.append(main);

    const footer=document.createElement('div');
    footer.classList.add('card-footer');
    const price=document.createElement('p');
    const rating=document.createElement('p');
    price.textContent=product.price;
    rating.textContent=product.rating;
    footer.append(price);
    footer.append(rating);
    main.append(footer);

    column.append(cardEl);
  })
});  