const mongoose = require("mongoose")
const Food = require("./models/food.js")
main().then(() => { console.log("database connected"); })

async function main() {
    mongoose.connect("mongodb://localhost:27017/kkb_food_flow")
}
const sampledata = [
    {
        name: "Aloo Paratha",
        description: "Stuffed potato flatbread served with butter",
        price: 150,
        category: "breakfast"
    },
    {
        name: "Poha",
        description: "Flattened rice cooked with spices and peanuts",
        price: 120,
        category: "breakfast"
    },
    {
        name: "Idli Sambar",
        description: "Steamed rice cakes with lentil soup",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Masala Dosa",
        description: "Crispy rice pancake filled with spiced potatoes",
        price: 160,
        category: "breakfast"
    },
    {
        name: "Upma",
        description: "Savory semolina porridge with vegetables",
        price: 130,
        category: "breakfast"
    },
    {
        name: "Dhokla",
        description: "Steamed gram flour cakes",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Medu Vada",
        description: "Fried lentil donuts served with chutney",
        price: 150,
        category: "breakfast"
    },
    {
        name: "Chole Bhature",
        description: "Spicy chickpea curry with deep-fried bread",
        price: 180,
        category: "breakfast"
    },
    {
        name: "Paneer Paratha",
        description: "Flatbread stuffed with cottage cheese",
        price: 170,
        category: "breakfast"
    },
    {
        name: "Puri Bhaji",
        description: "Deep-fried bread with spiced potato curry",
        price: 160,
        category: "breakfast"
    },
    {
        name: "Besan Chilla",
        description: "Gram flour pancake with spices",
        price: 130,
        category: "breakfast"
    },
    {
        name: "Thepla",
        description: "Gujarati spiced flatbread",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Vegetable Sandwich",
        description: "Grilled sandwich with mixed vegetables",
        price: 150,
        category: "breakfast"
    },
    {
        name: "Moong Dal Chilla",
        description: "Savory lentil pancake",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Sabudana Khichdi",
        description: "Tapioca pearls cooked with peanuts and spices",
        price: 150,
        category: "breakfast"
    },
    {
        name: "Pesarattu",
        description: "Green gram dosa",
        price: 160,
        category: "breakfast"
    },
    {
        name: "Oats Upma",
        description: "Oats cooked with vegetables and spices",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Rava Idli",
        description: "Semolina-based steamed idli",
        price: 140,
        category: "breakfast"
    },
    {
        name: "Vegetable Poha Cutlet",
        description: "Crispy flattened rice cutlets",
        price: 130,
        category: "breakfast"
    },
    {
        name: "Carrot Halwa",
        description: "Sweet grated carrot pudding",
        price: 150,
        category: "breakfast"
    },
    //----------------------------------------------------------------------------------------------------------------------
    // Lunch
    {
        name: "Veg Pulao",
        description: "Fragrant rice cooked with mixed vegetables and spices",
        price: 200,
        category: "lunch"
    },
    {
        name: "Dal Fry",
        description: "Lentils tempered with ghee and spices",
        price: 180,
        category: "lunch"
    },
    {
        name: "Mix Veg Curry",
        description: "Assorted vegetables cooked in rich gravy",
        price: 210,
        category: "lunch"
    },
    {
        name: "Methi Thepla",
        description: "Gujarati fenugreek flatbread",
        price: 140,
        category: "lunch"
    },
    {
        name: "Jeera Aloo",
        description: "Potatoes stir-fried with cumin",
        price: 150,
        category: "lunch"
    },
    {
        name: "Dal Makhani",
        description: "Black lentils slow-cooked with butter and cream",
        price: 260,
        category: "lunch"
    },
    {
        name: "Kadhi Chawal",
        description: "Gram flour curry with steamed rice",
        price: 190,
        category: "lunch"
    },
    {
        name: "Bhindi Masala",
        description: "Spicy okra stir-fry",
        price: 200,
        category: "lunch"
    },
    {
        name: "Gatte Ki Sabzi",
        description: "Gram flour dumplings in yogurt gravy",
        price: 220,
        category: "lunch"
    },
    {
        name: "Chana Dal",
        description: "Split chickpeas cooked with onions and tomatoes",
        price: 180,
        category: "lunch"
    },
    {
        name: "Naan",
        description: "Soft leavened flatbread",
        price: 100,
        category: "lunch"
    },
    {
        name: "Tandoori Roti",
        description: "Clay oven-baked whole wheat bread",
        price: 90,
        category: "lunch"
    },
    {
        name: "Butter Kulcha",
        description: "Soft flatbread with butter",
        price: 110,
        category: "lunch"
    },
    {
        name: "Missi Roti",
        description: "Spiced gram flour flatbread",
        price: 95,
        category: "lunch"
    },
    {
        name: "Roomali Roti",
        description: "Thin handkerchief-style flatbread",
        price: 120,
        category: "lunch"
    },
    {
        name: "Baingan Bharta",
        description: "Smoky mashed eggplant cooked with spices",
        price: 190,
        category: "lunch"
    },
    {
        name: "Rajma Chawal",
        description: "Kidney beans curry served with rice",
        price: 230,
        category: "lunch"
    },
    {
        name: "Matar Paneer",
        description: "Peas and cottage cheese cooked in tomato gravy",
        price: 250,
        category: "lunch"
    },
    {
        name: "Aloo Gobi",
        description: "Potato and cauliflower curry",
        price: 200,
        category: "lunch"
    },
    {
        name: "Vegetable Biryani",
        description: "Fragrant rice dish cooked with vegetables and spices",
        price: 280,
        category: "lunch"
    },
    //----------------------------------------------------------------------------------------------------------------------
    // Dinner
    {
        name: "Shahi Paneer",
        description: "Rich and creamy paneer curry",
        price: 270,
        category: "dinner"
    },
    {
        name: "Palak Paneer",
        description: "Spinach and cottage cheese curry",
        price: 260,
        category: "dinner"
    },
    {
        name: "Paneer Butter Masala",
        description: "Paneer cooked in buttery tomato gravy",
        price: 270,
        category: "dinner"
    },
    {
        name: "Kofta Curry",
        description: "Deep-fried vegetable balls in rich gravy",
        price: 250,
        category: "dinner"
    },
    {
        name: "Dal Tadka",
        description: "Lentils tempered with garlic and ghee",
        price: 200,
        category: "dinner"
    },
    {
        name: "Malai Kofta",
        description: "Paneer and potato dumplings in creamy sauce",
        price: 280,
        category: "dinner"
    },
    {
        name: "Kadhi Pakora",
        description: "Gram flour dumplings in yogurt curry",
        price: 190,
        category: "dinner"
    },
    {
        name: "Dum Aloo",
        description: "Baby potatoes cooked in rich gravy",
        price: 230,
        category: "dinner"
    },
    {
        name: "Mushroom Masala",
        description: "Mushrooms cooked in onion-tomato gravy",
        price: 240,
        category: "dinner"
    },
    {
        name: "Veg Korma",
        description: "Mixed vegetables cooked in creamy sauce",
        price: 250,
        category: "dinner"
    },
    {
        name: "Aloo Matar",
        description: "Potato and green peas cooked in tomato-based curry",
        price: 200,
        category: "dinner"
    },
    {
        name: "Baingan Bharta",
        description: "Smoky mashed brinjal cooked with spices",
        price: 210,
        category: "dinner"
    },
    {
        name: "Chole Masala",
        description: "Spiced chickpea curry",
        price: 220,
        category: "dinner"
    },
    {
        name: "Rajma Masala",
        description: "Red kidney beans cooked in tomato gravy",
        price: 230,
        category: "dinner"
    },
    {
        name: "Gobi Masala",
        description: "Cauliflower cooked in flavorful spices",
        price: 220,
        category: "dinner"
    },
    {
        name: "Methi Malai Matar",
        description: "Fenugreek leaves, green peas, and cream-based curry",
        price: 250,
        category: "dinner"
    },
    {
        name: "Bhindi Masala",
        description: "Stir-fried okra with Indian spices",
        price: 210,
        category: "dinner"
    },
    {
        name: "Veg Jaipuri",
        description: "Mixed vegetables in a royal spicy gravy",
        price: 270,
        category: "dinner"
    },
    {
        name: "Kaju Curry",
        description: "Cashew nut curry cooked in a rich sauce",
        price: 290,
        category: "dinner"
    },
    {
        name: "Corn Capsicum Masala",
        description: "Sweet corn and capsicum cooked in spicy gravy",
        price: 240,
        category: "dinner"
    },
    {
        name: "Lauki Chana Dal",
        description: "Bottle gourd cooked with Bengal gram lentils",
        price: 200,
        category: "dinner"
    },
    {
        name: "Tinda Masala",
        description: "Apple gourd cooked with aromatic spices",
        price: 200,
        category: "dinner"
    },
    {
        name: "Paneer Tikka Masala",
        description: "Grilled paneer in spicy tomato gravy",
        price: 280,
        category: "dinner"
    },
    {
        name: "Navratan Korma",
        description: "Nine-ingredient vegetable curry in creamy gravy",
        price: 290,
        category: "dinner"
    },
    {
        name: "Sarson Da Saag",
        description: "Punjabi-style mustard greens curry",
        price: 250,
        category: "dinner"
    },

    // Indian Breads
    {
        name: "Tandoori Roti",
        description: "Traditional whole wheat Indian bread",
        price: 50,
        category: "dinner"
    },
    {
        name: "Butter Naan",
        description: "Soft and fluffy leavened bread with butter",
        price: 70,
        category: "dinner"
    },
    {
        name: "Garlic Naan",
        description: "Leavened bread infused with garlic",
        price: 80,
        category: "dinner"
    },
    {
        name: "Stuffed Kulcha",
        description: "Soft bread stuffed with spiced potatoes",
        price: 90,
        category: "dinner"
    },
    {
        name: "Lachha Paratha",
        description: "Layered crispy whole wheat flatbread",
        price: 120,
        category: "dinner"
    },
    // Drinks & Desserts
    {
        name: "Mango Lassi",
        description: "Sweet yogurt-based mango drink",
        price: 120,
        category: "drinks"
    },
    {
        name: "Masala Chai",
        description: "Indian spiced tea with milk",
        price: 60,
        category: "drinks"
    },
    {
        name: "Badam Milk",
        description: "Almond-flavored warm milk",
        price: 130,
        category: "drinks"
    },
    {
        name: "Thandai",
        description: "Cool saffron and nuts-infused milk drink",
        price: 140,
        category: "drinks"
    },
    {
        name: "Jal Jeera",
        description: "Refreshing cumin and mint-flavored drink",
        price: 90,
        category: "drinks"
    },
    {
        name: "Rose Sherbet",
        description: "Sweet and aromatic rose-flavored drink",
        price: 100,
        category: "drinks"
    },
    {
        name: "Coconut Water",
        description: "Naturally refreshing coconut drink",
        price: 80,
        category: "drinks"
    },
    {
        name: "Aam Panna",
        description: "Raw mango cooler with mint and spices",
        price: 110,
        category: "drinks"
    },
    {
        name: "Nimbu Pani",
        description: "Classic Indian lemonade",
        price: 70,
        category: "drinks"
    },
    {
        name: "Filter Coffee",
        description: "South Indian style strong coffee",
        price: 90,
        category: "drinks"
    },
    {
        name: "Rasmalai",
        description: "Soft paneer balls in saffron milk",
        price: 180,
        category: "drinks"
    },
    {
        name: "Gulab Jamun",
        description: "Deep-fried dumplings soaked in sugar syrup",
        price: 150,
        category: "drinks"
    },
    {
        name: "Jalebi",
        description: "Crispy deep-fried spirals soaked in syrup",
        price: 140,
        category: "drinks"
    },
    {
        name: "Kaju Katli",
        description: "Rich cashew fudge",
        price: 200,
        category: "drinks"
    },
    {
        name: "Motichoor Ladoo",
        description: "Sweet gram flour balls with ghee and sugar",
        price: 160,
        category: "drinks"
    },
    {
        name: "Rasgulla",
        description: "Soft and spongy paneer balls in sugar syrup",
        price: 170,
        category: "drinks"
    },
    {
        name: "Malpua",
        description: "Sweet Indian pancakes soaked in syrup",
        price: 190,
        category: "drinks"
    },
    {
        name: "Basundi",
        description: "Thickened sweetened milk with dry fruits",
        price: 210,
        category: "drinks"
    },
    {
        name: "Srikhand",
        description: "Sweetened strained yogurt flavored with saffron",
        price: 180,
        category: "drinks"
    },
    {
        name: "Peda",
        description: "Milk-based soft sweet flavored with cardamom",
        price: 160,
        category: "drinks"
    }
];

const initdb = async () => {
    await Food.deleteMany({});
    await Food.insertMany(sampledata)
    console.log("added succes");

}
initdb()