SELECT REGEXP_REPLACE(cpf, '(\d{3})(\d{3})(\d{3})', '\1.\2.\3-') 
AS "CPF" FROM natural_person np 
JOIN customers c ON np.id_customers = c.id;