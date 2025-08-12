# XYZ Hospital Web Application

This is a simple hospital management web application developed as part of the Advanced Java Programming course assignment. The project meets the requirements specified in the assignment and includes a basic UI structure with multiple pages.

## Project Overview
The application consists of:
- Top Frame: Displays the hospital name ("XYZ Hospital"), centered horizontally and vertically.
- Left Frame (Menu): Contains navigation links to different sections/pages of the hospital, such as Registration Form, ENT Department, Orthopedics Department, etc. The menu remains visible while navigating between pages for easy access.
- Right Frame (Main Content): Displays the content for the selected section. Each department page contains informational content related to that department.

## Features
1. Fixed Layout:
   - Top frame with hospital name.
   - Left-side frame with persistent navigation menu.
   - Right-side frame for displaying page content.

2. Registration Form:
   - Includes form fields like Name, Email, Phone Number, etc.
   - Interactive validation:
     - Invalid email format shows a general "Invalid Email" message (without exposing the pattern).
     - Invalid phone number shows "Invalid Number."
   - All buttons are interactive.

3. Department Pages:
   - ENT Department: Contains detailed information about the ENT facilities.
   - Orthopedics Department: Contains detailed information about orthopedic treatments and facilities.
   - Additional departments can be added easily.

4. Interactive Navigation:
   - Selecting a menu item updates the right-side content while keeping the top and left frames fixed.
   - Simple, user-friendly design suitable for demonstration purposes.

## File Structure
XYZ-Hospital/
│
├── index.html          # Main home page with frames  
├── registration.html   # Registration form page  
├── ent.html            # ENT department page  
├── ortho.html          # Orthopedics department page  
├── styles.css          # Common CSS styling for all pages  
├── script.js           # JavaScript for form validation and interactivity  
└── README.md           # Project documentation  

## Requirements
This project was developed specifically to meet the Advanced Java Programming course assignment requirements. The features, layout, and validations follow the assignment's given instructions.

## How to Run
1. Clone this repository:
   git clone https://github.com/your-username/XYZ-Hospital.git
2. Open index.html in any modern web browser.
3. Navigate through the menu to explore different pages.

## Technologies Used
- HTML  
- CSS  
- JavaScript  

## Author
Mohan Narayanapuram  
B.Tech - CSE (Data Science)  
Advanced Java Programming Course Assignment
