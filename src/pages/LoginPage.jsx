import { useState } from "react";
import { useAuth } from "@/features/auth/AuthContext";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) return;

    login(form);       // Save user
    navigate("/", { replace: true });
    setShowModal(false); // Close modal
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      
      {/* Login Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-black text-white px-6 py-3 rounded-lg font-medium"
      >
        Open Login
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl">
            
            <h2 className="text-2xl font-bold mb-6 text-center">
              Login
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 rounded-lg font-medium"
              >
                Login
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-500 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}