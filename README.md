# PageTurner-Book-Store-E-commerce-Platform
PageTurner is a sophisticated online bookstore platform built on the MEAN stack (MongoDB, Express.js, Angular, and Node.js). Designed for the Information Technology Institute (ITI), this application offers a full-featured e-commerce experience tailored for book lovers and retailers alike.

# Book Store E-commerce MEAN Stack Project

![MEAN Stack](https://img.shields.io/badge/MEAN-Stack-green.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/badge/Last%20Updated-March%202025-brightgreen)

## ⚡ Features

- **User Authentication System:** Secure login and registration systems for users.
- **Dynamic Book Catalog:** Admins can manage book listings with ease.
- **Shopping Cart & Checkout:** Full e-commerce capabilities including a shopping cart and checkout process.
- **Order Tracking:** Users can track their orders in real-time.
- **Responsive Design:** A mobile-friendly design ensures accessibility on all devices.
- **Secure Payment Integration:** Integrates with leading payment gateways for secure transactions.
- **Advanced Search:** Users can search for books by title, author, or ISBN.

## 📂 Project Structure

```
PageTurner/
├── client/                     # Angular front-end
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── styles/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── server/                     # Express back-end
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── validations/
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Technology Stack

### Frontend

- Angular v13+
- Angular Material
- NgRx
- RxJS
- HTML5 & CSS3/SCSS
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

### DevOps & Tools

- Git & GitHub
- npm
- ESLint & Prettier
- Jest & Jasmine

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Angular CLI (v13+)
- MongoDB

### Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahmed-el-amine/PageTurner.git
   cd PageTurner
   ```

2. **Backend setup:**

   ```bash
   cd apps/server
   npm install
   npm run dev
   ```

3. **Setup Frontend**

```bash
cd ../client
npm install
ng serve
````

4. **Access the Application**
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:5000/api

## 🖥️ Application Features

### For Customers

- User registration and authentication
- Browse and search books by category, author, title
- View book details including reviews and ratings
- Add books to shopping cart
- Process secure checkout
- Track order status
- View order history
- Manage user profile

### Admin Features

- Comprehensive dashboard with analytics
- Manage book inventory (add, edit, remove)
- Manage categories and authors
- Process and track customer orders
- View and manage user accounts
- Generate sales reports

## 🧑‍💻 Contributors

- [Ahmed El Amine](https://github.com/ahmed-el-amine)
- [Ahmed Essam](https://github.com/AESharak)
- [Nada Emam](https://github.com/NadaEmamm)
- [Mustafa Ashraf](https://github.com/Mustafa-Ashraf751)
- [Fares Edres](https://github.com/FaresEdres)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Information Technology Institute (ITI) for project requirements and guidance
- MEAN Stack community for excellent documentation and resources
- All contributors who have helped shape this project

---

Made with ❤️ by the Book Store Development Team
