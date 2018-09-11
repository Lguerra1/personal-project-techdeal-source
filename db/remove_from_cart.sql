delete from carts
where user_id = $1
and
cart_id = $2;