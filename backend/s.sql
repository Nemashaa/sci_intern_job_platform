--
-- Database: `internship_web_app`
--

-- Table structure for table `Addresses`
--
CREATE TABLE `Addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contactNumber` varchar(255) NOT NULL,
  `addressNumber` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `isDefault` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
)

-- Table structure for table `Admins`
--
CREATE TABLE `Admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `contactNumber` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Applications`
--
CREATE TABLE `Applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_applied` datetime DEFAULT NULL,
  `resume` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `jobPostID` int(11) DEFAULT NULL,
  `studentID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`jobPostID`) REFERENCES `JobPosts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (`studentID`) REFERENCES `Students` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Employers`
--
CREATE TABLE `Employers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `addressID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`addressID`) REFERENCES `Addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `JobPosts`
--
CREATE TABLE `JobPosts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deadline` datetime DEFAULT NULL,
  `job_description` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_role` varchar(255) NOT NULL,
  `jobPostImage` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`employerID`) REFERENCES `Employers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Lecturers`
--
CREATE TABLE `Lecturers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contactNumber` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `education` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Recommendations`
--
CREATE TABLE `Recommendations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `visibility` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `lecturerID` int(11) DEFAULT NULL,
  `studentID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`lecturerID`) REFERENCES `Lecturers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (`studentID`) REFERENCES `Students` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Students`
--
CREATE TABLE `Students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `majoring_subjects` varchar(255) NOT NULL,
  `degree_program` varchar(255) DEFAULT NULL,
  `year_of_study` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
)

-- Table structure for table `Users`
--
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `userGroup` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
)