// function happens after clicking on search bar

async function searchmeal() {
    let search = document.getElementById('sbar');
    search.innerHTML = null;
            let input = document.getElementById('inp').value;
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            let data = await res.json();
            console.log(data)
            console.log(data.meals)
            mealsloop(data.meals);
        }
        //searchmeal();
        function mealsloop(d){
            let dis_div = document.getElementById('meal');
            dis_div.innerHTML=null;
            d.forEach((el) => {
                displaymeal(el);
            });
        }

        function displaymeal(el){
            let dis_div = document.getElementById('meal');
            dis_div.setAttribute('class', 'meal');
            let div = document.createElement('div');
            let ndiv=document.createElement("div");
            ndiv.innerHTML=el.strMeal;
            let imgdiv =document.createElement('img');
            imgdiv.src=el.strMealThumb;
            let discdiv = document.createElement("div");
            discdiv.innerHTML=el.strTags;
            div.append(imgdiv,ndiv,discdiv);
            dis_div.append(div);
}

// suggestion  bar function starts here

var timerId;
function throttel() {
    if (timerId) {
        return false;
    }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 2000);
  console.log(timerId)
}

function main(){
    searchbar();
}

        async function searchbar() {
            let input = document.getElementById('inp').value;
            console.log(input)
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            let data = await res.json();
            console.log(data)
            console.log(data.meals)
            sbarloop(data.meals);
}
        
function sbarloop(d){
            let dis_div = document.getElementById('sbar');
            dis_div.innerHTML=null;
            d.forEach((el) => {
                displaysbar(el);
            });
}
        
function displaysbar(el){
            let dis_div=document.getElementById('sbar');
            let div = document.createElement('div');
            div.innerHTML=el.strMeal;
            dis_div.append(div);
}
        
        

