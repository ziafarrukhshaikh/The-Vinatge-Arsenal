CREATE TABLE Customer(
	customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(25) NOT NULL,
	phone VARCHAR(20) NOT NULL,
    rewardsNum VARCHAR(20) NOT NULL,
	street VARCHAR(50) NOT NULL,
	city VARCHAR(20) NOT NULL,
	state VARCHAR(50) NOT NULL,
	zipcode VARCHAR(10) NOT NULL
	);

    CREATE TABLE ProductType (
	product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	jersey VARCHAR(50) NOT NULL,
	scarf VARCHAR(250) NOT NULL,
    hat VARCHAR(250) NOT NULL,
    bobblehead VARCHAR(50) NOT NULL,
    posters VARCHAR(50) NOT NULL
	);


    CREATE TABLE Sale (
	sale_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
    email VARCHAR(25) NOT NULL,
	salePrice VARCHAR(50) NOT NULL,
	deliveryFee VARCHAR(50) NOT NULL,
	deliveryDate VARCHAR(250) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES ProductType(product_id) ON DELETE CASCADE ON UPDATE RESTRICT,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE ON UPDATE RESTRICT
	);


    CREATE TABLE Review (
	review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
	submitdate DATE NOT NULL,
	description  VARCHAR(500),
	rating VARCHAR(10),
	FOREIGN KEY (product_id) REFERENCES ProductType(product_id) ON DELETE CASCADE ON UPDATE RESTRICT,
	FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE ON UPDATE RESTRICT
	);
    
    CREATE TABLE Rewards  (
    rewards_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE ON UPDATE RESTRICT
    );

    CREATE TABLE promotion (
    promotion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    promotitle VARCHAR(50) NOT NULL,
    promoimage VARCHAR(20) NOT NULL,
    description VARCHAR(200) NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    discountrate DECIMAL(5,2)
    );


    
 INSERT INTO Customer(firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode)
    VALUES ("Zia", "Shaikh", "zshaikh1@depaul.edu", "3128526445", "121989", "2545 N Sheffield Ave", "CHI", "IL", "60614");
INSERT INTO Customer(firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode)
    VALUES ("Savar", "Sethi", "ssethi@depaul.edu", "123456789", "333666", "2332 W Seminary", "CHI", "IL", "60614");
INSERT INTO Customer(firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode)
    VALUES ("Matt", "Nice", "mnice@depaul.edu", "111244622", "123456", "777 S State", "NYC", "NY", "11720");
INSERT INTO Customer(firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode)
    VALUES ("Dan", "Sakelaris", "dgeorge@depaul.edu", "632771656", "999111", "6 Whippany Drive", "LA", "CA", "90210");
INSERT INTO Customer(firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode)
    VALUES ("Yedidya", "Sol", "ysol3@depaul.edu", "5551293443", "444555", "14 Surrey Ct", "PHX", "AZ", "72199");


INSERT INTO ProductType(jersey, scarf, hat, bobblehead, posters)
    VALUES("Bruised Banana OG","Alexis Sanches LICHA", "COYG", "George Graham Clipboard", "Gunners4Ever");
INSERT INTO ProductType(jersey, scarf, hat, bobblehead, posters)
    VALUES("Retro Gold 02/03","Wenger", "ARSENAL", "Arsene Wenger", "Is yours gold?");
INSERT INTO ProductType(jersey, scarf, hat, bobblehead, posters)
    VALUES("SEGA Away Kit 00/01","MESUT OZIL!", "YaGunnersYa", "Mesut Ozil", "NLD is RED");
INSERT INTO ProductType(jersey, scarf, hat, bobblehead, posters)
    VALUES("20/21 Home Kit","Aubama WHO?", "SignDaTing", "14x FA Cup", "WE CHAMPIONS");
INSERT INTO ProductType(jersey, scarf, hat, bobblehead, posters)
    VALUES("All Black 22/23 Away","Bukayo Saka", "Little Chilli", "Starboy", "Signed.Sealed.Delivered");

INSERT INTO Sale(product_id, customer_id, firstname, lastname,email, salePrice, deliveryDate, deliveryFee) 
        VALUES(1,1, "Zia", "Shaikh", "zshaikh1@depaul.edu", "$88", "18th Mar'23", "$10.99");
INSERT INTO Sale(product_id, customer_id, firstname, lastname,email, salePrice, deliveryDate, deliveryFee) 
        VALUES(2,2, "Matt", "Nice", "mnice@depaul.edu", "$95", "23rd Mar'23", "$10.99");
INSERT INTO Sale(product_id, customer_id, firstname, lastname,email, salePrice, deliveryDate, deliveryFee) 
        VALUES(3,3, "Yedidya", "Sol", "ysol3@depaul.edu", "$125", "1st Apr'23", "$10.99");
INSERT INTO Sale(product_id, customer_id, firstname, lastname,email, salePrice, deliveryDate, deliveryFee) 
        VALUES(4,4, "Savar", "Sethi", "ssethi@depaul.edu", "$66", "10th Jun'23", "$10.99");
INSERT INTO Sale(product_id, customer_id, firstname, lastname,email, salePrice, deliveryDate, deliveryFee) 
        VALUES(5,5, "Daniel", "Sakelaris", "dgeorge@depaul.edu", "$75", "14th Aug'23", "$10.99");


INSERT INTO Review( product_id, customer_id, submitdate, description, rating) 
        VALUES(1, 1, "2023-1-11", "Jersey","5");
INSERT INTO Review(review_id, product_id, customer_id, submitdate, description, rating) 
        VALUES(2, 2, "2023-2-9", "Scarf","4");
INSERT INTO Review(review_id, product_id, customer_id, submitdate, description, rating) 
        VALUES(3, 3, "2023-11-11", "Bobblehead","4");
INSERT INTO Review(re5view_id, product_id, customer_id, submitdate, description, rating) 
        VALUES(4, 4, "2023-1-11", "Jersey","5");
INSERT INTO Review(review_id, product_id, customer_id, submitdate, description, rating) 
        VALUES(5, 5, "2023-1-11", "Jersey","5");


INSERT INTO Rewards(customer_id) VALUES (1);
INSERT INTO Rewards(customer_id) VALUES (2);
INSERT INTO Rewards(customer_id) VALUES (3);
INSERT INTO Rewards(customer_id) VALUES (4);
INSERT INTO Rewards(customer_id) VALUES (5);

INSERT INTO promotion (promotitle, promoimage, description, startdate, enddate, discountrate) 
    VALUES ('Promo 1','promo1.png','Promo 1 Description', "2023-01-01","2023-01-31",0.10);
INSERT INTO promotion (promotitle, promoimage, description, startdate, enddate, discountrate) 
    VALUES ('Promo 2','promo2.png','Promo 2 Description', "2023-01-01","2023-01-25",0.15);
INSERT INTO promotion (promotitle, promoimage, description, startdate, enddate, discountrate) 
    VALUES ('Promo 3','promo3.png','Season Ticket Holders Amazing Annual Deal', "2023-01-01","2023-12-31",0.45);
INSERT INTO promotion (promotitle, promoimage, description, startdate, enddate, discountrate) 
    VALUES ('Promo 4','promo4.png','Arsenal 175 Year Sale', "2023-01-01","2023-05-25",0.55);