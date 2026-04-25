# Copy assets from Drive download to public/assets
$SRC = "$env:USERPROFILE\Downloads"
$ZIP = Get-ChildItem "$SRC\drive-download-*.zip" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

if (-not $ZIP) { Write-Host "ERROR: No drive-download ZIP found in Downloads"; exit 1 }

$TEMP = "$env:TEMP\drive-assets"
if (Test-Path $TEMP) { Remove-Item -Recurse -Force $TEMP }

Write-Host "Extracting $($ZIP.Name)..."
Expand-Archive -Path $ZIP.FullName -DestinationPath $TEMP -Force

$DEST = "$PSScriptRoot\public\assets"

# Create all folders
$folders = @(
    "interlink\kol-profiles", "interlink\results",
    "somnia\x-posts", "somnia\designs",
    "allinstation\articles", "allinstation\facebook", "allinstation\youtube",
    "holdstation\x-posts", "holdstation\facebook", "holdstation\landing-page", "holdstation\videos",
    "design-showcase"
)
foreach ($f in $folders) {
    New-Item -ItemType Directory -Force -Path "$DEST\$f" | Out-Null
}
Write-Host "Asset folders created."

# InterLink
Copy-Item "$TEMP\InterLink\KOL profiles\*" "$DEST\interlink\kol-profiles\" -Force
Copy-Item "$TEMP\InterLink\Results\*" "$DEST\interlink\results\" -Force
Write-Host "InterLink done."

# Somnia
Copy-Item "$TEMP\Somnia\X-Posts\*" "$DEST\somnia\x-posts\" -Force
Copy-Item "$TEMP\Somnia\Designs\*" "$DEST\somnia\designs\" -Force
Copy-Item "$TEMP\Somnia\Profile performance.png" "$DEST\somnia\profile-performance.png" -Force
Write-Host "Somnia done."

# Allinstation articles
Copy-Item "$TEMP\Allinstation\Article on Web\*" "$DEST\allinstation\articles\" -Force

# Allinstation facebook analytics
Copy-Item "$TEMP\Allinstation\Facebook Content\Analytic.png" "$DEST\allinstation\facebook\fb-analytics.png" -Force
Copy-Item "$TEMP\Allinstation\Facebook Content\View reach report.png" "$DEST\allinstation\facebook\fb-reach-report.png" -Force

# Pick 4 memes
$memes = @(
    "hulk comic 7.png",
    "hulk comic 13.png",
    "hulk comic 24 - goku.png",
    "hulk comic 45.png"
)
$i = 1
foreach ($m in $memes) {
    $src_path = "$TEMP\Allinstation\Facebook Content\Comic meme\$m"
    if (Test-Path $src_path) {
        Copy-Item $src_path "$DEST\allinstation\facebook\meme-$i.png" -Force
    }
    $i++
}

# Allinstation youtube
Copy-Item "$TEMP\Allinstation\Youtube\*" "$DEST\allinstation\youtube\" -Force
Write-Host "Allinstation done."

# Holdstation
Copy-Item "$TEMP\Holdstation\X - post\*" "$DEST\holdstation\x-posts\" -Force
Copy-Item "$TEMP\Holdstation\Facebook\*" "$DEST\holdstation\facebook\" -Force
Copy-Item "$TEMP\Holdstation\Video Flexing\*" "$DEST\holdstation\videos\" -Force
Write-Host "Holdstation social/videos done."

# Holdstation landing page screenshots (from Puppeteer capture in Downloads)
$lp1 = "$env:USERPROFILE\Downloads\holdstation-com.png"
$lp2 = "$env:USERPROFILE\Downloads\pay-holdstation-com.png"
if (Test-Path $lp1) { Copy-Item $lp1 "$DEST\holdstation\landing-page\holdstation-com.png" -Force }
if (Test-Path $lp2) { Copy-Item $lp2 "$DEST\holdstation\landing-page\pay-holdstation-com.png" -Force }
Write-Host "Holdstation landing pages done."

# Design showcase (images only)
Get-ChildItem "$TEMP\Design showcase\*" -Include *.jpg, *.png | Copy-Item -Destination "$DEST\design-showcase\" -Force
Write-Host "Design showcase done."

# Summary
$count = (Get-ChildItem "$DEST" -Recurse -File).Count
Write-Host "`n=== ALL DONE === $count files copied to public/assets/"
Write-Host "You can now run 'claude' and tell it to wire real images."
