
//!......object inheritance.........

const simaProperty ={
    SweingMachine: 'Jack',
    Laptop: 'Walton'
}
const rimaProperty= Object.create(simaProperty)
console.log(rimaProperty.SweingMachine);
rimaProperty.mobile= 'Oppo';
console.log(rimaProperty.mobile);

//!............class inheritance...................


class SimaClothHouse {
        constructor(material, size, niddle ){
        this.kapor=material;
        this.size= size;
        this.sui= niddle
   	 }

    delivery(){
console.log( `${this.kapor} er suti jama size hobe ${this.size} selai hote hobe ${this.sui}`
    );}
}

const kakolyJama = new SimaClothHouse('bexiboil', 'M', 'chikon')
console.log(kakolyJama);
kakolyJama.delivery()




class DigitalSimaClothHouse extends SimaClothHouse{
    constructor(material, size, niddle, printOnCloth){
       super(material, size, niddle);
        this.designPrint=printOnCloth;
    }
    banao(){console.log(`${this.kapor} kapor diye ${this.size} Size er akkhana ${this.sui} sui diye ${this.designPrint} print kore baniye dao`);}
}
const ShimuJama= new DigitalSimaClothHouse('baxi boil', 'M', 'chikon', 'logo')
ShimuJama.banao()
