
function showMore(){
  let sm=document.getElementsByClassName('showmore');
    for(let i=0;i<sm.length;++i){sm[i].style.display='inline-block';}
    let sl=document.getElementById('showless');
    sl.style.display='none';
}
function showLess(){
    let sm=document.getElementsByClassName('showmore');
    for(let i=0;i<sm.length;++i){sm[i].style.display='none';}
    let sl=document.getElementById('showless');
    sl.style.display='inline-block';
}
let n=0;
let divs=document.getElementsByClassName('box2_1');
function changeSlide(){
  for(let i=0;i<divs.length;++i){
    divs[i].style.display='none';
  }
  divs[n].style.display='flex';
if(n==0){
  document.getElementById('control_prev').style.display='none';
}
else if(n==(divs.length-1)){
  document.getElementById('control_next').style.display='none';
}
else{
  document.getElementById('control_next').style.display='block';
  document.getElementById('control_prev').style.display='block';
}
}
changeSlide();
function next(){
n++;
changeSlide();
}
function prev(){
  n--;
  changeSlide();
}