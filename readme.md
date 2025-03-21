# React i18n Template

This is a template for a React application with i18n (internationalization) support.

## Technologies Used

*   React
*   Vite
*   TypeScript
*   i18next
*   i18next-browser-languagedetector
*   lucide-react
*   styled-components
*   tailwindcss
*   eslint
*   vitest

## Supported Languages

*   English (en)
*   Spanish (es)
*   Chinese (zh)
*   Korean (ko)
*   Arabic (ar)
*   French (fr)
*   Japanese (ja)

## Scripts

*   `dev`: Runs the development server using Vite.
*   `build`: Builds the application for production.
*   `lint`: Lints the code using ESLint.
*   `preview`: Previews the built application.
*   `test`: Runs the tests using Vitest.
*   `test:coverage`: Runs the tests with coverage using Vitest.

## How to Run

1.  Install dependencies:

    ```bash
    pnpm install
    ```
2.  Run the development server:

    ```bash
    pnpm run dev
    ```

## Configuration

The i18n configuration is located in `src/i18n/config.ts`. It uses `i18next` and `i18next-browser-languagedetector` to handle translations and language detection.

Translations are located in `src/i18n/locales` in JSON format.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
