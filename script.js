let weakB = document.getElementById("btn1");
let strongB = document.getElementById('btn2');
let superB = document.getElementById('btn3');
let display = document.getElementById('display');

class GeneratePassword{
    constructor(){
        this.alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.capAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.symbol = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-"];

    }
    getPassword(){
        //Generating small letter string
        let a = Math.floor(Math.random() * this.alpha.length);
        let b = Math.floor(Math.random() * this.alpha.length);
        
        let firstAlpha = this.alpha[a];
        let secondAlpha = this.alpha[b];
        
               
        //Generating capital letter string
        let c = Math.floor(Math.random() * this.alpha.length);
        let h = Math.floor(Math.random() * this.alpha.length);

        let firstCapAlpha = this.capAlpha[c];
        let secondCapAlpha = this.capAlpha[h];


        //Generating numeric number string
        let d = Math.floor(Math.random() * this.numeric.length);
        let e = Math.floor(Math.random() * this.numeric.length);

        let firstNum = this.numeric[d];
        let secondNum = this.numeric[e];

        
        //Generating symbol string
        let f = Math.floor(Math.random() * this.symbol.length);
        let g = Math.floor(Math.random() * this.symbol.length);

        let firstSymbol = this.symbol[f];
        let secondSymbol = this.symbol[g];
        
        
        //weak password
        weakB.addEventListener('click', function(){
            let totalString = firstAlpha + firstNum + secondAlpha + firstCapAlpha + secondNum;
            display.innerHTML = totalString;
        })

        //Strong password
        strongB.addEventListener('click', function(){
            let totalString = firstAlpha + firstNum + secondAlpha + secondSymbol + firstCapAlpha + secondNum + firstSymbol;
            display.innerHTML = totalString;
        })
        
        //Super Strong password
        superB.addEventListener('click', function(){
            let totalString = firstAlpha + firstNum + secondAlpha + secondSymbol + firstCapAlpha + secondNum + firstSymbol + secondCapAlpha ;
            display.innerHTML = totalString;
        })

    }
    
}

let password = new GeneratePassword();
password.getPassword();
