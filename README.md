# Netflix Clone - Readme

This project is a small Netflix clone built using React and Vite. It allows users to view trending movies, original series, action, comedy, and more. Users can click on movie images to watch trailers if they are available on YouTube. If a trailer is not available, a "Trailer Not Found" message will be displayed in green at the bottom of the image.

## Project Structure

The project's folder structure is organized as follows:

project/
├── src/
│ ├── components/
│ │ ├── Banner/
│ │ │ ├── Banner.jsx
│ │ │ └── Banner.css
│ │ ├── Navbar/
│ │ │ ├── Navbar.jsx
│ │ │ └── Navbar.css
│ │ └── Row/
│ │ ├── Row.jsx
│ │ └── Row.css
│ ├── request.js
│ └── axios.js
├── package.json
└── readme.md


## Dependencies

The project has the following dependencies:

1. **axios**: Version 1.4.0 - A popular HTTP client library for making API requests.
2. **movie-trailer**: Version 3.0.2 - A library to get movie trailers from YouTube.
3. **react**: Version 18.2.0 - A JavaScript library for building user interfaces.
4. **react-dom**: Version 18.2.0 - Provides DOM-specific methods that can be used at the top level of your app.
5. **react-youtube**: Version 10.1.0 - A simple wrapper around the YouTube Player API for React.

## Available Scripts

In the project directory, you can run the following scripts:

1. **dev**: Runs the development server using Vite.
2. **build**: Builds the production-ready application using Vite.
3. **preview**: Starts a local server to preview the production build.

To run these scripts, use the following command format: `npm run <script-name>`

## How to Use

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the project dependencies.
3. Use `npm run dev` to start the development server and preview the app locally.
4. Explore the Netflix clone with various movie categories and click on the movie images to watch trailers if available.

## Contributing

If you want to contribute to this project, you are welcome to do so! Follow these steps:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch with a descriptive name for your changes: `git checkout -b my-feature`.
4. Make your changes and commit them: `git commit -m "Add new feature"`.
5. Push your changes to your forked repository: `git push origin my-feature`.
6. Open a pull request on the original repository, explaining your changes and the feature you added.

We appreciate your contributions and will review your pull request as soon as possible!

## Note
Please note that the availability of trailers depends on whether the movie trailers are available on YouTube. If no trailer is found, the "Trailer Not Found" message will be displayed.

Happy Coding!