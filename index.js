fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const products=data.products;
    console.log(products);


    products.forEach(product => {
      const el=document.querySelector('.wrapper');
      el.classList.add('row-cols-1','row-cols-sm-1','row-cols-md-4','g-2');

      const cardCol=document.createElement('div');
      cardCol.classList.add('col');
      el.append(cardCol);

      const cardEl=document.createElement('div');
      cardEl.classList.add('card','h-100');
      const img=document.createElement('img');
      img.classList.add('card-img-top');
      img.setAttribute('src', product.thumbnail);
      cardEl.append(img);
      cardCol.append(cardEl);         
      console.log(cardEl);

      const main=document.createElement('div');
      main.classList.add('card-body','main');
      const wl=document.createElement('div');
      const title=document.createElement('h5');
      const description=document.createElement('p');
      title.textContent=product.title;
      description.textContent=product.description; 
      main.append(title);
      main.append(description);
      main.append(wl);
      cardEl.append(main);

      const footer=document.createElement('div');
      footer.classList.add('card-footer');
      const price=document.createElement('p');
      const rating=document.createElement('p');
      price.textContent=`Price: ${product.price}$`;
      rating.textContent=`Rating: ${product.rating}`;
      footer.append(price);
      footer.append(rating);
      main.append(footer);

    }); 
        
  });
 