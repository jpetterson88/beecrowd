SELECT C.NAME, SUM(P.AMOUNT) FROM CATEGORIES C
INNER JOIN PRODUCTS P ON C.ID = P.ID_CATEGORIES 
GROUP BY C.NAME ORDER BY C.NAME;