/* I cook every day. If you start to cook regularly, you will be realized that choosing a menu is hard as much as cooking. To avoid this pain, I came up with the simple food recommendation system based on data collected from users.  

Here are some notes about how it works.
- You have to choose 4 favorite dishes. Based on your choice, the code will find the other user who has the most similar food preference. 
- Then, it will recommend new/favorite dishes chosen by a user who has a similar preference with yours.
- I assume that I already have 20 users' favorite food data('datapools'). By clicking the start button, the 'datapools' will be randomly created. (JS line 165) When you choose 4 favorite dishes, the code will also push your '4 favorited dishes' data into the datapool.


Bon appetite!*/


Vue.component('recommen', {
  props:["food"],
  methods: {    
    update() {
    this.food.check =!this.food.check;
    this.$emit('update-data', this.food);}
  },
    
  template:`
      <div class="col-sm-2">
        <div class="card" :class={check:food.check} @click="update">
        <div class="card-body" >
          <img class="card-img" :src="food.image" height="100" width="150">
        <p> {{ food.dish }} </p>
        </div>
      </div>
    </div>`

});

Vue.component('resultshow', {
  props:["showrecommen"],
    
  template:
  `
  <div class="col-sm-2">
    <div class="card">           
        <div class="card-body" >
          <img class="card-img" :src="showrecommen.image"  height="100" width="150">
        {{ showrecommen.dish }}
        </div>
      </div>
    </div>`
});



var app = new Vue({
  el: "#app",
  data: { 
    choicepools: [ {id: 0,
                    dish: "Shakshuk",
                    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19-500x500.jpg",
                    check: false}, 
                  {id: 1,
                    dish: "Meatball",
                    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
                    check: false},
                  {id: 2,
                   dish: "Pizza",
                   image: "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg",
                   check: false}, 
                  {id: 3,
                   dish: "Pasta",
                   image: "https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg",
                   check: false},
               {id: 4,
                   dish: "Fried Rice",
                   image: "https://cookieandkate.com/images/2017/05/vegetable-fried-rice.jpg",
                   check: false},
               {id: 5,
                   dish: "Lasagna",
                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVM_INlXBAF2Xwcjgals86K6t8AX3tujqWCM9L6DIBZgJn2yFw",
                   check: false},
               {id: 6,
                   dish: "Teriyaki Chicken",
                   image: "https://i2.wp.com/wellplated.com/wp-content/uploads/2019/01/Instant-Pot-Teriyaki-Chicken-recipe.jpg",
                   check: false},
               {id: 7,
                   dish: "Bibimbap",
                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0NBkjI-R9GYn2BN5ut8U-AqLVycBvQ97Ul7ZVb8QXESQQX137",
                   check: false}],
    foodpools: [ {id: 0,
                    dish: "Shakshuk",
                    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19-500x500.jpg",
                   check: false}, 
                  {id: 1,
                    dish: "Meatball",
                    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
                   check: false},
                  {id: 2,
                   dish: "Pizza",
                   image: "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg",
                   check: false}, 
                  {id: 3,
                   dish: "Pasta",
                   image: "https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg",
                   check: false},
               {id: 4,
                   dish: "Fried Rice",
                   image: "https://cookieandkate.com/images/2017/05/vegetable-fried-rice.jpg",
                   check: false},
               {id: 5,
                   dish: "Lasagna",
                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVM_INlXBAF2Xwcjgals86K6t8AX3tujqWCM9L6DIBZgJn2yFw",
                   check: false},
               {id: 6,
                   dish: "Teriyaki Chicken",
                   image: "https://i2.wp.com/wellplated.com/wp-content/uploads/2019/01/Instant-Pot-Teriyaki-Chicken-recipe.jpg",
                   check: false},
               {id: 7,
                   dish: "Bibimbap",
                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0NBkjI-R9GYn2BN5ut8U-AqLVycBvQ97Ul7ZVb8QXESQQX137",
                   check: false},
               {id: 8,
                   dish: "Okonomiyaki",
                   image: "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/ep8_okonomiyaki.jpg",
                   check: false},
               {id: 9,
                   dish: "lu rou fan",
                   image: "https://www.iceorrice.com/wp-content/uploads/2017/08/DSC02721-2.jpg",
                   check: false},
               {id: 10,
                   dish: "Orange Chicken",
                   image: "https://s23209.pcdn.co/wp-content/uploads/2013/10/IMG_4012edit1.jpg",
                   check: false},
               {id: 11,
                   dish: "Chicken Curry",
                   image: "https://static01.nyt.com/images/2018/03/01/dining/01COOKING-CHICKEN-CURRY1/01COOKING-CHICKEN-CURRY1-articleLarge.jpg",
                   check: false},
               {id: 12,
                   dish: "pad thai",
                   image: "https://res.cloudinary.com/hksqkdlah/image/upload/v1481144597/32489_sfs-pad-thai-44.jpg",
                   check: false},
               {id: 13,
                   dish: "Garlic Shrimp",
                   image: "https://cafedelites.com/wp-content/uploads/2018/06/Creamy-Garlic-Shrimp-IMAGE-68.jpg",
                   check: false},
               {id: 14,
                   dish: "cookie",
                   image: "https://chocolatecoveredkatie.com/wp-content/uploads/2018/01/banana-cookie-dip.jpg",
                   check: false},
               {id: 15,
                   dish: "Garlic Sermon",
                   image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/01/honey-garlic-salmon-3.jpg",
                   check: false},
               {id: 16,
                   dish: "Hobak Buchim",
                   image: "https://www.koreanbapsang.com/wp-content/uploads/2013/08/DSC_0237-e1534910363348.jpg",
                   check: false},
                {id: 17,
                   dish: "Pork Stir Fry",
                   image: "https://173qcb30csdp49kz9m14gsrd-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/pork-stir-fry-one-dish-kitchen-social.jpg",
                   check: false},
                {id: 18,
                   dish: "Samgyeopsal",
                   image: "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1910-1024x685.jpg",
                   check: false},
                {id: 19,
                   dish: "Shrimp Scampi",
                   image: "https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/16:9/w_1000,c_limit/shrimp-scampi.jpg",
                   check: false},
                {id: 20,
                   dish: "Bowl of Doom",
                   image: "https://lh3.googleusercontent.com/proxy/EmaeebbAorcRximVx9k0moteMny4Bxus_MoVskhcnbZhu6mfhA2z71qrCjWUIC5n2ICMQXqRQslAuW3JYBE3ouJXlQvoikFDBTBS-eCt3CbnTop44lKMZQGtLsDMc6RL0JENBLJqGjQ",
                   check: false}
               ]
    ,
    datapools: [],
    userFood: [],
    recommendations: [],
    userChoice: []
  },
  methods: {
    addFood(choice) {
      this.userFood.push(choice);
      this.userFood = [ ...new Set(this.userFood) ];
      this.userChoice.push(choice.dish);
      this.userChoice = [ ... new Set(this.userChoice)];
      console.log(this.userChoice[0]);
      },
       
    recomData() {
//Find an object in the array which has the most same values of user's choice      
     var commonFoodLengths = [];
     for (var i=0; i< this.datapools.length; i++ ) { 
       var commonFood = this.userFood.filter(object => this.datapools[i].some(v => v.id === object.id ));
     commonFoodLengths.push(commonFood.length)
     };
     var tmpIndex = commonFoodLengths.indexOf(Math.max.apply(null, commonFoodLengths));


     this.recommendations = this.datapools[tmpIndex].filter(object => !this.userFood.find(v => v.id === object.id ));
     this.recommendations = this.recommendations.filter(object => !this.choicepools.find(v => v.id === object.id ));
      
// Save food data chosen by user to the datapools                                           
     this.datapools.push(this.userFood);

    },
 
    initData() { 
//make random sets of user datas
     this.datapools = [];      
     var numPerson = 40;
     var numFood = 8;
     for (var i= 0; i < numPerson; i++ ) {
       var favFood = []; 
       while (favFood.length !== numFood){
         favFood.push(this.foodpools[Math.floor(Math.random()*this.foodpools.length)]);
         favFood = [ ...new Set(favFood)]
       }
     this.datapools.push(favFood);
     }

     this.recommendations = [];
     this.userFood = [];
     this.userChoice = [];  
      for (var i=0; i< this.choicepools.length; i++) {
     this.choicepools[i].check = false;
      }
     
    }
  }
});
 
