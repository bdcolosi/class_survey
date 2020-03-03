create table class_status (
    id serial primary key, 
    status_title text not null, 
    rank integer);
​
insert into class_status
    (status_title, rank) 
values 
    ('Awesome', 5), 
    ('Great', 4),
    ('Good', 3),
    ('Okay', 2),
    ('Poor', 1),
    ('Unranked', 0);
    


CREATE TABLE topics (
    id serial primary key,
    topic_name text,
    ranking integer REFERENCES class_status(id)
);

INSERT INTO topics (topics_name, ranking)
VALUES 
('HTML', 4), 
('CSS', 4),
('JAVASCRIPT', 4),
('NODEJS', 4),
('EXPRESSJS', 4);