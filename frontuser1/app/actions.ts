"use server"

import type { User, EditableUserData } from "./types"

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("http://98.82.5.241:3001/api/users")
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }
  return response.json()
}

export async function deleteUser(userId: number): Promise<boolean> {
  const response = await fetch(`http://54.87.132.139:3002/api/users/${userId}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete user")
  }
  return true
}

export async function editUser(userId: number, userData: EditableUserData): Promise<User> {
  const response = await fetch(`http://3.84.154.218:3000/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error("Failed to edit user")
  }
  return response.json()
}

