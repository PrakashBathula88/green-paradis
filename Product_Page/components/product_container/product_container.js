let products = [
    {img:'./images/Aimage.webp',name:"Lucky Bamboo Plant - 3 Layer",price:'399',category:"Houseplants"},
    {img:"./images/AtlantisPlanter-PastelBlue.webp",name:'Peace Lily Plant',price:'299',category:"Houseplants"},
    {img:"./images/AtlantisPlanter-PastelPink.webp",name:'Money Plant Golden',price:'299',category:"Houseplants"},
    {img:'./images/AtlantisPlanter-Teal_dc150664.webp',name:"Snake Plant - Golden Hahnii",price:'299',category:"Houseplants"},
    {img:"./images/AtlantisPlanter-Teal.webp",name:'Areca Palm Plant XL',price:'2499',category:"Houseplants"},
    {img:"./images/DSC_2431.webp",name:'Areca Palm Plant',price:'499',category:"Houseplants"},
    {img:"./images/LagosPlanter-Mocca.webp",name:'Syngonium Pink Plant',price:'249',category:"Houseplants"},
    {img:'./images/LagosPlanter-Grey.webp',name:"Jade Plant Mini",price:'249',category:"Houseplants"},
    {img:"./images/small-atlantis.webp",name:'Broken Heart Plant',price:'249',category:"Houseplants"},
    {img:'./images/SpiroCeramicPot-White.webp',name:"Bamboo Palm Plant",price:'399',category:"Houseplants"},
    {img:"./images/Venice12Planter-Black.webp",name:'Ficus Bonsai Plant',price:'799',category:"Houseplants"},
    {img:"./images/air-purifying-bundle.png",name:'Areca Palm, Sansevieria Futura Superba',price:'999',category:"Houseplant Sets"},
    {img:"./images/air-purifying-bundle.webp",name:'Syngonium Pink, Money N Joy',price:'999',category:"Houseplant Sets"},
    {img:"./images/sleep-better-bundle.webp",name:'The Sleep Better Bundle',price:'1299',category:"Houseplant Sets"},
    {img:"./images/rubber-variegated-and-aglaonema-pink.webp",name:'Rubber Variegated and Aglaonema Pink',price:'1199',category:"Houseplant Sets"},
    {img:"./images/zz-peace-lily.webp",name:'ZZ, Peace Lily',price:'999',category:"Houseplant Sets"},
    {img:"./images/living-room-bundle.webp",name:'The Living Room Bundle',price:'1299',category:"Houseplant Sets"},
    {img:"./images/tabletop-succulent-bundle.webp",name:'The Tabletop Succulent Bundle',price:'1599',category:"Houseplant Sets"},
    {img:"./images/low-maintenance-bundle.webp",name:'The Low Maintenance Bundle',price:'1299',category:"Houseplant Sets"},
    {img:"./images/sun-loving-succulent-bundle.webp",name:'The Sun-loving Succulent Bundle',price:'1499',category:"Houseplant Sets"},
    {img:"./images/4-inch-set-of-6-gardening-pots.webp",name:'The Sun-loving Succulent Bundle',price:'1499',category:"Flowerpot",subcategory:"Plastic Pots"},
    {img:"./images/small-white-stone-pebble.webp",name:'Pebble Planter',price:'599',category:"Flowerpot",subcategory:"Plastic Pots"},
    {img:"./images/7.5-inch-set-of-5-multi-1.webp",name:'Ugaoo Krish Self Watering Planter',price:'149',category:"Flowerpot",subcategory:"Plastic Pots"},
    {img:"./images/DSC_5784.webp",name:'Frosted Ceramic Pot',price:'599',category:"Flowerpot",subcategory:"Ceramic Pots"},
    {img:"./images/rose-red-apple-ceramic-pot.webp",name:'Apple Ceramic Pot',price:'799',category:"Flowerpot",subcategory:"Ceramic Pots"},
    {img:"./images/AImageWithPlant-2.webp",name:'Spiro Ceramic Pot',price:'399',category:"Flowerpot",subcategory:"Ceramic Pots"},
    {img:"./images/hanging-pyramids-planter.webp",name:'Hanging Pyramids Planter',price:'1799',category:"Flowerpot",subcategory:"Metallic Pots"},
    {img:"./images/white-nyx-planter.webp",name:'Nyx Planter',price:'349',category:"Flowerpot",subcategory:"Metallic Pots"},
    {img:"./images/dove-planter.webp",name:'Dove Planter',price:'1999',category:"Flowerpot",subcategory:"Metallic Pots"},
    {img:"./images/5-kg-garden-soil-mix.webp",name:'Garden Soil Mix',price:'349',category:"Soil"},
    {img:"./images/cocopeat-block.webp",name:'Cocopeat Block',price:'199',category:"Soil"},
    {img:"./images/cactus-succulent-potting-mix-5-kg.webp",name:'Cactus & Succulent Potting Mix - 5 kg',price:'499',category:"Soil"},
    {img:"./images/pot-o-mix-5-kg-potting-mix.webp",name:'Pot-O-Mix - 5 Kg Potting Mix',price:'399',category:"Soil"},
    {img:"./images/garden_red_soil.webp",name:'Garden Red Soil',price:'199',category:"Soil"},
    {img:"./images/5-kg-cow-manure.webp",name:'Cow Manure',price:'199',category:"Fertilizer"},
    {img:"./images/5-kg-vermicompost.webp",name:'Vermicompost',price:'199',category:"Fertilizer"},
    {img:"./images/organic-manure-1-kg.webp",name:'Organic Manure - 1 Kg',price:'199',category:"Fertilizer"},
    {img:"./images/perlite-250gm.webp",name:'Perlite - 250gm',price:'199',category:"Fertilizer"},
    {img:"./images/epsom-salt-1-kg.webp",name:'Epsom Salt - 1 kg',price:'199',category:"Fertilizer"},
    {img:"./images/plant-fertilizer-pellets-1-kg.webp",name:'Plant Fertilizer Pellets - 1 Kg',price:'299',category:"Fertilizer"},
    {img:"./images/organic-manure-1-kg.webp",name:'Organic Manure - 1 Kg',price:'199',category:"Fertilizer"},
    {img:"./images/Plant_Tonic.webp",name:'Seaweed Extract Fertilizer - Plant Tonic 250 ml',price:'299',category:"Fertilizer"},
    {img:"./images/Plant_Tonic.webp",name:'Seaweed Extract Fertilizer - Plant Tonic 100 ml',price:'199',category:"Fertilizer"},
]
let render=(data,start,till=6,type="notScroll")=>{
    if(type!=="scroll"){
        console.log(type)
        document.getElementById('products_container').innerHTML=''
        console.log("emptied html")
    }
    let end = start+till;
    for(start;start<end && start<data.length;start++){
        let el = data[start]
        let innerHTML =  `<div class="product_img_container">
                        <img style="background-color:white;border-radius:5px 5px 0 0"src="${el.img}" alt="">
                        <svg class="heart_svg" width="32px" height="32px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)matrix(-1, 0, 0, -1, 0, 0)" stroke="#486E00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z" fill="#486E00"></path></g></svg>
                        </div>
                        <div style="display:flex; flex-direction:row; justify-content:space-around;padding:5px 15px; align-items:center">
                        <div>
                        <p>${el.name}</p>
                        <p>₹${el.price}</p>
                        </div>
                        <svg width="45px" height="45px" viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="5.04" fill="#486E00" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z" stroke="#fafafa" stroke-width="1.5"></path> <path d="M15 11L16 17" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 11L8 17" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </div>
                        </div>`
        let div = document.createElement('div')
        div.className='product_container'
        div.onclick=()=>{
            localStorage.setItem('Current_Product',JSON.stringify(el))
            window.location.href='./Product_Detail_Page.html'
        }
        div.style.borderRadius="25px"
        div.innerHTML = innerHTML
        document.getElementById('products_container').append(div)
    }
return start
}
export default products
export {render}