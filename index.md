---
layout: default
title: Home
---

# 🛡️ Nevin's Security Log

Welcome to my **100 Days of DevSecOps**. Here I document my journey hardening Linux servers, building security tools, and preparing for my Masters.

## 📝 Latest Logs

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
