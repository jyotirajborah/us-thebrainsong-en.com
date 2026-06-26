$repo = "c:\Users\bgsmi\OneDrive\Documents\us-thebrainsong-en.com"

Set-Location $repo

git add -A

$staged = git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    $ts = Get-Date -Format "dd-MM-yyyy HH:mm:ss"
    git commit -m "Auto update: $ts"
}

git push origin main

Invoke-WebRequest -Uri "https://www.bing.com/indexnow?url=https://us-thebrainsong-en.com/&key=04d660e23a214e61bfe16dbfc2eaed0c" -UseBasicParsing | Out-Null

Write-Output "Done: pushed and pinged Bing IndexNow"
