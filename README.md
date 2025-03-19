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

- Register and authenticate securely.
- Explore books by various categories.
- Add books to the cart and proceed through a secure checkout process.
- Review and rate purchased books.
- Manage personal user profiles.

### For Admins 

- Manage inventory, including add, edit, and remove listings.
- Oversee order processing and status updates.
- Analyze sales data and generate reports.
- Control user access and roles.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Appreciation to the Information Technology Institute (ITI) for their guidance.
- Gratitude to the MEAN Stack community for their invaluable resources.

---

Made with ❤️ by the PageTurner Development Team
