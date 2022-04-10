-- -- SELECT * FROM question;
--
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
--
-- INSERT INTO category(category, sub_category) VALUES
--                                                  ('Bangalore','city'),
--                                                  ('Budapest','city'),
--                                                  ('Capetown','city'),
--                                                  ('Chicago','city'),
--                                                  ('Dubai','city'),
--                                                  ('Havanna','city'),
--                                                  ('Helsinki','city'),
--                                                  ('Sao Paulo','city'),
--                                                  ('Sinapore','city'),
--                                                  ('Tokyo','city'),
--                                                  ('Bangalore palace', 'Bangalore'),
--                                                  ('Lalbagh Botanical garden','Bangalore'),
--                                                  ('ISKCON Temple','Bangalore'),
--                                                  ('Szechenyibadet','Budapest'),
--                                                  ('Budaslottet','Budapest'),
--                                                  ('Sankt Stefan basilika','Budapest'),
--                                                  ('Robben island', 'Capetown'),
--                                                  ('Cape point', 'Capetown'),
--                                                  ('Taffelberget', 'Capetown'),
--                                                  ('Cloud gate','Chicago'),
--                                                  ('Willis tower','Chicago'),
--                                                  ('Millenium Park','Chicago'),
--                                                  ('Burj khalifa', 'Dubai'),
--                                                  ('dubai miracle garden', 'Dubai'),
--                                                  ('dubai aquarium and underwater zoo', 'Dubai'),
--                                                  ('El Morro' , 'Havanna'),
--                                                  ('Fusterlandia', 'Havanna'),
--                                                  ('Fabrica De Arte Cubano', 'Havanna'),
--                                                  ('Uspenskijkatedralen', 'Helsinki'),
--                                                  ('Sveaborg', 'Helsinki'),
--                                                  ('Tempelplatsens kyrka', 'Helsinki'),
--                                                  ('Katedralen I Sao Paulo', 'Sao Paulo'),
--                                                  ('Pinakoteket museum', 'Sao Paulo'),
--                                                  ('Avenida paulista', 'Sao Paulo'),
--                                                  ('Sentosa island', 'Sinapore'),
--                                                  ('Marina bay sands', 'Singapore'),
--                                                  ('Singapore zoo', 'Singapore'),
--                                                  ('Shibuya', 'Tokyo'),
--                                                  ('Sensoji templet','Tokyo'),
--                                                  ('Shinjuku Gyoen National Garden','Tokyo');
--
--  INSERT INTO question(question,category_id) VALUES
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
--                                                 ('Vilket år grundades Dubai?',5),
-- ('Vad som helst', 11);
--
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
--
-- INSERT INTO question(question,category_id) VALUES
--                                                ('Fråga 1' ,11),
--                                                ('Fråga 2' ,11),
--                                                ('Fråga 3' ,11),
--                                                ('Fråga 1' ,12),
--                                                ('Fråga 2' ,12),
--                                                ('Fråga 3' ,12),
--                                                ('Fråga 1' ,13),
--                                                ('Fråga 2' ,13),
--                                                ('Fråga 3' ,13),
--                                                ('Fråga 1' ,14),
--                                                ('Fråga 2' ,14),
--                                                ('Fråga 3' ,14),
--                                                ('Fråga 1' ,15),
--                                                ('Fråga 2' ,15),
--                                                ('Fråga 3' ,15),
--                                                ('Fråga 1' ,16),
--                                                ('Fråga 2' ,16),
--                                                ('Fråga 3' ,16),
--                                                ('Fråga 1' ,17),
--                                                ('Fråga 2' ,17),
--                                                ('Fråga 3' ,17),
--                                                ('Fråga 1' ,18),
--                                                ('Fråga 2' ,18),
--                                                ('Fråga 3' ,18),
--                                                ('Fråga 1' ,19),
--                                                ('Fråga 2' ,19),
--                                                ('Fråga 3' ,19),
--                                                ('Fråga 1' ,20),
--                                                ('Fråga 2' ,20),
--                                                ('Fråga 3' ,20),
--                                                ('Fråga 1' ,21),
--                                                ('Fråga 2' ,21),
--                                                ('Fråga 3' ,21),
--                                                ('Fråga 1' ,22),
--                                                ('Fråga 2' ,22),
--                                                ('Fråga 3' ,22),
--                                                ('Fråga 1' ,23),
--                                                ('Fråga 2' ,23),
--                                                ('Fråga 3' ,23),
--                                                ('Fråga 1' ,24),
--                                                ('Fråga 2' ,24),
--                                                ('Fråga 3' ,24),
--                                                ('Fråga 1' ,25),
--                                                ('Fråga 2' ,25),
--                                                ('Fråga 3' ,25),
--                                                ('Fråga 1' ,26),
--                                                ('Fråga 2' ,26),
--                                                ('Fråga 3' ,26),
--                                                ('Fråga 1' ,27),
--                                                ('Fråga 2' ,27),
--                                                ('Fråga 3' ,27),
--                                                ('Fråga 1' ,28),
--                                                ('Fråga 2' ,28),
--                                                ('Fråga 3' ,28),
--                                                ('Fråga 1' ,29),
--                                                ('Fråga 2' ,29),
--                                                ('Fråga 3' ,29),
--                                                ('Fråga 1' ,30),
--                                                ('Fråga 2' ,30),
--                                                ('Fråga 3' ,30),
--                                                ('Fråga 1' ,31),
--                                                ('Fråga 2' ,31),
--                                                ('Fråga 3' ,31),
--                                                ('Fråga 1' ,32),
--                                                ('Fråga 2' ,32),
--                                                ('Fråga 3' ,32),
--                                                ('Fråga 1' ,33),
--                                                ('Fråga 2' ,33),
--                                                ('Fråga 3' ,33),
--                                                ('Fråga 1' ,34),
--                                                ('Fråga 2' ,34),
--                                                ('Fråga 3' ,34),
--                                                ('Fråga 1' ,35),
--                                                ('Fråga 2' ,35),
--                                                ('Fråga 3' ,35),
--                                                ('Fråga 1' ,36),
--                                                ('Fråga 2' ,36),
--                                                ('Fråga 3' ,36),
--                                                ('Fråga 1' ,37),
--                                                ('Fråga 2' ,37),
--                                                ('Fråga 3' ,37),
--                                                ('Fråga 1' ,38),
--                                                ('Fråga 2' ,38),
--                                                ('Fråga 3' ,38),
--                                                ('Fråga 1' ,39),
--                                                ('Fråga 2' ,39),
--                                                ('Fråga 3' ,39);
--
--   INSERT INTO answers(answer,right_answer,question_id) VALUES
--
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
--                                                           ('1878',false,11),
--                                                           ('Ja', true, 11),
--                                                           ('Nej', false, 11),
--                                                           ('Kanske', false, 11);
--
-- INSERT INTO answers(answer,right_answer,question_id) VALUES
--                                                          ('svar 1',true ,12),
--                                                          ('svar 2',false ,12),
--                                                          ('svar 3',false ,12),
--                                                          ('svar 1',true ,13),
--                                                          ('svar 2',false ,13),
--                                                          ('svar 3',false ,13),
--                                                          ('svar 1',true ,14),
--                                                          ('svar 2',false ,14),
--                                                          ('svar 3',false ,14),
--                                                          ('svar 1',true ,15),
--                                                          ('svar 2',false ,15),
--                                                          ('svar 3',false ,15),
--                                                          ('svar 1',true ,16),
--                                                          ('svar 2',false ,16),
--                                                          ('svar 3',false ,16),
--                                                          ('svar 1',true ,17),
--                                                          ('svar 2',false ,17),
--                                                          ('svar 3',false ,17),
--                                                          ('svar 1',true ,18),
--                                                          ('svar 2',false ,18),
--                                                          ('svar 3',false ,18),
--                                                          ('svar 1',true ,19),
--                                                          ('svar 2',false ,19),
--                                                          ('svar 3',false ,19),
--                                                          ('svar 1',true ,20),
--                                                          ('svar 2',false ,20),
--                                                          ('svar 3',false ,20),
--                                                          ('svar 1',true ,21),
--                                                          ('svar 2',false ,21),
--                                                          ('svar 3',false ,21),
--                                                          ('svar 1',true ,22),
--                                                          ('svar 2',false ,22),
--                                                          ('svar 3',false ,22),
--                                                          ('svar 1',true ,23),
--                                                          ('svar 2',false ,23),
--                                                          ('svar 3',false ,23),
--                                                          ('svar 1',true ,24),
--                                                          ('svar 2',false ,24),
--                                                          ('svar 3',false ,24),
--                                                          ('svar 1',true ,25),
--                                                          ('svar 2',false ,25),
--                                                          ('svar 3',false ,25),
--                                                          ('svar 1',true ,26),
--                                                          ('svar 2',false ,26),
--                                                          ('svar 3',false ,26),
--                                                          ('svar 1',true ,27),
--                                                          ('svar 2',false ,27),
--                                                          ('svar 3',false ,27),
--                                                          ('svar 1',true ,28),
--                                                          ('svar 2',false ,28),
--                                                          ('svar 3',false ,28),
--                                                          ('svar 1',true ,29),
--                                                          ('svar 2',false ,29),
--                                                          ('svar 3',false ,29),
--                                                          ('svar 1',true ,30),
--                                                          ('svar 2',false ,30),
--                                                          ('svar 3',false ,30),
--                                                          ('svar 1',true ,31),
--                                                          ('svar 2',false ,31),
--                                                          ('svar 3',false ,31),
--                                                          ('svar 1',true ,32),
--                                                          ('svar 2',false ,32),
--                                                          ('svar 3',false ,32),
--                                                          ('svar 1',true ,33),
--                                                          ('svar 2',false ,33),
--                                                          ('svar 3',false ,33),
--                                                          ('svar 1',true ,34),
--                                                          ('svar 2',false ,34),
--                                                          ('svar 3',false ,34),
--                                                          ('svar 1',true ,35),
--                                                          ('svar 2',false ,35),
--                                                          ('svar 3',false ,35),
--                                                          ('svar 1',true ,36),
--                                                          ('svar 2',false ,36),
--                                                          ('svar 3',false ,36),
--                                                          ('svar 1',true ,37),
--                                                          ('svar 2',false ,37),
--                                                          ('svar 3',false ,37),
--                                                          ('svar 1',true ,38),
--                                                          ('svar 2',false ,38),
--                                                          ('svar 3',false ,38),
--                                                          ('svar 1',true ,39),
--                                                          ('svar 2',false ,39),
--                                                          ('svar 3',false ,39),
--                                                          ('svar 1',true ,40),
--                                                          ('svar 2',false ,40),
--                                                          ('svar 3',false ,40),
--                                                          ('svar 1',true ,41),
--                                                          ('svar 2',false ,41),
--                                                          ('svar 3',false ,41),
--                                                          ('svar 1',true ,42),
--                                                          ('svar 2',false ,42),
--                                                          ('svar 3',false ,42),
--                                                          ('svar 1',true ,43),
--                                                          ('svar 2',false ,43),
--                                                          ('svar 3',false ,43),
--                                                          ('svar 1',true ,44),
--                                                          ('svar 2',false ,44),
--                                                          ('svar 3',false ,44),
--                                                          ('svar 1',true ,45),
--                                                          ('svar 2',false ,45),
--                                                          ('svar 3',false ,45),
--                                                          ('svar 1',true ,46),
--                                                          ('svar 2',false ,46),
--                                                          ('svar 3',false ,46),
--                                                          ('svar 1',true ,47),
--                                                          ('svar 2',false ,47),
--                                                          ('svar 3',false ,47),
--                                                          ('svar 1',true ,48),
--                                                          ('svar 2',false ,48),
--                                                          ('svar 3',false ,48),
--                                                          ('svar 1',true ,49),
--                                                          ('svar 2',false ,49),
--                                                          ('svar 3',false ,49),
--                                                          ('svar 1',true ,50),
--                                                          ('svar 2',false ,50),
--                                                          ('svar 3',false ,50),
--                                                          ('svar 1',true ,51),
--                                                          ('svar 2',false ,51),
--                                                          ('svar 3',false ,51),
--                                                          ('svar 1',true ,52),
--                                                          ('svar 2',false ,52),
--                                                          ('svar 3',false ,52),
--                                                          ('svar 1',true ,53),
--                                                          ('svar 2',false ,53),
--                                                          ('svar 3',false ,53),
--                                                          ('svar 1',true ,54),
--                                                          ('svar 2',false ,54),
--                                                          ('svar 3',false ,54),
--                                                          ('svar 1',true ,55),
--                                                          ('svar 2',false ,55),
--                                                          ('svar 3',false ,55),
--                                                          ('svar 1',true ,56),
--                                                          ('svar 2',false ,56),
--                                                          ('svar 3',false ,56),
--                                                          ('svar 1',true ,57),
--                                                          ('svar 2',false ,57),
--                                                          ('svar 3',false ,57),
--                                                          ('svar 1',true ,58),
--                                                          ('svar 2',false ,58),
--                                                          ('svar 3',false ,58),
--                                                          ('svar 1',true ,59),
--                                                          ('svar 2',false ,59),
--                                                          ('svar 3',false ,59),
--                                                          ('svar 1',true ,60),
--                                                          ('svar 2',false ,60),
--                                                          ('svar 3',false ,60),
--                                                          ('svar 1',true ,61),
--                                                          ('svar 2',false ,61),
--                                                          ('svar 3',false ,61),
--                                                          ('svar 1',true ,62),
--                                                          ('svar 2',false ,62),
--                                                          ('svar 3',false ,62),
--                                                          ('svar 1',true ,63),
--                                                          ('svar 2',false ,63),
--                                                          ('svar 3',false ,63),
--                                                          ('svar 1',true ,64),
--                                                          ('svar 2',false ,64),
--                                                          ('svar 3',false ,64),
--                                                          ('svar 1',true ,65),
--                                                          ('svar 2',false ,65),
--                                                          ('svar 3',false ,65),
--                                                          ('svar 1',true ,66),
--                                                          ('svar 2',false ,66),
--                                                          ('svar 3',false ,66),
--                                                          ('svar 1',true ,67),
--                                                          ('svar 2',false ,67),
--                                                          ('svar 3',false ,67),
--                                                          ('svar 1',true ,68),
--                                                          ('svar 2',false ,68),
--                                                          ('svar 3',false ,68),
--                                                          ('svar 1',true ,69),
--                                                          ('svar 2',false ,69),
--                                                          ('svar 3',false ,69),
--                                                          ('svar 1',true ,70),
--                                                          ('svar 2',false ,70),
--                                                          ('svar 3',false ,70),
--                                                          ('svar 1',true ,71),
--                                                          ('svar 2',false ,71),
--                                                          ('svar 3',false ,71),
--                                                          ('svar 1',true ,72),
--                                                          ('svar 2',false ,72),
--                                                          ('svar 3',false ,72),
--                                                          ('svar 1',true ,73),
--                                                          ('svar 2',false ,73),
--                                                          ('svar 3',false ,73),
--                                                          ('svar 1',true ,74),
--                                                          ('svar 2',false ,74),
--                                                          ('svar 3',false ,74),
--                                                          ('svar 1',true ,75),
--                                                          ('svar 2',false ,75),
--                                                          ('svar 3',false ,75),
--                                                          ('svar 1',true ,76),
--                                                          ('svar 2',false ,76),
--                                                          ('svar 3',false ,76),
--                                                          ('svar 1',true ,77),
--                                                          ('svar 2',false ,77),
--                                                          ('svar 3',false ,77),
--                                                          ('svar 1',true ,78),
--                                                          ('svar 2',false ,78),
--                                                          ('svar 3',false ,78),
--                                                          ('svar 1',true ,79),
--                                                          ('svar 2',false ,79),
--                                                          ('svar 3',false ,79),
--                                                          ('svar 1',true ,80),
--                                                          ('svar 2',false ,80),
--                                                          ('svar 3',false ,80),
--                                                          ('svar 1',true ,81),
--                                                          ('svar 2',false ,81),
--                                                          ('svar 3',false ,81),
--                                                          ('svar 1',true ,82),
--                                                          ('svar 2',false ,82),
--                                                          ('svar 3',false ,82),
--                                                          ('svar 1',true ,83),
--                                                          ('svar 2',false ,83),
--                                                          ('svar 3',false ,83),
--                                                          ('svar 1',true ,84),
--                                                          ('svar 2',false ,84),
--                                                          ('svar 3',false ,84),
--                                                          ('svar 1',true ,85),
--                                                          ('svar 2',false ,85),
--                                                          ('svar 3',false ,85),
--                                                          ('svar 1',true ,86),
--                                                          ('svar 2',false ,86),
--                                                          ('svar 3',false ,86),
--                                                          ('svar 1',true ,87),
--                                                          ('svar 2',false ,87),
--                                                          ('svar 3',false ,87),
--                                                          ('svar 1',true ,88),
--                                                          ('svar 2',false ,88),
--                                                          ('svar 3',false ,88),
--                                                          ('svar 1',true ,89),
--                                                          ('svar 2',false ,89),
--                                                          ('svar 3',false ,89),
--                                                          ('svar 1',true ,90),
--                                                          ('svar 2',false ,90),
--                                                          ('svar 3',false ,90),
--                                                          ('svar 1',true ,91),
--                                                          ('svar 2',false ,91),
--                                                          ('svar 3',false ,91),
--                                                          ('svar 1',true ,92),
--                                                          ('svar 2',false ,92),
--                                                          ('svar 3',false ,92),
--                                                          ('svar 1',true ,93),
--                                                          ('svar 2',false ,93),
--                                                          ('svar 3',false ,93),
--                                                          ('svar 1',true ,94),
--                                                          ('svar 2',false ,94),
--                                                          ('svar 3',false ,94),
--                                                          ('svar 1',true ,95),
--                                                          ('svar 2',false ,95),
--                                                          ('svar 3',false ,95),
--                                                          ('svar 1',true ,96),
--                                                          ('svar 2',false ,96),
--                                                          ('svar 3',false ,96),
--                                                          ('svar 1',true ,97),
--                                                          ('svar 2',false ,97),
--                                                          ('svar 3',false ,97);
