//change height of div according to width

const ResizeDiv = new ResizeObserver(entries => {
  for (let entry of entries) {
    containerWidthVar = (730/1280)*container.offsetWidth;
    entry.target.style.height = containerWidthVar+"px"
  }
});

ResizeDiv.observe(container = document.getElementById('card-container'));



//change height of canvas according to height of main

const ResizeCan = new ResizeObserver(entries => {
  for (let entry of entries) {
    containerHeight = container.offsetHeight * 2;
    document.getElementById('bgCanvas').style.height = containerHeight+"px"
  }
});

ResizeCan.observe(container = document.getElementById('body'));

//change width of holoeye according to height 

const ResizeEye = new ResizeObserver(entries => {
  for (let entry of entries) {
    containerHeight = hol.offsetHeight;
    document.getElementById('holoeye').style.width  = containerHeight+"px";
  }
});

ResizeEye.observe(hol = document.getElementById('holoeye'));

//change width of iris according to height 

const ResizeIris = new ResizeObserver(entries => {
  for (let entry of entries) {
    containerHeight = iris.offsetHeight;
    document.getElementById('iris').style.width  = containerHeight+"px";
  }
});

ResizeIris.observe(iris = document.getElementById('iris'));














//change active index


let activeitems = document.querySelectorAll('.indexes');

activeitems.forEach(activeitem => {

  
  activeitem.addEventListener('click', () => {

    if (activeitem.classList.contains('active')) {

    activeitems.forEach( item => {

      item.classList.remove('active');
  });


  activeitem.classList.remove('active');

} else {

  activeitems.forEach( item => {

    item.classList.remove('active');
});
  activeitem.classList.add('active');
}

  }, false);
});



//click turn on hololight

const indexListItems = document.querySelectorAll('.indexes');

indexListItems.forEach(element => {

  element.addEventListener('click', () => {

  setTimeout(() => {  



  if(element.classList.contains('active') ){

    document.getElementById('hololight').classList.remove('hidelight');
  document.getElementById('hololight').classList.remove('hide');


  }else{
    document.getElementById('hololight').classList.add('hidelight');
    setTimeout(() => {  
      document.getElementById('hololight').classList.add('hide');
     
    }, 300);
  }



}, 200);

}, false);

});


//click move iris to display position

indexListItems.forEach(element => {

  element.addEventListener('click', () => {



  if(element.classList.contains('active')){



      document.getElementById('iris').classList.add('irisposition');

   


  }else{
    setTimeout(() => {  
    document.getElementById('iris').classList.remove('irisposition');
  }, 500);
  }



}, false);

});

//click turn on text show
indexListItems.forEach(element => {

  element.addEventListener('click', () => {

  setTimeout(() => {  
  
  if(document.getElementById('profile').classList.contains('active')  ){

    document.getElementById('text-profile').classList.remove('hidetextlight');
  document.getElementById('text-profile').classList.remove('hidetext');


  }else{
    document.getElementById('text-profile').classList.add('hidetextlight');
    setTimeout(() => {  
      document.getElementById('text-profile').classList.add('hidetext');
     
    }, 300);
  }

}, 200);

}, false);

});

indexListItems.forEach(element => {

  element.addEventListener('click', () => {

  setTimeout(() => {  
  
  if(document.getElementById('projects').classList.contains('active')  ){

    document.getElementById('text-projects').classList.remove('hidetextlight');
  document.getElementById('text-projects').classList.remove('hidetext');


  }else{
    document.getElementById('text-projects').classList.add('hidetextlight');
    setTimeout(() => {  
      document.getElementById('text-projects').classList.add('hidetext');
     
    }, 300);
  }

}, 200);

}, false);

});

indexListItems.forEach(element => {

  element.addEventListener('click', () => {

  setTimeout(() => {  
  
  if(document.getElementById('contact').classList.contains('active')  ){

    document.getElementById('text-contact').classList.remove('hidetextlight');
  document.getElementById('text-contact').classList.remove('hidetext');


  }else{
    document.getElementById('text-contact').classList.add('hidetextlight');
    setTimeout(() => {  
      document.getElementById('text-contact').classList.add('hidetext');
     
    }, 300);
  }

}, 200);

}, false);

});