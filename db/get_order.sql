select * from orders
where user_id = $1 and active = 'true';