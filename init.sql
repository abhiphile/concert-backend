CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INTEGER,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, name, email, age, password)
VALUES
    ('john_doe', 'John Doe', 'john.doe@example.com', 28, 'securepassword123'),
    ('jane_smith', 'Jane Smith', 'jane.smith@example.com', 32, 'mypassword456'),
    ('mark_twain', 'Mark Twain', 'mark.twain@example.com', 45, 'password789'),
    ('lucy_adams', 'Lucy Adams', 'lucy.adams@example.com', 25, 'passw0rd'),
    ('tom_hardy', 'Tom Hardy', 'tom.hardy@example.com', NULL, 'hardypass123');

