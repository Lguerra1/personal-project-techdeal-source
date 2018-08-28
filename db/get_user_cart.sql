SELECT *
FROM users u 
JOIN carts c ON u.user_id = c.user_id
JOIN products p ON p.product_id = c.product_id
WHERE u.user_id = $1;