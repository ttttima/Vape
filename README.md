# Vape

**Recreating Minecraft Vape V4 Dashboard**

Minecraft Client

---

# 1. Project Goals

## General

- Klient ma być **prosty, przejrzysty i lekki**.
- Projekt ma posiadać **modularną budowę**.
- Każda funkcja ma być niezależnym modułem.
- Moduły mają być podzielone na kategorie.
- Każdy moduł ma posiadać własne ustawienia.
- Ustawienia modułów mają być łatwe do zmiany.
- Każdy moduł może posiadać własny keybind.
- Wszystkie ustawienia mają być zapisywane w configu.
- Klient ma obsługiwać wiele configów/profili.
- Projekt ma być łatwy do rozszerzania o nowe moduły.
- Dodanie nowego modułu nie powinno wymagać przebudowy całego projektu.
- Wyłączenie jednego modułu nie powinno wpływać na pozostałe.
- Klient ma działać stabilnie.
- Klient ma być zoptymalizowany pod kątem wydajności.
- Błąd pojedynczej funkcji nie powinien powodować crashu całego klienta.

## Dashboard / GUI

- GUI ma być głównym panelem zarządzania klientem.
- GUI ma mieć wygląd nowoczesnego dashboardu.
- Design ma być **prosty i minimalistyczny**.
- Styl GUI ma być inspirowany Paper.
- Dashboard ma posiadać boczną nawigację.
- Moduły mają być prezentowane w przejrzysty sposób.
- Ustawienia modułów mają być dostępne bezpośrednio z dashboardu.
- Wszystkie elementy GUI mają posiadać spójny design.

---

# 2. Features

## Module System

- [ ] **Włączanie i wyłączanie modułów**
- [ ] **Kategorie modułów**
- [ ] **Wyszukiwanie modułów**
- [ ] **Wyświetlanie statusu modułu**
- [ ] **Otwieranie ustawień modułu**
- [ ] **Resetowanie ustawień modułu**
- [ ] **Przypisywanie keybindu do modułu**
- [ ] **Usuwanie keybindu**
- [ ] **Zmiana keybindu**

## Settings System

- [ ] **Każdy moduł może mieć własne ustawienia**
- [ ] **Obsługa wartości liczbowych**
- [ ] **Obsługa wyboru trybu**
- [ ] **Obsługa wyboru kilku opcji**
- [ ] **Obsługa kolorów**
- [ ] **Obsługa keybindów**
- [ ] **Każde ustawienie posiada wartość domyślną**
- [ ] **Możliwość przywrócenia ustawień domyślnych**
- [ ] **Zmiany ustawień są zapisywane**

## Selection / Target System

- [ ] **Wspólny system wyboru celów dla modułów, które go wymagają**
- [ ] **Wybór typów celów**
- [ ] **Filtrowanie celów**
- [ ] **Ignorowanie wybranych celów**
- [ ] **Wybór celu według dystansu**
- [ ] **Wybór celu według ustawionych kryteriów**
- [ ] **Możliwość korzystania z tego samego systemu przez wiele modułów**

## Config System

- [ ] **Zapisywanie konfiguracji**
- [ ] **Ładowanie konfiguracji**
- [ ] **Tworzenie konfiguracji**
- [ ] **Usuwanie konfiguracji**
- [ ] **Zmiana nazwy konfiguracji**
- [ ] **Resetowanie konfiguracji**
- [ ] **Możliwość posiadania wielu konfiguracji**
- [ ] **Zapisywanie stanu modułów**
- [ ] **Zapisywanie ustawień modułów**
- [ ] **Zapisywanie keybindów**
- [ ] **Zapisywanie ustawień GUI**

## Profiles

- [ ] **Tworzenie profili**
- [ ] **Przełączanie profili**
- [ ] **Usuwanie profili**
- [ ] **Każdy profil posiada własne ustawienia**
- [ ] **Możliwość ustawienia domyślnego profilu**

## Friends / Ignore

- [ ] **Dodawanie osób do listy**
- [ ] **Usuwanie osób z listy**
- [ ] **Wyświetlanie listy**
- [ ] **Zapisywanie listy**
- [ ] **Możliwość ignorowania osób przez wybrane moduły**
- [ ] **Lista działa niezależnie od ustawień modułów**

## Notifications

- [ ] **Powiadomienie przy włączeniu modułu**
- [ ] **Powiadomienie przy wyłączeniu modułu**
- [ ] **Powiadomienia systemowe**
- [ ] **Możliwość zmiany czasu wyświetlania**
- [ ] **Możliwość wyłączenia powiadomień**

## Dashboard

- [ ] **Otwieranie dashboardu za pomocą keybindu**
- [ ] **Nawigacja pomiędzy kategoriami**
- [ ] **Wyszukiwanie modułów**
- [ ] **Wyświetlanie aktywnych modułów**
- [ ] **Otwieranie ustawień**
- [ ] **Scrollowanie**
- [ ] **Animacje**
- [ ] **Zmiana motywu**
- [ ] **Zmiana kolorów**
- [ ] **Zapisywanie wyglądu dashboardu**

---

# 3. Project Structure

Projekt powinien być podzielony na logiczne części, tak aby poszczególne systemy były od siebie możliwie niezależne.

```text
Client
├── Modules
├── Settings
├── Selection
├── Config
├── Profiles
├── Friends
├── Notifications
└── Dashboard

Każdy system powinien mieć jasno określoną odpowiedzialność i nie powinien zawierać niepotrzebnej logiki innych systemów.

4. Development Status
System	Status
Dashboard	Not Started
Module System	Not Started
Settings System	Not Started
Selection System	Not Started
Config System	Not Started
Profiles	Not Started
Friends / Ignore	Not Started
Notifications	Not Started


## UI Components

### Basic Components

- `Button` — clickable button
- `Checkbox` — boolean checkbox
- `Toggle` — on/off switch
- `Slider` — numeric value slider
- `Dropdown` — single-option selection
- `MultiDropdown` — multiple-option selection
- `ComboBox` — searchable option selector
- `TextField` — text input
- `SearchBar` — search input
- `ColorPicker` — color selection
- `Keybind` — keyboard key binding
- `Label` — text label
- `Icon` — icon component
- `Image` — image component
- `Separator` — visual separator

### Layout Components

- `Panel` — basic UI panel
- `Container` — component container
- `ScrollPanel` — scrollable container
- `Window` — main UI window
- `Sidebar` — navigation sidebar
- `Tab` — tab navigation
- `Category` — module category
- `ModuleCard` — module representation
- `ModuleList` — list of modules
- `SettingsPanel` — module settings container

### Navigation Components

- `NavigationBar` — navigation bar
- `SearchBar` — module search
- `CategorySelector` — category selection
- `ConfigSelector` — configuration selection
- `ProfileSelector` — profile selection

### Overlay Components

- `Tooltip` — contextual information
- `Notification` — notification message
- `Popup` — temporary popup
- `Modal` — modal dialog
- `ContextMenu` — right-click menu
- `Dialog` — confirmation/input dialog
