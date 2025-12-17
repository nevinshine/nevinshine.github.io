---
layout: post
title: "Day 03: Network Intrusion Detection"
date: 2025-12-13
---
# 🚨 Who is listening?

Today's mission was to build a scanner that identifies unauthorized services running on the network.

## 🛠️ The Tool: Net Sentry
I created `net_sentry.sh` using `ss` and `grep` to:
1.  List all listening TCP/UDP ports.
2.  Flag dangerous legacy protocols (like Telnet).
3.  Alert on services exposed to the public internet (`0.0.0.0`).

## 🧠 Key Takeaway
Knowing your attack surface is half the battle. If a port is open, it *will* be probed.
