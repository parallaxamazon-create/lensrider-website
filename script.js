
const data = {
  men: [
    ["Classic Black Frame", "Rs. 2,500"],
    ["Office Premium Frame", "Rs. 4,500"],
    ["Transparent Modern Frame", "Rs. 3,500"]
  ],
  women: [
    ["Elegant Gold Frame", "Rs. 3,200"],
    ["Modern Transparent Frame", "Rs. 3,800"],
    ["Soft Cat-Eye Frame", "Rs. 4,200"]
  ],
  kids: [
    ["Flexible Kids Frame", "Rs. 2,200"],
    ["Durable School Frame", "Rs. 2,500"],
    ["Colorful Kids Frame", "Rs. 2,800"]
  ],
  premium: [
    ["Luxury Premium Frame", "Rs. 6,500"],
    ["Executive Metal Frame", "Rs. 7,500"],
    ["Designer Inspired Frame", "Rs. 8,500"]
  ]
};

function showCategory(cat){
  const box = document.getElementById("inventory");
  box.innerHTML = data[cat].map(item => `
    <div class="product">
      <h3>${item[0]}</h3>
      <p class="price">${item[1]}</p>
      <p>Available for home try-on in Karachi.</p>
      <a class="btn navy" target="_blank" href="https://api.whatsapp.com/send?phone=923212430365&text=Hi%20LensRider!%20I%20want%20to%20try%20${encodeURIComponent(item[0])}%20at%20home.">Try At Home</a>
    </div>
  `).join("");
}
showCategory("men");
