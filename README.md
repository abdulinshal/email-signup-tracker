# Email Signup Tracker

A lightweight Node.js web app built with Express, MySQL, and EJS that tracks user email signups—and adds a bit of fun with a random number generator or a joke route.

##  Features

- **Email registration**: Users can submit their email to sign up, which gets stored in a MySQL database.
- **Dynamic user count**: The home page shows the total number of registered users.
- **Bonus routes**:
  - `/joke` — Returns a fun joke: *“What do you call a dog that does magic tricks? A labracadabrador.”*
  - `/random_num` — Generates and displays a random “lucky” number from 1 to 10.
- **Secure credentials**: Uses `dotenv` to manage sensitive DB configuration via environment variables instead of hardcoding.
- **EJS templating** and Node.js ecosystem with Express and Body‑Parser for request handling.

---

##  Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js & Express | Server-side environment and routing framework |
| MySQL (`mysql2`) | Relational database for persisting user email signups |
| EJS (Embedded JavaScript) | Templating engine for dynamic HTML rendering |
| `dotenv` | Environment variable management for sensitive data |
| Body-parser | Parses incoming request bodies, used in form submission |

---

##  Project Setup
create your own .env file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=join_us


1. **Clone the repository**:
   ```bash
   git clone https://github.com/abdulinshal/email-signup-tracker.git
   cd email-signup-tracker
