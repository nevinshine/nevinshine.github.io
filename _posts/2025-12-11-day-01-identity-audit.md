---
layout: post
title: "Day 01: Identity & Access Audit"
date: 2025-12-11
---
# 👤 The Journey Begins

Every security journey starts with knowing *who* has access. Unused accounts are potential backdoors.

## 🛠️ The Script
I wrote `user_audit.sh` to parse `/etc/passwd` and identify:
1.  **Human Users:** Accounts with valid shells (like `/bin/bash`).
2.  **Root Privileges:** Any account with User ID (UID) `0`.
3.  **System Accounts:** Service users that should never log in.

This sets the baseline for the next 99 days of hardening.
