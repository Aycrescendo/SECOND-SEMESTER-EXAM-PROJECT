import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hideNavbar = pathname === "/login" || pathname === "/register";
  

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 test-gray-900">

      {!hideNavbar && ( 
        <header className="border-b bg-gray-400 bg-gray-100 backdrop-blur sticky top-0 z-50">
          <div className="container mx-w-6xl max-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo / Title */}
            <h1 className="text-xl font-bold tracking-wide text-gray-900">
              <Link to="/">Todo App</Link>
            </h1>

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm font-medium">

              <Link to="/" className="hover:text-gray-100 transition-colors duration-10">
                Home
              </Link>

              <Link to="/test-error" className="hover:text-gray-100 transition-colors duration-200">
                Test Error
              </Link>

              <Link to="/some-random-route" className="hover:text-gray-100 transition-colors duration-200">
                404 Test
              </Link>

              {/* Auth Section */}
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-300">
                    {user.name}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/login" className="hover:text-gray-100 transition-colors duration-200">
                    Login
                  </Link>

                  <Link to="/register" className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200">
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </header>
      )}
        
      
      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
        <Outlet />
      </main>

      {/* Footer (optional but professional touch) */}
      <footer className="border-t border-gray-800 bg-gray-900 text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} Todo App
      </footer>

    </div>
  );
}