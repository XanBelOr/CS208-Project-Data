-- Seed data for A.B.C. Music streaming service

INSERT INTO artists (id, name)
VALUES
    (1, 'Teddy Swims'),
    (2, 'Shaboozey'),
    (3, 'Benson Boone'),
    (4, 'Post Malone'),
    (5, 'Jack Harlow'),
    (6, 'Kendrick Lamar'),
    (7, 'Sabrina Carpenter'),
    (8, 'Tommy Richman'),
    (9, 'Hozier'),
    (10, 'Noah Kahan'),
    (11, 'Taylor Swift'),
    (12, 'Tate McRae'),
    (13, 'Billie Eilish'),
    (14, 'Chappell Roan'),
    (15, 'SZA'),
    (16, 'Doja Cat'),
    (17, 'Tyla'),
    (18, 'Ariana Grande'),
    (19, 'Zach Bryan'),
    (20, 'Morgan Wallen');


INSERT INTO tracks (id, title, artist_id, album, genre)
VALUES
    (1, 'Lose Control', 1, 'I''ve Tried Everything But Therapy (Part 1)', 'R&B'),
    (2, 'A Bar Song (Tipsy)', 2, 'Where I''ve Been, Isn''t Where I''m Going', 'Country'),
    (3, 'Beautiful Things', 3, 'Fireworks & Rollerblades', 'Pop'),
    (4, 'I Had Some Help', 4, 'F-1 Trillion', 'Country'),
    (5, 'Lovin on Me', 5, NULL, 'Hip-Hop'),
    (6, 'Not Like Us', 6, NULL, 'Hip-Hop'),
    (7, 'Espresso', 7, 'Short n'' Sweet', 'Pop'),
    (8, 'Million Dollar Baby', 8, NULL, 'R&B'),
    (9, 'Too Sweet', 9, 'Unreal Unearth', 'Indie'),
    (10, 'Stick Season', 10, 'Stick Season', 'Folk'),
    (11, 'Cruel Summer', 11, 'Lover', 'Pop'),
    (12, 'Greedy', 12, 'Think Later', 'Pop'),
    (13, 'Birds of a Feather', 13, 'Hit Me Hard and Soft', 'Pop'),
    (14, 'Good Luck, Babe!', 14, 'The Rise and Fall of a Midwest Princess', 'Pop'),
    (15, 'Saturn', 15, 'SOS', 'R&B'),
    (16, 'Agora Hills', 16, 'Scarlet', 'Hip-Hop'),
    (17, 'Water', 17, 'Tyla', 'Afrobeats'),
    (18, 'We Can''t Be Friends', 18, 'Eternal Sunshine', 'Pop'),
    (19, 'I Remember Everything', 19, 'Zach Bryan', 'Country'),
    (20, 'Last Night', 20, 'One Thing at a Time', 'Country');
