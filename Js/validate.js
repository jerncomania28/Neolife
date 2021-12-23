
      const input = document.querySelector('#mail');
      const success = document.querySelector('#success');
      const fail = document.querySelector('#fail');
      const button = document.querySelector('#button');
      let errorMessage = document.querySelector('.error');


     button.addEventListener('click' ,validate);


     function validate(e){
  
        if(input.value ==="" || input.value === null){
            e.preventDefault();
            input.classList.add('fail');
            errorMessage.innerText="Enter a neolife mail";
            input.classList.remove('fail');
            errorMessage="";
            input.value="";
        }else if(input.value.includes("neolife.com")){
            success.classList.add('success');
            input.value="";
        }else{
            e.preventDefault();
            input.classList.add('fail');
            errorMessage.innerText="Not a valid Neolife mail";
            input.classList.remove('fail');
            input.value=""
        }
        
     }