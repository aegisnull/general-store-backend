# General Store Backend

This is the backend repository for the General Store web application, the backend is built using Node.js and Express.js, and uses MongoDB as the database.

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/aegisnull/general-store-backend.git
```

2. Install dependencies

```bash
npm install
```

## 🚀 Usage

Start the server by running the following command:

```bash
npm start
```

The server will start using Nodemon, which will automatically restart the server whenever changes are made to the code.

## 🧪 Testing

To run the tests, use the following command:

```bash
npm test
```

This will run the Jest test suite and watch for changes.

### Testing Coverage

The testing coverage is as follows:

| File                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ------------------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                             | 63.41   | 0        | 45      | 63.41   |
| general-store-backend                 | 95.23   | 100      | 100     | 95.23   |
| app.js                                | 95.23   | 100      | 100     | 95.23   | 20                |
| general-store-backend/src/controllers | 46.03   | 100      | 33.33   | 46.03   |
| order.js                              | 21.42   | 100      | 0       | 21.42   | 4-10,15-20        |
| product.js                            | 67.64   | 100      | 60      | 67.64   | 16-21,50-56       |
| user.js                               | 20      | 100      | 0       | 20      | 4-10,15-21        |
| general-store-backend/src/models      | 100     | 100      | 100     | 100     |
| order.js                              | 100     | 100      | 100     | 100     |
| product.js                            | 100     | 100      | 100     | 100     |
| user.js                               | 100     | 100      | 100     | 100     |
| general-store-backend/src/routes      | 100     | 100      | 100     | 100     |
| orders.js                             | 100     | 100      | 100     | 100     |
| products.js                           | 100     | 100      | 100     | 100     |
| users.js                              | 100     | 100      | 100     | 100     |
| general-store-backend/src/services    | 43.18   | 0        | 44.44   | 43.18   |
| orders.js                             | 33.33   | 100      | 0       | 33.33   | 4-5,9-13          |
| products.js                           | 85.71   | 100      | 80      | 85.71   | 9-10              |
| users.js                              | 19.04   | 0        | 0       | 19.04   | 6-31,36-48        |

To generate a coverage report, use the following command:

```bash
npm run test:coverage
```

This will generate a coverage report in the `coverage` folder.

## 📚 Dependencies

The backend uses the following dependencies:

- cors: ^2.8.5
- dotenv: ^16.1.4
- express: ^4.18.2
- mongoose: ^7.2.2

## Repository 📂

- 📁 [Frontend](https://github.com/aegisnull/general-store-frontend)
- 📁 [Backend](https://github.com/aegisnull/general-store-backend)

## Demo 🌐

- [Frontend](https://store-frontend-aegisnull.vercel.app)
- [Backend](https://general-store-backend-production-62ab.up.railway.app/)

## Contributors 🤝

This project was created by Luis Tellez.

- [GitHub](https://github.com/aegisnull)

- [LinkedIn](https://www.linkedin.com/in/luistellezv/)

Feel free to contact me with any questions or feedback regarding the project.

Happy coding! 🎉
