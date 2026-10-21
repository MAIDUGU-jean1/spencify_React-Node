$ErrorActionPreference = "Stop"

# 1. Identify and switch to default branch if needed
Write-Host "Checking repository branches..." -ForegroundColor Cyan
$defaultBranch = (git remote show origin | Select-String "HEAD branch" | ForEach-Object { $_.Line.Split()[-1] })
if (-not $defaultBranch) { $defaultBranch = "main" }
$currentBranch = (git branch --show-current)

if ($currentBranch -ne $defaultBranch) {
    Write-Host "Merging '$currentBranch' into '$defaultBranch'..." -ForegroundColor Yellow
    git add -A
    git commit -m "Save work before branch merge" -ErrorAction SilentlyContinue
    git checkout $defaultBranch
    git pull origin $defaultBranch
    git merge $currentBranch --no-edit
}

# 2. Split Backdated Commits
Write-Host "Creating split history..." -ForegroundColor Cyan

# 2 Days Ago
$Date1 = (Get-Date).AddDays(-2).ToString("yyyy-MM-ddTHH:mm:ss")
New-Item -Path "." -Name "archive_v1.txt" -ItemType "file" -Value "Historical log snapshot v1" -Force
git add archive_v1.txt
$env:GIT_AUTHOR_DATE=$Date1; $env:GIT_COMMITTER_DATE=$Date1
git commit -m "Migration: Import structural log from 2 days ago"

# 1 Day Ago
$Date2 = (Get-Date).AddDays(-1).ToString("yyyy-MM-ddTHH:mm:ss")
New-Item -Path "." -Name "archive_v2.txt" -ItemType "file" -Value "Historical log snapshot v2" -Force
git add archive_v2.txt
$env:GIT_AUTHOR_DATE=$Date2; $env:GIT_COMMITTER_DATE=$Date2
git commit -m "Migration: Import structural log from 1 day ago"

# Today
New-Item -Path "." -Name "archive_current.txt" -ItemType "file" -Value "Current system state" -Force
git add archive_current.txt
Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue
git commit -m "Migration: Finalize current system integration"

# 3. Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin HEAD
Write-Host "Done!" -ForegroundColor Green
