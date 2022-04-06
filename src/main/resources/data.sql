--SELECT * FROM question;

-- Initialize Cities
-- INSERT INTO cities(name) VALUES
--                             ('Bangalore'),
--                             ('Budapest'),
--                             ('Cape town'),
--                             ('Chicago'),
--                             ('Dubai'),
--                             ('Havanna'),
--                             ('Helsinki'),
--                             ('Sao Paulo'),
--                             ('Singapore'),
--                             ('Tokyo');


-- Initialize Cities
-- INSERT INTO cities(name, souvenir) VALUES
--                              ('Bangalore','Orient carpet'),
--                              ('Budapest','Rubiks cube'),
--                              ('Cape town','Bottle of whine'),
--                              ('Chicago','Mug'),
--                              ('Dubai','Hookah'),
--                              ('Havanna','Cuban cigarr'),
--                              ('Helsinki','Ice bear plushie'),
--                              ('Sao Paulo','Football jersey'),
--                              ('Singapore','Orchid parfume'),
--                              ('Tokyo','Cherry blossom');


-- Initialize Cities with name, souvenir and info
-- INSERT INTO cities(name, souvenir, city_info) VALUES
--                              ('Bangalore','Orient carpet', 'Välkommen till Bangalore! Även känd som Trädgårdsstaden & Vakternas stad, centrum för den indiska IT-industring där man kan finna företagsparken Electronics City. Med en befolkningsmängd på över 11 miljoner så kommer du aldrig känna dig ensam!'),
--                              ('Budapest','Rubiks cube', 'Budapest, även kallad Donaus Pärla, var från början två städer. Buda på den kuperade sidan av Donau, och Pest den flacka delen på högra sidan av floden. Här väntar en weekend fylld av god mat, kultur och spännande shopping.'),
--                              ('Cape town','Bottle of whine', 'I Kapstaden finns mycket att upptäcka; världsberömda vindistrikt, vita stränder, bra golf och storslagen natur. Här finns med andra ord allt som brukar finnas i en storstad -plus en hel del till.'),
--                              ('Chicago','Mug', 'Vackert belägen vid Michigansjön ligger Chicago, eller "The Windy City" som staden också kallas. Mitt i Chicago finner du några av världens högsta byggnader, Sears Tower och John Hancock Building, med över 100 våningar och fantastisk utsikt.'),
--                              ('Dubai','Hookah', 'Dubai lockar året runt med sitt solsäkra klimat, sina svepande stränder och sin sköna blandning av kultur, sevärdheter, shopping och lyx. Här finns spännande restauranger med menyer från hela världen och shopping för både fyndjägare och fönstershoppare'),
--                              ('Havanna','Cuban cigarr', 'Något av det första som slår en under en resa till Havanna är den fantastiska arkitekturen. Med sin speciella charm, sina fina gamla torg och bedagade -men vackra- kolonialbyggnader finns La Ciudád Vieja (gamla stan) med på Unescos världsarvslista.'),
--                              ('Helsinki','Ice bear plushie', 'Huvudstråket i Helsingfors är Esplanaden, med trivsamma caféer, ett myllrande folkliv och en vacker park, ritad av den tyska arkitekten Carl Ludvig Engel. Parken stod klar år 1840 och blev snabbt en oas för stadens herrskapsfamiljer.'),
--                              ('Sao Paulo','Football jersey', 'Sao Paulo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sem vel urna malesuada lobortis. Nam fringilla, felis a hendrerit pharetra, ex ex pretium elit, sit amet egestas metus lorem eu elit. '),
--                              ('Singapore','Orchid parfume', 'Utbudet i Singapore är i det närmaste oändligt, och enklast tar man sig runt med tunnelbanan. Här finns tempel, moskéer och museer och på Sentosa Island finns allt för naturälskaren, från härliga stränder till populära nöjesparker som Universal Studios.'),
--                              ('Tokyo','Cherry blossom', 'I Tokyo kan alla förväntningar och förhoppningar besannas – ät sushi, sjung karaoke, beskåda sumobrottning eller besök en av de knäppa temarestauranger som finns att välja bland. Välkommen till en trendig stad i ständig förändring!');

--  INSERT INTO category(category) VALUES
-- ('Bangalore palace');
 --                                   ('Bangalore'),
 --                                   ('Budapest'),
 --                                  ('Cape town'),
 --                                   ('Chicago'),
 --                                      ('Dubai'),
 --                                      ('Havanna'),
 --                                      ('Helsinki'),
 --                                      ('Sao Paulo'),
 --                                      ('Singapore'),
 --                                      ('Tokyo');


--  INSERT INTO question(question,category_id) VALUES
-- ('Vad som helst', 11);
--                                                 ('Hur många invånare har kapstaden?',3),
--                                                 ('Vilket statsskick har Singapore?',9),
--                                                 ('Vilket smeknamn brukar Bangalore gå under?',1),
--                                                 ('Vilket år grundades Sao Paulo?',8),
--                                                 ('I vilken delstat ligger i Chicago?',4),
--                                                 ('Vilka år har Tokyo varit värd för Olympiska spelen?',10),
--                                                 ('Hur många holmar finns det i Helsingfors?',7),
--                                                 ('Vad heter världens högsta byggnad som ligger i Dubai?',5),
--                                                 ('Vilken flod flyter genom Budapest?',2),
--                                                 ('Vad heter Kubas största bergskedja?',6),
--                                                 ('Vilket år grundades Dubai?',5);


--   INSERT INTO answers(answer,right_answer,question_id) VALUES
-- ('Ja', true, 11),
-- ('Nej', false, 11),
-- ('Kanske', false, 11);
--                                                           ('3.7 miljoner',true,1),
--                                                           ('1.5 miljoner',false,1),
--                                                           ('2.8 miljoner',false,1),
--                                                           ('Republik',true,2),
--                                                           ('Monarki',false,2),
--                                                           ('Diktatur',false,2),
--                                                           ('Kuststaden',false,3),
--                                                           ('Trädgårdsstaden',true,3),
--                                                           ('Diamantstaden',false,3),
--                                                           ('1395',false,4),
--                                                           ('1467',false,4),
--                                                           ('1554',true,4),
--                                                           ('Illinois', true, 5),
--                                                           ('Delaware',false,5),
--                                                           ('Idaho',false,5),
--                                                           ('1968  2016',false,6),
--                                                           ('1960 & 2020',false,6),
--                                                           ('1964 & 2021',true,6),
--                                                           ('225',false,7),
--                                                           ('317',true,7),
--                                                           ('405',false,7),
--                                                           ('Burj Khalifa',true,8),
--                                                           ('Burj Al Arab',false,8),
--                                                           ('Burj Dubai',false,8),                                                          ('Volga',false,9),
--                                                           ('Rhen',false,9),
--                                                           ('Donau',true,9),
--                                                           ('Sierra Madre',false,10),
--                                                           ('Sierra Maestra',true,10),
--                                                           ('Sierra Nevada',false,10),
--                                                           ('1833',true,11),
--                                                           ('1798',false,11),
--                                                           ('1878',false,11);

-- INSERT INTO Attraction(name, city_id) VALUES
--                                           ('Bangalore palace',1),
--                                           ('Lalbagh Botanical garden',1),
--                                           ('ISKCON Temple',1),
--                                           ('Szechenyibadet',2),
--                                           ('Budaslottet',2),
--                                           ('Sankt Stefan basilika',2),
--                                           ('Robben island',3),
--                                           ('Cape point',3),
--                                           ('Taffelberget',3),
--                                           ('Cloud gate',4),
--                                           ('Willis tower',4),
--                                           ('Millenium Park',4),
--                                           ('Burj khalifa',5),
--                                           ('dubai miracle garden',5),
--                                           ('dubai aquarium and underwater zoo',5),
--                                           ('El Morro',6),
--                                           ('Fusterlandia',6),
--                                           ('Fabrica De Arte Cubano',6),
--                                           ('Uspenskijkatedralen',7),
--                                           ('Sveaborg',7),
--                                           ('Tempelplatsens kyrka',7),
--                                           ('Katedralen I Sao Paulo',8),
--                                           ('Pinakoteket museum',8),
--                                           ('Avenida paulista',8),
--                                           ('Sentosa island',9),
--                                           ('Marina bay sands',9),
--                                           ('Singapore zoo',9),
--                                           ('Shibuya',10),
--                                           ('Sensoji templet',10),
--                                           ('Shinjuku Gyoen National Garden',10);







