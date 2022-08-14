const category = document.querySelectorAll('.category');

window.addEventListener('scroll',showCategory)

function showCategory(){
    const calculateHeight = window.innerHeight-20;

    category.forEach(categories=>{
        const topPosition = categories.getBoundingClientRect().top;
        if(topPosition<calculateHeight){
            categories.classList.add('active');
        }else{
            categories.classList.remove('active');
        }
    })
}