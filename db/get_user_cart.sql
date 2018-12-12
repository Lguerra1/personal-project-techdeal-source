-- select p.product_id, p.price, p.image_url, p.product, p.description, c.quantity, c.cart_id
-- from carts c
-- join products p on p.product_id = c.product_id
-- where user_id = $1;

select p.product_id, p.price, p.image_url, p.product, p.description, c.quantity, c.cart_id
from carts c
join products p on p.product_id = c.product_id
where user_id = $1
order by p.product_id;