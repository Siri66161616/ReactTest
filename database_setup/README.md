USE my_database;

CREATE TABLE std_questioneers (
id INT AUTO_INCREMENT PRIMARY KEY,
sub_category VARCHAR(255),
category VARCHAR(255),
check_tobe_performed VARCHAR(255)
);

INSERT INTO std_questioneers (sub_category, category, check_tobe_performed)
VALUES
('Hardware', 'System', 'Verify power supply connection'),
('Software', 'Application', 'Check version compatibility'),
('Network', 'Infrastructure', 'Ensure firewall rules are applied');

select \* from my_database.std_questioneers;

CREATE TABLE std_check_submissions (
id INT AUTO_INCREMENT PRIMARY KEY,
sub_category VARCHAR(255),
check_tobe_performed VARCHAR(255),
category VARCHAR(255),
action_data VARCHAR(255),
project_id INT,
documented_outcome VARCHAR(255)
);

INSERT INTO std_check_submissions
(sub_category, check_tobe_performed, category, action_data, project_id, documented_outcome)
VALUES
('Hardware', 'Verify power supply connection', 'System', 'Power cable reconnected', 101, 'System powered on successfully'),
('Software', 'Check version compatibility', 'Application', 'Updated to latest version', 102, 'Version is now compatible'),
('Network', 'Ensure firewall rules are applied', 'Infrastructure', 'Firewall rules updated', 103, 'Traffic allowed as expected');

SELECT \* FROM my_database.std_check_submissions;
