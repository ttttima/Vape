import { useEffect, useState } from 'react'
import { categoryModules, moduleSettings, otherCategories } from './data.js'
import FriendsPanel from './FriendsPanel.jsx'
import ProfilesPanel from './ProfilesPanel.jsx'
import ModulePanel from './ModulePanel.jsx'
import './App.css'

const categories = Object.keys(categoryModules)
const allCategories = [...categories, ...otherCategories]

function App() {
  const [visibleCategories, setVisibleCategories] = useState([])
  const [enabledModules, setEnabledModules] = useState([])
  const [openSettings, setOpenSettings] = useState([])
  const [settingValues, setSettingValues] = useState({})
  const [search, setSearch] = useState('')
  const [searchTarget, setSearchTarget] = useState(null)
  const [themeHue, setThemeHue] = useState(() => {
    try {
      const saved = localStorage.getItem('vape-theme-hue')
      const hue = Number(saved)
      return saved !== null && hue >= 0 && hue <= 360 ? hue : 270
    } catch {
      return 270
    }
  })

  const query = search.trim().toLowerCase().replace(/[\s-]/g, '')
  const searchResults = []

  if (query) {
    for (const category of allCategories) {
      if (category.toLowerCase().includes(query)) {
        searchResults.push({ name: category, category })
      }
      for (const module of categoryModules[category] ?? []) {
        if (module.toLowerCase().replace(/[\s-]/g, '').includes(query)) {
          searchResults.push({ name: module, category, module })
        }
      }
    }
  }

  useEffect(() => {
    if (!searchTarget) return
    const id = searchTarget.module
      ? `module-${searchTarget.module}`
      : `category-${searchTarget.category}`
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [searchTarget])

  useEffect(() => {
    localStorage.setItem('vape-theme-hue', String(themeHue))
  }, [themeHue])

  function toggleCategory(category) {
    setVisibleCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    )
  }

  function toggleModule(module) {
    setEnabledModules((current) =>
      current.includes(module)
        ? current.filter((item) => item !== module)
        : [...current, module]
    )
  }

  function toggleSettings(module) {
    if (!moduleSettings[module]) return
    setOpenSettings((current) =>
      current.includes(module)
        ? current.filter((item) => item !== module)
        : [...current, module]
    )
  }

  function changeSetting(module, setting, value) {
    setSettingValues((current) => ({ ...current, [`${module}:${setting}`]: value }))
  }

  function chooseSearchResult(result) {
    setVisibleCategories((current) =>
      current.includes(result.category) ? current : [...current, result.category]
    )
    setSearchTarget(result)
    setSearch('')
  }

  function importProfile(profile) {
    setEnabledModules([...profile.modules])
    setSettingValues({ ...profile.settings })

    const categoriesToOpen = categories.filter((category) =>
      categoryModules[category].some((module) => profile.modules.includes(module))
    )
    setVisibleCategories((current) => {
      const next = [...current]
      for (const category of categoriesToOpen) {
        if (!next.includes(category)) next.push(category)
      }
      return next
    })
  }

  return (
    <main className="app" style={{ '--accent': `hsl(${themeHue} 90% 70%)` }}>
      <SearchIsland
        search={search}
        onSearchChange={setSearch}
        results={searchResults}
        onChoose={chooseSearchResult}
      />

      <aside className="panel main-panel">
        <h1 className="panel-title">Vape v4</h1>
        <CategoryButtons
          items={categories}
          selected={visibleCategories}
          onToggle={toggleCategory}
          label="Module categories"
        />
        <div className="category-divider" />
        <CategoryButtons
          items={otherCategories}
          selected={visibleCategories}
          onToggle={toggleCategory}
          label="Other categories"
        />
      </aside>

      <div className="category-panels">
        {visibleCategories.map((category) => (
          <section className="panel" id={`category-${category}`} key={category}>
            <h2 className="panel-title">{category}</h2>
            {category === 'Friends' && <FriendsPanel />}
            {category === 'Profiles' && (
              <ProfilesPanel
                modules={enabledModules}
                settings={settingValues}
                onImport={importProfile}
              />
            )}
            {category === 'Settings' && (
              <ThemeControls hue={themeHue} onChange={setThemeHue} />
            )}
            {categoryModules[category] && (
              <ModulePanel
                modules={categoryModules[category]}
                enabledModules={enabledModules}
                openSettings={openSettings}
                settingValues={settingValues}
                onToggleModule={toggleModule}
                onToggleSettings={toggleSettings}
                onChangeSetting={changeSetting}
              />
            )}
          </section>
        ))}
      </div>
    </main>
  )
}

function CategoryButtons({ items, selected, onToggle, label }) {
  return (
    <nav className="categories" aria-label={label}>
      {items.map((category) => (
        <button
          key={category}
          type="button"
          className={selected.includes(category) ? 'selected' : ''}
          aria-pressed={selected.includes(category)}
          onClick={() => onToggle(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  )
}

function SearchIsland({ search, onSearchChange, results, onChoose }) {
  const hasQuery = search.trim().replace(/[\s-]/g, '').length > 0

  return (
    <div className="search-island">
      <div className="search-field">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
        <input
          type="search"
          aria-label="Search categories and modules"
          placeholder="Search modules..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && results.length > 0) onChoose(results[0])
            if (event.key === 'Escape') onSearchChange('')
          }}
        />
      </div>
      {hasQuery && (
        <div className="search-results">
          {results.length === 0 ? (
            <p>No matches</p>
          ) : (
            results.map((result) => (
              <button
                type="button"
                key={`${result.category}:${result.name}`}
                onClick={() => onChoose(result)}
              >
                <span>{result.name}</span>
                <small>{result.module ? result.category : 'Category'}</small>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}

function ThemeControls({ hue, onChange }) {
  return (
    <div className="theme-content">
      <label htmlFor="theme-hue">Theme color</label>
      <input
        id="theme-hue"
        className="theme-slider"
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="theme-preview">
        <span className="theme-swatch" />
        <span>Selected color</span>
      </div>
    </div>
  )
}

export default App
