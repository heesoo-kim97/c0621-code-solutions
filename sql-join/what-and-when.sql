select "films"."title",
       "films"."releaseYear",
       "categories"."name" as "category"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
