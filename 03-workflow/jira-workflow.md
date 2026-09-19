# Workflow Level

## Combined Tool Workflow: Jira + Confluence

### Project: Community Project Management

### Tools Used:
- **Jira** → Task management, status tracking, workflow
- **Confluence** → Knowledge, documentation, collaboration, evidence

---

## Status Flow (Main Path)

```
BACKLOG
    ↓
PLANNING
    ↓
IN PROGRESS
    ↓
REVIEW
    ↓
APPROVED
    ↓
COMPLETED
```

---

## Status Definitions

| Status | Description | Owner |
|--------|-------------|-------|
| BACKLOG | Not yet started, waiting to be picked up | PM |
| PLANNING | Being planned, resources assigned | PM / Team |
| IN PROGRESS | Active work happening | Field Officer |
| REVIEW | Work done, awaiting review | M&E Officer |
| APPROVED | Review passed, ready to close | PM |
| COMPLETED | Project finished and closed | PM |

---

## Exception Paths

### From PLANNING
```
PLANNING
    │
    ├──→ BLOCKED (waiting for resources/approval)
    │         │
    │         └──→ PLANNING (unblocked)
    │
    └──→ CANCELLED (project stopped)
```

### From IN PROGRESS
```
IN PROGRESS
    │
    ├──→ ON HOLD (paused)
    │         │
    │         └──→ IN PROGRESS (resumed)
    │
    └──→ BLOCKED (issue encountered)
              │
              └──→ IN PROGRESS (resolved)
```

### From REVIEW
```
REVIEW
    │
    ├──→ REVISION NEEDED (changes required)
    │         │
    │         └──→ IN PROGRESS (fixes applied)
    │
    └──→ REJECTED (does not meet criteria)
              │
              └──→ PLANNING (restart)
```

---

## Transition Rules

| From | To | Trigger |
|------|----|---------|
| BACKLOG | PLANNING | PM prioritizes |
| PLANNING | IN PROGRESS | Plan approved |
| IN PROGRESS | REVIEW | Work complete |
| REVIEW | APPROVED | Meets criteria |
| APPROVED | COMPLETED | Final sign-off |

---

## Swimlanes (Who Does What)

| Role | Jira | Confluence |
|------|------|------------|
| Program Manager | Any status | Full access, edit all pages |
| Field Officer | IN PROGRESS → REVIEW | Upload evidence, view project pages |
| M&E Officer | REVIEW → APPROVED | Edit review pages, add comments |
| Finance Officer | APPROVED → COMPLETED | View budget pages, edit finance |
| Partner | Can view, limited edits | Guest access, view only |
| Donor | View only | Guest access, view reports |

---

## Tool Division: What Goes Where

### Jira Handles:
- Task status and workflow
- Assignments and deadlines
- Progress tracking
- Blockers and issues
- Sprint planning

### Confluence Handles:
- Project plans and documentation
- Policies and procedures
- Evidence and file storage
- Meeting notes
- Reports and dashboards
- Knowledge base
- Partner/stakeholder sharing

---

*This workflow represents how work moves through both Jira (tasks) and Confluence (knowledge), with clear statuses, transitions, and exception handling.*
