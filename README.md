# 60-Base Clock

<video src="https://raw.githubusercontent.com/BarryYangi/clock/main/public/clock.mov" controls width="100%"></video>

A digital clock visualization project based on the sexagesimal (60-base) time system.

## Design Concept

Time is a sexagesimal measurement system: 60 seconds, 60 minutes, 24 hours. Therefore, only 60 numbers are needed to fully express all time.

This clock displays all numbers from 01 to 60 in a 5-column × 12-row grid format, using different visual markers to represent the current time:

- **Hours**: Marked with square brackets `[HH]`, with an upper limit of 24
- **Minutes**: Highlighted for quick recognition of the current minute within the hour
- **Seconds**: Marked with an underline, jumping every second to display the current second in real-time

## Features

- Real-time display of current time (hours, minutes, seconds)
- 60-number grid layout (5 columns × 12 rows)
- Seconds marked with underline, jumping in real-time every second
- Responsive design, adapting to different screen sizes
- Uses MonoLisa monospace font to ensure number alignment

## Usage

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## OBS Usage

This clock can be easily imported into OBS Studio:

1. Add a "Browser Source" in OBS
2. Enter the local development address (e.g., `http://localhost:3000`) or the deployed URL
3. Set appropriate width and height (recommended to maintain original aspect ratio)
4. Check "Refresh browser when scene becomes active" to keep time synchronized

You can also deploy the project to a server and use the public URL in OBS, so you don't need to run it locally.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- MonoLisa font - Monospace number display

## Known Issues

- The version with jumping seconds may run 1 second faster than real-world time (recorded, pending fix)

## License

MIT
