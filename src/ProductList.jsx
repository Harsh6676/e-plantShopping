import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const ProductList = ({ onHomeClick }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2e64', cost: '$15' },
        { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333', cost: '$12' },
        { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee', cost: '$18' },
        { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1620803366004-119baed5b2a7', cost: '$20' },
        { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1614594576161-9d9b1a7e5c16', cost: '$17' },
        { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8f5b7a7', cost: '$14' }
      ]
    },

    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec', cost: '$20' },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b', cost: '$18' },
        { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662', cost: '$15' },
        { name: 'Mint', image: 'https://images.unsplash.com/photo-1621943723502-6c3e1e7c9f7c', cost: '$12' },
        { name: 'Lemon Balm', image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec', cost: '$14' },
        { name: 'Hyacinth', image: 'https://images.unsplash.com/photo-1588699104490-9e8a1a8b8c8a', cost: '$22' }
      ]
    },

    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d', cost: '$10' },
        { name: 'Marigold', image: 'https://images.unsplash.com/photo-1509223197845-458d87318791', cost: '$8' },
        { name: 'Geraniums', image: 'https://images.unsplash.com/photo-1597848212624-e19c5b3a4c0c', cost: '$20' },
        { name: 'Basil', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733', cost: '$9' },
        { name: 'Citronella', image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a', cost: '$16' },
        { name: 'Catnip', image: 'https://images.unsplash.com/photo-1552933529-e359b2477252', cost: '$13' }
      ]
    },

    {
      category: 'Medicinal Plants',
      plants: [
        { name: 'Aloe Medicinal', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8f5b7a7', cost: '$14' },
        { name: 'Echinacea', image: 'https://images.unsplash.com/photo-1599685315640-4b4f8f7c7f1f', cost: '$16' },
        { name: 'Peppermint', image: 'https://images.unsplash.com/photo-1621943723502-6c3e1e7c9f7c', cost: '$13' },
        { name: 'Chamomile', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc', cost: '$15' },
        { name: 'Calendula', image: 'https://images.unsplash.com/photo-1597848212624-e19c5b3a4c0c', cost: '$12' },
        { name: 'Turmeric Plant', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7', cost: '$17' }
      ]
    },

    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361', cost: '$25' },
        { name: 'Pothos', image: 'https://images.unsplash.com/photo-1614594576161-9d9b1a7e5c16', cost: '$10' },
        { name: 'Snake Plant Mini', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2e64', cost: '$15' },
        { name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b', cost: '$20' },
        { name: 'Succulents', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc', cost: '$18' },
        { name: 'Aglaonema', image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683', cost: '$22' }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (name) => {
    return cart.some((item) => item.name === name);
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-list-page">

      <nav className="navbar">

        <div className="tag">
          <div className="luxury">

            <span style={{ fontSize: '30px' }}>
              🌿
            </span>

            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>

          </div>
        </div>

        <div className="nav-links">

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
          >
            Home
          </a>

          <a href="#plants">
            Plants
          </a>

          <a href="#cart">
            Cart ({totalItems})
          </a>

        </div>

      </nav>

      <div
        className="product-container"
        id="plants"
      >

        {plantsArray.map((category) => (

          <section
            className="category-section"
            key={category.category}
          >

            <h2 className="category-name">
              {category.category}
            </h2>

            <div className="product-grid">

              {category.plants.map((plant) => (

                <div
                  className="product-card"
                  key={plant.name}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>
                    {plant.name}
                  </h3>

                  <p>
                    Beautiful {plant.name} for your home and garden.
                  </p>

                  <h4>
                    {plant.cost}
                  </h4>

                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.name)}
                  >
                    {isInCart(plant.name)
                      ? 'Added to Cart'
                      : 'Add to Cart'}
                  </button>

                </div>

              ))}

            </div>

          </section>

        ))}

      </div>

      <div id="cart">

        <CartItem
          onContinueShopping={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        />

      </div>

    </div>
  );
};

export default ProductList;
