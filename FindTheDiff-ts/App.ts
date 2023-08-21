function CreateImg(){
    let RandLeft = Math.floor(Math.random() * (560 + 1));
    let RandTop = Math.floor(Math.random() * (540+ 1));
    const img = document.createElement('img') as HTMLImageElement
    img.src="./koala.jpg";
    img.width=70;
    img.height=60;
    img.style.left=RandLeft+'px';
    img.style.top=RandTop+'px';

    const img2 = document.createElement('img') as HTMLImageElement
    img2.src="./koala.jpg";
    img2.width=70;
    img2.height=60;
    img2.style.left=RandLeft+'px';
    img2.style.top=RandTop+'px';

    const boxR = document.getElementById('boxR') as HTMLDivElement;
    const boxL = document.getElementById('boxL') as HTMLDivElement; 

    boxL.appendChild(img);
    boxR.appendChild(img2);

    const childrenR= boxR.children as HTMLCollectionOf<HTMLElement>;
    const childrenL = boxL.children  as HTMLCollectionOf<HTMLElement>;

    for(var i=0;i<childrenR.length;i++){
        let RandLeftExist = Math.floor(Math.random() * (560 + 1));
        let RandTopExist = Math.floor(Math.random() * (540+ 1));

        var childR=childrenR[i];
       
        childR.style.left=RandLeftExist+'px';
        childR.style.top=RandTopExist+'px';
        console.log(childR.style.left);  

        
        
        if(i!==0){
            var childL = childrenL[i-1];
            childL.style.left=RandLeftExist+'px';
            childL.style.top=RandTopExist+'px';
              
        }
        


}
}