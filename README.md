# ShowMe

ShowMe is a web application that allows users to discover, share, and interact with photos. Similar to popular platforms like Pinterest and Instagram, ShowMe lets users upload their own photos, view and save others' photos, leave comments, and even download images. The app requires users to log in using Google authentication to ensure a personalized and secure experience.

![showme-hero](https://github.com/xexraa/ShowMe/assets/121942715/69a1d59e-59dc-4089-be73-41876d62c035)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features
- ShowMe utilizes Google authentication to allow users to log in and access the app's features securely.

## Home Page
- The home page of ShowMe displays a feed of photos uploaded by users.
- Users can scroll through the feed to discover and interact with images.

## Photo Upload
- Authenticated users can upload their own photos to the platform.
- Uploaded photos are displayed on the home page for others to see.

## Interactions
- Users can like and save photos to their profile for later viewing.
- They can also leave comments on photos to engage with the community.

## Download Photos
- ShowMe allows users to download images they like.

## Similar Photos
- Under the comments section of a photo, users can find a section that displays other photos similar to the one they are currently viewing.
- This feature enhances user engagement and discovery.

## User Profiles
- Users have personalized profiles where they can view their uploaded photos, liked/saved photos, and profile information.

## Technologies Used
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Backend**: Sanity
- **Authentication**: Google Auth

## Getting Started
To run the ShowMe web app locally, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/your-username/showme-web-app.git
```
2. Change your current directory to the project folder:
```bash
cd showme-web-app
```
3. Install the required dependencies:
```bash
npm install
```
4. Create a .env file at the root of the project with the following content:
```bash
REACT_APP_GOOGLE_API_TOKEN=
REACT_APP_SANITY_PROJECT_ID=
REACT_APP_SANITY_TOKEN=
```
5. Start the development server:
```bash
npm start
```

## Usage
1. Log in using your Google account to access the app.
2. Explore the home page to discover and interact with photos.
3. Upload your own photos to share with the community.
4. Like and save photos to your profile.
5. Leave comments on photos to engage with other users.
6. Download images you like.
