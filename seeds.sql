-- Seed data for A.B.C. Music streaming service
-- IDs are handled by AUTOINCREMENT, no need to specify them
-- Data sourced from Billboard Year-End Hot 100 (2024)

INSERT INTO artist (name)
VALUES
    ('Teddy Swims'),
    ('Shaboozey'),
    ('Benson Boone'),
    ('Post Malone'),
    ('Jack Harlow'),
    ('Kendrick Lamar'),
    ('Sabrina Carpenter'),
    ('Tommy Richman'),
    ('Hozier'),
    ('Noah Kahan'),
    ('Taylor Swift'),
    ('Tate McRae'),
    ('Billie Eilish'),
    ('Chappell Roan'),
    ('SZA'),
    ('Doja Cat'),
    ('Tyla'),
    ('Ariana Grande'),
    ('Zach Bryan'),
    ('Morgan Wallen');


INSERT INTO album (title, year, artist_id)
VALUES
    ('I''ve Tried Everything But Therapy (Part 1)', 2023, 1),
    ('Where I''ve Been, Isn''t Where I''m Going', 2024, 2),
    ('Fireworks & Rollerblades', 2024, 3),
    ('F-1 Trillion', 2024, 4),
    ('Short n'' Sweet', 2024, 7),
    ('Unreal Unearth', 2023, 9),
    ('Stick Season', 2022, 10),
    ('Lover', 2019, 11),
    ('Think Later', 2023, 12),
    ('Hit Me Hard and Soft', 2024, 13),
    ('The Rise and Fall of a Midwest Princess', 2023, 14),
    ('SOS', 2022, 15),
    ('Scarlet', 2023, 16),
    ('Tyla', 2024, 17),
    ('Eternal Sunshine', 2024, 18),
    ('Zach Bryan', 2023, 19),
    ('One Thing at a Time', 2023, 20);


INSERT INTO genre (genre)
VALUES
    ('Pop'),
    ('Hip-Hop'),
    ('R&B'),
    ('Country'),
    ('Indie'),
    ('Folk'),
    ('Afrobeats');


INSERT INTO song (title, length, artist_id, album_id)
VALUES
    ('Lose Control', 199, 1, 1),
    ('A Bar Song (Tipsy)', 186, 2, 2),
    ('Beautiful Things', 180, 3, 3),
    ('I Had Some Help', 179, 4, 4),
    ('Lovin on Me', 167, 5, NULL),
    ('Not Like Us', 274, 6, NULL),
    ('Espresso', 175, 7, 5),
    ('Million Dollar Baby', 203, 8, NULL),
    ('Too Sweet', 277, 9, 6),
    ('Stick Season', 195, 10, 7),
    ('Cruel Summer', 178, 11, 8),
    ('Greedy', 132, 12, 9),
    ('Birds of a Feather', 210, 13, 10),
    ('Good Luck, Babe!', 218, 14, 11),
    ('Saturn', 216, 15, 12),
    ('Agora Hills', 181, 16, 13),
    ('Water', 194, 17, 14),
    ('We Can''t Be Friends', 215, 18, 15),
    ('I Remember Everything', 243, 19, 16),
    ('Last Night', 163, 20, 17);


INSERT INTO song_genres (song_id, genre_id)
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
