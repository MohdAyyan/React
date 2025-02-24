import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
 const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 599.99 },
    { id: 3, name: "Headphones", price: 149.99 },
    { id: 4, name: "Smartwatch", price: 249.99 },
    { id: 5, name: "Tablet", price: 399.99 }
 ];

if(req.query.search){
    const searchTerm = req.query.search.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    res.send(filteredProducts);
    return;
}
    
 setTimeout(() => {
    res.send(products);
 }, 3000);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

