## Setup Instructions

First, run npm install to install next dependencies:

```bash
npm install
```

run the development server:

```bash
npm run start
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

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.602 s
```

## Provide information about your approach

Solution implemented using React, Next, and Typescript.

There are 3 dropdowns on the top of the page, each one is responsible for one of the parameters required to perform the Imgur gallery request: Gallery section, window, and sort.

Once the page is loaded for the first time, it will perform the first request, using section = hot, sort = viral, and window = day.

Each time one of these dropdown values changes, a new request is sent with the dropdown values, updating the page with the new result.

The request results will be shown in a grid, the image description is on the image bottom. If description field is null, title value will be shown.

The request values will be filtered, only results with result.images.type "image/jpeg" will be shown on the grid, if the result.images.link field is empty a "no image available" is shown.

The application must run on http://0.0.0.0:3000/, otherwise the requests will not work. There are a few response mocks available.
