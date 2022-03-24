const getMealsFromDb = ()=>{
    let orders = {};
 const storedMeals = localStorage.getItem('orders');
 if(storedMeals){
    orders = JSON.parse(storedMeals);
 }
 return orders;
}
const setMealsToDb = (id)=>{
 const orders = getMealsFromDb();
 const value = orders[id];
 if(!value){
     orders[id] = 1;
 }
 else{
     orders[id] = orders[id] + 1;
 }
 localStorage.setItem('orders',JSON.stringify(orders));
}
const removeFromDb = (id) =>{
    const orders = getMealsFromDb();
    if(id in orders){
        delete orders[id];
    }
    localStorage.setItem('orders',JSON.stringify(orders));
}

export {setMealsToDb, getMealsFromDb, removeFromDb}