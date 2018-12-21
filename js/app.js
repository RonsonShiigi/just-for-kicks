// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
details.addEventListener('click',notAvail);
function notAvail(){
    alert('Not Available in Hawaii')
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
name1.addEventListener('mouseover',shoeDes);
name1.addEventListener('mouseout',hideDes)
function shoeDes(){
    if(descrip1.style.display === 'none'){
        descrip1.style.display = 'block'
    }else(descrip1.style.display = 'none')
}
function hideDes(){
    if(descrip1.style.display === 'block'){
        descrip1.style.display='none'
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 
var descrip2 = document.createElement('div');
descrip2.id = 'descrip2';
descrip2.innerHTML="The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
name2.appendChild(descrip2);
descrip2.style.display='none';
name2.addEventListener('click',des2);
function des2(){
    if(descrip2.style.display==='none'){
        descrip2.style.display ='block'
    }else{
        descrip2.style.display='none'
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.



var thumber = document.getElementsByClassName('far fa-thumbs-up');
for(var i=0;i<thumber.length;i++){
    var count = document.createElement('div');
    count.className='count';
    count.innerHTML=0;
    thumber[i].appendChild(count)
    thumber[i].addEventListener('click',counter)
    
}

function counter(){
    var j = this.querySelectorAll('.count')[0];
    j.innerHTML++
}




//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
increase.addEventListener('click',addPrice);

function addPrice(){
    price4.innerHTML++

    
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

decrease.addEventListener('click',minus);

function minus(){
    price5.innerHTML--
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
redshoe.addEventListener('mouseover',showMe);
redshoe.addEventListener('mouseout',showBack)
function showMe(){
    
    redshoe.src = 'https://sneakerbardetroit.com/wp-content/uploads/2018/12/Air-Jordan-11-OG-Bred-2019-Black-White-Varsity-Red.jpg'
}
function showBack(){
    redshoe.src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg'
}
//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
    XII.addEventListener('click',resize);
    function resize(){
        
       if(XII.style.height <= '250px'){
         XII.style.height= '500px';
         XII.style.width = '500px'
    
        }else{
            XII.style.height = '250px';
            XII.style.width = '250px'
        }
    }
//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

oneUp.addEventListener('click',add);
oneDown.addEventListener('click',down);
function add(){
    price8.innerHTML++
}
function down(){
    price8.innerHTML--
}
//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

boot.addEventListener('click',cry);
function cry(){
    boot.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Michael_Jordan_crying.jpg/220px-Michael_Jordan_crying.jpg'
}