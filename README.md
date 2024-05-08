# How to run tests

### Pre-installed on local:

- npm and node js
- add .env to root folder

```
# .env example
API_URL=https://api.github.com
GITHUB_TOKEN=<YOUR_TOKEN>


```

---

### Test run in local:

1. Install all packages locally

```
npm install
```

2. Install playwright

```
npx playwright install
```


3. Run tests for chosen project e.g.

```
playwright test --project='api-tests'
```


---

### Test run with allure report

1. Run tests in root folder

```
ALLURE_RESULTS_DIR=./tests/.reports/api-tests/allure-results && npx bddgen && npx playwright test --project='api-tests'
```

- there is also shorter command from package.json scripts to run all tests

```
npm run api
```

- more examples [here](https://playwright.dev/docs/running-tests)

---

2. Generate report

```
allure generate tests/.reports/api-tests/allure-results -o tests/.reports/api-tests/allure-report --clean
```

3. Open report

```
allure open tests/.reports/api-tests/allure-report
```
