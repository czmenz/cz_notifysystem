# cz_notifysystem

<p align="center">
  <img src="https://img.shields.io/badge/FiveM-Ready-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Framework-Standalone-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Version-1.2.1-blue?style=for-the-badge">
</p>

<p align="center">
  <strong>cz_notifysystem</strong> is a lightweight and standalone script that allows you to easily display clean and modern notifications (toasts) to players. It's designed to be easily integrated into any FiveM project, whether it's a new or existing one.
</p>

---

## ✨ Features

- 🎨 **Four distinct types:** `success`, `error`, `warning`, and `info`.
- 🔧 **Fully Customizable:** Control the title, message, and duration.
- 🎵 **Audio Feedback:** Includes a sound effect for each notification.
- 🌐 **Client & Server-side:** Trigger notifications from any resource.
- 🕊️ **Lightweight & Standalone:** No dependencies, no hassle.
- 🧠 **Optimized Performance:** Designed to be efficient and lag-free.

---

## 🧱 Framework

- ✅ Standalone

---

## 📦 Installation

1. Place the `cz_notifysystem` resource in your `resources` directory.

2. Add to `server.cfg`:
```cfg
ensure cz_notifysystem
```

---

## 🎨 Notification Types

| Type      | Default Title | Icon                          | Color   |
|-----------|---------------|-------------------------------|---------|
| `success` | Success       | `<i class="fa-solid fa-circle-check"></i>`  | Green   |
| `error`   | Error         | `<i class="fa-solid fa-circle-xmark"></i>` | Red     |
| `warning` | Warning       | `<i class="fa-solid fa-triangle-exclamation"></i>` | Yellow  |
| `info`    | Info          | `<i class="fa-solid fa-circle-info"></i>`   | Blue    |

---

## 🧩 Exports

### Client-Side Export

Use this export in any **client-side** script to display a notification.

```lua
-- Show a success notification for 7 seconds
exports.cz_notifysystem:Notify('success', 'Payment Received', 'You have received $5,000.', 7000)

-- Show an error notification
exports.cz_notifysystem:Notify('error', 'Payment Failed', 'Insufficient funds in your bank account.')
```

---

### Server-Side Event

Use this event in any **server-side** script to display a notification for a specific player or for everyone.

```lua
-- To a specific player (src)
TriggerClientEvent('cz_notifysystem:notify', src, 'success', 'Job Done', 'You have completed the mission.', 6000)

-- To all players (-1)
TriggerClientEvent('cz_notifysystem:notify', -1, 'info', 'Server Announcement', 'The server will restart in 15 minutes!', 10000)
```

---

## 📄 Notification Parameters

| Field      | Type   | Required | Description                                          | Default |
|------------|--------|----------|------------------------------------------------------|---------|
| `type`     | string | ✅       | `success`, `error`, `warning`, `info`                |         |
| `title`    | string | ✅       | The main title of the notification.                  |         |
| `message`  | string | ✅       | The content of the notification.                     |         |
| `duration` | number | ❌       | Duration in milliseconds.                            | `5000`  |


---

## 📜 License & Usage Rules

This project is open source for learning, modifying, and use on servers.

### ✔ You are allowed to:
- Use it in private/public servers.
- Modify it for your own needs.
- Share improvements with credit.

### ❌ You are not allowed to:
- Sell this resource (original or modified).
- Re-upload and claim authorship.
- Remove original author credit.

---

**Author:** Czmenz
