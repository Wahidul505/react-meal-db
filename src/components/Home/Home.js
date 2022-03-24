import React, { useEffect, useState } from 'react';
import { getMealsFromDb, removeFromDb, setMealsToDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Home.css'

const Home = () => {
    const [meals,setMeals] = useState([]);
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    },[])
    const addToOrder = (id)=>{
        const selectedItem = meals.find(meal =>meal.idMeal === id);
        const exist = orders.find(order => order.idMeal === selectedItem.idMeal);
        if(!exist){
            selectedItem.quantity = 1;            
            const selectedOrders = [selectedItem,...orders];
            setOrders(selectedOrders);
        }
        else{
            const rest = orders.filter(order => order.idMeal !== selectedItem.idMeal);
            selectedItem.quantity = selectedItem.quantity + 1;
            const selectedOrders = [selectedItem, ...rest];
            setOrders(selectedOrders);
        }
        setMealsToDb(id);
    }
    useEffect(()=>{
        const storedOrders = getMealsFromDb();
        const storedItems = [];
        for(const id in storedOrders){
            const storedItem = meals.find(meal => meal.idMeal === id);
            if(meals.length > 0){
                const quantity = storedOrders[id];
                storedItem.quantity = quantity;
                storedItems.push(storedItem);
            }
            }
            setOrders(storedItems);
    },[meals])
    const deleteItem = (item) =>{
        const rest = orders.filter(order => order.idMeal !== item.idMeal);
        const restItems = [...rest];
        setOrders(restItems);
        removeFromDb(item.idMeal);
    }
    return (
        <div className='container'>
            <div className="meals-container">
            {
                meals.map(meal => <Meal 
                    key={meal.idMeal} 
                    meal={meal}
                    addToOrder={addToOrder}
                    ></Meal>)
            }
            </div>
            <div className="cart-container">
                <Cart orders={orders} deleteItem={deleteItem}></Cart>
            </div>
        </div>
    );
};

export default Home;