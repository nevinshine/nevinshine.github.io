---
layout: post
title: "Day 08: Automating the Blog"
date: 2025-12-17
---

# 🤖 Lazy Mode Engaged

I got tired of manually creating files, formatting dates, and typing YAML headers every day. So, like a true DevOps engineer, I automated myself out of the job.

## 🚀 Mission
Create a **"One-Click" Workflow** that allows me to document my progress without leaving the terminal.

## 🛠️ Technical Details
I built a **PowerShell Automation Tool** (`new_post.ps1`) that handles the entire lifecycle:

1.  **Input:** Prompts for the Day # and Title.
2.  **Generation:** clear-cleans inputs and generates a Jekyll-compatible Markdown file with today's date.
3.  **Editor:** Automatically opens the file in **VS Code** for writing.
4.  **CI/CD:** Once saved, the script automatically commits (`git commit`) and pushes to GitHub, triggering a live site rebuild.

## 💻 The Code
The core logic uses PowerShell's `Set-Content` to inject a template:

```powershell
$template = @"
---
layout: post
title: "Day ${dayNum}: $rawTitle"
date: $currentDate
---
"@"If you have to do it more than twice, automate it."


### 🏁 How to Publish
1.  **Paste** the text above into your VS Code window.
2.  **Save** the file (`Ctrl + S`).
3.  **Close** VS Code.
4.  Go back to your **PowerShell window** and press **ENTER**.

🚀 **Watch the magic:** It will auto-push to GitHub, and your blog will update live in ~60 seconds!
