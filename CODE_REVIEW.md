#### Code Smells/Improvements:
  - Spinner must be there as user tries to fetch the books with the text he/she enters (`Fixed`).
  - Unittests are faling as `failedAddToReadingList` and `failedRemoveFromReadingList` are not available in reading-list.reducers.ts (`Fixed`).
  - Error handling need to be done when there are no books with search text. (`Fixed`).
  - Maintaining async pipe is one of the improvements. Fetching books through selectors observable and subscribing through async pipe. (`Fixed`).
  - Written missing testcases.(`Fixed`)
#### Accessibility issues identified (Automated scan):
  - Background and Foreground colors do not have a sufficient contrast ratio. (`Fixed`).
  - Buttons do not have an accessible name. (`Fixed`).
#### Accessibility issues identified (Manually):
  - Reading List close button does not have a aria-label (`Fixed`).
  - Added aria disabled for the want to read button (`Fixed`).
  - Images need to have `alt` attribute (`Fixed`).