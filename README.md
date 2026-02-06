# PlevenFishing Atlas
A Full-Stack Geospatial Directory for Anglers

## Overview
PlevenFishing is a specialized web platform designed for the angling community in the Pleven region, Bulgaria.
It provides a curated database of fishing locations, categorized by water body type and fishing methods,
integrated with Google Maps for precise navigation.

## Key Features
- Dynamic Content Management: Fully managed via Django Admin.
- Advanced Filtering: Custom-built logic to filter locations by methods (Feeder, Spinning, etc.) using Django ManyToMany relationships.
- Geospatial Integration: Embedded Google Maps API for real-time location tracking.
- SEO & UX Focused: Clean, semantic HTML5, responsive CSS (Flexbox/Grid), and optimized typography (Google Fonts).

## Technical Stack
- Backend: Python , Django Rest Framework
- Database: PostgreSQL
- Frontend: HTML, CSS, JavaScript
- Environment Management: Python-dotenv for secure credential handling.

## Detailed Installation Guide
- Follow these steps to get the project up and running on your local machine:
- Make sure you have the following installed: Python 3.8+, PostgreSQL (Ensure the service is running) and also Git
- git clone https://github.com/ivailoiliev89-netizen/Pleven-Fishing.git
- cd Pleven-Fishing
- python -m venv venv ( for Windows (CMD): venv\Scripts\activate or Windows (Git Bash): source venv/Scripts/activate )
- pip install -r requirements.txt
- The project uses python-dotenv for security. Create a .env file in the root directory and add your credentials:
- ---> DB_NAME=your_db_name
- ---> DB_USER=your_postgres_user
- ---> DB_PASSWORD=your_password
- ---> DB_HOST=localhost
- ---> DB_PORT=5432 (or 5433)
- ---> SECRET_KEY=any-long-random-string
- Prepare the PostgreSQL database : python manage.py migrate
- Since the database is empty by default, create an admin account to add fishing spots: python manage.py createsuperuser
- python manage.py runserver
- Now you can log in at http://127.0.0.1:8000/admin and start adding Rivers, Lakes, Swamps and Methods.


## Future Improvements
- Integration with a Weather API for real-time fishing conditions.
- User-submitted fishing reports with photo uploads.
- Interactive "Catch Map" using Leaflet.js.





