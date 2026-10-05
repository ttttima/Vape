import { useEffect, useState } from 'react'

function FriendsPanel() {
  const [username, setUsername] = useState('')
  const [friends, setFriends] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('vape-friends') || '[]')
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('vape-friends', JSON.stringify(friends))
  }, [friends])

  function addFriend(event) {
    event.preventDefault()
    const name = username.trim()

    if (!name || friends.some((friend) => friend.toLowerCase() === name.toLowerCase())) return

    setFriends([...friends, name])
    setUsername('')
  }

  function removeFriend(name) {
    setFriends(friends.filter((friend) => friend !== name))
  }

  return (
    <div className="friends-content">
      <form className="friend-form" onSubmit={addFriend}>
        <input
          type="text"
          aria-label="Friend username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {friends.length === 0 ? (
        <p className="friend-empty">No friends added yet</p>
      ) : (
        <ul className="friend-list">
          {friends.map((friend) => (
            <li key={friend}>
              <span>{friend}</span>
              <button
                type="button"
                aria-label={`Remove ${friend}`}
                onClick={() => removeFriend(friend)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FriendsPanel
