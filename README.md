React 
Tailwind CSS (https://tailwindcss.com/docs/guides/create-react-app)
Jest
Axios



Grid Layout w/ Flexbox


Conventions:
- have separate test folder (except with create-react-app I guess)
- describe block should be name of file
- always do the simple thing to pass the test
- always do the simplest thing to fix the error you're working on
- never refactor/change a test while it's in red (if multiple tests)
>>> use 'it.skip'


Notes:
- the 'it' function defines a single test
>>> have it start with a present tense verb
- the 'test' function is equivalent to 'it'
>>> stick to 'it' since we're doing behavior driven development style of TDD
- 'toMatch' function is called a matcher (there's a variety)
- in order to get to the real implementation, we need to add more tests => a process called triangulation







Run Tests:
- npm test
- npm test --coverage
- npm test -- --coverage --watchAll=false