let products = [
  {
    id: 1,
    name: "Gold Necklace with Earrings",
    price: "₹1,999",
    rating: "⭐⭐⭐⭐☆ (150 Reviews)",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIvOwDdSBEVaJYls_6ZHRlFno4KHsFpUkcWrGJWV4y9KWkEP8fXAB2USPwyeeSIJ_m6pY0TzggCB33uzZyFCBJaomuGuIu1h-T70XH4yUj4NNsp8UsKGGr1w",
    description: "Elegant gold necklace paired with matching earrings, perfect for weddings and parties.",
    details: [
      "Material: Pure gold plated",
      "Set: Necklace + Earrings",
      "Occasion: Wedding, Party wear",
      "Weight: Lightweight and comfortable",
    ],
  },
  {

    id: 2,
    name: "Party Wear Lehenga",
    price: "₹5,499",
    rating: "⭐⭐⭐⭐⭐ (200 Reviews)",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrjO0KwyXXMff1DhPuxqEq1om6vZWU1xSVmPOkp3NXKn3gH2B3FMiNwBH7weyy3Z1wQTtxGREdVjComY7LYWM-tz9x99nTzbN8wabZHjaooErxo71PXPGaPw",
    description: "Beautiful party wear lehenga designed to make you shine at festive occasions.",
    details: [

      "Fabric: Net with Embroidery",
      "Blouse: Semi-stitched",
      "Dupatta: Included",
      "Occasion: Wedding / Party"
    ],

  },
  {
    id: 3,
    name: "Simple Purse",
    price: "₹799",
    rating: "⭐⭐⭐⭐ (90 Reviews)",
    image: "https://images.unsplash.com/photo-1731510912565-1c2b6df339a7?w=500&auto=format&fit=crop&q=60",
    description: "Chic and simple purse, perfect for daily use or casual outings.",
    details: [
      "Material: Faux Leather",
      "Compartments: 2 Main, 1 Zip",
      "Strap: Adjustable",
      "Style: Everyday casual"
    ],
  },
  {
    id: 4,
    name: "Silk Saree",
    price: "₹3,499",
    rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_6UJ0X58R9RCRMcC4Q2t13GzvfOV_vkgQIsOSH9FXiI9vZhTnqA3eXE8zo3EsmrhPUcZhsdlKXELXcUThmlLnDtvU2wrIUxm-7BiPb-vH",
    description: "Elegant silk saree perfect for weddings and festive occasions.",
    details: [
      "Fabric: Pure Silk",
      "Blouse: Unstitched",
      "Length: 6.2m (with blouse piece)",
      "Occasion: Traditional, Wedding"
    ]
  },
  {
    id: 5,
    name: "Black Shirt for Boys",
    price: "₹1,299",
    rating: "⭐⭐⭐⭐☆ (80 Reviews)",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy8Rt9xS3nrYngT-_r5lK7wyfwXGXy1cN1kEfDZ5Sn8VGAc7JKZVfF7KuVvx55fAM77hJqm6hUgFyFXPVqmO5Uim-mVsJl",
    description: "Stylish black shirt for boys, ideal for casual and semi-formal events.",
    details: [
      "Material: Cotton Blend",
      "Fit: Regular",
      "Sleeves: Full Sleeves",
      "Ideal For: Boys / Men"
    ],
  },
  {
    id: 6,
    name: "Golden High Heels",
    price: "₹2,999",
    rating: "⭐⭐⭐⭐⭐ (140 Reviews)",
    image: "https://images.unsplash.com/photo-1736172499835-17c22b2a475e?w=500&auto=format&fit=crop&q=60",
    description: "Party wear high heels in gold color with sparkling stones, perfect for special occasions.",
    details: [
      "Color: Gold",
      "Heel Height: 4.5 inches",
      "Material: Synthetic with Stone Work",
      "Occasion: Party, Wedding"
    ],
   
  },
  {
    id: 7,
    name: "Black Smart Watch",
    price: "₹4,499",
    rating: "⭐⭐⭐⭐⭐ (180 Reviews)",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60",
    description: "Black smart watch with calling feature, ideal for everyday use and tech-savvy users.",
    details: [
      "Color: Black",
      "Features: Calling, Fitness Tracking, Notifications",
      "Battery: Up to 7 Days",
      "Warranty: 1 Year"
    ],
   
  },
  {
    id: 8,
    name: "Zara Velvet Shadow Edp",
    price: "₹1,550",
    rating: "⭐⭐⭐⭐ (110 Reviews)",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7Pab1i1rWSBqTyr-m4OvS_xbqXFmOzVjmpmT2YmUUNjAMxrFJlKVObO72k0LkSh2AXc8rcfbK0u9z5kIBfsnVL9FsyGL-3HHwriY9FHP8AxaylpC89h6z1yw",
    description: "Refreshing perfume, perfect for gifting or personal use.",
    details: [
      "Fragrance: Long-lasting",
      "Quantity: 100ml",
      "Type: Eau de Parfum",
      "Suitable For: Men & Women"
    ],
  }
];

let shopProducts = [
  { id: 101, name: "Red Dress", price: 799, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhG_bvix_DWZjBA2BvXTIe_xx_MGamuaUsDTCLUwtE5IhRYhLYG4jWjGzPODETC2Msm4ySniEC-kjiqJWxNoiq8T68EIpgVCZPEQ1_F08dpR7Shp57bk3m", rating: 4 },
  { id: 102, name: "Blue Shirt", price: 499, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTafuAidOxNlAKH2CPDdsFgHHexWqa5Ty7NWMc91wox-GgfrQ895ZQkAg0gLkEf2LuPQ6s_sJtiaEvnoFda9Hm8WxQuqR0kN3MWkzn6LVDlOGn9ZI5GKJyMQw&usqp=CAc", rating: 3 },
  { id: 103, name: "Black Jeans", price: 999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvNccSxQp4yfsSKAo0my7SLX4yBvTv2YVPerpNkB7ReMdVyujxUt0o_OZ67-1JJpP-j12A8HjeLOc10f0rvonrNBpu6TKYb1nxUlalQT6ed7tTPQfXMwHXNw", rating: 5 },
  { id: 104, name: "White Sneakers", price: 1199, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPIo9xabFm2QsPacze6jGlruWTzW2ygtS_hrf53lN2AE-2LbDuZaNR5K-Y3BkYVXuX1CBj96BL4ppNnHJzqKVAfHMxIzpfP-Du7oiYPwU", rating: 4 },
  { id: 105, name: "Green Top", price: 699, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWADshy_hZv9EScSJL4GUREr5FGgGmhvO-XBhV1itK3XW7aOgxrqwfDmvxs2tiLZac-CpwpWDF-MJPIEiBPSdqSBMlk6E8w135CbEugN_t1c-cjQzjsRflAg", rating: 3 },
  { id: 106, name: "Yellow Skirt", price: 799, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRV4k-t1KSxa-hiCwYBkHwreY4coSxbYLYTtQ81129mw9DPJz4CghQPysx0ZNduyGIMaRQASWLCBdNH3nsTM-qFkNLKOFKiGy60HQjJYbaNNpT22I5YmwRC7RE", rating: 4 },
  { id: 107, name: "Brown Bag", price: 1299, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRpXjDuulUQNZnzxRtSqVyzVB_Ih1U0eeRVR4NhBmRzgYB1LlmZ6jJNxRVKjtxef2ED7gjDPQypPyH90fJTx9oRXrULk5032QeoP9KkV46IABItsq2bN1Lzw", rating: 5 },
  { id: 108, name: "Purple Jacket", price: 1499, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0mXh4zun8p9qqCSFR0XNDxMvAqC5rzUGM97gbMDzu8BehreixGfDvGumwDxekxBlmbe4rqzNjTqPZx0NFbkD9iY6UL8GBwGoT2pHzzpVvn2cBzTyEv0PC", rating: 4 },
  { id: 109, name: "Orange Cap", price: 299, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8_nOjXgufAVlRvudz0MXfo5wxID-JMRX97IFwySmH_lR0x5mA5_EDI3ZB-lBJ0frOaeaAtNhqgvqWLtuQA5wakln3qzThvkV4C69vKk1Xmlp1g1LnjICnEw", rating: 3 },
  { id: 110, name: "Grey Hoodie", price: 1099, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH6Fh0DamVUzsj6VGy02P0dW5REIupuoL0iNS_uOgiCc6qF8UGMtum8LkcqKeFdcaEfZylrXYlJy8yTV_DnbqEThXAM_gHLFdPiP5Kvx0Pk6chmUNRZwo0Jw", rating: 4 },
  { id: 111, name: "Pink Blouse", price: 699, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGMX9BkKMYUJ8WotGXnxAqIFMhPuebkL4I58-2Ed2p2we0QvnKWL_UpU7abW7bzI29lfJUw1RZo1Oi-nmHkZbW6wY9Ei-vu5YsO4iOG8VROj_2GEzJ5qE5mQ", rating: 4 },
  { id: 112, name: "Denim Shorts", price: 799, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4eCZFCDmuT48PyN9bYq2WFU7yuqaJM5gzvjFldhO9awwCxQpMvliFj_XME8xQBsiWAMb_XuqoNDXod7fMDEccatbo0MIb2tmZmGOw-kkKw3lSPr350lr8-ONE", rating: 3 },
  { id: 113, name: "Leather Belt", price: 499, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5F8KwghOZu2s7EeEowHZdV0w7Q3IKmKcpxpmmOKJgYV7q-bXGYpE3IMLdZUMWmYcxwYkcfoJ66_q2_M9j-Bv-zpQdhsecN3S2tDETIizGeyQvTAOwTkK-NQ", rating: 4 },
  { id: 114, name: "Striped T-Shirt", price: 399, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXjEBHMEXNyPQHfeYOM7VCx6Og0c_u69xiPAt3BINw-_Z0G2SLXa68kSO7HmCERlOVWMsLMF2iUUgr31nEbx34900SFLpPM-vQaKyFhgADV3vn1EdUaPGb", rating: 3 },
  { id: 115, name: "Beige Pants", price: 899, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRl-x3AmtwC0KifS6Dm5bCj402toFLlJR3GRUNUjcmA5Ub-x2ZMmrL1UjnIokO6phaOwYikdwWp0PFu7va9SkILW2r6_7hibHF7HvW-det99J2JmLKmZqwrCQ", rating: 4 },
  { id: 116, name: "Floral Dress", price: 1199, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUuuAIOex3IBW6TdvOQN561U36vTSzWvnNHgKEt41FsfUNQhrOoSJKhcCq7b_b0dzGHGOYCwt7x6NfMkXZqEXxMZB0agzJOMcew46U2X8oxZbi7IUyo9JT", rating: 5 },
  { id: 117, name: "Red Sneakers", price: 1299, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNJXT3TPDs83vdEOVjMZ6Nd_A7-tU2ms4VwARo0K6o2QgUEVunbDdKjXeq1wqGHFY7U33o6qPuqLjrU3r4enhfUoREFdgMhLHEO9NDOchP1vW2O0o32b77", rating: 4 },
  { id: 118, name: "Black Hat", price: 399, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTByXW_k-mGwb2htWocM92h7zbPeJfS4yxJUy9kJ7Aut836rPYVA1003yx9P_iY4TeJ8PYVseo-2OvVtwrYnN8iRDoozVNWG_-VZVOGXedI", rating: 3 },
  { id: 119, name: "Blue Jacket", price: 1499, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6SzicwsBDoHQkreUi6nIhxnIo4Ai0F2pC48ZbP0F1W60_BJYqlUK_Po7cj7fgF0yRFryfiVN1qPQw8PGt_0X9VMhuS1NILhsVvnaGWbp3uWKyHE5i44kwRA", rating: 4 },
  { id: 120, name: "White Trousers", price: 999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWTMZJ592j5o5cLI1UdIelqCG45QareUJg7HVIPe5lERM2UYcOdTU1xG8M4JbQbZn7NmFRgP-6O5HGgNbTwR-eLzAyHJ32duzuu3Efa2R-9NafU0iBNXuC", rating: 5 },
  { id: 121, name: "Grey Sweater", price: 1099, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRh0PlBTsGY0qWmCUtNct0CEcotfjbmXWt3MMiTQz8Ot2YJceCNGk8xd063YLJ8zLgMyOvTz1J2QQC44MayT5zXDA0X23AILB0ZSaEtyLxqYE6S4yIcyh4S", rating: 4 },
  { id: 122, name: "Orange Top", price: 699, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQmjq8g-chXKdJ-lmVMHaxiha__MHrgiVnAvRWm849gc-CJK2Ihk0D9rxCvpc91mnFXwl9KhHxPurZW8yvmFNrNy8TOGSx-osMgUfAZJL7iAXCvH0cxtKS350", rating: 3 },
  { id: 123, name: "Brown Boots", price: 1599, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHeSXE2FmmfaV8WcEKRCGtJ5MuFv5na_QrYxlMeiawG4ykscPKF2cQ0A3ZlZSC5ZCqKZJkE4vFsKvlFskBd0iw2wrKc53rD5S5r3gK9K8i1LFwWdpAd8_S2g", rating: 5 },
  { id: 124, name: "Green Pants", price: 899, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTj6o6i7qrsr2tnLmcgYkT6s6Nk7jtpz3g0aJcUqz8Oah8Eh_9JbE3ziwwoX1i0ZoqYQ42rFbg2PNlq7FZZh3wF4nJJqvn1H2UuK6oL7A5ycjpnXUPkFf8m", rating: 4 },
  { id: 125, name: "Purple Skirt", price: 799, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkC_zXUeUVs81WB-1jM8-3R3l5XvZHRN8sdCF08FMo8I3pS1G0Er3E7oV8i4S9tY1Zq6O0A1FG5Y8bUex0mQogJzq0_rndvQp5u4iw6hT6R0c1NQy0B5l3", rating: 3 },
  { id: 126, name: "Red Bag", price: 1299, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPOB6r2j1b8w_gm3jfq8xG3yRtExl7cvm6OTfTV3lPl1Nx5tK_3E6L7fOVl6o2a9jqGxDqUdxT0w1kRZzI0rMY3W64RT93M-puyE_JJxeX", rating: 5 },
  { id: 127, name: "Blue Cap", price: 299, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSe4JdVQhtfO3mK19k0xwt9-FMiC9ZgrEKYQ8p-uqOV1I3X3V6Lgr3r5i_5PtmvIfK4EjZrIKNwRpk5xODF5bHn", rating: 3 },
  { id: 128, name: "Yellow Hoodie", price: 1099, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0mNRc_9EJxWmEXr5n2qNzyFVqkRlTxH57yLo-VoZHV9D33x6uz5yz5KWrDlXzWcF0K8Mx7MEJdQtRJZShm", rating: 4 },
  { id: 129, name: "Black Dress", price: 1199, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQx28F2Fplx3Gm5I7wH6ymR9Pduio0T6ZKf-6E2L3_3qVJ0MF9xF8O9gTZkPgWZr3_6lR8fgox9_gQdCK_1R", rating: 5 },
  { id: 130, name: "Grey Cap", price: 299, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThz1-0YjR8W8kNMQd3L7tXb0z2FfVxPXmRHh3Gk4JkX4l9MfI5QmH7x7k9LlmX2bG2P", rating: 3 },
  { id: 131, name: "Orange Dress", price: 1099, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWjG2_XP3fJHf9D0P8f7XH0K9m_7xZkU_0R2d6FQ", rating: 4 },
  { id: 132, name: "Brown Jacket", price: 1499, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8tL1dQ8M0h9P1g3O2r7U8H4k2V7q1L0t6E0B2F1", rating: 4 },
  { id: 133, name: "Blue Jeans", price: 999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2J3_9P1D0M6tL8Q3R1_9F6K2L7q2L3P2B0V1F3", rating: 5 },
  { id: 134, name: "Green Shirt", price: 499, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6E3_8J2K1M7tL9R4F0_8G6L2K8q2L4P3B1V1F4", rating: 3 },
  { id: 135, name: "Pink Shoes", price: 1299, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9F4_7K3L2M8tL1Q5G1_7H6L3K9q2L5P4B2V2F5", rating: 4 },
  { id: 136, name: "White Cap", price: 299, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcU0G5_6K4M3M9tL2R6H2_6I7L4K0q2L6P5B3V3F6", rating: 3 },
  { id: 137, name: "Black Sneakers", price: 1199, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcV1H6_5K5M4N0tL3R7I3_5J8L5K1q2L7P6B4V4F7", rating: 5 }
];


 // 🔹 Get cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔹 Merge all product arrays
let allProducts = [...products, ...shopProducts];

let cartContainer = document.getElementById("cart-container");
let emptyMsg = document.getElementById("empty-cart-msg");

// 🔹 Function to render cart
function renderCart() {
    // Filter products jo cart me hain
    let cartProducts = allProducts.filter(p => cart.includes(p.id));

    cartContainer.innerHTML = ""; // Clear previous content

    if (cartProducts.length === 0) {
        emptyMsg.textContent = "Your cart is empty!";
    } else {
        emptyMsg.textContent = ""; // clear msg agar products hain

        cartProducts.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="remove-btn" data-id="${product.id}">Remove</button>
                     <button class="buy-btn" data-id="${product.id}">Buy Now</button>
      
                </div>
            `;
            cartContainer.appendChild(div);
        });
    }
}

// 🔹 Event delegation for remove
cartContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove-btn")) {
        let productId = parseInt(e.target.dataset.id);

        // Cart array se remove
        cart = cart.filter(id => id !== productId);

        // Local storage update
        localStorage.setItem("cart", JSON.stringify(cart));

       

        // Re-render
        renderCart();
    }
  })
document.getElementById("cart-container").addEventListener("click", function(e){
    if(e.target.classList.contains("buy-btn")){
        let productId = parseInt(e.target.dataset.id);
           window.location.href = `payment.html?id=${productId}`;
    }
});



// 🔹 Initial render
renderCart();




