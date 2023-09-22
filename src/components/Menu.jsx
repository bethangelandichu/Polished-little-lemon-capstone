import React from "react";
import "./Menu.scss";

const Menu = () => {
  // Define the restaurant's menu items
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Greek Salad", description: "Crispy lettuce, peppers, olives, feta cheese, croutons", price: 12.99 },
        { name: "Bruschetta", description: "Grilled bread with garlic, salt, and olive oil", price: 5.99 },
        // Add more appetizers here
      ],
    },
    {
      category: "Main Courses",
      items: [
        { name: "Lemon Chicken", description: "Tender chicken with lemon sauce and herbs", price: 17.99 },
        { name: "Mediterranean Pizza", description: "Tomato sauce, olives, feta cheese, and fresh vegetables", price: 14.99 },
        // Add more main courses here
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Lemon Tart", description: "A zesty lemon tart with a flaky crust", price: 6.99 },
        { name: "Baklava", description: "Sweet pastry with layers of nuts and honey", price: 4.99 },
        // Add more desserts here
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Fresh Lemonade", description: "Refreshing homemade lemonade", price: 3.99 },
        { name: "Greek Coffee", description: "Traditional Greek coffee", price: 2.99 },
        // Add more drinks here
      ],
    },
  ];

  return (
    <div className="menu">
      <h2>Little Lemon Restaurant Menu</h2>
      {menuItems.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
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