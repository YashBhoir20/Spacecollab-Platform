USE spacecollab;

INSERT INTO Users (name, email, password, role, bio) VALUES
('Sarah Johnson', 'sarah@example.com', '$2a$10$hashedpassword1', 'Student', 'Interested in lunar habitats'),
('Alex Kim', 'alex@example.com', '$2a$10$hashedpassword2', 'Mentor', 'Rocket systems mentor'),
('Admin User', 'admin@example.com', '$2a$10$hashedpassword3', 'Admin', 'Platform administrator');

INSERT INTO Projects (title, description, created_by, domain, status) VALUES
('Lunar Habitat Design', 'Designing sustainable habitats for moon missions.', 1, 'Astronomy', 'In Progress'),
('Mars Rover Simulation', 'Building a rover simulation for Mars terrain analysis.', 2, 'Robotics', 'Open'),
('Satellite Data Analysis', 'Analyzing satellite data using AI models.', 1, 'Satellites', 'Open');

INSERT INTO ProjectMembers (user_id, project_id) VALUES
(1, 1),
(2, 1),
(1, 3);

INSERT INTO Comments (user_id, project_id, content) VALUES
(2, 1, 'Great progress on the habitat insulation model!'),
(1, 1, 'Thanks! Next step is energy optimization.'),
(1, 3, 'Looking for team members familiar with Python data pipelines.');

INSERT INTO Notifications (user_id, message, is_read) VALUES
(1, 'Alex Kim commented on your project.', FALSE),
(1, 'A new member joined Satellite Data Analysis.', FALSE),
(2, 'Sarah Johnson joined Lunar Habitat Design.', TRUE);
