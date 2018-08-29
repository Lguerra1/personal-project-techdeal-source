users table

-- create table users
-- (
-- user_id serial primary key,
-- username varchar(80),
-- email varchar(80)
-- )

---------------------------------------

products table

-- create table products

-- (product_id serial primary key, product text, price decimal, description varchar(80), image_url text, type varchar(50))


------------------------------------

adding users

-- insert into users
-- (username, email)
-- values('John', 'John@gmail.com')

-----------------------------------------

carts table

-- create table carts (
-- cart_id serial primary key, 
-- product_id integer REFERENCES products (product_id), 
-- user_id integer REFERENCES users (user_id)
-- )


-----------------------------------
get_user_cart

-- SELECT username, product, price, image_url
-- FROM users u 
-- JOIN carts c ON u.user_id = c.user_id
-- JOIN products p ON p.product_id = c.product_id
-- WHERE u.user_id = 1;




-------------------------------------------

add displays

-- insert into products
-- (product, price, description, image_url, type)
-- values
-- ('Monitor', 200.00, '32 inch ultrawide monitor from Samsung', 'https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/5998cdd3be42d6f75f9a99ed/5b817fd44fa51af3faf2ea8c/1535406751162/24-009-847-16.jpg?format=750w', 'Displays')

--------------------------------------------



add parts

-- insert into parts
-- (product, price, description, image_url)
-- values
-- ('SSD', 90.00, 'WD Blue 3D NAND 500GB PC SSD','https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/5993522615d5db0803c090ac/5b805c3940ec9a19793b4cb1/1535405257911/20-250-091-V01.jpg?format=750w', 'Parts' )

------------------------------------


add audio


-- insert into products
-- (product, price, description, image_url)
-- values
-- ('Headset', 83.00, 'Corsair Void Pro RGB Gaming Headset','https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/5998cdd3be42d6f75f9a99ed/5b819558032be4d68a3e9864/1535406751024/71bjw0621xL._SL1500_.jpg?format=500w', 'Audio' )

-----------------------------------------

add peripherals


-- insert into products
-- (product, price, description, image_url, type)
-- values
-- ('Keyboard',210.00 ,'','https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/584b95c3ebbd1a316fc2abb8/5b7f18af2b6a288e3a861918/1535056310087/71ckZpSdunL._SL1500_.jpg?format=750w', 'Peripherals' )

