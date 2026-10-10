require('dotenv').config();
const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

const initialData = [
  {
    "title": "Labneh vegetable",
    "titleAr": "لبنة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "1"
  },
  {
    "title": "Halloumi Cheese Pesto",
    "titleAr": "حلوم بالبيستو",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "2"
  },
  {
    "title": "Halloumi Cheese",
    "titleAr": "جبنة حلوم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "3"
  },
  {
    "title": "Scrambled Eggs",
    "titleAr": "بيض مخفوق",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "4"
  },
  {
    "title": "Labneh with Honey",
    "titleAr": "لبنة بالعسل",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "5"
  },
  {
    "title": "Smoked Turkey with Cheese",
    "titleAr": "ديك رومي مدخن مع الجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "6"
  },
  {
    "title": "Tuna with Vegetable",
    "titleAr": "تونة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "7"
  },
  {
    "title": "Feta cheese with Vegetables",
    "titleAr": "جبنة فيتا بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "8"
  },
  {
    "title": "Shakshuka with Cheese",
    "titleAr": "شكشوكة بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "9"
  },
  {
    "title": "Mozzarella cheese with Tomato",
    "titleAr": "جبنة موزاريلا مع الطماطم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "10"
  },
  {
    "title": "Labneh Pomegranate",
    "titleAr": "لبنة بالرمان",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "11"
  },
  {
    "title": "Tuna With yellow Corn",
    "titleAr": "تونة مع الذرة الصفراء",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "12"
  },
  {
    "title": "Boiled Eggs",
    "titleAr": "بيض مسلوق",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "13"
  },
  {
    "title": "Feta Cheese with Tomato and Olives",
    "titleAr": "جبنة فيتا مع الطماطم والزيتون",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "14"
  },
  {
    "title": "Mix Cheese",
    "titleAr": "مكس أجبان",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "15"
  },
  {
    "title": "Egg with Cheese",
    "titleAr": "بيض بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "16"
  },
  {
    "title": "Club Sandwich",
    "titleAr": "كلوب ساندويش",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "17"
  },
  {
    "title": "Halloumi cheese",
    "titleAr": "جبنة حلوم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "18"
  },
  {
    "title": "Zaatar Labneh",
    "titleAr": "لبنة بالزعتر",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "19"
  },
  {
    "title": "Labneh with Vegetable",
    "titleAr": "لبنة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "20"
  },
  {
    "title": "Smoked Turkey",
    "titleAr": "ديك رومي مدخن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "21"
  },
  {
    "title": "Turkey Cheese",
    "titleAr": "تركي بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "22"
  },
  {
    "title": "Egg with Vegetables",
    "titleAr": "بيض بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "23"
  },
  {
    "title": "Creamy Cheese",
    "titleAr": "جبنة سائلة",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "24"
  },
  {
    "title": "Halloumi Pesto",
    "titleAr": "حلوم بيستو",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور",
    "imageName": "25"
  },
  {
    "title": "Boiled eggs",
    "titleAr": "بيض مسلوق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "26"
  },
  {
    "title": "Labneh Zaatar with Vegetable",
    "titleAr": "لبنة وزعتر مع خضار",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "27"
  },
  {
    "title": "Egg with smoked Turkey",
    "titleAr": "بيض مع ديك رومي مدخن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "28"
  },
  {
    "title": "Eggs with Cheese",
    "titleAr": "بيض بالجبن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "29"
  },
  {
    "title": "Five Cheese",
    "titleAr": "أجبان الخمسة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "30"
  },
  {
    "title": "Eggs with Sumac",
    "titleAr": "بيض بالسماق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "31"
  },
  {
    "title": "Scramble Egg with Turkey",
    "titleAr": "بيض مخفوق مع تركي",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "32"
  },
  {
    "title": "Omlette Eggs",
    "titleAr": "أومليت بيض",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "33"
  },
  {
    "title": "Shakshuka Eggs",
    "titleAr": "بيض شكشوكة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "34"
  },
  {
    "title": "Eggs with Vegetables",
    "titleAr": "بيض بالخضار",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "35"
  },
  {
    "title": "Eggs with Spinach and Mushrooms",
    "titleAr": "بيض مع سبانخ وفطر",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "36"
  },
  {
    "title": "Eggs with Zaatar",
    "titleAr": "بيض بالزعتر",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "37"
  },
  {
    "title": "Ghulaba Eggs",
    "titleAr": "بيض قلابة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "38"
  },
  {
    "title": "Eggs with smoked Turkey",
    "titleAr": "بيض مع ديك رومي مدخن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "39"
  },
  {
    "title": "Chicken with yellow Corn",
    "titleAr": "دجاج مع الذرة الصفراء",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "40"
  },
  {
    "title": "Chicken Burrito",
    "titleAr": "بوريتو الدجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "41"
  },
  {
    "title": "Beef with Cheese",
    "titleAr": "لحم بالجبن",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "42"
  },
  {
    "title": "Meat Kabab",
    "titleAr": "كباب لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "43"
  },
  {
    "title": "Chicken Shawarma/",
    "titleAr": "شاورما دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "44"
  },
  {
    "title": "Chicken Club",
    "titleAr": "كلوب الدجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "45"
  },
  {
    "title": "Meat Shawarma",
    "titleAr": "شاورما لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "46"
  },
  {
    "title": "Mexican Chicken",
    "titleAr": "دجاج مكسيكي",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "47"
  },
  {
    "title": "Chicken Quesadia",
    "titleAr": "كاساديا دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "48"
  },
  {
    "title": "Beef Burger",
    "titleAr": "برجر لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "49"
  },
  {
    "title": "Shish Tawook",
    "titleAr": "شيش طاووق",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "50"
  },
  {
    "title": "BBQ Chicken",
    "titleAr": "دجاج باربيكيو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "51"
  },
  {
    "title": "Chicken Ranch",
    "titleAr": "دجاج رانش",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "52"
  },
  {
    "title": "Chicken Caeser",
    "titleAr": "دجاج سيزر",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "1"
  },
  {
    "title": "Francisco Chicken",
    "titleAr": "دجاج فرانسيسكو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "2"
  },
  {
    "title": "Chicken Burger",
    "titleAr": "برجر دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "3"
  },
  {
    "title": "Chicken Fajitas",
    "titleAr": "فاهيتا دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "4"
  },
  {
    "title": "Roast Beef",
    "titleAr": "روست بيف",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "5"
  },
  {
    "title": "Chicken Pesto",
    "titleAr": "دجاج بيستو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "6"
  },
  {
    "title": "Chicken Escalope",
    "titleAr": "إسكالوب دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "7"
  },
  {
    "title": "Philadelphia Meat",
    "titleAr": "فيلادلفيا لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "8"
  },
  {
    "title": "Chicken Sub",
    "titleAr": "دجاج صب",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "9"
  },
  {
    "title": "Chicken Shawarma",
    "titleAr": "شاورما دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "10"
  },
  {
    "title": "Swiss Meatballs with rice",
    "titleAr": "كرات اللحم السويسرية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "11"
  },
  {
    "title": "Lemon Fish with rice",
    "titleAr": "سمك بالليمون مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "12"
  },
  {
    "title": "Chicken Fricassee with rice",
    "titleAr": "دجاج فريكاسيه مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "13"
  },
  {
    "title": "Beef Tenders with Spanish Sauce with rice",
    "titleAr": "قطع لحم بصلصة إسبانية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "14"
  },
  {
    "title": "Breaded Fish with rice",
    "titleAr": "سمك مقلي بالبقسماط مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "15"
  },
  {
    "title": "Cheese Chicken with rice",
    "titleAr": "دجاج بالجبن مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "16"
  },
  {
    "title": "Stir-Fried beef with Peas with rice",
    "titleAr": "لحم مقلي مع بازلاء وأرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "17"
  },
  {
    "title": "Chicken Teriyaki with rice",
    "titleAr": "دجاج ترياكي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "18"
  },
  {
    "title": "Chicken Oregano with rice",
    "titleAr": "دجاج بالأوريجانو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "19"
  },
  {
    "title": "Beef Stew with rice",
    "titleAr": "يخنة لحم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "20"
  },
  {
    "title": "Penne Arabbiata",
    "titleAr": "بيني أرابياتا",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "21"
  },
  {
    "title": "Chicken Broccoli with rice",
    "titleAr": "دجاج بالبروكلي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "22"
  },
  {
    "title": "BBQ Beef with rice",
    "titleAr": "لحم باربيكيو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "23"
  },
  {
    "title": "Fish with Basil and Tomato with rice",
    "titleAr": "سمك بالريحان والطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "24"
  },
  {
    "title": "Cashew Chicken with rice",
    "titleAr": "دجاج بالكاجو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "25"
  },
  {
    "title": "Okra Stew with rice",
    "titleAr": "يخنة بامية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "26"
  },
  {
    "title": "Chicken Mushroom Sauce with rice",
    "titleAr": "دجاج بصلصة الفطر مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "27"
  },
  {
    "title": "Pink Pasta with Chicken",
    "titleAr": "باستا وردية بالدجاج",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "28"
  },
  {
    "title": "Kofta with Tomato sauce with rice",
    "titleAr": "كفتة بصلصة الطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "29"
  },
  {
    "title": "Pasta With Cheese",
    "titleAr": "باستا بالجبن",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "30"
  },
  {
    "title": "Bukhari Chicken with rice",
    "titleAr": "دجاج بخاري مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "31"
  },
  {
    "title": "Spaghetti Bolognese",
    "titleAr": "سباغيتي بولونيز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "32"
  },
  {
    "title": "Teriyaki Fish with rice",
    "titleAr": "سمك ترياكي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "33"
  },
  {
    "title": "Tandoori Chicken with rice",
    "titleAr": "دجاج تندوري مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "34"
  },
  {
    "title": "Meat Kabsa",
    "titleAr": "كبسة لحم",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "35"
  },
  {
    "title": "Fish with Thyme and Tomato with rice",
    "titleAr": "سمك بالزعتر والطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "36"
  },
  {
    "title": "Chicken Butter with rice",
    "titleAr": "دجاج بالزبدة مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "37"
  },
  {
    "title": "Kofta with Tahina with rice",
    "titleAr": "كفتة بالطحينة مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "38"
  },
  {
    "title": "Swiss Broccoli Pasta",
    "titleAr": "باستا البروكلي السويسرية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "39"
  },
  {
    "title": "Chicken Chasseur with rice",
    "titleAr": "دجاج شاسور مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "40"
  },
  {
    "title": "Beef Stroganoff with rice",
    "titleAr": "بيف ستروجانوف مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "41"
  },
  {
    "title": "Fish Biryani",
    "titleAr": "برياني سمك",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "42"
  },
  {
    "title": "Chicken Spinach with rice",
    "titleAr": "دجاج بالسبانخ مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "43"
  },
  {
    "title": "Fattouch salad",
    "titleAr": "سلطة فتوش",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "44"
  },
  {
    "title": "Quinoa Salad",
    "titleAr": "سلطة كينوا",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "45"
  },
  {
    "title": "Kale Salad",
    "titleAr": "سلطة كيل",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "46"
  },
  {
    "title": "Corn Pasta salad",
    "titleAr": "سلطة باستا بالذرة",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "47"
  },
  {
    "title": "Tabouleh with Beetroot salad",
    "titleAr": "سلطة تبولة بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "48"
  },
  {
    "title": "Potato Salad",
    "titleAr": "سلطة بطاطس",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "49"
  },
  {
    "title": "Greek Salad",
    "titleAr": "سلطة يونانية",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "50"
  },
  {
    "title": "Baba Ghanouj salad",
    "titleAr": "سلطة بابا غنوج",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "51"
  },
  {
    "title": "Apple Salad",
    "titleAr": "سلطة تفاح",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "52"
  },
  {
    "title": "Green Salad",
    "titleAr": "سلطة خضراء",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "1"
  },
  {
    "title": "Tomato with Basil and Cheese salad",
    "titleAr": "سلطة طماطم بالريحان والجبن",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "2"
  },
  {
    "title": "Pasta Salad",
    "titleAr": "سلطة مكرونة",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "3"
  },
  {
    "title": "Rocca with Beetroot salad",
    "titleAr": "سلطة جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "4"
  },
  {
    "title": "Caeser Salad",
    "titleAr": "سلطة سيزر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "5"
  },
  {
    "title": "Tikka with Quinoa salad",
    "titleAr": "سلطة تكا بالكينوا",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "6"
  },
  {
    "title": "Okra with Pomegranate Molasses",
    "titleAr": "بامية بدبس الرمان",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "7"
  },
  {
    "title": "Arugula with Pecan",
    "titleAr": "جرجير بالبيكان",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "8"
  },
  {
    "title": "Fattouch",
    "titleAr": "فتوش",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "9"
  },
  {
    "title": "Rocca Beetroot",
    "titleAr": "جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "10"
  },
  {
    "title": "Tabouleh with Beetroot",
    "titleAr": "تبولة بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "11"
  },
  {
    "title": "Rocca Beetroot salad",
    "titleAr": "سلطة جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "12"
  },
  {
    "title": "Arugula with Pecan salad",
    "titleAr": "سلطة جرجير بالبيكان",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "13"
  },
  {
    "title": "Corn Pasta",
    "titleAr": "باستا الذرة",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "14"
  },
  {
    "title": "Cauliflower salad",
    "titleAr": "سلطة زهرة",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "15"
  },
  {
    "title": "Sweet Potato Salad",
    "titleAr": "سلطة بطاطا حلوة",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "16"
  },
  {
    "title": "Chicken Shawarma2",
    "titleAr": "شاورما دجاج 2",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "17"
  },
  {
    "title": "Eggs with Sausage",
    "titleAr": "بيض مع نقانق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "18"
  },
  {
    "title": "Saffron Fish with White Rice",
    "titleAr": "سمك بالزعفران ورز أبيض",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "19"
  },
  {
    "title": "Fried Eggs",
    "titleAr": "بيض مقلي",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "20"
  },
  {
    "title": "Grilled Fish with Sayadiya Rice",
    "titleAr": "سمك مشوي مع رز صيادية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "21"
  },
  {
    "title": "Fish with Butter and Rice",
    "titleAr": "سمك بالزبدة مع رز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "22"
  },
  {
    "title": "Grouper with Tahini and White Rice",
    "titleAr": "هامور بالطحينية مع رز أبيض",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "23"
  },
  {
    "title": "Lemon Sauce",
    "titleAr": "صلصة الليمون",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "24"
  },
  {
    "title": "Peas with Meat and Vermicelli rice",
    "titleAr": "بازلاء باللحم مع رز بالشعيرية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "25"
  },
  {
    "title": "Grouper Tahini Sauce",
    "titleAr": "صلصة طحينية الهامور",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "26"
  },
  {
    "title": "Chicken Musakhan with Spices",
    "titleAr": "دجاج مسخن بالبهارات",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "27"
  },
  {
    "title": "Sweet and Sour Chicken with Fried Rice",
    "titleAr": "دجاج سويت اند ساور مع فرايد رايس",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "28"
  },
  {
    "title": "Sweet and Sour Fish with Fried Rice",
    "titleAr": "سمك سويت اند ساور مع فرايد رايس",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "29"
  },
  {
    "title": "Sweet and Sour Sauce",
    "titleAr": "صلصة سويت اند ساور",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "30"
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB for seeding...');
    
    // Clear existing data
    await FoodItem.deleteMany({});
    console.log('Cleared existing food items');
    
    // Insert new data
    await FoodItem.insertMany(initialData);
    console.log('Successfully seeded food items');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding DB:', error);
    process.exit(1);
  }
}

seedDB();
