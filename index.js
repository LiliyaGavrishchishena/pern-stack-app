const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create product

app.post('/products', async (req, res) => {
  try {
    const { description } = req.body;
    const newProduct = await pool.query(
      'INSERT INTO product (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all products

app.get('/products', async (req, res) => {
  try {
    const allProducts = await pool.query('SELECT * FROM product');
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a product

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      'SELECT * FROM product WHERE product_id = $1',
      [id]
    );

    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// //update a product

app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateProduct = await pool.query(
      'UPDATE product SET description = $1 WHERE product_id = $2',
      [description, id]
    );

    res.json('Product was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// //delete a product

app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      'DELETE FROM product WHERE product_id = $1',
      [id]
    );
    res.json('Product was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
