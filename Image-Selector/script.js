document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removedEle = e.target.parentNode;
    removedEle.remove();
    // removedEle.parentNode.removeChild(removedEle)
})