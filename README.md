# 🛒 Sarcastic Shopping 

**Sarcastic Shopping** is a full-stack fictional eCommerce application built with a humorous twist, featuring **React** on the frontend and **Python (Flask)** on the backend. This app sells products that no one really needs, complete with absurd descriptions, nonsensical categories, and sarcastic interactions throughout the shopping experience. 

![Preview](/preview.png)

## ✨ Features

- **Hilarious Product Listings**: Explore items with comically pointless names, descriptions, and prices.
- **Category Filtering**: Filter items by absurd categories, such as:
  - **All Absurdities**
  - **Luxuriously Useless**
  - **Nostalgic Nonsense**
  - **Quirkily Comforting**
- **User Authentication**:
  - Sign up, sign in, and sign out securely, with form validation and error handling.
  **Cart Management**:
  - Add products to your cart with preview.
  - Custom messages on the cart icon for empty, single-item, or multiple-item states.
- **Protected Checkout**:
  - Only accessible by logged-in users. Unauthorized users receive a notification.
  - Features Stripe integration for payment processing:
- **Customizable Checkout Options**:
  - **Shipping Options**: Choose from over-the-top delivery methods with unique fees.
  - **Gift Wrap Choices**: Add whimsical wrapping options for an extra laugh.
  - **Warranty Options**: Pick a humorous, often useless warranty plan for your item.
- **Sarcastic Chatbot**: A bot that responds to user queries with random, witty remarks.

## 🛠️ Tech Stack

### Backend
- **Python** and **Flask** for server-side logic
- **flask_restful** for API development
- **flask_cors** for handling CORS policies
- **flask_bcrypt** for password hashing
- **PostgreSQL** database with:
  - **SQLAlchemy** ORM for database interactions
  - **psycopg2** as Python-PostgreSQL Database Adapter
- **flask_jwt_extended** for JWT-based authentication
- **dotenv** for environment variables management
- **gunicorn** as Python WSGI HTTP Server for UNIX


### Frontend
- **React** with **Vite** for a fast and modern frontend
- **TailwindCSS** for utility-first styling
- **MUI** (Joy and Material UI) for UI components
- **Formik** and **Yup** for form validation
- **React Router** for routing
- **React Icons** for iconography

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dnmore/sarcastic-shopping.git
   ```
2. Backend Setup:
   - Navigate to the backend directory:
   ```bash
     cd backend
   ```
   - Install required Python packages:
   ```bash
     pip install -r requirements.txt
   ```
   - Set up environment variables in a `.env` file.
   - Start the Flask server:
   ```bash
     flask run
   ```
3. Frontend Setup:
   - Navigate to the frontend directory:
   ```bash
     cd frontend
   ```
   - Install frontend dependencies:
   ```bash
    npm install
   ```
   - Start the development server:
   ```bash
    npm run dev
   ```
## 🚀 Contributing

Want to add some more absurd product ideas or a new sarcastic comment? Pull requests are welcome! Make sure your additions match the tone and style of the project.

## 📄 License

This project is licensed under the MIT License. Have fun, but don't blame if someone actually tries to buy one of these ridiculous items.

Happy Shopping, Sarcastically! 😜
  
   
