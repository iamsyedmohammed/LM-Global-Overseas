# Comprehensive Architecture: Secure Language Learning Platform
**Stack**: React (Frontend) | PHP (Backend API) | MySQL (Database)

This document details the security authentication flows, dashboard designs, and technical layouts required to build a production-grade, secure platform.

---

## 1. Security & Authentication Architecture (The "Safe" Part)

To ensure the platform is secure, we will strictly separate the Frontend (React) from the Backend (PHP) and use **JWT (JSON Web Tokens)** with **HttpOnly Cookies**.

### A. Authentication Flow (JWT + HttpOnly)
1.  **Login**:
    *   User sends `email` & `password` via React form to `/api/auth/login.php`.
    *   PHP validates hash using `password_verify()`.
    *   **If valid**:
        *   Generate an **Access Token** (Short-lived, e.g., 15 min). Send this in the JSON response body.
        *   Generate a **Refresh Token** (Long-lived, e.g., 7 days). **Set this as an HttpOnly, Secure Cookie**.
        *   *Why?* HttpOnly cookies cannot be accessed by JavaScript, making them immune to XSS attacks (Cross-Site Scripting).
2.  **Request Interceptor (React)**:
    *   Store the **Access Token** in React application state (Memory). **Do not** store it in LocalStorage (vulnerable to XSS).
    *   Attach the Access Token to every API call via the `Authorization: Bearer <token>` header.
3.  **Token Refresh**:
    *   If an API call returns `401 Unauthorized`, React automatically calls `/api/auth/refresh.php`.
    *   PHP reads the HttpOnly cookie, verifies it, and issues a new Access Token.
4.  **Logout**:
    *   Call `/api/auth/logout.php` to destroy the cookie and invalidate the refresh token in the database.

### B. Backend Security Checklist (PHP)
1.  **SQL Injection**: NEVER use direct string concatenation. ALWAYS use **PDO Prepared Statements**.
    *   *Bad*: `$sql = "SELECT * FROM users WHERE email = '$email'";`
    *   *Good*: `$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?"); $stmt->execute([$email]);`
2.  **CORS (Cross-Origin Resource Sharing)**:
    *   Configure PHP headers to accept requests **ONLY** from your React frontend domain (e.g., `localhost:3000` or `yourdomain.com`).
    *   `header("Access-Control-Allow-Origin: https://your-react-app.com");`
3.  **Rate Limiting**:
    *   Implement a simple counter in PHP (using Redis or a temp table) to block IP addresses that try to login more than 5 times in 1 minute.
4.  **Input Sanitization**:
    *   Use `htmlspecialchars()` when outputting user data to prevent XSS.

---

## 2. Dashboard Architecture

The dashboard is the central hub. It needs to be personalized and data-driven.

### A. Layout Structure (React)
We will use a **Layout Wrapper Pattern**.

*   **`MainLayout.tsx`**:
    *   **Sidebar (Left, Fixed)**: Navigation (Home, Practice, Mock Tests, Analytics, Profile). Auto-collapses on mobile.
    *   **TopHeader (Top, Sticky)**: User Avatar, Notification Bell, "Resume Last Test" button.
    *   **ContentArea (Dynamic)**: Where the pages render.

### B. Student Dashboard Widgets
1.  **The "Hero" Stat Cards**:
    *   *Tests Completed*: Count.
    *   *Average Score*: Percentage.
    *   *Current Streak*: Days active.
2.  **Performance Graph**:
    *   Use `recharts` or `chart.js` in React.
    *   **X-Axis**: Date.
    *   **Y-Axis**: Score.
    *   Shows a visual trend line of improvement.
3.  **"Weakness Radar"**:
    *   A radar chart showing proficiency by category (e.g., Reading: 80%, Listening: 40%, Writing: 60%).
    *   *Actionable*: Clicking "Listening" takes them directly to Listening practice questions.
4.  **Recent Activity Feed**:
    *   List of last 3 tests with a "Review Answers" button.

---

## 3. Exam Interface Layout (The "Arena")

This is the most complex UI part. It must be distraction-free.

### A. Split-Screen Design
For language tests (like IELTS Reading), users need to see the text and questions simultaneously.

*   **Wrapper**: `h-screen overflow-hidden flex flex-col`
*   **Header**: Timer (Countdown), Progress Bar (12/40 Answered), "Submit" button.
*   **Body**: `flex-1 grid grid-cols-2`
    *   **Left Pane (Source Material)**: Scrollable area containing the Reading Passage or Audio Player.
        *   *Feature*: Allow text highlighting/annotating in React.
    *   **Right Pane (Questions)**: Scrollable area independent of the left pane.
        *   Contains the Question Components.

### B. Question Components Hierarchy
*   `QuestionRenderer`: A switch case component that decides which type to render.
    *   `MultipleChoice`: Props `{ options[], selectedId, onSelect }`.
    *   `DragAndDropMatch`: Uses `dnd-kit` library for smooth dragging.
    *   `FillBlanks`: Text inputs inline with paragraph text.

---

## 4. Database Schema Refinements (MySQL)

To support the security and dashboard features above, add these tables:

```sql
CREATE TABLE user_refresh_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token_hash VARCHAR(255) NOT NULL, -- Store hash, not raw token
    expires_at DATETIME NOT NULL,
    created_ip VARCHAR(45),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(50), -- e.g., 'LOGIN_FAILED', 'TEST_SUBMITTED'
    details JSON,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_analytics (
    user_id INT PRIMARY KEY,
    weakest_category_id INT,
    strongest_category_id INT,
    average_score DECIMAL(5,2),
    last_updated TIMESTAMP
);
```

## 5. Implementation Roadmap for Security

1.  **Step 1 (Backend)**: Install `firebase/php-jwt` via Composer for PHP.
2.  **Step 2 (Backend)**: Create a `Database` class in PHP that is a singleton wrapper around `PDO`.
3.  **Step 3 (Frontend)**: Create an `AuthContext.tsx` in React.
    *   This context handles the `isAuthenticated` state.
    *   It initiates the "Silent Refresh" loop to keep the user logged in.
4.  **Step 4 (Frontend)**: Implement Protected Routes.
    *   Create a `<ProtectedRoute>` component that redirects to `/login` if `authContext.user` is null.
