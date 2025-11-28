CREATE TABLE chai_store(
	id 			SERIAL PRIMARY KEY,
	chai_name 	VARCHAR(50),
	price 		DECIMAL(5,2),
	chai_type 	VARCHAR(50),
	available 	BOOLEAN
);


INSERT INTO chai_store( 
	chai_name , price , chai_type, available
)

VALUES
('Masala Chai', 30.00,'Spiced', TRUE),
('Green Chai', 25.00,'Herbal', TRUE),
('Black Chai', 20.00, 'Classic', TRUE),
('Iced Chai' , 35.00 , 'Cold', FALSE),
('Oolong Chai', 40.00 , 'Speciality', TRUE);
 
 SELECT * FROM chai_store;

QUERY 1 

SELECT chai_name AS "Chai Name" , price AS "Cost in INR" FROM chai_store;

SELECT * FROM chai_store WHERE chai_name = 'chai';

Query 2 

SELECT * FROM chai_store WHERE chai_name LIKE '%Chai%';

Query 3 

SELECT * FROM chai_store Where price < 30;

Query 4 

SELECT * FROM chai_store ORDER BY price ASC; 

Query 5 

UPDATE chai_store SET price = 38.0 , available = TRUE  WHERE chai_name = 'Iced Chai'; 

 SELECT * FROM chai_store;

Query 6 

DELETE FROM chai_store WHERE chai_name  = 'Black Chai';
 SELECT * FROM chai_store;


