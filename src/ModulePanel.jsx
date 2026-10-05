import { moduleSettings } from './data.js'

function ModulePanel({ modules, enabledModules, openSettings, settingValues, onToggleModule, onToggleSettings, onChangeSetting }) {
  return (
    <div className="modules">
      {modules.map((module) => {
        const settings = moduleSettings[module]
        const isOpen = openSettings.includes(module)
        const isEnabled = enabledModules.includes(module)

        return (
          <div
            key={module}
            id={`module-${module}`}
            className={isOpen ? 'module-item settings-open' : 'module-item'}
          >
            <button
              type="button"
              className={isEnabled ? 'selected' : ''}
              aria-pressed={isEnabled}
              aria-expanded={settings ? isOpen : undefined}
              title={settings ? 'Right-click for settings' : undefined}
              onClick={() => onToggleModule(module)}
              onContextMenu={(event) => {
                event.preventDefault()
                onToggleSettings(module)
              }}
            >
              {module}
            </button>

            {isOpen && settings && (
              <div className="settings">
                {settings.map((setting) => {
                  const value = settingValues[`${module}:${setting.label}`] ?? setting.defaultValue

                  return setting.type === 'checkbox' ? (
                    <label className="setting checkbox-setting" key={setting.label}>
                      <span>{setting.label}</span>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(event) => onChangeSetting(module, setting.label, event.target.checked)}
                      />
                    </label>
                  ) : (
                    <label className="setting" key={setting.label}>
                      <span>{setting.label}: {value}{setting.unit}</span>
                      <input
                        type="range"
                        min={setting.min}
                        max={setting.max}
                        step={setting.step ?? 1}
                        value={value}
                        onChange={(event) => onChangeSetting(module, setting.label, Number(event.target.value))}
                      />
                    </label>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ModulePanel
