# nest-demo

A minimal viable NestJS backend service framework.

## Features

- Basic NestJS application structure
- Health check endpoint
- TypeScript support
- Development and production modes

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Running the app

```bash
# development mode with auto-reload
npm run start:dev

# production mode
npm run build
npm run start:prod
```

## API Endpoints

- `GET /` - Returns "Hello World!"
- `GET /health` - Health check endpoint with status and timestamp

## Project Structure

```
src/
├── main.ts           # Application entry point
├── app.module.ts     # Root module
├── app.controller.ts # Main controller
└── app.service.ts    # Main service
```

## Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

ISC