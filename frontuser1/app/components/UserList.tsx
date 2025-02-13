"use client"

import { useState } from "react"
import type { User, EditableUserData } from "../types"
import { fetchUsers, deleteUser, editUser } from "../actions"
import EditUserModal from "./EditUserModal"

export default function UserList({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [error, setError] = useState<string | null>(null)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  const refreshUsers = async () => {
    try {
      const updatedUsers = await fetchUsers()
      setUsers(updatedUsers)
      setError(null)
    } catch (error) {
      console.error("Error refreshing users:", error)
      setError("Error al actualizar la lista. Por favor, intente nuevamente.")
    }
  }

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId)
      setUsers(users.filter((user) => user.id !== userId))
      setError(null)
    } catch (error) {
      console.error("Error deleting user:", error)
      setError("Error al eliminar usuario. Por favor, intente nuevamente.")
    }
  }

  const handleEditUser = async (userId: number, userData: EditableUserData) => {
    try {
      const updatedUser = await editUser(userId, userData)
      setUsers(users.map((user) => (user.id === userId ? updatedUser : user)))
      setError(null)
    } catch (error) {
      console.error("Error editing user:", error)
      setError("Error al editar usuario. Por favor, intente nuevamente.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-black">Gestión de Usuarios - Servicios de Bodas</h1>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-black">Listado de Usuarios</h2>
            <button
              onClick={refreshUsers}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Actualizar Lista
            </button>
          </div>

          {error && <div className="mb-4 p-4 bg-red-50 text-red-600 rounded">{error}</div>}

          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="border rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-medium text-black text-lg">{user.username}</h3>
                    <p className="text-gray-700">{user.email}</p>
                    <p className="text-gray-500 text-sm">
                      Registro:{" "}
                      {new Date(user.created_at).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingUser(user)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="px-4 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {editingUser && (
          <EditUserModal
            key={editingUser.id}
            user={editingUser}
            onSave={handleEditUser}
            onClose={() => setEditingUser(null)}
          />
        )}
      </div>
    </div>
  )
}

