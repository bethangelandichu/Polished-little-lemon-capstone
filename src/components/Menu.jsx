import React from "react";
import "./Menu.scss";

const Menu = () => {

  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Greek Salad", description: "Crispy lettuce, peppers, olives, feta cheese, croutons", price: 12.99 },
        { name: "Bruschetta", description: "Grilled bread with garlic, salt, and olive oil", price: 5.99 },
        { name: "Spinach Dip", description: "Creamy spinach and artichoke dip with tortilla chips", price: 8.99 },
        { name: "Mozzarella Sticks", description: "Fried mozzarella cheese sticks with marinara sauce", price: 7.99 },
    
      ],
    },
    {
      category: "Main Courses",
      items: [
        { name: "Lemon Chicken", description: "Tender chicken with lemon sauce and herbs", price: 17.99 },
        { name: "Mediterranean Pizza", description: "Tomato sauce, olives, feta cheese, and fresh vegetables", price: 14.99 },
        { name: "Spaghetti Carbonara", description: "Spaghetti with creamy bacon and cheese sauce", price: 15.99 },
        { name: "Ribeye Steak", description: "Grilled ribeye steak with garlic butter", price: 21.99 },
     
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Lemon Tart", description: "A zesty lemon tart with a flaky crust", price: 6.99 },
        { name: "Baklava", description: "Sweet pastry with layers of nuts and honey", price: 4.99 },
        { name: "Chocolate Fondue", description: "Assorted fruits and marshmallows with chocolate dip", price: 9.99 },
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 7.99 },
  
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Fresh Lemonade", description: "Refreshing homemade lemonade", price: 3.99 },
        { name: "Greek Coffee", description: "Traditional Greek coffee", price: 2.99 },
        { name: "Iced Tea", description: "Sweet or unsweetened iced tea", price: 2.49 },
        { name: "Soda", description: "Coca-Cola, Pepsi, Fanta or Sprite", price: 1.99 },
      
      ],
    },
  ];

  return (
    <div className="menu">
      <h2>Little Lemon Restaurant Menu</h2>
      {menuItems.map((category, index) => (
        <div key={index}>
          <h3 className="category-heading">{category.category}</h3>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="item-name">{item.name}</span>
                <span className="item-description">{item.description}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;