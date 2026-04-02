-- Seed data for A.B.C. Music streaming service

INSERT INTO genre (id, genre)
VALUES
    (1, 'Pop'),
    (2, 'Hip-Hop'),
    (3, 'R&B'),
    (4, 'Country'),
    (5, 'Indie'),
    (6, 'Folk'),
    (7, 'Afrobeats');


INSERT INTO song (id, artist, album, songs)
VALUES
    (1, 'Teddy Swims', 'I''ve Tried Everything But Therapy (Part 1)', 'Lose Control'),
    (2, 'Shaboozey', 'Where I''ve Been, Isn''t Where I''m Going', 'A Bar Song (Tipsy)'),
    (3, 'Benson Boone', 'Fireworks & Rollerblades', 'Beautiful Things'),
    (4, 'Post Malone', 'F-1 Trillion', 'I Had Some Help'),
    (5, 'Jack Harlow', 'Single', 'Lovin on Me'),
    (6, 'Kendrick Lamar', 'Single', 'Not Like Us'),
    (7, 'Sabrina Carpenter', 'Short n'' Sweet', 'Espresso'),
    (8, 'Tommy Richman', 'Single', 'Million Dollar Baby'),
    (9, 'Hozier', 'Unreal Unearth', 'Too Sweet'),
    (10, 'Noah Kahan', 'Stick Season', 'Stick Season'),
    (11, 'Taylor Swift', 'Lover', 'Cruel Summer'),
    (12, 'Tate McRae', 'Think Later', 'Greedy'),
    (13, 'Billie Eilish', 'Hit Me Hard and Soft', 'Birds of a Feather'),
    (14, 'Chappell Roan', 'The Rise and Fall of a Midwest Princess', 'Good Luck, Babe!'),
    (15, 'SZA', 'SOS', 'Saturn'),
    (16, 'Doja Cat', 'Scarlet', 'Agora Hills'),
    (17, 'Tyla', 'Tyla', 'Water'),
    (18, 'Ariana Grande', 'Eternal Sunshine', 'We Can''t Be Friends'),
    (19, 'Zach Bryan', 'Zach Bryan', 'I Remember Everything'),
    (20, 'Morgan Wallen', 'One Thing at a Time', 'Last Night');


INSERT INTO registered_genre (song_id, genre_id)
VALUES
    (1, 3),
    (2, 4),
    (3, 1),
    (4, 4),
    (5, 2),
    (6, 2),
    (7, 1),
    (8, 3),
    (9, 5),
    (10, 6),
    (11, 1),
    (12, 1),
    (13, 1),
    (14, 1),
    (15, 3),
    (16, 2),
    (17, 7),
    (18, 1),
    (19, 4),
    (20, 4);
