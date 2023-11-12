const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.addbtn')
const closeButton = document.querySelector(".closebtn");
const addrecord = document.querySelector('.addrecordbtn');
const booktitle = document.querySelector('#bookname');
const bookauthor = document.querySelector('#bookauthor');
const pages = document.querySelector('#pages');
const showbooks = document.querySelector('.showbooks');
const dialogcontainer = document.querySelector('.dialogcontainer');
const para =  document.querySelector('.outputmsg');

showButton.addEventListener('click',()=>{
  dialog.showModal();
});


closeButton.addEventListener('click',()=>{
  dialog.close();
});

addrecord.addEventListener('click',addtoRecord);

function addtoRecord(){
  para.textContent= '';
  if(bookauthor.value.length >3 & bookauthor.value.length >3 & pages.value >5){
  console.log(booktitle.value);
  console.log(bookauthor.value);
  console.log(pages.value);
  const newbookentry = document.createElement('div')
  newbookentry.setAttribute('class','bookrecord');
  newbookentry.innerHTML = `<span class="recordtitle">Book Title: ${booktitle.value}</span>
  <span class="recordauthor">Book Author: ${bookauthor.value}</span>
  <span class="recordpage">Pages: ${pages.value}</span>`;

  showbooks.appendChild(newbookentry);
  bookauthor.value ="";
  booktitle.value="";
  pages.value="";
  para.textContent= 'Record Successfully Added! Add New Record.'
  
  }else{
    para.textContent= 'Invalid Input!'
  }
}


