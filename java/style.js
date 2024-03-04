var sitenameinput=document.getElementById('sitename');
var sitelinkinput=document.getElementById('sitelink');
var addbtn=document.getElementById("addbtn");
// console.log(sitenameinput)
// console.log(sitelinkinput)
// console.log(addbtn)
var products=[];

if(JSON.parse(localStorage.getItem("savedvalues")) !=null){
     products=JSON.parse(localStorage.getItem("savedvalues"))
     displaydata();
}
displaydata()

addbtn.onclick=function(){
     addproduct()
     displaydata()
     reset()
     addbtn.disabled='true';


}


function addproduct(){
     var product=
     {
          name:sitenameinput.value,
          link:sitelinkinput.value
     }
     products.push(product)
     localStorage.setItem("savedvalues",JSON.stringify(products))

}

function displaydata(){
     var elementintable ='';
     
     for(i=0 ; i< products.length;i++){
          elementintable+=`<tr>
          <td>${products[i].name}</td>
          <td><a class="btn btn-outline-warning" href="${products[i].link}" target='blank'>visit</a></td>
          <td><button onclick='deleteproduct(${i})' class="btn btn-outline-danger">delete</button></td>
          </tr>`
     }
     document.getElementById('tablebody').innerHTML=elementintable;



}
function deleteproduct(index){
     products.splice(index,1);
     displaydata()
          // alert("done")
          localStorage.setItem("savedvalues",JSON.stringify(products))
     
     }

     function reset(){
           sitenameinput.value=''
           sitelinkinput.value=''
           }  

// if(sitenameinput.value!=null && sitelinkinput.value!=null){
//      addbtn.removeAttribute('disabled');
// }           
// if(sitelinkinput.value=='' && sitenameinput.value==''){
//      addbtn.disabled = true;
// }
// else{
//    addbtn.removeAttribute('disabled');

// }
document.getElementById('namealert')
document.getElementById('linkalert')
var namerejex=/^[A-Za-z\s]{2,30}$/;   
var linkrejex=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;


sitenameinput.onkeyup=function(){
     if(namerejex.test(sitenameinput.value))
{
//     addbtn.removeAttribute('disabled')
    sitenameinput.classList.add('is-valid')    
    sitenameinput.classList.remove('is-invalid')
    namealert.classList.add('d-none')
}
else{
//     addbtn.disabled='true';
sitenameinput.classList.add('is-invalid');
sitenameinput.classList.remove('is-valid');
    namealert.classList.remove('d-none')

}
     checkButtonState()
     }


 sitelinkinput.onkeyup=function(){
     sitelinkinput.onkeyup=function(){
          if(linkrejex.test(sitelinkinput.value))
     {
     //     addbtn.removeAttribute('disabled')
     sitelinkinput.classList.add('is-valid')    
     sitelinkinput.classList.remove('is-invalid')
     linkalert.classList.add('d-none')
     }
     else{
     //     addbtn.disabled='true';
     sitelinkinput.classList.add('is-invalid');
     sitelinkinput.classList.remove('is-valid');
     linkalert.classList.remove('d-none')
     
     }
          checkButtonState()
          }
     checkButtonState()
     }


     function checkButtonState() {
          if (namerejex.test(sitenameinput.value) && linkrejex.test(sitelinkinput.value)) {
              addbtn.removeAttribute('disabled');
          } else {
              addbtn.disabled = true;
          }
      }
//      function checkButtonState(){
// if(sitelinkinput.value==null || sitenameinput.value==null){
//      addbtn.disabled = true;
// }
// else{

//      addbtn.removeAttribute('disabled');

// }

//      }