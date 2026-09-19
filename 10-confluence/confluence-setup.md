# Confluence Setup Guide

## For NGO Project Management

---

## Step 1: Create Space

1. Open Confluence
2. Click **Create Space**
3. Choose **Collaboration Space** or **Knowledge Base**
4. Name: **Community Health Outreach 2026**
5. Key: **CHO2026**

---

## Step 2: Set Up Permissions

### Permission Levels

| Level | Who | Can Do |
|-------|-----|--------|
| Admin | Program Manager | Everything |
| Editor | Team Members | Create, edit, comment |
| Commenter | Partners | View, comment |
| Viewer | Donors, Public | View only |

### How to Set Permissions
1. Go to **Space Settings**
2. Click **Permissions**
3. Add people/groups
4. Set their level

### Guest Access (External Partners)
1. Go to **Space Settings**
2. Click **Guest Access**
3. Enable and share link
4. Partners can view only

---

## Step 3: Create Page Structure

### Main Pages to Create

**1. Project Overview**
- About the Project
- Objectives
- Timeline
- Team

**2. Team and Roles**
- Who does what
- Contact information
- Responsibilities

**3. Knowledge Base**
- Policies
- Procedures
- Guidelines
- Templates

**4. Activities**
- Planning activities
- Field activities
- Data collection

**5. Evidence**
- Photos
- Documents
- Reports

**6. Reports**
- Weekly reports
- Monthly reports
- Donor reports

**7. Lessons Learned**
- What worked
- What to improve

---

## Step 4: Create Your First Page

### Template: Project Plan

```markdown
# Project Plan: Community Health Outreach 2026

## Overview
[Brief description]

## Objectives
- [ ] Objective 1
- [ ] Objective 2

## Timeline
| Phase | Start | End | Status |
|-------|-------|-----|--------|
| Planning | [Date] | [Date] | In Progress |
| Field Work | [Date] | [Date] | Not Started |

## Team
| Name | Role | Contact |
|------|------|---------|
| John | PM | john@org.com |
| Mary | Field | mary@org.com |

## Budget
| Item | Amount | Status |
|------|--------|--------|
| Transport | $500 | Approved |

## Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Weather | High | Backup dates |
```

---

## Step 5: Link Jira and Confluence

### In Jira:
1. Open a task
2. Click **Link Confluence Page**
3. Search for the page
4. Link it

### In Confluence:
1. Open a page
2. Type `/jira` to insert Jira macro
3. Show issue status
4. Link directly

---

## Step 6: Upload Evidence

### How to Upload
1. Open the Evidence page
2. Click **Attach Files**
3. Select files from your computer
4. Add description to each file

### Naming Convention
```
[Project]_[Type]_[Date]_[Description].[ext]

Examples:
CHO2026_Photo_20260919_ZoneA_Survey.jpg
CHO2026_Report_20260919_Weekly.pdf
CHO2026_Attendance_20260919_Training.xlsx
```

---

## Step 7: Share with Partners

### Guest Access
1. Go to **Space Settings**
2. Click **Guest Access**
3. Copy the link
4. Send to partners

### What Partners Can See
- View pages
- Add comments
- Download files
- Cannot edit or create

---

## Step 8: Automation

### Set Up Automation
1. Go to **Space Settings**
2. Click **Automation**
3. Create rules:

| Trigger | Action |
|---------|--------|
| Page created | Notify team |
| Page updated | Send email |
| Comment added | Notify page owner |

---

## Step 9: Insights

### View Activity
1. Go to **Space Settings**
2. Click **Insights**
3. See:
- Who viewed pages
- Most popular pages
- Team activity

---

## Quick Reference

### Jira vs Confluence

| Need | Use |
|------|-----|
| Track tasks | Jira |
| Store documents | Confluence |
| Manage workflow | Jira |
| Share knowledge | Confluence |
| Assign work | Jira |
| Create reports | Confluence |
| Track progress | Jira |
| Guest access | Confluence |
| Permissions | Both |

---

*This guide helps you set up Confluence for your NGO project alongside Jira.*
