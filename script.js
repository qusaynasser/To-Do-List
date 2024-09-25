
let inputFromValue=document.querySelector('#inputValue');
let displayValue=document.querySelector('.result');
let Button = document.querySelector('#btn');

Button.addEventListener('click',()=>{
    if(inputFromValue.value==='')
    {
        alert('Please enter a value ');
    }
    else
    {
        let pargraph=document.createElement('p');
        pargraph.innerHTML=inputFromValue.value;
        displayValue.appendChild(pargraph);

        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        pargraph.appendChild(span);
    }
    inputFromValue.value='';
    saveData();
})

displayValue.addEventListener('click',(e)=>{
    if(e.target.tagName==="P")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData()
{
    localStorage.setItem('data',displayValue.innerHTML);
}

function showTask()
{
    const savedData = localStorage.getItem("data");
    if (savedData) { // تأكد أن هناك بيانات مخزنة
        displayValue.innerHTML = savedData;
    }
}
showTask();