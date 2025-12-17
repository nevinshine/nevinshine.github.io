---
layout: post
title: "Day 02: Process Management & Signals"
date: 2025-12-12
---
# ⚙️ Controlling the Machine

Understanding how Linux handles processes is critical for stopping malware or runaway scripts.

## 📚 What I Learned
* **Lifecycle:** How the kernel spawns processes (fork/exec).
* **Monitoring:** Using `top` and `ps aux` to spot resource hogs.
* **Signals:** The difference between `SIGTERM` (15) (polite kill) and `SIGKILL` (9) (force kill).

I created a `proc_cheat_sheet.md` to document these commands for future reference.
