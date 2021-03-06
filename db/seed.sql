users table

create table users
(
user_id serial primary key,
username varchar(80),
email varchar(80)
)

---------------------------------------

products table

create table products

(product_id serial primary key, product text, price decimal, description varchar(80), image_url text, type varchar(50))


------------------------------------

adding users

insert into users
(username, email)
values('John', 'John@gmail.com')

-----------------------------------------

carts table

create table carts (
cart_id serial primary key, 
product_id integer REFERENCES products (product_id), 
user_id integer REFERENCES users (user_id),
-- order_id integer REFERENCES orders (id),
quantity integer,
price decimal
);


-----------------------------------
get_user_cart

SELECT username, product, price, image_url
FROM users u 
JOIN carts c ON u.user_id = c.user_id
JOIN products p ON p.product_id = c.product_id
WHERE u.user_id = 1;




-------------------------------------------

add displays

insert into products
(product, price, description, image_url, type)
values
('Monitor', 200.00, '32 inch ultrawide monitor from Samsung', 'https://static1.squarespace.com/static/576bf6f9197aeaf55ed0447d/5998cdd3be42d6f75f9a99ed/5b817fd44fa51af3faf2ea8c/1535406751162/24-009-847-16.jpg?format=750w', 'Displays'),
('Monitor', 139.99 , 'Samsung IT LC24F390FHNXZA 24-Inch Curved Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/91fv8U2albL._SL1500_.jpg', 'Displays'),
('Monitor', 272.99 , 'ASUS Full HD 1080p 144Hz 1ms', 'https://images-na.ssl-images-amazon.com/images/I/91iFxJ0LkgL._SL1500_.jpg', 'Displays'),
('Monitor', 209.99, 'Acer Gaming Monitor 24" XFA240 bmjdpr 1920 x 1080 144Hz Refresh Rate', 'https://images-na.ssl-images-amazon.com/images/I/81NL4nYr15L._SL1500_.jpg', 'Displays'),
('Monitor', 149.00 , 'BenQ GL2760H 27 inch 1080p LED Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/61AnPEZeA4L._SL1190_.jpg', 'Displays'),
('Monitor', 249.00 , 'BenQ Zowie XL2411P 24 inch 144Hz Esports Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/51carF5ij0L._SL1000_.jpg', 'Displays' ),
('Monitor', 897.00 , 'Samsung LC49HG90DMNXZA CHG90 Series Curved 49-Inch Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._SL1500_.jpg', 'Displays' ),
('Monitor', 169.00  , 'BenQ Zowie 24 inch Full HD Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/71aRRfYLaGL._SL1500_.jpg', 'Displays' ),
('Monitor', 349.95  , 'ASUS MG28UQ 4K/UHD 28-Inch FreeSync Gaming Monitor', 'https://images-na.ssl-images-amazon.com/images/I/91Cz%2BVYDNnL._SL1500_.jpg', 'Displays' ),
('Monitor', 379.99  , 'Dell Gaming Monitor S2417DG YNY1D 24-Inch Screen', 'https://images-na.ssl-images-amazon.com/images/I/81h%2BG1RaKhL._SL1500_.jpg', 'Displays' )

--------------------------------------------



add parts

insert into products
(product, price, description, image_url, type)
values
(' GPU ', 889.99 , 'EVGA GeForce GTX 1080 Ti FTW3 Gaming, 11GB GDDR5X','https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg', 'Parts' ),
(' Memory ', 83.99 , 'Kingston HyperX Fury Black 8GB Kit (2x4GB) 2133MHz DDR4 ','https://images-na.ssl-images-amazon.com/images/I/61pfjK4csnL._SL1000_.jpg', 'Parts' ),
(' Motherboard ', 179.99 , 'GIGABYTE Z370 AORUS ULTRAGAMING  ','https://images-na.ssl-images-amazon.com/images/I/91BNobcPDwL._SL1500_.jpg', 'Parts' ),
(' Storage ', 167.99 , 'Samsung 970 EVO 500GB - NVMe PCIe M.2   ','https://images-na.ssl-images-amazon.com/images/I/91znpXLveJL._SL1500_.jpg', 'Parts' ),
(' Storage ', 169.99 , 'SanDisk 1TB Ultra 3D NAND SATA III SSD ','https://images-na.ssl-images-amazon.com/images/I/61nJ6hOZeyL._SL1500_.jpg', 'Parts' ),
('Processor', 706.62 , 'AMD Ryzen Threadripper 1950X', 'https://images-na.ssl-images-amazon.com/images/I/51moV-PZ9iL.jpg', 'Parts' ),
('Motherboard', 123.66  ,'ASUS ROG Strix B450-F Gaming Motherboard', 'https://images-na.ssl-images-amazon.com/images/I/91fCkEEq7UL._SL1500_.jpg', 'Parts' ),
('Computer Case',49.99  , 'CORSAIR CARBIDE 100R Mid-Tower Case', 'https://images-na.ssl-images-amazon.com/images/I/81aNrC5jkYL._SL1500_.jpg', 'Parts' )




------------------------------------


add audio

insert into products
(product, price, description, image_url, type)
values
('Headset', 79.99, 'Corsair Void Pro RGB Wireless Gaming Headset.','https://images-na.ssl-images-amazon.com/images/I/71T88vk0ZvL._SL1500_.jpg', 'Audio' ),
('Headset',19.99 , 'Gaming Headset Defender Warhead G-500 by NSInew.','https://images-na.ssl-images-amazon.com/images/I/81fH3%2Bc%2B2%2BL._SL1500_.jpg', 'Audio' ),
('Headset', 99.99, 'HyperX Cloud Alpha Gaming Headset - Dual Chamber Drivers.','https://images-na.ssl-images-amazon.com/images/I/71-hkFn17zL._SL1428_.jpg', 'Audio' ),
('Headset', 238.99 , 'SteelSeries Siberia 800 Lag-Free Wireless Gaming Headset with OLED Transmitter.','https://images-na.ssl-images-amazon.com/images/I/81RMoKinLJL._SL1500_.jpg', 'Audio' ),
('Headset' , 299.99 , 'ASTRO Gaming A50 Wireless Dolby Gaming Headset.','https://images-na.ssl-images-amazon.com/images/I/81URoBKfIhL._AC_.jpg', 'Audio' ),
('Headset', 49.99, 'HyperX Cloud Stinger Gaming Headset', 'https://images-na.ssl-images-amazon.com/images/I/61OkahMRh-L._SL1428_.jpg', 'Audio' ),
('Headset', 99.00 , 'Razer Kraken 7.1 V2: 7.1 Surround Sound', 'https://images-na.ssl-images-amazon.com/images/I/81SnVtkIsyL._SL1500_.jpg', 'Audio' ),
('Headset', 138.29, 'Sennheiser 506080 GAME ONE Gaming Headset', 'https://images-na.ssl-images-amazon.com/images/I/41y1H477ANL.jpg', 'Audio');
-----------------------------------------

add peripherals


insert into products
(product, price, description, image_url, type)
values
('Mouse',49.99 ,'Razer DeathAdder Elite: True 16,000 5G Optical Sensor','https://images-na.ssl-images-amazon.com/images/I/61a1MUNTP8L._SL1500_.jpg', 'Peripherals' ),
('Keyboard',89.99 ,'CORSAIR STRAFE RGB Mechanical Gaming Keyboard ','https://images-na.ssl-images-amazon.com/images/I/41rhTFIhlUL.jpg', 'Peripherals' ),
('Keyboard', 59.99 ,'Redragon K561 VISNU 87 Keys Anti-ghosting Waterproof Mechanical Keyboard','https://images-na.ssl-images-amazon.com/images/I/71fOe9TTJwL._SL1200_.jpg', 'Peripherals' ),
('Mouse',14.99 ,'PICTEK Wireless Gaming Mouse [Silent Click] [2 Programmable Side Buttons]','https://images-na.ssl-images-amazon.com/images/I/610aLx3DnWL._SL1300_.jpg', 'Peripherals' ),
('Mouse', 99.00  , 'Razer Naga Trinity: True 16,000 5G Optical Sensor', 'https://images-na.ssl-images-amazon.com/images/I/81xeyiadbaL._SL1500_.jpg', 'Peripherals'),
('Controller', 159.00, 'Razer Wolverine Ultimate Chroma- Fully Customizable Gamepad Controller', 'https://images-na.ssl-images-amazon.com/images/I/81kKfnnHeuL._AC_.jpg', 'Peripherals'),
('Shifter', 57.29 , 'Logitech G Driving Force Shifter', 'https://images-na.ssl-images-amazon.com/images/I/41RjYP07bHL.jpg', 'Peripherals'),
('Keyboard', 194.99  , 'Freestyle Edge Split Gaming Keyboard', 'https://images-na.ssl-images-amazon.com/images/I/81W5hLd-LIL._SL1500_.jpg', 'Peripherals'),
('Yoke System', 161.85, 'Logitech G Saitek PRO Flight Yoke System', 'https://images-na.ssl-images-amazon.com/images/I/810TBD5z%2B5L._SL1500_.jpg', 'Peripherals')

