let showVal = function(){
    let cambiarBorderRadius = document.getElementById('borderRadius');
    var valorTL=document.getElementById('topBorder').value,valorTR=document.getElementById('rightBorder').value,valorBL=document.getElementById('bottomBorder').value,valorBR=document.getElementById('leftBorder').value;
    // switch(selector){
    //     case 'topBorder':
    //         valorTL=valor+'px '
    //         break;
    //     case 'rightBorder':
    //         valorTR=valor+'px '
    //         break;
    //     case 'bottomBorder':
    //         valorBL=valor+'px '
    //         break;
    //     case 'leftBorder':
    //         valorBR=valor+'px '
    //         break;
    // }
    resultado = valorTL+'px '+valorTR+'px '+valorBL+'px '+valorBR+'px';
    console.log(resultado)
    cambiarBorderRadius.style.borderRadius = resultado;
    document.getElementById('resultBorderRadius').innerHTML='border-radius: '+resultado+';'
}
