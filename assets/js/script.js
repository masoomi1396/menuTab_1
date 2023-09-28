const myMenuObjects = document.querySelectorAll('section:last-of-type>div');
const myButtons = document.querySelectorAll('div>li');

myButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(button.getAttribute('data-type') == -1)
        {
            myMenuObjects.forEach((object)=>{
                resetButtonStyle(object);
                object.classList.add('flex');
            });
        }
        else if(button.getAttribute('data-type') == 0)
        {
            myMenuObjects.forEach((object)=>{
                resetButtonStyle(object);
                if(object.getAttribute('data-type') == 1)
                {
                    object.classList.add('flex');
                }
                else{
                    object.classList.add('hidden');
                }
            })
        }
        else if(button.getAttribute('data-type') == 1)
        {
            myMenuObjects.forEach((object)=>{
                resetButtonStyle(object);
                if(object.getAttribute('data-type') == 0)
                {
                    object.classList.add('flex');
                }
                else{
                    object.classList.add('hidden');
                }
            })
        }
        else if(button.getAttribute('data-type') == 2)
        {
            myMenuObjects.forEach((object)=>{
                resetButtonStyle(object);
                if(object.getAttribute('data-type') == 2)
                {
                    object.classList.add('flex');
                }
                else{
                    object.classList.add('hidden');
                }
            })
        }
    });
});
const resetButtonStyle = (object)=>{
    object.classList.remove('hidden');
    object.classList.remove('flex');
}