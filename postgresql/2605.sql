SELECT P.NAME, PR.NAME FROM
PRODUCTS P INNER JOIN PROVIDERS PR
ON P.ID_PROVIDERS = PR.ID 
WHERE P.ID_CATEGORIES = 6;