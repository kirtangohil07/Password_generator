# Password Generator App

Welcome to the Password Generator App! This application generates secure passwords based on configurable criteria, allowing you to create passwords of varying lengths and with options for including numbers and special characters.

## Features
- Generate a password of a specified length (between 6 and 100 characters).
- Toggle the inclusion of numbers and special characters in the generated password.
- Copy the generated password to the clipboard with a single click.
- Responsive design that works across different screen sizes.

## Getting Started

To get started with the Password Generator App, follow these instructions:

### Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) must be installed on your development environment.
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/).

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/kirtangphil07/Password_generator.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Password_generator
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the application, use the following command:
```bash
npm start
```
This command will launch a development server, and you can view the app in your web browser at `http://localhost:3000`.

### Building for Production
To create a production build of the app, use the following command:
```bash
npm run build
```
This command generates optimized files in the `build/` directory.

## Usage

Once the application is running, you can generate a password by:
1. Adjusting the desired length of the password using the slider.
2. Selecting whether to include numbers and special characters by using the checkboxes.
3. Clicking the "Copy" button to copy the generated password to the clipboard.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Hooks: React Hooks (e.g., `useState`, `useCallback`, `useEffect`, `useRef`) for managing component state and side effects.

## Contributing
Contributions to the Password Generator App are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your forked repository.
4. Open a pull request and describe your changes.
