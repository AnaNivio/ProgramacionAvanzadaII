function highlight(){
    var elements= Array.from(document.getElementsByClassName("myClass"));

    elements.forEach(element => {
        element.style.background="yellow";
    });

}