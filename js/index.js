let path = document.querySelector('.paths');
let pathLength = path.getTotalLength();

path.style.strokeDasharray= pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  let drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;
});




const lft1 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    // else{
    //   entry.target.classList.remove('show');
    // }
  });
});

const lft = document.querySelectorAll('.left');
lft.forEach((el)=> lft1.observe(el));



const elias = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('seeme');
    }
    // else{
    //   entry.target.classList.remove('seeme');
    // }
  });
});


const contactme = document.querySelectorAll('.right');
contactme.forEach((el)=> elias.observe(el));

const btm = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('seeme');
    }
    // else{
    //   entry.target.classList.remove('seeme');
    // }
  });
});


const bm = document.querySelectorAll('.botom');
bm.forEach((el)=> btm.observe(el));


const za = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('zaq11');
    }
    // else{
    //   entry.target.classList.remove('zaq11');
    // }
  });
});


const zaa = document.querySelectorAll('.zaq1');
zaa.forEach((el)=> za.observe(el));


function view(){
  const view1 = document.querySelector('.hideview');

  view1.style.display = 'flex';
} 


function hide(){
  const hide1 = document.querySelector('.hideview');

  hide1.style.display = 'none';
}

