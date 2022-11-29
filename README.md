## Setup Instructions

First, run npm install to install dependencies:

```bash
npm install
```

run the development server:

```bash
npm run dev
```

For some reason the request gets a 429 error if running using localhost as host, to bypass this I am using host 0.0.0.0.

Open [http://0.0.0.0:3000/](http://0.0.0.0:3000/) with your browser to see the result.

# Testing

run npm run test to see the results of the tests:

```bash
npm run test
 PASS  src/tests/components/GalleryImages.spec.tsx
  Index page
    ✓ Gallery renders screen correctly (36 ms)
    ✓ Should return the initial state (1 ms)
    ✓ Gallery data should handle return getImages type (1 ms)

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.566 s, estimated 2 s
```

## Provide information about your approach

Solution implemented using React, Next, and Typescript.

There are 3 dropdowns on the top of the page, each one is responsible for one of the parameters required to perform the Imgur gallery request: Gallery section, window, and sort, the default values are section = hot, sort = viral, and window = day.

Each time one of these dropdown values changes, a new request is sent with the new dropdown values, updating the grid with the new results.

The request results will be shown in a grid, the image description is on the image bottom. If description field is null, title will be shown.

The request values will be filtered, only results with result.images.type "image/jpeg" will be shown on the grid, if the result.images.link field is empty a "no image available" image is shown.
