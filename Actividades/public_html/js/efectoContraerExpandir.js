'use strict'
function obtenerDetails(){
                
    var summarys=document.getElementsByTagName("summary");
    for(var i=0; i < summarys.length; i++){

        summarys[i].addEventListener("click", function(){activarSummary(this)}, false);
        activarSummary(summarys[i]);
    }
}

function activarSummary(summary){

    var detail=summary.parentNode;
    var estatus=detail.className;
    var disp='';
    var arrow='&#8680';

    switch(estatus){

        case 'abierto':
            estatus='cerrado';
            disp='none';
            arrow='&#8680';
            break;
        case 'cerrado':
            estatus='abierto';
            disp='block';
            arrow='&#8681';
            break;
    }
    detail.className=estatus;

    for(var i=0;i<detail.childNodes.length;i++){

        //console.log(detail.childNodes[i].tagName);
        if(detail.childNodes[i].tagName!=='SUMMARY' && detail.childNodes[i].nodeType!==3) detail.childNodes[i].style.display=disp;
    }

    if(summary.innerHTML.substring(0,1)!=='⇨' && summary.innerHTML.substring(0,1)!=='⇩'){

        summary.innerHTML=arrow+" "+summary.innerHTML;
    }else{

        summary.innerHTML=arrow+" "+summary.innerHTML.substring(1,summary.innerHTML.length);
    }

}
window.addEventListener("load", obtenerDetails, false);

