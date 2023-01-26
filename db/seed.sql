\c songs_dev;

INSERT INTO playlist (title)
VALUES 
('Sleepy'),
('Travel'),
('Sport');

INSERT INTO album (title)
VALUES 
('Young Americans'),
('Remain in Light'),
('New Day Rising'),
('Thin Mind'),
('This is...');


INSERT INTO artist (name)
VALUES 
('David Bowie'),
('Talking Heads'),
('Hüsker Dü'),
('Wolf Parade'),
('Icona Pop');


INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES
    ('Fame', 'David Bowie', 'Young Americans', '4:12', true, '1' ),
    ('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true, '2' ),
    ('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true, '3' ),
    ('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false, '1' ),
    ('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true, '3' ),
    ('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true, '3' ),
    ('We Got the World', 'Icona Pop', 'This is...', '3:17', false, '2' );


INSERT INTO reviews (song_id, reviewer, title, content, rating )
VALUES
('1', 'Evan', 'My Favorite', 'This song crushes it when it comes to awesome beats', 4),
('2', 'Eva', 'My Favorite', 'This song crushes it when it comes to inspiring me', 3),
('3', 'John', 'My Least Favorite', 'This song crushes it when it comes to destroying my mood', 1),
('2', 'Juliana', 'I Love listening to this', 'I finally have something to listen when I need to be calm', 5),
('2', 'David', 'Cool song', 'But I got way into the lyrics, I sing it everywhere I am', 3),
('2', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for my playlist', 3),
('2', 'Alison', 'A lifesaver!','Helped me combat my deppression!', 5),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours confiment listen to this!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);

