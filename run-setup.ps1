# Quick Setup Script
# Run this to see your project structure

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  COMMUNITY HEALTH PROJECT - JIRA SETUP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "YOUR WORKFLOW STATUS:" -ForegroundColor Yellow
Write-Host "  BACKLOG → PLANNING → IN PROGRESS → REVIEW → APPROVED → COMPLETED"
Write-Host ""

Write-Host "YOUR TEAM:" -ForegroundColor Yellow
Write-Host "  John (PM) - Planning, Reports"
Write-Host "  Mary (Field) - Data Collection, Evidence"
Write-Host "  Peter (M&E) - Review, Approval"
Write-Host ""

Write-Host "YOUR SAMPLE TASKS:" -ForegroundColor Yellow
Write-Host "  1. Plan community survey"
Write-Host "  2. Train field team"
Write-Host "  3. Collect health data"
Write-Host "  4. Review evidence"
Write-Host "  5. Submit donor report"
Write-Host ""

Write-Host "NEXT STEPS:" -ForegroundColor Green
Write-Host "  1. Open Jira"
Write-Host "  2. Create project: Community Health Outreach 2026"
Write-Host "  3. Add statuses: BACKLOG, PLANNING, IN PROGRESS, REVIEW, APPROVED, COMPLETED"
Write-Host "  4. Create the 5 tasks above"
Write-Host "  5. Assign team members"
Write-Host "  6. Start moving tasks through workflow"
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
