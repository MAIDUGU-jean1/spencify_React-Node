// productsContent.js

const products = [
  // --- ELECTRONICS (1-10) ---
  {
    id: 1,
    title: "Quantum Sound Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    description: "Noise-canceling over-ear headphones with 40-hour battery life and high-fidelity audio."
  },
  {
    id: 2,
    title: "PixelView 27-inch Monitor",
    price: 349.50,
    category: "Electronics",
    description: "4K UHD frameless monitor with HDR10 support and dual HDMI ports."
  },
  {
    id: 3,
    title: "SwiftType Mechanical Keyboard",
    price: 89.00,
    category: "Electronics",
    description: "RGB backlit mechanical keyboard with tactile blue switches and programmable macros."
  },
  {
    id: 4,
    title: "OpticFlow Wireless Mouse",
    price: 45.99,
    category: "Electronics",
    description: "Ergonomic 16000 DPI optical mouse with 6 programmable buttons."
  },
  {
    id: 5,
    title: "SonicBoom Portable Speaker",
    price: 59.99,
    category: "Electronics",
    description: "IPX7 waterproof Bluetooth speaker with deep bass and 360-degree sound."
  },
  {
    id: 6,
    title: "StreamMaster 1080p Webcam",
    price: 75.00,
    category: "Electronics",
    description: "Full HD webcam with built-in dual microphones and low-light correction."
  },
  {
    id: 7,
    title: "PowerGrid 20k Power Bank",
    price: 39.99,
    category: "Electronics",
    description: "20,000mAh portable charger with USB-C Power Delivery."
  },
  {
    id: 8,
    title: "SmartHub Home Assistant",
    price: 110.00,
    category: "Electronics",
    description: "Voice-controlled smart speaker with integrated Zigbee home hub."
  },
  {
    id: 9,
    title: "VividStream TV Stick",
    price: 49.99,
    category: "Electronics",
    description: "4K streaming device with voice remote and support for all major platforms."
  },
  {
    id: 10,
    title: "LiteScan Document Scanner",
    price: 150.00,
    category: "Electronics",
    description: "Portable high-speed document scanner with cloud synchronization."
  },

  // --- ACTIVEWEAR (11-20) ---
  {
    id: 11,
    title: "AeroDry Running Shirt",
    price: 28.00,
    category: "Activewear",
    description: "Moisture-wicking, breathable fabric designed for high-intensity training."
  },
  {
    id: 12,
    title: "FlexFit Yoga Leggings",
    price: 42.50,
    category: "Activewear",
    description: "High-waisted, squat-proof leggings with a four-way stretch."
  },
  {
    id: 13,
    title: "UltraStride Sneakers",
    price: 115.00,
    category: "Activewear",
    description: "Lightweight running shoes with responsive foam cushioning."
  },
  {
    id: 14,
    title: "HydroFlask 32oz Bottle",
    price: 34.99,
    category: "Activewear",
    description: "Vacuum insulated stainless steel water bottle with straw lid."
  },
  {
    id: 15,
    title: "PeakPerformance Windbreaker",
    price: 65.00,
    category: "Activewear",
    description: "Water-resistant lightweight jacket for outdoor trail running."
  },
  {
    id: 16,
    title: "CoreStrength Kettlebell (15lb)",
    price: 40.00,
    category: "Activewear",
    description: "Vinyl-coated cast iron kettlebell for home strength training."
  },
  {
    id: 17,
    title: "Z-Grip Yoga Mat",
    price: 55.00,
    category: "Activewear",
    description: "6mm non-slip eco-friendly mat for yoga and pilates."
  },
  {
    id: 18,
    title: "RapidJump Speed Rope",
    price: 15.99,
    category: "Activewear",
    description: "Adjustable cable jump rope with ball bearings for smooth rotation."
  },
  {
    id: 19,
    title: "MuscleRelief Foam Roller",
    price: 22.50,
    category: "Activewear",
    description: "High-density foam roller for deep tissue massage and recovery."
  },
  {
    id: 20,
    title: "GripMaster Lifting Gloves",
    price: 19.99,
    category: "Activewear",
    description: "Padded gym gloves with wrist support for heavy lifting."
  },

  // --- HOME OFFICE (21-30) ---
  {
    id: 21,
    title: "ErgoComfort Desk Chair",
    price: 289.00,
    category: "Home Office",
    description: "Ergonomic mesh chair with adjustable lumbar support and armrests."
  },
  {
    id: 22,
    title: "Bamboo Rising Desk",
    price: 450.00,
    category: "Home Office",
    description: "Electric sit-stand desk with a solid bamboo top and dual motors."
  },
  {
    id: 23,
    title: "Lumina Desk Lamp",
    price: 45.00,
    category: "Home Office",
    description: "LED desk lamp with adjustable color temperature and wireless charging base."
  },
  {
    id: 24,
    title: "ClearMind Desk Organizer",
    price: 24.99,
    category: "Home Office",
    description: "Minimalist acrylic organizer for pens, notebooks, and accessories."
  },
  {
    id: 25,
    title: "FocusPad XL Mouse Mat",
    price: 18.00,
    category: "Home Office",
    description: "Large desk pad with a smooth micro-weave surface and non-slip base."
  },
  {
    id: 26,
    title: "NotePro Leather Journal",
    price: 32.00,
    category: "Home Office",
    description: "Refillable A5 leather journal with premium 120gsm paper."
  },
  {
    id: 27,
    title: "Titan Laptop Stand",
    price: 39.00,
    category: "Home Office",
    description: "Aluminum adjustable laptop riser for improved posture."
  },
  {
    id: 28,
    title: "SilentFan Air Purifier",
    price: 89.99,
    category: "Home Office",
    description: "HEPA air purifier designed for small offices and bedrooms."
  },
  {
    id: 29,
    title: "CableTidy Management Kit",
    price: 15.50,
    category: "Home Office",
    description: "Set of 50 cable clips and sleeves to organize your workspace."
  },
  {
    id: 30,
    title: "EchoBlock Acoustic Panels",
    price: 55.00,
    category: "Home Office",
    description: "Set of 12 sound-absorbing foam panels for home recording."
  },

  // --- WELLNESS (31-40) ---
  {
    id: 31,
    title: "Aura Mist Diffuser",
    price: 35.00,
    category: "Wellness",
    description: "Ultrasonic essential oil diffuser with 7-color LED mood lighting."
  },
  {
    id: 32,
    title: "ZenSleep Weighted Blanket",
    price: 120.00,
    category: "Wellness",
    description: "15lb cooling weighted blanket for improved sleep quality."
  },
  {
    id: 33,
    title: "PureSteep Ceramic Teapot",
    price: 29.99,
    category: "Wellness",
    description: "Modern ceramic teapot with a stainless steel infuser."
  },
  {
    id: 34,
    title: "DailyBalance Multivitamins",
    price: 24.00,
    category: "Wellness",
    description: "Organic whole-food multivitamin for daily nutritional support."
  },
  {
    id: 35,
    title: "SoftCloud Eye Mask",
    price: 12.99,
    category: "Wellness",
    description: "100% silk blackout sleep mask with adjustable strap."
  },
  {
    id: 36,
    title: "GlowStep Smart Scale",
    price: 49.00,
    category: "Wellness",
    description: "Bluetooth scale that tracks weight, BMI, and body fat percentage."
  },
  {
    id: 37,
    title: "ThermaSoak Bath Salts",
    price: 18.50,
    category: "Wellness",
    description: "Epsom salt blend with lavender and eucalyptus essential oils."
  },
  {
    id: 38,
    title: "BioRoot Herbal Tea Set",
    price: 22.00,
    category: "Wellness",
    description: "Assorted box of 40 organic caffeine-free herbal tea bags."
  },
  {
    id: 39,
    title: "PostureAlign Back Support",
    price: 25.00,
    category: "Wellness",
    description: "Discreet wearable brace to help correct shoulder posture."
  },
  {
    id: 40,
    title: "DeepTissue Massage Gun",
    price: 149.99,
    category: "Wellness",
    description: "Handheld percussion massager with 5 speed levels and 4 heads."
  }
];


// In React: Import it into your component like this:
// import products from './productsContent';

// Mapping: You can now loop through them to display your cards:
// products.map(item => <ProductCard key={item.id} data={item} />)
export default products;