const products = [
    {
        name: "Wireless Mouse",
        status: "In Stock",
        time: "2024-11-17T10:00:00Z",
        price: 25.99,
        quantity: 150,
        description: "A high-quality wireless mouse with a sleek design and ergonomic shape."
    },
    {
        name: "Bluetooth Headphones",
        status: "Out of Stock",
        time: "2024-11-12T08:30:00Z",
        price: 79.99,
        quantity: 0,
        description: "Noise-cancelling Bluetooth headphones with exceptional sound quality."
    },
    {
        name: "Smartphone Stand",
        status: "In Stock",
        time: "2024-11-15T14:00:00Z",
        price: 15.49,
        quantity: 200,
        description: "Adjustable stand for smartphones, perfect for hands-free video calls."
    }
];


export const AllProducts = (req,res) => {
    
    res.status(200).send({

        message: "All Products",
        products: products
        
    })
}


