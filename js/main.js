// EXERCICE 1

// var person = {
//   firstname: "Syl",
//   lastname: "Bayo",
//   country: "France",
//   age: 33,
//   pay:["visa", "mastercard", "tel"],
//   getFirstname: function(){
//     alert(this.firstname);
//   },
//   getLastname: function(){
//     alert(this.lastname);
//   },
//   getBirthday: function(){
//     alert(2017-this.age);
//   }
// };

// // person.getFirstname();
// // person.getLastname();
// // person.getBirthday();

// // alert(person.getFirstname(), person.getLastname(), person.getBirthday());


// var control = {
//   country: ["FRANCE", "BELGIQUE", "ALLEMAGNE", "ITALIE", "ESPAGNE", "SUISSE"],
//   pay: ["VISA","MASTERCARD","PAYPAL","WESTERUNION"],
//   minAge: 18,
//   checkAge: function(personne){
//     if(personne.age>=this.minAge){
//       alert(personne.age + "ans, OK Bonne visite");
//     }
//     else {
//       alert('Grandis encore un peu');
//     }
//   },
//   checkCountry: function(personne){
//    if(this.country.includes(personne.country.toUpperCase())==true){
//       alert("good country");
//     }
//     else {
//       alert("bad country");
//     }
//   },
//   checkPay: function(personne) {
//     var checkUserPay =[];
//     for (i=0; i<personne.pay.length; i++) {
//       checkUserPay.push(this.pay.includes(personne.pay[i].toUpperCase()));
//     }
//     alert(checkUserPay);
//     if(checkUserPay.includes(true)==true){
//       alert("OK, GIVE ME MONEY!");
//     }
//     else {
//       alert("You need " + this.pay);
//     }
//   },
//   globalCheck: function(personne){
//     this.checkAge(personne);
//     this.checkCountry(personne);
//     this.checkPay(personne);
//   }
// };

// // control.checkAge();
// // control.checkCountry();
// // control.checkPay();
// control.globalCheck(person);


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// EXERCICE 2 part1


// function Guerrier(nom, att, def, sante, vit) {
//   this.name = nom;
//   this.att = att;
//   this.def = def;
//   this.sante = sante;
//   this.vit = vit*1000;

//   this.combat = function(cible){
//     console.log("==> " + this.name + "(" + this.sante + "PV) attaque " + cible.name + "(" + cible.sante + "PV)" + "\n"
//       + this.name + " a " + this.att + " ATT" + "\n"
//       + cible.name + " a " + cible.def + " DEF");
//     var degat = this.att-cible.def;
//     cible.sante -= degat;
//     console.log(this.name + " a fait " + degat + "dégats" + "\n"
//       + cible.name + " lui reste " + cible.sante + "PV");
//     if (cible.sante <= 0) {
//       clearInterval(combat1);
//       clearInterval(combat2);
//       console.log(this.name + " a gagné, " + cible.name + " est mort!");
//     }
//   };
// };

// var guerrier1 = new Guerrier("Arthur", 15, 11, 35, 6);
// var guerrier2 = new Guerrier("Perceval", 14, 11, 30, 4.5);


// // function Versus(perso1, perso2) {
// //   this.attak1 = function(){
// //     var attak1 = setInterval(function(){
// //       perso1.combat(perso2);
// //     }, perso1.vit);
// //   },

// //   this.attak2 = function(){
// //     var attak2 = setInterval(function(){
// //       perso2.combat(perso1);
// //     }, perso2.vit)
// //   },

// //   this.combat = function(){
// //     this.attak1();
// //     this.attak2();
// //   },

// //   this.end = function()

// // };


// var combat1 = setInterval(function(){
//   guerrier1.combat(guerrier2);
// }, guerrier1.vit);

// var combat2 = setInterval(function(){
//   guerrier2.combat(guerrier1);
// }, guerrier2.vit);

//////////////////////////////////////////////////////////////////////////////////

// EXERCICE 2 part2

function Guerrier(nom, att, def, sante, vit) {
  this.name = nom;
  this.att = att;
  this.def = def;
  this.sante = sante;
  this.vit = vit*1000;

  this.combat = function(cible){
    console.log("==> " + this.name + "(" + this.sante + "PV) attaque " + cible.name + "(" + cible.sante + "PV)" + "\n"
      + this.name + " a " + this.att + " ATT" + "\n"
      + cible.name + " a " + cible.def + " DEF");
    var degat = this.att-cible.def;
    if(degat<=0){
      degat = 1
    };
    cible.sante -= degat;
    console.log(this.name + " a fait " + degat + "dégats" + "\n"
      + cible.name + " lui reste " + cible.sante + "PV");
    if (cible.sante <= 0) {
      clearInterval(combat1);
      clearInterval(combat2);
      clearInterval(combat3);
      clearInterval(regenManaMagicien);
      console.log(this.name + " a gagné, " + cible.name + " est mort!");
    }
  };
};

var guerrier1 = new Guerrier("Arthur", 15, 11, 55, 6);
var guerrier2 = new Guerrier("Perceval", 14, 11, 50, 4.5);


function Magicien(nom, att, def, sante, vit, mana, regMana) {
  this.name = nom;
  this.att = att;
  this.def = def;
  this.sante = sante;
  this.vit = vit*1000;
  this.mana = mana;
  this.regMana = regMana;

  this.combat = function(cible){
    if(this.sante < (sante*50)/100 && this.mana >= 10){
      console.log("==> " + this.name + " lance \"soin\" !");
      this.mana -= 10;
      this.sante += 10;
      console.log(this.sante + "PV et " + this.mana + "mana");
    } else {
      console.log("==> " + this.name + "(" + this.sante + "PV) attaque " + cible.name + "(" + cible.sante + "PV)" + "\n"
        + this.name + " a " + this.att + " ATT" + "\n"
        + cible.name + " a " + cible.def + " DEF");
      var degat = this.att-cible.def;
      if(degat<=0){
        degat = 1
      };
      cible.sante -= degat;
      console.log(this.name + " a fait " + degat + "dégats" + "\n"
        + cible.name + " lui reste " + cible.sante + "PV");
      if (cible.sante <= 0) {
        clearInterval(combat1);
        clearInterval(combat2);
        clearInterval(combat3);
        clearInterval(regenManaMagicien);
        console.log(this.name + " a gagné, " + cible.name + " est mort!");
      }
    }
  };

  this.regenMana = function(){
    console.log(this.name + " a " + this.mana + "mana")
    if(this.mana<mana){
      this.mana += this.regMana;
    }
  }
};

var magicien1 = new Magicien("Merlin", 9, 9, 45, 5, 20, 2);

var combat1 = setInterval(function(){
  guerrier1.combat(magicien1);
}, guerrier1.vit);

var combat2 = setInterval(function(){
  guerrier2.combat(magicien1);
}, guerrier2.vit);

var combat3 = setInterval(function(){
  magicien1.combat(guerrier1);
}, magicien1.vit);

var regenManaMagicien = setInterval(function(){
  magicien1.regenMana();
}, 1000);
