insert into orders
(user_id, active)
values ($1, true)
returning *;
