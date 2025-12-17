---
layout: post
title: "Day 06: SSH Hardening & Key Auth"
date: 2025-12-16
---
# 🛡️ Locking the Door

Today I disabled password authentication entirely.
* **Why:** Passwords can be brute-forced. Keys cannot.
* **Action:** Generated Ed25519 keys and edited `/etc/ssh/sshd_config`.
