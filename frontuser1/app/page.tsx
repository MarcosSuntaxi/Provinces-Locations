import { fetchUsers } from "./actions"
import UserList from "./components/UserList"

export default async function Home() {
  const initialUsers = await fetchUsers()

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <UserList initialUsers={initialUsers} />
    </main>
  )
}

