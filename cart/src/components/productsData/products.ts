export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Sofa",
    price: 899.99,
    imageUrl:
      "https://www.juliettesinteriors.co.uk/wp-content/uploads/2019/11/Luxury-Italian-Premium-White-Leather-Sofa-1.jpg",
  },
  {
    id: 2,
    name: "Modern Dining Table Set",
    price: 499.99,
    imageUrl:
      "https://images.furnituredealer.net/img/products%2Fcoaster%2Fcolor%2Fmodern%20dining%20-%20-181734809_102310%2B6x100515wht-b.jpg",
  },
  {
    id: 3,
    name: "Smart 4K UHD TV",
    price: 799.99,
    imageUrl:
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/a898c7d2-8f27-11ea-a21e-c276f464bfe6.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 149.99,
    imageUrl:
      "https://www.cnet.com/a/img/resize/cf49212a3beb223a12db9e261341167db78f4997/hub/2020/12/16/b9e3f465-8440-4b8e-9cfa-333202afa589/airpods-max-8.jpg?auto=webp&fit=crop&height=360&width=640",
  },
  {
    id: 5,
    name: "Stylish Laptop Backpack",
    price: 59.99,
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2022/12/laptopbackpacks-2048px-6905.jpg?auto=webp&quality=75&width=1024",
  },
  {
    id: 6,
    name: "Premium Coffee Maker",
    price: 129.99,
    imageUrl:
      "https://assets.wfcdn.com/im/52433326/compr-r85/8707/87073654/premium-levella-cappuccino-espresso-machine-with-frother.jpg",
  },
  {
    id: 7,
    name: "Ultra-Thin 4K Monitor",
    price: 599.99,
    imageUrl:
      "https://149367133.v2.pressablecdn.com/wp-content/uploads/2018/01/ThinkVision-X24-P32u-CES-2018-Header.jpg",
  },
  {
    id: 8,
    name: "Gaming Laptop",
    price: 1499.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk_ptiPLh-NrgPcuEdxBhERzVDQvgQV7Qaw&usqp=CAU",
  },
];

export default products;
