SELECT M.ID, M.NAME FROM MOVIES M
INNER JOIN PRICES P ON M.ID_PRICES = P.ID 
WHERE P.VALUE < 2;