---
layout: post
title: "Day 05: File Integrity Monitor (FIM)"
date: 2025-12-15
---
# 🔍 Tripwire Script

I built a script to detect if hackers modify system files.
* **Tool:** `sha256sum`
* **Logic:** Compare current file hash against a known "good" baseline.
