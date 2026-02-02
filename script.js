document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle
  const toggleBtn = document.querySelector(".toggle-btn button");
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀️ Light Mode";
      } else {
        toggleBtn.textContent = "🌗 Dark Mode";
      }
    });
  }

  // Product Data
  const products = [
    // Dogs
    { id: 1, name: "Dog Collar", img: "https://petsup.in/cdn/shop/files/1_a09ac6d9-6ce4-417c-8a9b-b76cb0690513_large.jpg?v=1725412118", price: 299, category: "dogs" },
    { id: 2, name: "Dog Leash", img: "https://vamaleathers.com/cdn/shop/files/Main_Page.png?v=1732859606", price: 199, category: "dogs" },
    { id: 3, name: "Dog Bed", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/pet-bed/u/c/u/m-round-dog-bed-for-small-dogs-washable-luxury-pet-sofa-dogtrust-original-imagwmjhg4f3t4tz.jpeg?q=20", price: 899, category: "dogs" },
    { id: 4, name: "Dog Shampoo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTt_ys2v7Ii6jn4JvJAZWRFi0WreYI0EdiNg&s", price: 249, category: "dogs" },
    { id: 5, name: "Dog Toy Ball", img: "https://m.media-amazon.com/images/I/61ZgPGqgKPL.jpg", price: 149, category: "dogs" },
    { id: 6, name: "Dog Harness", img: "https://m.media-amazon.com/images/I/71YUhxh5-YL._UF1000,1000_QL80_.jpg", price: 399, category: "dogs" },
    { id: 7, name: "Dog Chew Bone", img: "https://supertails.com/cdn/shop/products/51mPJ183qIL.png?v=1696414816", price: 99, category: "dogs" },
    { id: 8, name: "Dog Raincoat", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTW2Sr0wpVmWlNoN24UsrUAPRIBe66ox1lA&s", price: 499, category: "dogs" },
    { id: 9, name: "Dog Water Bottle", img: "https://m.media-amazon.com/images/I/71g+TTPdDDL._UF1000,1000_QL80_.jpg", price: 199, category: "dogs" },
    { id: 10, name: "Dog Grooming Brush", img: "https://images.meesho.com/images/products/328633586/fd24z_512.webp?width=512", price: 179, category: "dogs" },
    // Cats
    { id: 11, name: "Cat Litter Box", img: "https://pawpawup.com.au/cdn/shop/files/extra-large-open-splash-proof-cat-litter-box-pawpawup-73861.jpg?v=1754458791&width=1920", price: 499, category: "cats" },
    { id: 12, name: "Cat Scratching Post", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgch-9I_yTBBAaaBmmFHRxYPfZ4vYaZyrA-Q&s", price: 399, category: "cats" },
    { id: 13, name: "Cat Collar", img: "https://m.media-amazon.com/images/I/81PYyVDtraL.jpg", price: 149, category: "cats" },
    { id: 14, name: "Cat Toy Mouse", img: "https://m.media-amazon.com/images/I/71eYpjdkSPL.jpg", price: 89, category: "cats" },
    { id: 15, name: "Cat Bed", img: "https://m.media-amazon.com/images/I/71gM+7RF9rL._UF1000,1000_QL80_.jpg", price: 599, category: "cats" },
    { id: 16, name: "Cat Carrier", img: "https://www.ferplast.com/cdn/shop/files/7-0190021125_x620.jpg?v=1728917519", price: 799, category: "cats" },
    { id: 17, name: "Cat Grooming Glove", img: "https://m.media-amazon.com/images/I/71zVZz7WVFL.jpg", price: 199, category: "cats" },
    { id: 18, name: "Cat Water Fountain", img: "https://images-cdn.ubuy.co.in/635cebde4b6e6f243e14d144-rose-create-ceramic-cat-drinking-water.jpg", price: 349, category: "cats" },
    { id: 19, name: "Cat Nail Clipper", img: "https://www.petbarn.com.au/petspot/app/uploads/2014/01/shutterstock_1109486840.jpg", price: 129, category: "cats" },
    { id: 20, name: "Cat Tunnel", img: "https://m.media-amazon.com/images/I/61xwifobGHL._UF1000,1000_QL80_.jpg", price: 299, category: "cats" },
    // Birds
    { id: 21, name: "Bird Cage", img: "https://m.media-amazon.com/images/I/711gy66tmqL._UF1000,1000_QL80_.jpg", price: 999, category: "birds" },
    { id: 22, name: "Bird Swing", img: "https://m.media-amazon.com/images/I/61LjYeqM1CL.jpg", price: 149, category: "birds" },
    { id: 23, name: "Bird Bath", img: "https://m.media-amazon.com/images/I/71-oyXI4uTL.jpg", price: 199, category: "birds" },
    { id: 24, name: "Bird Perch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRehfS1_3oI1UoS0JTqCElBhxFXeB5xHIyg&s", price: 99, category: "birds" },
    { id: 25, name: "Bird Feeder", img: "https://images.meesho.com/images/products/61331569/rewza_512.webp?width=512", price: 249, category: "birds" },
    { id: 26, name: "Bird Ladder", img: "https://m.media-amazon.com/images/I/51nyxhfuc6L.jpg", price: 129, category: "birds" },
    { id: 27, name: "Bird Mirror", img: "https://m.media-amazon.com/images/I/61f4sp42H7L._UF1000,1000_QL80_.jpg", price: 89, category: "birds" },
    { id: 28, name: "Bird Nest", img: "https://onlymat.com/cdn/shop/products/IMG_014700033.JPG?v=1588514068&width=1445", price: 179, category: "birds" },
    // { id: 29, name: "Bird Water Dispenser", img: "https://m.media-amazon.com/images/I/61Qw2Qk8QxL._AC_UL480_FMwebp_QL65_.jpg", price: 119, category: "birds" },
    // { id: 30, name: "Bird Chew Toy", img: "https://m.media-amazon.com/images/I/61p1QwQk8QL._AC_UL480_FMwebp_QL65_.jpg", price: 99, category: "birds" },
    // Accessories
    // { id: 31, name: "Pet Carrier", img: "https://m.media-amazon.com/images/I/71vQkz+4kGL._AC_UL480_FMwebp_QL65_.jpg", price: 899, category: "accessories" },
    // { id: 32, name: "Pet Blanket", img: "https://m.media-amazon.com/images/I/61h2Qd8gQdL._AC_UL480_FMwebp_QL65_.jpg", price: 299, category: "accessories" },
    // { id: 33, name: "Pet Shampoo", img: "https://m.media-amazon.com/images/I/81b6p7r6wGL._AC_UL480_FMwebp_QL65_.jpg", price: 199, category: "accessories" },
    // { id: 34, name: "Pet Comb", img: "https://m.media-amazon.com/images/I/61Qw2Qk8QxL._AC_UL480_FMwebp_QL65_.jpg", price: 99, category: "accessories" },
    // { id: 35, name: "Pet Water Bottle", img: "https://m.media-amazon.com/images/I/61p1QwQk8QL._AC_UL480_FMwebp_QL65_.jpg", price: 149, category: "accessories" },
    // { id: 36, name: "Pet Travel Bag", img: "https://m.media-amazon.com/images/I/71vQkz+4kGL._AC_UL480_FMwebp_QL65_.jpg", price: 799, category: "accessories" },
    // { id: 37, name: "Pet Nail Clipper", img: "https://m.media-amazon.com/images/I/61h2Qd8gQdL._AC_UL480_FMwebp_QL65_.jpg", price: 129, category: "accessories" },
    // { id: 38, name: "Pet Feeding Bowl", img: "https://m.media-amazon.com/images/I/81b6p7r6wGL._AC_UL480_FMwebp_QL65_.jpg", price: 179, category: "accessories" },
    // { id: 39, name: "Pet Mat", img: "https://m.media-amazon.com/images/I/61Qw2Qk8QxL._AC_UL480_FMwebp_QL65_.jpg", price: 119, category: "accessories" },
    // { id: 40, name: "Pet Toy Set", img: "https://m.media-amazon.com/images/I/61p1QwQk8QL._AC_UL480_FMwebp_QL65_.jpg", price: 399, category: "accessories" },
  ];

  // Render Products
  const productList = document.getElementById('product-list');
  function renderProducts(category) {
    let filtered = products.filter(p =>
      (category === "all" || p.category === category)
    );
    productList.innerHTML = filtered.length ? filtered.map(p => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
        <div class="card" style="width: 16rem;">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body.i">
            <h5 class="card-title">${p.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">₹${p.price}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link btn-primary rounded text-dark px-3 py-2 add-to-cart-btn" style="text-decoration: none">Add to cart</a>
          </div>
        </div>
      </div>
    `).join('') : `<div class="text-center text-muted py-4">No products found.</div>`;
    // Re-attach add-to-cart event listeners
    attachCartListeners();
  }

  // Initial render
  renderProducts("all");

  // Category Filter
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.onclick = function () {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
    };
  });

  // Cart count logic
  let cartCount = 0;
  const cartCountElem = document.getElementById('cart-count');
  function attachCartListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.onclick = function (e) {
        e.preventDefault();
        cartCount++;
        cartCountElem.textContent = cartCount;
        btn.textContent = "Added!";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = "Add to cart";
          btn.disabled = false;
        }, 900);
      };
    });
  }
  // Initial attach
  attachCartListeners();
});