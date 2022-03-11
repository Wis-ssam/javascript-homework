const arr =[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const ar =[ 20, 100, -100, -3, 5, 0, -2 ];

let temp;
function tri(vecteur){
    for(var i=0 ; i <vecteur.length - 1; i++){
        for(var j=i+1 ; j<vecteur.length ; j++){
            if(vecteur[j]<vecteur[i]){
                temp=vecteur[j];
                vecteur[j]=vecteur[i];
                vecteur[i]=temp;
            }
        }
    }
        
    return vecteur;
}
    
console.log(tri(arr));
console.log(tri(ar));
