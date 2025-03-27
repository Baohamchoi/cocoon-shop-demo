import sp1 from '../img/Picture2.png';
import sp2 from '../img/sp2.jpg';
import sp5 from '../img/sp5.jpg';
import sp6 from '../img/sp6.webp';
import sp7 from '../img/sp7.jpg';
import sp8 from '../img/sp8.jpg';

const cocoonProducts = [
  {
    id: 1,
    img: sp1,
    name: "Mặt Nạ Black Bean & Wild Honey – Cocoon",
    description: "Cocoon là thương hiệu mỹ phẩm thuần chay tại Việt Nam, cam kết mang đến các sản phẩm làm đẹp từ thiên nhiên, không thử nghiệm trên động vật và bền vững.",
    price: 25000, // Giá tiền (đơn vị: VND)
    ingredients: [
      "Chiết xuất Đậu Đen",
      "Mật Ong Rừng",
      "BHA (Beta Hydroxy Acid)",
      "Phức hợp Vitamin",
      "Chiết xuất thực vật tự nhiên"
    ],
    benefits: [
      "Thải độc & làm sạch sâu cho làn da.",
      "Dưỡng ẩm & cân bằng độ ẩm.",
      "Kiểm soát dầu thừa & giảm hình thành mụn.",
      "Tẩy tế bào chết & làm thông thoáng lỗ chân lông.",
      "Làm sáng và cải thiện kết cấu da.",
      "Phù hợp với da nhạy cảm & da hỗn hợp."
    ]
  },
  {
    id: 2,
    img: sp2,
    name: "Serum Vitamin C Cocoon",
    description: "Serum dưỡng sáng da, làm mờ vết thâm và ngăn ngừa lão hóa.",
    price: 350000,
    ingredients: [
      "Vitamin C",
      "Chiết xuất Cam"
    ],
    benefits: [
      "Giúp làm sáng da, giảm thâm nám, và cải thiện sắc tố.",
      "Tăng cường vitamin C tự nhiên, làm da khỏe mạnh, chống lão hóa."
    ]
  },
  {
    id: 3,
    img: sp5,
    name: "Kem Dưỡng Ban Đêm Cocoon",
    description: "Kem dưỡng giúp phục hồi và nuôi dưỡng da vào ban đêm, cung cấp độ ẩm sâu.",
    price: 300000,
    ingredients: [
      "Chiết xuất Hoa Nhài",
      "Aloe Vera"
    ],
    benefits: [
      "Làm dịu da, chống viêm.",
      "Dưỡng ẩm và tái tạo da."
    ]
  },
  {
    id: 4,
    img: sp6,
    name: "Dầu Tẩy Trang Cocoon",
    description: "Dầu tẩy trang giúp làm sạch sâu, loại bỏ bụi bẩn và lớp trang điểm hiệu quả.",
    price: 280000,
    ingredients: [
      "Chiết xuất Hoa Hồng",
      "Dầu Jojoba"
    ],
    benefits: [
      "Làm dịu da, giữ ẩm.",
      "Cung cấp dưỡng chất, giúp da mềm mại."
    ]
  },
  {
    id: 5,
    img: sp7,
    name: "Kem Chống Nắng Cocoon",
    description: "Kem chống nắng với công thức nhẹ nhàng, bảo vệ da khỏi tia UV, giúp da sáng khỏe.",
    price: 200000,
    ingredients: [
      "Vitamin E",
      "Chiết xuất Lô Hội"
    ],
    benefits: [
      "Bảo vệ da khỏi tác hại của tia UV, chống oxy hóa.",
      "Làm dịu và giữ ẩm cho da."
    ]
  },
  {
    id: 6,
    img: sp8,
    name: "Mặt Nạ Tẩy Tế Bào Chết Cocoon",
    description: "Mặt nạ giúp tẩy tế bào chết nhẹ nhàng, làm sạch da và tái tạo làn da mới.",
    price: 180000,
    ingredients: [
      "Chiết xuất Gạo",
      "AHA"
    ],
    benefits: [
      "Làm mềm và sáng da.",
      "Tẩy tế bào chết, làm sáng da."
    ]
  },
  // {
  //   id: 9,
  //   name: "Tinh Chất Ngọc Trai Cocoon",
  //   description: "Tinh chất giúp làm sáng và nuôi dưỡng da từ sâu bên trong, mang lại làn da mịn màng.",
  //   price: 380000,
  //   ingredients: [
  //     "Chiết xuất Ngọc Trai",
  //     "Vitamin C"
  //   ],
  //   benefits: [
  //     "Cung cấp độ sáng và dưỡng chất cho da.",
  //     "Tăng cường độ sáng và đều màu da."
  //   ]
  // },
  // {
  //   id: 10,
  //   name: "Kem Dưỡng Mắt Cocoon",
  //   description: "Kem dưỡng chuyên biệt cho vùng mắt, giúp giảm bọng mắt và quầng thâm.",
  //   price: 250000,
  //   ingredients: [
  //     "Chiết xuất Cà Phê",
  //     "Chiết xuất Cam"
  //   ],
  //   benefits: [
  //     "Giảm quầng thâm, làm sáng da.",
  //     "Cung cấp vitamin C, cải thiện độ sáng."
  //   ]
  // },
  // {
  //   id: 11,
  //   name: "Xịt Khoáng Cocoon",
  //   description: "Xịt khoáng giúp làm dịu da và cung cấp độ ẩm tức thì, thích hợp cho mọi loại da.",
  //   price: 120000,
  //   ingredients: [
  //     "Chiết xuất Hoa Cúc",
  //     "Khoáng Chất"
  //   ],
  //   benefits: [
  //     "Làm dịu da, chống viêm.",
  //     "Cung cấp độ ẩm, tái tạo da."
  //   ]
  // },
  // {
  //   id: 12,
  //   name: "Mặt Nạ Bơ Cocoon",
  //   description: "Mặt nạ cung cấp dưỡng chất cho da, giúp da mềm mịn và sáng khỏe.",
  //   price: 230000,
  //   ingredients: [
  //     "Chiết xuất Bơ",
  //     "Vitamin E"
  //   ],
  //   benefits: [
  //     "Cung cấp dưỡng chất, giữ ẩm cho da.",
  //     "Bảo vệ da, chống lão hóa."
  //   ]
  // }
];

export default cocoonProducts;
