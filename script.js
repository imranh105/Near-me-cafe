const menuItems = [
 {id:1,name:"Bombay Vada Pav",category:"Vada Pav",price:18,prices:[18,25,30],tag:"LOCAL FAVOURITE",desc:"Mumbai-style potato vada, chutneys and a soft pav.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🥔",multi:true},
 {id:2,name:"Kada Pav",category:"Vada Pav",price:25,tag:"HOUSE PICK",desc:"A bold, flavour-packed pav for a satisfying bite.",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",emoji:"🌶"},
 {id:3,name:"Mayo Vada Pav",category:"Vada Pav",price:35,tag:"CREAMY",desc:"Classic vada pav with a creamy mayo twist.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🥪"},
 {id:4,name:"Tandoori Vada Pav",category:"Vada Pav",price:40,tag:"SMOKY",desc:"A smoky tandoori-style take on the street-food classic.",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",emoji:"🔥"},
 {id:5,name:"Schezwan Vada Pav",category:"Vada Pav",price:40,tag:"SPICY",desc:"A fiery Schezwan kick in every bite.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🌶"},
 {id:6,name:"Peri Peri Vada Pav",category:"Vada Pav",price:40,tag:"SPICE LEVEL UP",desc:"A tangy peri peri seasoning with a street-food favourite.",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",emoji:"🌶"},
 {id:7,name:"Chocolate Vada Pav",category:"Vada Pav",price:45,tag:"UNEXPECTED",desc:"A playful sweet-and-savoury special. Ask in-store for availability.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🍫"},
 {id:8,name:"Vada Plate",category:"Vada Pav",price:50,tag:"SHAREABLE",desc:"A comforting plate made for snack time.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🍽"},
 {id:9,name:"Ulta Vada Pav",category:"Vada Pav",price:35,tag:"CAFE SPECIAL",desc:"A different spin on the beloved vada pav.",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",emoji:"🥔"},
 {id:10,name:"Mexican Vada Pav",category:"Vada Pav",price:45,tag:"FUSION",desc:"A fusion-style pav with bold Mexican-inspired flavour.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🌮"},
 {id:11,name:"Veggie Mayo Vada Pav",category:"Vada Pav",price:45,tag:"VEG PICK",desc:"Veggie crunch and creamy mayo with a soft pav.",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85",emoji:"🥬"},
 {id:12,name:"Pizza Pav",category:"Pizza & More",price:60,tag:"CHEESY",desc:"Pav meets pizza-inspired toppings and melted cheese.",img:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85",emoji:"🍕"},
 {id:13,name:"Dabeli",category:"Quick Bites",price:30,tag:"GUJARATI CLASSIC",desc:"Sweet, spicy and crunchy in a soft bun.",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85",emoji:"🥜"},
 {id:14,name:"Margherita Pizza",category:"Pizza & More",price:123,tag:"CHEESE LOVER",desc:"A simple, cheesy pizza classic.",img:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85",emoji:"🍕"},
 {id:15,name:"Veg Puff",category:"Quick Bites",price:20,prices:[20,40],tag:"BAKERY FAVOURITE",desc:"A flaky, golden puff with a savoury vegetable filling.",img:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=700&q=85",emoji:"🥐",multi:true},
 {id:16,name:"Aloo Tikki Burger",category:"Quick Bites",price:99,tag:"BESTSELLER",desc:"Crispy potato tikki, lettuce and a delicious cheesy layer.",img:"assets/cheese-burger.jpg",emoji:"🍔"},
 {id:17,name:"Grilled Veg Sandwich",category:"Quick Bites",price:70,tag:"GRILLED FRESH",desc:"Grilled bread layered with vegetables and melted cheese.",img:"assets/grilled-sandwich.jpg",emoji:"🥪"},
 {id:18,name:"Veg Masala Maggi",category:"Quick Bites",price:50,tag:"COMFORT BOWL",desc:"A warm bowl of noodles with a masala kick.",img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85",emoji:"🍜"},
 {id:19,name:"French Fries",category:"Quick Bites",price:70,tag:"CRISPY",desc:"Golden fries, perfect for sharing — or not.",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",emoji:"🍟"},
 {id:20,name:"Panipuri",category:"Quick Bites",price:40,tag:"STREET-FOOD CLASSIC",desc:"Crisp puris with tangy, refreshing flavours.",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85",emoji:"🥣"},
 {id:21,name:"Cafe Coffee",category:"Drinks",price:50,tag:"SIP & RESET",desc:"A cosy cafe-style coffee to lift your break.",img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=85",emoji:"☕"},
 {id:22,name:"Chocolate Shake",category:"Drinks",price:90,tag:"COOL FAVOURITE",desc:"A chilled, creamy chocolate shake.",img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85",emoji:"🥤"}
];
let cart = [];
let activeCategory = "All";
let searchTerm = "";
const $ = s => document.querySelector(s);
const grid = $("#productGrid");
const rupee = n => "₹" + Number(n).toLocaleString("en-IN");
function productImage(item){
  const img = item.img;
  return `<img src="${img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=75'">`;
}
function renderMenu(){
  const shown = menuItems.filter(item => (activeCategory==="All" || item.category===activeCategory) && (item.name+" "+item.category+" "+item.desc).toLowerCase().includes(searchTerm.toLowerCase()));
  $("#resultCount").textContent = shown.length;
  grid.innerHTML = shown.map((item,i)=>`<article class="product-card" style="animation-delay:${Math.min(i*35,280)}ms">
    <div class="product-image">${productImage(item)}<span class="product-tag">${item.tag}</span><button class="quick-add" data-add="${item.id}" aria-label="Add ${item.name} to bag">+</button></div>
    <div class="product-info"><div class="product-meta"><h3>${item.name}</h3></div><p>${item.desc}</p><div class="product-bottom"><span class="price">${item.multi ? item.prices.map(rupee).join(" / ") : rupee(item.price)}${item.multi?'<small> · size options</small>':''}</span>${item.multi?`<button class="choose-size" data-size="${item.id}">Choose size</button>`:''}</div></div>
  </article>`).join("");
  $("#emptyState").hidden = shown.length>0;
  grid.hidden = shown.length===0;
}
function addItem(id, price){
  const item = menuItems.find(p=>p.id===id);
  const chosenPrice = price || item.price;
  const key = id+"-"+chosenPrice;
  const found = cart.find(x=>x.key===key);
  if(found) found.qty++; else cart.push({key,id,price:chosenPrice,qty:1});
  renderCart(); showToast(item.name+" added to your bag");
}
function changeQty(key,delta){
  const item=cart.find(x=>x.key===key); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart=cart.filter(x=>x.key!==key);
  renderCart();
}
function renderCart(){
  const count=cart.reduce((n,x)=>n+x.qty,0), subtotal=cart.reduce((n,x)=>n+x.qty*x.price,0);
  $("#cartCount").textContent=count; $("#drawerCount").textContent="("+count+")";
  $("#cartEmpty").style.display=count?"none":"block"; $("#cartFooter").hidden=!count;
  $("#cartItems").innerHTML=cart.map(line=>{const item=menuItems.find(x=>x.id===line.id);return `<div class="cart-line"><img src="${item.img}" alt="" onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=200&q=70'"><div><h4>${item.name}</h4><small>${rupee(line.price)} each</small><div class="qty-control"><button data-qty="${line.key}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${line.qty}</span><button data-qty="${line.key}" data-delta="1" aria-label="Increase quantity">+</button></div></div><span class="line-price">${rupee(line.price*line.qty)}</span></div>`}).join("");
  $("#subtotal").textContent=rupee(subtotal); $("#total").textContent=rupee(subtotal+(count?20:0)); $("#checkoutTotal").textContent=rupee(subtotal+(count?20:0));
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#overlay").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"; }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.style.overflow=""; }
let toastTimer;
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
function chooseCategory(category){activeCategory=category;document.querySelectorAll(".category-chip").forEach(b=>b.classList.toggle("active",b.dataset.category===category));renderMenu();}
document.querySelectorAll(".category-chip").forEach(b=>b.addEventListener("click",()=>chooseCategory(b.dataset.category)));
grid.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]"); if(add){const item=menuItems.find(x=>x.id===Number(add.dataset.add));if(item.multi){const p=prompt("Choose size/price for "+item.name+":\n"+item.prices.map((p,i)=>(i+1)+". "+rupee(p)).join("\n")+"\nEnter option number");const idx=Number(p)-1;if(!Number.isInteger(idx)||idx<0||idx>=item.prices.length){if(p!==null)showToast("Please choose a listed size");return}addItem(item.id,item.prices[idx]);}else addItem(item.id);return}
 const size=e.target.closest("[data-size]");if(size){const item=menuItems.find(x=>x.id===Number(size.dataset.size));const p=prompt("Choose size/price for "+item.name+":\n"+item.prices.map((p,i)=>(i+1)+". "+rupee(p)).join("\n")+"\nEnter option number");const idx=Number(p)-1;if(!Number.isInteger(idx)||idx<0||idx>=item.prices.length){if(p!==null)showToast("Please choose a listed size");return}addItem(item.id,item.prices[idx]);}
});
$("#cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(b)changeQty(b.dataset.qty,Number(b.dataset.delta));});
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);
$("#browseMenu").addEventListener("click",()=>{closeCart();$("#menu").scrollIntoView({behavior:"smooth"})});
$("#menuSearch").addEventListener("input",e=>{searchTerm=e.target.value;renderMenu()});
$("#clearSearch").addEventListener("click",()=>{$("#menuSearch").value="";searchTerm="";renderMenu()});
$("#resetFilters").addEventListener("click",()=>{searchTerm="";$("#menuSearch").value="";chooseCategory("All")});
$("#searchToggle").addEventListener("click",()=>{$("#menu").scrollIntoView({behavior:"smooth"});setTimeout(()=>$("#menuSearch").focus(),400)});
$("#mobileMenu").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
const checkout=$("#checkoutModal");
$("#checkoutBtn").addEventListener("click",()=>{closeCart();checkout.classList.add("open");document.body.style.overflow="hidden";$("#confirmation").hidden=true;$("#checkoutForm").hidden=false});
$("#checkoutClose").addEventListener("click",()=>{checkout.classList.remove("open");document.body.style.overflow=""});
$("#checkoutForm").addEventListener("submit",e=>{e.preventDefault();if(!cart.length){showToast("Your bag is empty");return}const fd=new FormData(e.currentTarget);const orderId="NMC-"+Math.random().toString(36).slice(2,8).toUpperCase();$("#confirmationText").textContent=`Thank you, ${fd.get("name")}. Your sample order reference is ${orderId}. No order was sent to the cafe.`;$("#checkoutForm").hidden=true;$("#confirmation").hidden=false;cart=[];renderCart()});
$("#doneBtn").addEventListener("click",()=>{checkout.classList.remove("open");document.body.style.overflow=""});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();checkout.classList.remove("open");document.body.style.overflow=""}});
$("#year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
renderMenu();renderCart();