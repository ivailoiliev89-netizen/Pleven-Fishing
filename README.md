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

## Installation & Setup
    1. ```bash
    2. git clone ("repo")
    3. After installation, the user must log in to /admin and add objects with photos
    4. Create a .env file and populate it with your DB credentials (see settings.py for required keys).
    5. pip install -r requirements.txt
    6. python manage.py migrate
    7. python manage.py runserver

## Future Improvements
    1. Integration with a Weather API for real-time fishing conditions.
    2. User-submitted fishing reports with photo uploads.
    3. Interactive "Catch Map" using Leaflet.js.

