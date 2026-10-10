require('dotenv').config();
const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

const initialData = [
  {
    "title": "Labneh vegetable",
    "titleAr": "لبنة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Halloumi Cheese Pesto",
    "titleAr": "حلوم بالبيستو",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Halloumi Cheese",
    "titleAr": "جبنة حلوم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Scrambled Eggs",
    "titleAr": "بيض مخفوق",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Labneh with Honey",
    "titleAr": "لبنة بالعسل",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Smoked Turkey with Cheese",
    "titleAr": "ديك رومي مدخن مع الجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Tuna with Vegetable",
    "titleAr": "تونة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Feta cheese with Vegetables",
    "titleAr": "جبنة فيتا بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Shakshuka with Cheese",
    "titleAr": "شكشوكة بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Mozzarella cheese with Tomato",
    "titleAr": "جبنة موزاريلا مع الطماطم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Labneh Pomegranate",
    "titleAr": "لبنة بالرمان",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Tuna With yellow Corn",
    "titleAr": "تونة مع الذرة الصفراء",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Boiled Eggs",
    "titleAr": "بيض مسلوق",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Feta Cheese with Tomato and Olives",
    "titleAr": "جبنة فيتا مع الطماطم والزيتون",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Mix Cheese",
    "titleAr": "مكس أجبان",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Egg with Cheese",
    "titleAr": "بيض بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Club Sandwich",
    "titleAr": "كلوب ساندويش",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Halloumi cheese",
    "titleAr": "جبنة حلوم",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Zaatar Labneh",
    "titleAr": "لبنة بالزعتر",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Labneh with Vegetable",
    "titleAr": "لبنة بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Smoked Turkey",
    "titleAr": "ديك رومي مدخن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Turkey Cheese",
    "titleAr": "تركي بالجبن",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Egg with Vegetables",
    "titleAr": "بيض بالخضار",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Creamy Cheese",
    "titleAr": "جبنة سائلة",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Halloumi Pesto",
    "titleAr": "حلوم بيستو",
    "category": "Breakfast Sandwich",
    "categoryAr": "ساندويش فطور"
  },
  {
    "title": "Boiled eggs",
    "titleAr": "بيض مسلوق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Labneh Zaatar with Vegetable",
    "titleAr": "لبنة وزعتر مع خضار",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Egg with smoked Turkey",
    "titleAr": "بيض مع ديك رومي مدخن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with Cheese",
    "titleAr": "بيض بالجبن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Five Cheese",
    "titleAr": "أجبان الخمسة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with Sumac",
    "titleAr": "بيض بالسماق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Scramble Egg with Turkey",
    "titleAr": "بيض مخفوق مع تركي",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Omlette Eggs",
    "titleAr": "أومليت بيض",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Shakshuka Eggs",
    "titleAr": "بيض شكشوكة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with Vegetables",
    "titleAr": "بيض بالخضار",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with Spinach and Mushrooms",
    "titleAr": "بيض مع سبانخ وفطر",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with Zaatar",
    "titleAr": "بيض بالزعتر",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Ghulaba Eggs",
    "titleAr": "بيض قلابة",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Eggs with smoked Turkey",
    "titleAr": "بيض مع ديك رومي مدخن",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور"
  },
  {
    "title": "Chicken with yellow Corn",
    "titleAr": "دجاج مع الذرة الصفراء",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Burrito",
    "titleAr": "بوريتو الدجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Beef with Cheese",
    "titleAr": "لحم بالجبن",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Meat Kabab",
    "titleAr": "كباب لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Shawarma/",
    "titleAr": "شاورما دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Club",
    "titleAr": "كلوب الدجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Meat Shawarma",
    "titleAr": "شاورما لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Mexican Chicken",
    "titleAr": "دجاج مكسيكي",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Quesadia",
    "titleAr": "كاساديا دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Beef Burger",
    "titleAr": "برجر لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Shish Tawook",
    "titleAr": "شيش طاووق",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "BBQ Chicken",
    "titleAr": "دجاج باربيكيو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Ranch",
    "titleAr": "دجاج رانش",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Caeser",
    "titleAr": "دجاج سيزر",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Francisco Chicken",
    "titleAr": "دجاج فرانسيسكو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Burger",
    "titleAr": "برجر دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Fajitas",
    "titleAr": "فاهيتا دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Roast Beef",
    "titleAr": "روست بيف",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Pesto",
    "titleAr": "دجاج بيستو",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Escalope",
    "titleAr": "إسكالوب دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Philadelphia Meat",
    "titleAr": "فيلادلفيا لحم",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Sub",
    "titleAr": "دجاج صب",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Chicken Shawarma",
    "titleAr": "شاورما دجاج",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء"
  },
  {
    "title": "Swiss Meatballs with rice",
    "titleAr": "كرات اللحم السويسرية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Lemon Fish with rice",
    "titleAr": "سمك بالليمون مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Fricassee with rice",
    "titleAr": "دجاج فريكاسيه مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Beef Tenders with Spanish Sauce with rice",
    "titleAr": "قطع لحم بصلصة إسبانية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Breaded Fish with rice",
    "titleAr": "سمك مقلي بالبقسماط مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Cheese Chicken with rice",
    "titleAr": "دجاج بالجبن مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Stir-Fried beef with Peas with rice",
    "titleAr": "لحم مقلي مع بازلاء وأرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Teriyaki with rice",
    "titleAr": "دجاج ترياكي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Oregano with rice",
    "titleAr": "دجاج بالأوريجانو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Beef Stew with rice",
    "titleAr": "يخنة لحم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Penne Arabbiata",
    "titleAr": "بيني أرابياتا",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Broccoli with rice",
    "titleAr": "دجاج بالبروكلي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "BBQ Beef with rice",
    "titleAr": "لحم باربيكيو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Fish with Basil and Tomato with rice",
    "titleAr": "سمك بالريحان والطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Cashew Chicken with rice",
    "titleAr": "دجاج بالكاجو مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Okra Stew with rice",
    "titleAr": "يخنة بامية مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Mushroom Sauce with rice",
    "titleAr": "دجاج بصلصة الفطر مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Pink Pasta with Chicken",
    "titleAr": "باستا وردية بالدجاج",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Kofta with Tomato sauce with rice",
    "titleAr": "كفتة بصلصة الطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Pasta With Cheese",
    "titleAr": "باستا بالجبن",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Bukhari Chicken with rice",
    "titleAr": "دجاج بخاري مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Spaghetti Bolognese",
    "titleAr": "سباغيتي بولونيز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Teriyaki Fish with rice",
    "titleAr": "سمك ترياكي مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Tandoori Chicken with rice",
    "titleAr": "دجاج تندوري مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Meat Kabsa",
    "titleAr": "كبسة لحم",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Fish with Thyme and Tomato with rice",
    "titleAr": "سمك بالزعتر والطماطم مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Butter with rice",
    "titleAr": "دجاج بالزبدة مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Kofta with Tahina with rice",
    "titleAr": "كفتة بالطحينة مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Swiss Broccoli Pasta",
    "titleAr": "باستا البروكلي السويسرية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Chasseur with rice",
    "titleAr": "دجاج شاسور مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Beef Stroganoff with rice",
    "titleAr": "بيف ستروجانوف مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Fish Biryani",
    "titleAr": "برياني سمك",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Chicken Spinach with rice",
    "titleAr": "دجاج بالسبانخ مع أرز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء"
  },
  {
    "title": "Fattouch salad",
    "titleAr": "سلطة فتوش",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Quinoa Salad",
    "titleAr": "سلطة كينوا",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Kale Salad",
    "titleAr": "سلطة كيل",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Corn Pasta salad",
    "titleAr": "سلطة باستا بالذرة",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Tabouleh with Beetroot salad",
    "titleAr": "سلطة تبولة بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Potato Salad",
    "titleAr": "سلطة بطاطس",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Greek Salad",
    "titleAr": "سلطة يونانية",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Baba Ghanouj salad",
    "titleAr": "سلطة بابا غنوج",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Apple Salad",
    "titleAr": "سلطة تفاح",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Green Salad",
    "titleAr": "سلطة خضراء",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Tomato with Basil and Cheese salad",
    "titleAr": "سلطة طماطم بالريحان والجبن",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Pasta Salad",
    "titleAr": "سلطة مكرونة",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Rocca with Beetroot salad",
    "titleAr": "سلطة جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Caeser Salad",
    "titleAr": "سلطة سيزر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Tikka with Quinoa salad",
    "titleAr": "سلطة تكا بالكينوا",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Okra with Pomegranate Molasses",
    "titleAr": "بامية بدبس الرمان",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Arugula with Pecan",
    "titleAr": "جرجير بالبيكان",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Fattouch",
    "titleAr": "فتوش",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Rocca Beetroot",
    "titleAr": "جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Tabouleh with Beetroot",
    "titleAr": "تبولة بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Rocca Beetroot salad",
    "titleAr": "سلطة جرجير بالشمندر",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Arugula with Pecan salad",
    "titleAr": "سلطة جرجير بالبيكان",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Corn Pasta",
    "titleAr": "باستا الذرة",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Cauliflower salad",
    "titleAr": "سلطة زهرة",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Sweet Potato Salad",
    "titleAr": "سلطة بطاطا حلوة",
    "category": "Salads",
    "categoryAr": "السلطات"
  },
  {
    "title": "Chicken Shawarma2",
    "titleAr": "شاورما دجاج 2",
    "category": "Lunch Sandwich",
    "categoryAr": "ساندويش غداء",
    "imageName": "Chicken Shawarma2"
  },
  {
    "title": "Eggs with Sausage",
    "titleAr": "بيض مع نقانق",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "Eggs with Sausage"
  },
  {
    "title": "Saffron Fish with White Rice",
    "titleAr": "سمك بالزعفران ورز أبيض",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Saffron Fish with White Rice"
  },
  {
    "title": "Fried Eggs",
    "titleAr": "بيض مقلي",
    "category": "Breakfast Meal",
    "categoryAr": "وجبة فطور",
    "imageName": "Fried Eggs"
  },
  {
    "title": "Grilled Fish with Sayadiya Rice",
    "titleAr": "سمك مشوي مع رز صيادية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Grilled Fish with Sayadiya Rice"
  },
  {
    "title": "Fish with Butter and Rice",
    "titleAr": "سمك بالزبدة مع رز",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Fish with Butter and Rice"
  },
  {
    "title": "Grouper with Tahini and White Rice",
    "titleAr": "هامور بالطحينية مع رز أبيض",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Grouper with Tahini and White Rice"
  },
  {
    "title": "Lemon Sauce",
    "titleAr": "صلصة الليمون",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "Lemon Sauce"
  },
  {
    "title": "Peas with Meat and Vermicelli rice",
    "titleAr": "بازلاء باللحم مع رز بالشعيرية",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Peas with Meat and Vermicelli rice"
  },
  {
    "title": "Grouper Tahini Sauce",
    "titleAr": "صلصة طحينية الهامور",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "Grouper Tahini Sauce"
  },
  {
    "title": "Chicken Musakhan with Spices",
    "titleAr": "دجاج مسخن بالبهارات",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Chicken Musakhan with Spices"
  },
  {
    "title": "Sweet and Sour Chicken with Fried Rice",
    "titleAr": "دجاج سويت اند ساور مع فرايد رايس",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Sweet and Sour Chicken with Fried Rice"
  },
  {
    "title": "Sweet and Sour Fish with Fried Rice",
    "titleAr": "سمك سويت اند ساور مع فرايد رايس",
    "category": "Lunch Meal",
    "categoryAr": "وجبة غداء",
    "imageName": "Sweet and Sour Fish with Fried Rice"
  },
  {
    "title": "Sweet and Sour Sauce",
    "titleAr": "صلصة سويت اند ساور",
    "category": "Salads",
    "categoryAr": "السلطات",
    "imageName": "Sweet and Sour Sauce"
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
