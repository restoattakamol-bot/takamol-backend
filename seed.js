require('dotenv').config();
const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

const initialData = [
  // Breakfast Sandwich
  { title: "Labneh with Vegetables - Halloumi Pesto", titleAr: "لبنة مع خضار - حلوم بيستو", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Halloumi Cheese - Scrambled Eggs", titleAr: "جبنة حلوم - بيض اسكرامبل", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Chicken Mortadella - Turkey with Cheese", titleAr: "مرتديلا دجاج - تركي بالجبنة", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Tuna with Vegetables - Feta with Vegetables", titleAr: "تونة بالخضار - فيتا بالخضار", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Shakshuka with Cheese - Mozzarella with Tomato", titleAr: "شكشوكة بالجبن - موزاريلا بالطماطم", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Labneh & Pomegranate - Tuna with Corn", titleAr: "لبنة ورمان - تونة مع الذرة", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Boiled Eggs - Feta Cheese with Tomato & Olives", titleAr: "بيض مسلوق - جبنة فيتا بالطماطم والزيتون", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Mixed Cheese - Eggs with Cheese", titleAr: "مكس أجبان - بيض بالجبن", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Club Sandwich - Grilled Halloumi", titleAr: "كلوب ساندويش - حلوم مشوي", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Labneh & Zaatar - Turkey with Cheese", titleAr: "لبنة وزعتر - تركي بالجبنة", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Tuna & Corn - Eggs with Vegetables", titleAr: "تونة وذرة - بيض بالخضار", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },
  { title: "Club Sandwich - Cream Cheese", titleAr: "كلوب ساندويش - جبنة سائلة", category: "Breakfast Sandwich", categoryAr: "ساندويش فطور" },

  // Breakfast Meal
  { title: "Boiled Eggs", titleAr: "بيض مسلوق", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Labneh with Zaatar and Vegetables", titleAr: "لبنة بالزعتر مع خضار", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Scrambled Eggs with Turkey", titleAr: "بيض سكرامبل مع تركي", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Eggs with Cheese", titleAr: "بيض بالجبنة", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Five-Cheese Selection", titleAr: "أجبان الخمسة", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Eggs with Sumac", titleAr: "بيض بالسماق", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Omelette", titleAr: "بيض أومليت", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Shakshuka Eggs", titleAr: "بيض شكشوكة", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Eggs with Zaatar", titleAr: "بيض بالزعتر", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Eggs with Spinach & Mushroom", titleAr: "بيض مع سبانخ وفطر", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Scrambled Eggs", titleAr: "بيض سكرامبل", category: "Breakfast Meal", categoryAr: "وجبة فطور" },
  { title: "Eggs with Beef Bacon", titleAr: "بيض بيف بيكون", category: "Breakfast Meal", categoryAr: "وجبة فطور" },

  // Lunch Sandwich
  { title: "Chicken Shawarma - Chicken Club", titleAr: "شاورما دجاج - كلوب الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Ranch - Chicken Caesar", titleAr: "دجاج رانش - سيزر الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Pesto - Chicken Escalope", titleAr: "دجاج بيستو - إسكالوب الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Fajita - Roast Beef", titleAr: "فاهيتا دجاج - روست بيف", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Philly Beef - Chicken Sub", titleAr: "فيلاديلفيا لحم - دجاج صب", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Beef Shawarma - Mexican Chicken", titleAr: "شاورما لحم - دجاج مكسيكي", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Beef Kebab - Turkey with Cheese", titleAr: "كباب لحم - تركي بالجبنة", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Shish Tawook - BBQ Chicken", titleAr: "شيش طاووق - دجاج باربيكيو", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Francisco - Chicken Burger", titleAr: "دجاج فرانسيسكو - برجر الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Quesadillas - Beef Burger", titleAr: "دجاج كاساديا - برجر اللحم", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Ranch - Chicken Club", titleAr: "دجاج رانش - كلوب الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Shawarma - Chicken Caesar", titleAr: "شاورما دجاج - سيزر الدجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Chicken Kebab - Beef Kebab", titleAr: "كباب دجاج - كباب لحم", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },
  { title: "Club Sandwich - Grilled Chicken", titleAr: "كلوب ساندويش - دجاج مشوي", category: "Lunch Sandwich", categoryAr: "ساندويش غداء" },

  // Lunch Meal
  { title: "Beef Burger with Potato Wedges - Penne Pasta with Pink Sauce - Sweet & Sour Chicken", titleAr: "برجر لحم مع بطاطا ودجز - باستا ميني بيني - دجاج سويت اند ساور", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Fish with Butter & Lemon and Rice - Chicken Kabsa - Peas with Beef and Vermicelli Rice", titleAr: "سمك بالزبدة والليمون مع رز - دجاج كبسة - بامية باللحم مع رز أبيض", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Chicken Biryani - Pasta with Beef - Saffron Fish with White Rice", titleAr: "دجاج برياني - باستا باللحم مفروم - سمك بالزعفران ورز أبيض", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Chicken Tikka with Spiced Rice - Beef Stroganoff with White Rice - Fish with Tahini and White Rice", titleAr: "دجاج تكا مع رز بالبهارات - بيف إستروغانوف مع رز أبيض - سمك بالطحينية مع رز أبيض", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Beef Goulash with White Rice - Sweet & Sour Fish with Fried Rice - Chicken Pasta", titleAr: "بيف جولاش مع رز أبيض - سمك سويت اند ساور مع فرايد رايس - باستا بالدجاج", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Chicken in White Sauce with Rice - Okra with Beef and Vermicelli Rice - Chicken Mandi with Rice", titleAr: "دجاج بصوص أبيض مع رز - بامية باللحم مع رز بالشعيرية - دجاج مع رز مندي", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Grilled Fish with Sayadiyah Rice - Chicken Musakhan with Spices - Meatballs with Vermicelli Rice", titleAr: "سمك مشوي مع رز صيادية - دجاج مسخن بالبهارات - كرات اللحم مع رز بالشعيرية", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Alfredo Pasta - Chicken Maqluba - Mongolian Beef with Rice", titleAr: "مكرونة ألفريدو - مقلوبة بالدجاج - لحم منغوليان مع رز", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Fish with Pesto Sauce and Rice - Grilled Chicken with Vegetables - Kibbeh in Yogurt with Rice", titleAr: "سمك بصلصة بيستو مع رز - دجاج مشوي مع خضار - كبة بلبن مع رز", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Rice with Lamb - Fried Chicken with Rice - Beef Curry with Rice", titleAr: "رز مع لحم غنم - فرايد تشيكن مع رز - بيف كاري مع رز", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Shish Tawook with Potato Wedges - Pasta Napoletana - Kofta with Tahini and Rice", titleAr: "شيش طاووق مع بطاطا ودجز - باستا نابوليتانو - كفتة بالطحينية مع رز", category: "Lunch Meal", categoryAr: "وجبة غداء" },
  { title: "Chicken with Oven Baked Potatoes and Rice - Beef with Vegetables and Rice - Chicken with Bukhari Rice", titleAr: "دجاج مع بطاطس بالفرن ورز - لحم بالخضار مع رز - دجاج مع رز بخاري", category: "Lunch Meal", categoryAr: "وجبة غداء" },

  // Salads
  { title: "Apple salad", titleAr: "سلطة تفاح - سلطة خضراء", category: "Salads", categoryAr: "السلطات", imageName: "Apple salad" },
  { title: "Rocket, Beetroot & Cheese Salad - Caesar Salad", titleAr: "روكا شمندر وجبنة - سيزر سالاد", category: "Salads", categoryAr: "السلطات" },
  { title: "Tabbouleh with Pomegranate & Beetroot - Fattoush", titleAr: "تبولة مع الرمان والشمندر - فتوش", category: "Salads", categoryAr: "السلطات" },
  { title: "Baba Ghanouj salad", titleAr: "غريك سالاد - بابا غنوج", category: "Salads", categoryAr: "السلطات", imageName: "Baba Ghanouj salad" },
  { title: "Red Cabbage Salad - Quinoa Salad with Vegetables", titleAr: "ملفوف أحمر - سلطة الكينوا بالخضار", category: "Salads", categoryAr: "السلطات" },
  { title: "Freekeh Salad with Pumpkin - Beetroot & Sweet Potato Salad", titleAr: "سلطة الفريكة بالقرع - سلطة الشمندر والبطاطس الحلوة", category: "Salads", categoryAr: "السلطات" },
  { title: "Rocket with Pecan & Dates - Pasta Salad", titleAr: "جرجير مع بيكان وتمر - باستا سالاد", category: "Salads", categoryAr: "السلطات" },
  { title: "Rocket & Beetroot Salad - Cauliflower Tagine", titleAr: "روكا بالشمندر - زهرة بالطاجن", category: "Salads", categoryAr: "السلطات" },
  { title: "Crab Salad - Hummus with Grape Leaves", titleAr: "كراب سالاد - حمص ورق عنب", category: "Salads", categoryAr: "السلطات" },
  { title: "Taka with Quinoa - Okra with Pomegranate Molasses", titleAr: "التاكا مع الكينوا - بامية بدبس الرمان", category: "Salads", categoryAr: "السلطات" },
  { title: "Eggplant with Cauliflower & Rocket - Lentil Salad", titleAr: "باذنجان مع زهرة وجرجير - سلطة العدس", category: "Salads", categoryAr: "السلطات" },
  { title: "Chickpea Salad - Quinoa Tabbouleh", titleAr: "سلطة الحمص - تبولة كينوا", category: "Salads", categoryAr: "السلطات" },
  
  // New Items
  { title: "Beef Burger", titleAr: "برجر لحم", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Beef Burger" },
  { title: "Beef Stew with rice", titleAr: "يخنة لحم مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Beef Stew with rice" },
  { title: "Beef Stroganoff with rice", titleAr: "بيف ستروجانوف مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Beef Stroganoff with rice" },
  { title: "Boiled Eggs", titleAr: "بيض مسلوق", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Boiled Eggs" },
  { title: "Chicken Broccoli with rice", titleAr: "دجاج بالبروكلي مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Chicken Broccoli with rice" },
  { title: "Chicken Escalope", titleAr: "إسكالوب دجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Chicken Escalope" },
  { title: "Chicken Mushroom Sauce with rice", titleAr: "دجاج بصلصة الفطر مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Chicken Mushroom Sauce with rice" },
  { title: "Chicken Oregano with rice", titleAr: "دجاج بالأوريجانو مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Chicken Oregano with rice" },
  { title: "Chicken Shawarma", titleAr: "شاورما دجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Chicken Shawarma" },
  { title: "Chicken Sub", titleAr: "صب دجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Chicken Sub" },
  { title: "Chicken Teriyaki with rice", titleAr: "دجاج ترياكي مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Chicken Teriyaki with rice" },
  { title: "Eggs with Cheese", titleAr: "بيض بالجبنة", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Eggs with Cheese" },
  { title: "Eggs with Spinach and Mushrooms", titleAr: "بيض مع سبانخ وفطر", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Eggs with Spinach and Mushrooms" },
  { title: "Greek Salad", titleAr: "سلطة يونانية", category: "Salads", categoryAr: "السلطات", imageName: "Greek Salad" },
  { title: "Meat Kabab", titleAr: "كباب لحم", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Meat Kabab" },
  { title: "Meat Shawarma", titleAr: "شاورما لحم", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Meat Shawarma" },
  { title: "Okra Stew with rice", titleAr: "يخنة بامية مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Okra Stew with rice" },
  { title: "Okra with Pomegranate Molasses", titleAr: "بامية بدبس الرمان", category: "Salads", categoryAr: "السلطات", imageName: "Okra with Pomegranate Molasses" },
  { title: "Penne Arabbiata", titleAr: "بيني أرابياتا", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Penne Arabbiata" },
  { title: "Pink Pasta with Chicken", titleAr: "باستا وردية بالدجاج", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Pink Pasta with Chicken" },
  { title: "Spaghetti Bolognese", titleAr: "سباغيتي بولونيز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Spaghetti Bolognese" },
  { title: "Stir-Fried beef with Peas with rice", titleAr: "لحم مقلي مع بازلاء وأرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Stir-Fried beef with Peas with rice" },
  { title: "Chicken Shawarma2", titleAr: "شاورما دجاج 2", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Chicken Shawarma2" },
  { title: "Green Salad", titleAr: "سلطة خضراء", category: "Salads", categoryAr: "السلطات", imageName: "Green Salad" },
  { title: "Bukhari Chicken with rice", titleAr: "دجاج بخاري مع أرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Bukhari Chicken with rice" },
  { title: "Chicken Fajitas", titleAr: "فاهيتا دجاج", category: "Lunch Sandwich", categoryAr: "ساندويش غداء", imageName: "Chicken Fajitas" },
  { title: "Egg with smoked Turkey   Scramble Egg with Turkey", titleAr: "بيض مع ديك رومي مدخن - بيض مخفوق مع ديك رومي", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Egg with smoked Turkey   Scramble Egg with Turkey" },
  { title: "Fish Biryani", titleAr: "برياني سمك", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Fish Biryani" },
  { title: "Meat kabsa", titleAr: "كبسة لحم", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Meat kabsa" },
  { title: "Mix cheese", titleAr: "مكس أجبان", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Mix cheese" },
  { title: "Swiss Meatballs with rice", titleAr: "كرات اللحم السويسرية مع الأرز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Swiss Meatballs with rice" },
  { title: "Eggs with Sausage", titleAr: "بيض مع نقانق", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Eggs with Sausage" },
  { title: "Saffron Fish with White Rice", titleAr: "سمك بالزعفران ورز أبيض", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Saffron Fish with White Rice" },
  { title: "Fried Eggs", titleAr: "بيض مقلي", category: "Breakfast Meal", categoryAr: "وجبة فطور", imageName: "Fried Eggs" },
  { title: "Grilled Fish with Sayadiya Rice", titleAr: "سمك مشوي مع رز صيادية", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Grilled Fish with Sayadiya Rice" },
  { title: "Fish with Butter and Rice", titleAr: "سمك بالزبدة مع رز", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Fish with Butter and Rice" },
  { title: "Grouper with Tahini and White Rice", titleAr: "هامور بالطحينية مع رز أبيض", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Grouper with Tahini and White Rice" },
  { title: "Lemon Sauce", titleAr: "صلصة الليمون", category: "Salads", categoryAr: "السلطات", imageName: "Lemon Sauce" },
  { title: "Peas with Meat and Vermicelli rice", titleAr: "بازلاء باللحم مع رز بالشعيرية", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Peas with Meat and Vermicelli rice" },
  { title: "Grouper Tahini Sauce", titleAr: "صلصة طحينية الهامور", category: "Salads", categoryAr: "السلطات", imageName: "Grouper Tahini Sauce" },
  { title: "Chicken Musakhan with Spices", titleAr: "دجاج مسخن بالبهارات", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Chicken Musakhan with Spices" },
  { title: "Sweet and Sour Chicken with Fried Rice", titleAr: "دجاج سويت اند ساور مع فرايد رايس", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Sweet and Sour Chicken with Fried Rice" },
  { title: "Sweet and Sour Fish with Fried Rice", titleAr: "سمك سويت اند ساور مع فرايد رايس", category: "Lunch Meal", categoryAr: "وجبة غداء", imageName: "Sweet and Sour Fish with Fried Rice" },
  { title: "Sweet and Sour Sauce", titleAr: "صلصة سويت اند ساور", category: "Salads", categoryAr: "السلطات", imageName: "Sweet and Sour Sauce" }
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
