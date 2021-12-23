
        const btnCollapse = document.querySelectorAll('.collapse');

        btnCollapse.forEach(item => console.log(item.addEventListener('click', toggleOptions)));


        let showOptions = false;

        function toggleOptions() {

            const name = this.parentNode.className;

            const options = document.querySelector(`.${name}> .options`);



            options.classList.toggle('option_collapse');

            if (!showOptions) {

                options.classList.add('options_collapse');
               
                showOptions= true;
            }else{
                options.classList.remove('options_collapse');

                showOptions = false;
            }

        }
        