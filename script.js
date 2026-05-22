
const W='https://api.whatsapp.com/send?phone=923212430365&text=';
function wa(msg){return W+encodeURIComponent(msg)}
const inventory={
 men:[
  ['Classic Black Frame','Rs. 2,500','assets/men-classic.svg'],['Office Premium Frame','Rs. 4,500','assets/men-office.svg'],['Transparent Modern Frame','Rs. 3,500','assets/men-transparent.svg']
 ],
 women:[
  ['Elegant Gold Frame','Rs. 3,200','assets/women-gold.svg'],['Soft Cat-Eye Frame','Rs. 4,200','assets/women-cat.svg'],['Modern Clear Frame','Rs. 3,800','assets/women-clear.svg']
 ],
 kids:[
  ['Flexible Kids Frame','Rs. 2,200','assets/kids-flex.svg'],['Colorful Kids Frame','Rs. 2,800','assets/kids-color.svg'],['Durable School Frame','Rs. 2,500','assets/kids-school.svg']
 ],
 premium:[
  ['Luxury Premium Frame','Rs. 6,500','assets/premium-luxury.svg'],['Executive Metal Frame','Rs. 7,500','assets/premium-metal.svg'],['Designer Inspired Frame','Rs. 8,500','assets/premium-designer.svg']
 ],
 sunglasses:[
  ['Wedding Sunglasses Rental','From Rs. 1,000','assets/sun-rent-1.svg'],['Mehndi Dance Look','From Rs. 1,000','assets/sun-rent-2.svg'],['Fashion Shoot Frames','From Rs. 1,500','assets/sun-rent-3.svg']
 ]
};
function renderInventory(cat,target='inventory'){
 const box=document.getElementById(target); if(!box)return;
 box.innerHTML=inventory[cat].map(x=>`<div class="card product"><img src="${x[2]}" alt="${x[0]}"><div class="product-content"><h3>${x[0]}</h3><div class="price">${x[1]}</div><p>Available for home try-on in Karachi.</p><a class="btn navy" target="_blank" href="${wa('Hi LensRider! I want to try '+x[0]+' at home.')}">Try At Home</a></div></div>`).join('');
}
function showCategory(cat){renderInventory(cat);document.getElementById('inventory').scrollIntoView({behavior:'smooth'})}
function openPage(page){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(page).classList.add('active');
 window.scrollTo(0,0);
 if(page==='menPage')renderInventory('men','menList');
 if(page==='womenPage')renderInventory('women','womenList');
 if(page==='kidsPage')renderInventory('kids','kidsList');
 if(page==='premiumPage')renderInventory('premium','premiumList');
 if(page==='rentalPage')renderInventory('sunglasses','rentalList');
}
document.addEventListener('DOMContentLoaded',()=>{renderInventory('men');document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));});
