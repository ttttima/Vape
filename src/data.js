// Edit these lists to change the categories and modules shown in the app.
export const categoryModules = {
  Combat: ['AimAssist', 'AutoClicker', 'Reach', 'Sprint', 'Triggerbot'],
  Render: ['ESP', 'Fullbright', 'Tracers', 'StorageESP'],
  Utility: ['Panic', 'Velocity', 'AutoFireball'],
  World: ['Anti-AFK', 'AutoTool', 'AutoSteal', 'FastPlace', 'SafeWalk'],
  Inventory: ['InvCleaner', 'AutoTotem'],
  Network: ['Blink', 'KnockbackDelay', 'FakeLag'],
}

export const otherCategories = ['Friends', 'Profiles', 'Settings']

// A module missing from this list has no settings panel.
export const moduleSettings = {
  AimAssist: [
    { label: 'How fast', min: 1, max: 10, defaultValue: 5 },
    { label: 'FOV', min: 0, max: 180, defaultValue: 90, unit: '°' },
  ],
  AutoClicker: [{ label: 'CPS', min: 1, max: 20, defaultValue: 10 }],
  Reach: [{ label: 'Reach', min: 1, max: 10, step: 0.1, defaultValue: 3, unit: ' blocks' }],
  Sprint: [{ label: 'Always sprint', type: 'checkbox', defaultValue: false }],
  Triggerbot: [{ label: 'Reaction time', min: 0, max: 500, defaultValue: 150, unit: ' ms' }],
  ESP: [{ label: 'Range', min: 1, max: 100, defaultValue: 32, unit: ' blocks' }],
  Fullbright: [{ label: 'Brightness', min: 0, max: 100, defaultValue: 100, unit: '%' }],
  Tracers: [{ label: 'Range', min: 1, max: 100, defaultValue: 64, unit: ' blocks' }],
  StorageESP: [
    { label: 'Range', min: 1, max: 100, defaultValue: 32, unit: ' blocks' },
    { label: 'Chest', type: 'checkbox', defaultValue: true },
    { label: 'Barrel', type: 'checkbox', defaultValue: true },
    { label: 'Ender chest', type: 'checkbox', defaultValue: true },
  ],
  Velocity: [{ label: 'Intensity', min: 0, max: 100, defaultValue: 100, unit: '%' }],
  AutoFireball: [{ label: 'FOV', min: 0, max: 180, defaultValue: 90, unit: '°' }],
  'Anti-AFK': [
    { label: 'WASD movement', type: 'checkbox', defaultValue: true },
    { label: 'Stay close', type: 'checkbox', defaultValue: false },
  ],
  AutoTool: [{ label: 'How fast', min: 1, max: 10, defaultValue: 5 }],
  AutoSteal: [{ label: 'How fast', min: 1, max: 10, defaultValue: 5 }],
  FastPlace: [{ label: 'How fast', min: 1, max: 10, defaultValue: 5 }],
  InvCleaner: [{ label: 'How fast', min: 1, max: 10, defaultValue: 5 }],
  AutoTotem: [{ label: 'How fast', min: 1, max: 10, defaultValue: 5 }],
  Blink: [{ label: 'Max blink time', min: 1, max: 30, defaultValue: 10, unit: ' s' }],
  KnockbackDelay: [{ label: 'Delay', min: 0, max: 500, defaultValue: 100, unit: ' ms' }],
  FakeLag: [{ label: 'Ping', min: 0, max: 1000, defaultValue: 150, unit: ' ms' }],
}
