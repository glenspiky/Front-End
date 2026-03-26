# 🛍️ E-Commerce Backend API

A complete Node.js + Express + MongoDB backend for an e-commerce application with full authentication system.

## 📋 Features

- ✅ Product CRUD operations
- ✅ User authentication & authorization
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Shopping cart functionality
- ✅ Order management
- ✅ Error handling & validation
- ✅ Environment configuration
- ✅ Database connection with Mongoose
- ✅ Role-based access control

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── controllers/     # Business logic
│   │   ├── authController.js
│   │   └── productController.js
│   ├── models/          # Database schemas
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/          # API endpoints
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── middleware/      # Custom middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/          # Database config
│   │   └── database.js
│   └── utils/           # Helper functions
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore file
├── package.json        # Dependencies
├── server.js           # Server entry point
└── test-auth.js        # Authentication test script
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start MongoDB**
   - Make sure MongoDB is installed and running
   - Default connection: `mongodb://localhost:27017/ecommerce`

5. **Run the server**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Documentation

### Authentication API

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get user profile | Private |
| PUT | `/api/auth/me` | Update profile | Private |
| PUT | `/api/auth/change-password` | Change password | Private |

### Cart API

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/cart` | Get user's cart | Private |
| POST | `/api/cart` | Add item to cart | Private |
| PUT | `/api/cart/:productId` | Update item quantity | Private |
| DELETE | `/api/cart/:productId` | Remove item from cart | Private |
| DELETE | `/api/cart` | Clear entire cart | Private |
| GET | `/api/cart/summary` | Get cart summary for checkout | Private |

### Query Parameters (for GET /api/products)

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `category`: Filter by category
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `search`: Search in title and description

### Example Requests

**Register a new user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login user:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get user profile (requires token):**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Add item to cart:**
```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "64a1b2c3d4e5f6789012345",
    "quantity": 2
  }'
```

**Get user cart:**
```bash
curl -X GET http://localhost:5000/api/cart \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Update cart item quantity:**
```bash
curl -X PUT http://localhost:5000/api/cart/64a1b2c3d4e5f6789012345 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "quantity": 3
  }'
```

**Remove item from cart:**
```bash
curl -X DELETE http://localhost:5000/api/cart/64a1b2c3d4e5f6789012345 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Clear entire cart:**
```bash
curl -X DELETE http://localhost:5000/api/cart \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Get cart summary:**
```bash
curl -X GET http://localhost:5000/api/cart/summary \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Get all products:**
```bash
curl http://localhost:5000/api/products
```

**Get products with pagination:**
```bash
curl "http://localhost:5000/api/products?page=1&limit=10"
```

**Filter by category:**
```bash
curl "http://localhost:5000/api/products?category=electronics"
```

**Search products:**
```bash
curl "http://localhost:5000/api/products?search=laptop"
```

**Get single product:**
```bash
curl http://localhost:5000/api/products/64a1b2c3d4e5f6789012345
```

**Create product (requires admin token):**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Product",
    "description": "Product description",
    "price": 99.99,
    "category": "electronics",
    "images": ["http://example.com/image.jpg"],
    "thumbnail": "http://example.com/thumb.jpg",
    "stock": 10
  }'
```

## 🗄️ Database Models

### Product Schema
```javascript
{
  title: String (required),
  description: String (required),
  price: Number (required),
  category: String (required),
  images: [String] (required),
  thumbnail: String (required),
  stock: Number (required),
  rating: Number (0-5),
  numReviews: Number,
  isActive: Boolean
}
```

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  role: String ('user' | 'admin'),
  avatar: String,
  isActive: Boolean,
  lastLogin: Date
}
```

### Cart Schema
```javascript
{
  user: ObjectId (required, ref: 'User', unique),
  items: [{
    product: ObjectId (required, ref: 'Product'),
    quantity: Number (required, min: 1),
    addedAt: Date
  }],
  totalAmount: Number (default: 0),
  isActive: Boolean (default: true)
}
```

## 🧪 Testing

### Quick Authentication Test

Run the automated test script to verify authentication works:

```bash
node test-auth.js
```

This script will test:
- ✅ Server health check
- ✅ User registration
- ✅ User login
- ✅ Protected routes
- ✅ Invalid authentication

### Quick Cart Test

Run the automated cart test script to verify cart functionality:

```bash
node test-cart.js
```

This script will test:
- ✅ User authentication
- ✅ Get cart (empty)
- ✅ Add items to cart
- ✅ Update cart quantities
- ✅ Remove items from cart
- ✅ Clear cart
- ✅ Cart summary
- ✅ Unauthorized access

### Manual Testing

The API includes a health check endpoint:

```bash
curl http://localhost:5000/health
```

Response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🚀 Deployment

1. **Set environment variables** for production
2. **Install PM2** for process management:
   ```bash
   npm install -g pm2
   ```
3. **Start with PM2**:
   ```bash
   pm2 start server.js --name "ecommerce-api"
   ```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment mode | development |
| MONGODB_URI | MongoDB connection string | - |
| JWT_SECRET | JWT secret key | - |
| JWT_EXPIRE | JWT expiration time | 7d |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:5173 |

## 🐛 Error Handling

The API includes comprehensive error handling:

- **Validation Errors**: 400 with field-specific messages
- **Not Found**: 404 for missing resources
- **Server Errors**: 500 with generic message
- **Authentication**: 401 for auth failures
- **Authorization**: 403 for permission issues

## 🔧 Development

**Auto-restart during development:**
```bash
npm run dev
```

**View logs:**
```bash
pm2 logs ecommerce-api
```

**Restart application:**
```bash
pm2 restart ecommerce-api
```

## 📄 License

This project is licensed under the ISC License.
