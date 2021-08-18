select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "total amount"
  from "customers"
  join "payments" using ("customerId")
  group by "customers"."firstName", "customers"."lastName"
  order by "total amount" desc;
