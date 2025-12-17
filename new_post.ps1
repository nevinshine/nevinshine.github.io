# 1. Ask for inputs
$dayNum = Read-Host "Enter Day Number (e.g., 08)"
$rawTitle = Read-Host "Enter Title (e.g., Automating the Blog)"

# 2. Calculate Variables
$currentDate = Get-Date -Format "yyyy-MM-dd"
$cleanTitle = $rawTitle.ToLower().Replace(" ", "-").Replace(",", "")
$filename = "_posts/$currentDate-day-$dayNum-$cleanTitle.md" 

# 3. Create Template (Clean, Safe Text only)
# We use ${dayNum} to safely insert the variable
$template = @"
---
layout: post
title: "Day ${dayNum}: $rawTitle"
date: $currentDate
---

# $rawTitle

## Mission
Briefly describe what you did today...

## Technical Details
* **Tools:** * **Commands:**

> "Automation is the ultimate sophistication."
"@

# 4. Create & Open File
Set-Content -Path $filename -Value $template -Encoding UTF8
Write-Host "SUCCESS: Created $filename" -ForegroundColor Green

# OPEN IN VS CODE
code $filename

# 5. The Lazy Push Mechanism
Write-Host "---------------------------------------------------" -ForegroundColor Yellow
Write-Host "   The file is open in VS Code. Go write your blog!" -ForegroundColor Yellow
Write-Host "   Save the file (Ctrl+S) when you are done." -ForegroundColor Yellow
Read-Host "   Press ENTER here to instantly Publish to GitHub..."

# 6. Git Operations
git add .
git commit -m "Day ${dayNum}: ${rawTitle}"
git push origin main

Write-Host "LIVE! Check https://nevinshine.github.io in 60 seconds." -ForegroundColor Green
