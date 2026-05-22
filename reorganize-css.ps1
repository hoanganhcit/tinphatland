# Script to reorganize CSS file with proper structure
# Consolidates all media queries to the end

$sourceFile = "e:\Projects\tinphatland\src\assets\style.css"
$outputFile = "e:\Projects\tinphatland\src\assets\style-new.css"

Write-Host "Reading source file..." -ForegroundColor Cyan
$content = Get-Content $sourceFile -Raw

Write-Host "Extracting base styles (removing inline media queries)..." -ForegroundColor Yellow

# Extract all media query blocks
$mediaQueries = [System.Collections.ArrayList]::new()
$pattern = '(?s)@media[^{]+\{(?:[^{}]|\{[^{}]*\})*\}'

$matches = [regex]::Matches($content, $pattern)
foreach ($match in $matches) {
    [void]$mediaQueries.Add($match.Value)
}

Write-Host "Found $($mediaQueries.Count) media query blocks" -ForegroundColor Green

# Remove all media queries from content
$baseContent = [regex]::Replace($content, $pattern, '')

# Sort media queries by breakpoint
$sortedMQ = @{
    '1200px' = [System.Collections.ArrayList]::new()
    '1024px' = [System.Collections.ArrayList]::new()
    '768px' = [System.Collections.ArrayList]::new()
    '480px' = [System.Collections.ArrayList]::new()
    'touch' = [System.Collections.ArrayList]::new()
    'other' = [System.Collections.ArrayList]::new()
}

foreach ($mq in $mediaQueries) {
    if ($mq -match 'max-width:\s*1200px') {
        [void]$sortedMQ['1200px'].Add($mq)
    }
    elseif ($mq -match 'max-width:\s*1024px') {
        [void]$sortedMQ['1024px'].Add($mq)
    }
    elseif ($mq -match 'max-width:\s*768px') {
        [void]$sortedMQ['768px'].Add($mq)
    }
    elseif ($mq -match 'max-width:\s*480px') {
        [void]$sortedMQ['480px'].Add($mq)
    }
    elseif ($mq -match 'hover:\s*none') {
        [void]$sortedMQ['touch'].Add($mq)
    }
    else {
        [void]$sortedMQ['other'].Add($mq)
    }
}

Write-Host "Organizing by breakpoints:" -ForegroundColor Cyan
$sortedMQ.Keys | ForEach-Object {
    $count = $sortedMQ[$_].Count
    if ($count -gt 0) {
        Write-Host "  - $($_): $count blocks" -ForegroundColor Yellow
    }
}

# Build final CSS
$finalCSS = @"
$baseContent

/* ====================================
   RESPONSIVE STYLES
   All media queries consolidated below
   ==================================== */

/* Desktop Large (1200px) */
$($sortedMQ['1200px'] -join "`n`n")

/* Tablet Landscape (1024px) */
$($sortedMQ['1024px'] -join "`n`n")

/* Tablet Portrait (768px) */
$($sortedMQ['768px'] -join "`n`n")

/* Mobile Small (480px) */
$($sortedMQ['480px'] -join "`n`n")

/* Touch Device Optimizations */
$($sortedMQ['touch'] -join "`n`n")

/* Other Media Queries */
$($sortedMQ['other'] -join "`n`n")
"@

# Clean up multiple blank lines
$finalCSS = [regex]::Replace($finalCSS, '(\r?\n){3,}', "`n`n")

Write-Host "Writing to output file..." -ForegroundColor Cyan
$finalCSS | Set-Content -Path $outputFile -Encoding UTF8

Write-Host "`nDone! File saved to: $outputFile" -ForegroundColor Green
Write-Host "Original file: $((Get-Item $sourceFile).Length / 1KB) KB" -ForegroundColor Gray
Write-Host "New file: $((Get-Item $outputFile).Length / 1KB) KB" -ForegroundColor Gray
Write-Host "`nTo use the new file, update your main.js import:" -ForegroundColor Cyan
Write-Host "  import './assets/style-new.css'" -ForegroundColor Yellow
