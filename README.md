# Stock Market Dashboard

A web application that provides an interactive stock market dashboard with real-time stock data visualization, pagination, and CRUD functionalities.

## Features
- 📊 **Stock Data Visualization** using Recharts (Line Chart & Bar Chart)
- 🔄 **Pagination** for managing large datasets
- ✏️ **Edit & Delete** stock entries
- 🛠 **SweetAlert Integration** for user-friendly confirmations
- 🚀 **React Query** for optimized data fetching

## Challenges Faced
### Pagination Implementation
- **State Management Issues:** Managing the current page state while ensuring smooth data fetching.
- **API Query Parameters:** Handling the `page` and `limit` parameters dynamically.
- **Loading States:** Managing UI responsiveness while fetching paginated data.
- **Refetching Issues:** Ensuring updated data is reflected after deletion or modifications.

## Technologies Used
- React.js
- React Router
- Tailwind CSS
- DaisyUI
- Axios
- Recharts
- React Query (TanStack)
- SweetAlert

## Installation & Setup
1. Clone the repository:
   ```sh
   https://github.com/nahidn228/stock-client.git
   cd stock-client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file and add:
     ```sh
     VITE_API_URL=your_api_endpoint_here
     ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment
###  Vercel Fix for 404 Error on Reload
If you get a **404: Page Not Found** error when reloading, follow these steps:
- **For Netlify:**
  1. Create a `_redirects` file in `public/` with the following content:
     ```
     /* /index.html 200
     ```
- **For Vercel:**
  1. Add the following `vercel.json` file:
     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```

## Contributing
Feel free to fork, improve, and submit pull requests! 🎉

## License
This project is licensed under the [MIT License](LICENSE).