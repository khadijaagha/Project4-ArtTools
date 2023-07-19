require('dotenv').config();
require('./config/database');
const Product = require('./models/product');

(async function() {
    await Product.deleteMany({});
const products = await Product.create([
    {
        image: 'https://cdn11.bigcommerce.com/s-1e5d9p00e3/images/stencil/960w/products/15860/46529/030713_B__63916.1655727354.jpg?c=1',
        title: 'Liquitex Professional Soft Body Acrylic Essentials Set of 12 x 22ml' ,
        description: 'This low viscosity professional acrylic paint gives excellent coverage, a satin finish and high levels of artist-quality pigment for archival brilliance. Use it to paint, pour, glaze or print on almost any surface.',
        price: 39.99

    },
    {
        image: 'https://cdn11.bigcommerce.com/s-1e5d9p00e3/images/stencil/960w/products/5417/42363/021935_A__81365.1655726327.jpg?c=1',
        title: 'Winsor & Newton Galeria Tube 60ml Set of 10' ,
        description: 'Ideal for artists who require a good quality acrylic at an affordable price.',
        price: 22.95        
    },
    {
        image: 'https://cdn11.bigcommerce.com/s-1e5d9p00e3/images/stencil/960w/products/15871/86971/016807_B__75966.1659701098.jpg?c=1',
        title: 'Pebeo Studio Acrylic Paint Set of 20 x 20ml with Brush' ,
        description: 'This Studio Acrylic Paint Set from Pebeo is the ideal choice to experiment.',
        price: 22.95   
    },
    {
        image: 'https://cdn11.bigcommerce.com/s-1e5d9p00e3/images/stencil/960w/products/15846/30878/pc-3m-fine-tip-40-pen-collection-p13124-40069_image__10225.1654807999.jpg?c=1',
        title: 'Posca Paint Marker PC-3M Collection 0.9-1.3mm Set of 40' ,
        description: 'This POSCA set is perfect for any paint marker user, especially the POSCA lover. A fantastic selection of colours, making it an ideal set for beginners, amateurs and professional artists alike.',
        price: 100
    }
]);

console.log(products);
process.exit();

})();