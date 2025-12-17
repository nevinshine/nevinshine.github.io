---
layout: post
title: "Day 04: Firewall Automation"
date: 2025-12-14
---
# 🧱 Building the Wall

Leaving ports open is the #1 vulnerability for any server. Today, I automated the firewall configuration.

## 🛠️ The Solution
I wrote a script (`setup_firewall.sh`) that uses **UFW** (Uncomplicated Firewall) to:
* **Deny** all incoming traffic by default.
* **Allow** only SSH (Port 22) and HTTP/HTTPS.
* **Enable** logging for blocked attempts.

> "A firewall is only as good as its strictest rule."
