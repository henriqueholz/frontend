## Setup Instructions

First, run npm install to install next dependencies:

```bash
npm install
```

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

There are 3 dropdowns on the top of the page, each one is responsible for one of the parameters required to perform the Imgur gallery request: Gallery section, window, and sort.
Once the page is loaded for the first time, it will perform the first request, using section = hot, sort = viral, and window = day.
Each time one of these dropdown values changes, a new request is sent with the dropdown values, updating the page with the new result.

The request results will be shown in a grid, the image description is on the image bottom.
If the result has a result.images.type "image/jpeg", then the result.images.link image is shown on the grid, if not a "no image available" is shown.

I downloaded some request results with different filter values to help me develop the solution, they are now used as a fallback mock, if the request does not work the solution will use these mocks instead.
