import React from 'react';

const useRestaurantMenu = (resId) => {

    useEffect(() => {
    },[]);

  return (
    <div></div>
  )
}

export default useRestaurantMenu;


// import { useState, useEffect } from 'react';

// const useRestaurantMenu = (restaurantId) => {
//   const [menu, setMenu] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`/api/restaurants/${restaurantId}/menu`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch menu');
//         }
//         const data = await response.json();
//         setMenu(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, [restaurantId]);

//   return { menu, loading, error };
// };

// export default useRestaurantMenu;