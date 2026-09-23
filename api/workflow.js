export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const workflow = {
    statuses: [
      { id: 'backlog', name: 'BACKLOG', color: '#6b7280', order: 1 },
      { id: 'planning', name: 'PLANNING', color: '#3b82f6', order: 2 },
      { id: 'in_progress', name: 'IN PROGRESS', color: '#f59e0b', order: 3 },
      { id: 'review', name: 'REVIEW', color: '#8b5cf6', order: 4 },
      { id: 'approved', name: 'APPROVED', color: '#10b981', order: 5 },
      { id: 'completed', name: 'COMPLETED', color: '#059669', order: 6 },
      { id: 'blocked', name: 'BLOCKED', color: '#ef4444', order: 7 },
    ],
    tasks: [
      { id: 1, title: 'Plan community health survey', assignee: 'John (PM)', status: 'planning', priority: 'high', dueDate: '2026-09-25' },
      { id: 2, title: 'Train field team on data collection', assignee: 'Mary (Field)', status: 'in_progress', priority: 'high', dueDate: '2026-09-22' },
      { id: 3, title: 'Collect household health data - Zone A', assignee: 'Peter (Field)', status: 'backlog', priority: 'high', dueDate: '2026-09-28' },
      { id: 4, title: 'Collect household health data - Zone B', assignee: 'Peter (Field)', status: 'backlog', priority: 'medium', dueDate: '2026-10-05' },
      { id: 5, title: 'Review evidence and validate data', assignee: 'Sarah (M&E)', status: 'backlog', priority: 'high', dueDate: '2026-10-10' },
      { id: 6, title: 'Prepare monthly donor report', assignee: 'John (PM)', status: 'backlog', priority: 'medium', dueDate: '2026-10-15' },
      { id: 7, title: 'Budget review and approval', assignee: 'Finance Team', status: 'backlog', priority: 'high', dueDate: '2026-09-30' },
      { id: 8, title: 'Partner coordination meeting', assignee: 'John (PM)', status: 'completed', priority: 'medium', dueDate: '2026-09-18' },
    ],
    team: [
      { id: 'john', name: 'John', role: 'Program Manager', avatar: 'J', color: '#3b82f6' },
      { id: 'mary', name: 'Mary', role: 'Field Officer', avatar: 'M', color: '#f59e0b' },
      { id: 'peter', name: 'Peter', role: 'Field Officer', avatar: 'P', color: '#8b5cf6' },
      { id: 'sarah', name: 'Sarah', role: 'M&E Officer', avatar: 'S', color: '#10b981' },
      { id: 'finance', name: 'Finance', role: 'Finance Officer', avatar: 'F', color: '#ef4444' },
    ],
    progress: {
      total: 8,
      completed: 1,
      inProgress: 1,
      backlog: 5,
      review: 0,
      approved: 0,
      blocked: 0,
    },
    confluence: {
      space: 'Community Health Outreach 2026',
      pages: [
        { id: 1, title: 'Project Overview', url: '/project-overview', status: 'published' },
        { id: 2, title: 'Team & Roles', url: '/team-roles', status: 'published' },
        { id: 3, title: 'Knowledge Base', url: '/knowledge-base', status: 'draft' },
        { id: 4, title: 'Evidence Library', url: '/evidence', status: 'published' },
        { id: 5, title: 'Reports', url: '/reports', status: 'draft' },
        { id: 6, title: 'Lessons Learned', url: '/lessons-learned', status: 'draft' },
      ],
      permissions: [
        { role: 'Program Manager', level: 'admin' },
        { role: 'Field Officer', level: 'editor' },
        { role: 'M&E Officer', level: 'editor' },
        { role: 'Finance Officer', level: 'commenter' },
        { role: 'Partners', level: 'viewer (guest)' },
        { role: 'Donors', level: 'viewer (guest)' },
      ]
    }
  };

  if (req.method === 'GET') {
    return res.status(200).json(workflow);
  }

  if (req.method === 'POST') {
    const { action, taskId, newStatus, ...data } = req.body;
    
    if (action === 'updateTaskStatus' && taskId && newStatus) {
      const task = workflow.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = newStatus;
        return res.status(200).json({ success: true, task });
      }
      return res.status(404).json({ error: 'Task not found' });
    }
    
    return res.status(400).json({ error: 'Invalid action' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}