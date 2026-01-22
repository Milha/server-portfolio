"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
}

export default function TestReadPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/db-test");
      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      } else {
        setError(data.error || "Greška pri čitanju podataka");
      }
    } catch (err) {
      setError("Network greška");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📊 Test Čitanja Server Baze
          </h1>
          <p className="text-gray-600">
            Prikazuje sve podatke iz PostgreSQL baze na serveru
          </p>
          <div className="mt-4 flex gap-4">
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "🔄 Učitava..." : "🔄 Refresh"}
            </button>
            <div className="px-4 py-2 bg-gray-100 rounded text-sm">
              📍 Environment: {process.env.NODE_ENV || "development"}
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            ❌ <strong>Greška:</strong> {error}
          </div>
        )}

        {/* Users List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              👥 Korisnici u Bazi ({users.length})
            </h2>
            {users.length > 0 && (
              <div className="text-sm text-gray-500">
                Poslednje ažuriranje: {new Date().toLocaleTimeString("sr-RS")}
              </div>
            )}
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">🔄 Učitavanje podataka...</div>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">📭 Nema podataka u bazi</div>
              <div className="text-sm text-gray-400">
                Možda treba pokrenuti migracije ili dodati dummy podatke
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      #
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Ime
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Slika
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-gray-600 font-mono">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">
                          {user.name || "(bez imena)"}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{user.email}</td>
                      <td className="py-3 px-4">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-500">
                        {user.id.substring(0, 8)}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          🔗 API Endpoint: <code>/api/db-test</code>
        </div>
      </div>
    </div>
  );
}
