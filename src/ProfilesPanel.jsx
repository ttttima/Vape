import { useEffect, useState } from 'react'

function ProfilesPanel({ modules, settings, onImport }) {
  const [name, setName] = useState('')
  const [selectedName, setSelectedName] = useState(null)
  const [message, setMessage] = useState('')
  const [profiles, setProfiles] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('vape-profiles') || '[]')
      return Array.isArray(saved) ? saved.slice(0, 5) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('vape-profiles', JSON.stringify(profiles))
  }, [profiles])

  function saveProfile(event) {
    event.preventDefault()
    const newName = name.trim()
    if (!newName) return

    const existing = profiles.find((profile) => profile.name.toLowerCase() === newName.toLowerCase())
    if (!existing && profiles.length >= 5) {
      setMessage('You can save up to 5 profiles')
      return
    }

    const profile = {
      name: existing?.name ?? newName,
      modules: [...modules],
      settings: { ...settings },
    }

    if (existing) {
      setProfiles(profiles.map((item) => item.name === existing.name ? profile : item))
    } else {
      setProfiles([...profiles, profile])
    }

    setSelectedName(profile.name)
    setName(profile.name)
    setMessage(existing ? 'Profile updated' : 'Profile saved')
  }

  function importSelected() {
    const profile = profiles.find((item) => item.name === selectedName)
    if (!profile) return

    onImport(profile)
    setMessage(`${profile.name} imported`)
  }

  function deleteProfile(profileName) {
    setProfiles(profiles.filter((profile) => profile.name !== profileName))
    if (selectedName === profileName) setSelectedName(null)
    if (name === profileName) setName('')
    setMessage('Profile deleted')
  }

  return (
    <div className="profiles-content">
      <form className="profile-form" onSubmit={saveProfile}>
        <input
          type="text"
          aria-label="Profile name"
          placeholder="Profile name"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setMessage('')
          }}
        />
        <button type="submit" disabled={!name.trim()}>Save</button>
      </form>

      <p className="profile-count">{profiles.length}/5 profiles</p>
      <ul className="profile-list">
        {profiles.map((profile) => (
          <li key={profile.name} className={selectedName === profile.name ? 'selected' : ''}>
            <button
              type="button"
              className="profile-select"
              aria-pressed={selectedName === profile.name}
              onClick={() => {
                setSelectedName(profile.name)
                setName(profile.name)
                setMessage('')
              }}
            >
              {profile.name}
            </button>
            <button
              type="button"
              className="profile-delete"
              aria-label={`Delete ${profile.name}`}
              onClick={() => deleteProfile(profile.name)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="profile-import"
        disabled={!selectedName}
        onClick={importSelected}
      >
        Import selected
      </button>
      {message && <p className="profile-message" role="status">{message}</p>}
    </div>
  )
}

export default ProfilesPanel
