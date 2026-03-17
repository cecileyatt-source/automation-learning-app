import React, { useEffect, useMemo, useState } from 'react'

const curriculum = [
  {
    week: 1,
    title: 'Understand Automation Logic',
    goal: 'Learn how automations actually work before building anything complex.',
    focusAreas: [
      'What makes a process automatable',
      'Triggers, actions, conditions',
      'Basic variables and outputs',
      'Structured data capture in Excel',
    ],
    tasks: [
      'Study 2–3 real office workflows you already know',
      'Identify repetitive steps, decision points, and outputs',
      'Learn Power Automate basics',
      'Create a simple Excel log table with fields: Date received, Sender, Subject, Body preview, Summary, Status',
    ],
    build: ['Simple email capture flow from one sender or one folder into Excel'],
    deliverables: [
      '1 working flow',
      '1 simple process map',
      '1 automation learning journal page',
    ],
    category: 'Foundation',
  },
  {
    week: 2,
    title: 'Add Basic AI Summarization',
    goal: 'Turn raw captured email data into something useful.',
    focusAreas: [
      'AI summarization basics',
      'Standardized output fields',
      'Testing different email samples',
      'Error handling for empty or messy content',
    ],
    tasks: [
      'Improve Week 1 flow',
      'Add summary field generation',
      'Test with multiple email types',
      'Standardize how summaries should look: issue, request, required action, due date if any',
    ],
    build: ['Email capture + summary mini automation'],
    deliverables: [
      'Improved working flow',
      '1-page manual vs automated comparison',
      '1 mini case note with screenshots',
    ],
    category: 'Foundation',
  },
  {
    week: 3,
    title: 'Learn Tracking Structure',
    goal: 'Understand how business workflows need ownership and monitoring.',
    focusAreas: [
      'SharePoint lists or Excel trackers',
      'Status fields',
      'Owner fields',
      'Due dates and SLA logic',
    ],
    tasks: [
      'Create a request tracker structure with: Request ID, Request type, Requester, Owner, Date received, Due date, Status, Aging days, Remarks',
      'Build intake tracker that logs requests into SharePoint or Excel',
    ],
    build: ['Intake tracker that logs requests into SharePoint or Excel'],
    deliverables: [
      'Tracker file',
      '1 process map with trigger-owner-output',
      '1 documented workflow draft',
    ],
    category: 'Foundation',
  },
  {
    week: 4,
    title: 'Add Reminder and Overdue Logic',
    goal: 'Make the tracker operationally useful.',
    focusAreas: [
      'Reminder logic',
      'Overdue detection',
      'Exception flags',
      'Simple dashboard thinking',
    ],
    tasks: [
      'Add due date calculation',
      'Add overdue flag',
      'Add reminder email for open overdue requests',
      'Define simple dashboard metrics',
    ],
    build: ['Request logging + reminder mini automation'],
    deliverables: ['2nd mini automation', '2 documented workflows', 'Draft positioning statement'],
    category: 'Foundation',
    checkpoint: [
      '2 mini automations',
      '2 process maps',
      '1 positioning statement',
      'Better grasp of workflow logic',
    ],
  },
  {
    week: 5,
    title: 'Start Portfolio Project 1',
    subtitle: 'Executive Email and Action Tracker',
    goal: 'Convert email traffic into actionable tracking.',
    focusAreas: ['Email capture', 'AI summary', 'Action extraction', 'Structured logs'],
    tasks: [
      'Define exact fields for action tracker: Email date, Sender, Summary, Action item, Due date, Owner, Status',
      'Design the ideal output format first',
      'Build first version of the flow',
    ],
    build: ['Working first version of Executive Email and Action Tracker'],
    deliverables: ['Prototype flow', 'Tracker structure', 'Workflow diagram draft'],
    category: 'Portfolio',
  },
  {
    week: 6,
    title: 'Refine Portfolio Project 1',
    goal: 'Make Project 1 portfolio-ready.',
    focusAreas: ['Output quality', 'Field clarity', 'Practical business value', 'Better screenshots and sample records'],
    tasks: [
      'Test with realistic sample emails',
      'Improve summary/action extraction prompts',
      'Add status field logic',
      'Prepare before-and-after story: old manual process, new automated workflow, business value',
    ],
    build: ['Polished Project 1 output package'],
    deliverables: ['Finalized Project 1 flow', 'Sample tracker with records', 'Case study draft 1', 'Screenshots for portfolio'],
    category: 'Portfolio',
  },
  {
    week: 7,
    title: 'Start Portfolio Project 2',
    subtitle: 'Document Request Workflow',
    goal: 'Show you can automate governance and documentation workflows.',
    focusAreas: ['Intake', 'Routing', 'Ownership', 'Due dates', 'Monitoring'],
    tasks: [
      'Design request lifecycle: request submitted, request logged, owner assigned, due date set, reminders triggered, completion recorded',
      'Create fields for request list',
      'Build intake mechanism using SharePoint list or form',
    ],
    build: ['Core request intake and logging workflow'],
    deliverables: ['Process design', 'Intake tracker', 'First live flow'],
    category: 'Portfolio',
  },
  {
    week: 8,
    title: 'Refine Portfolio Project 2',
    goal: 'Add visibility and reporting.',
    focusAreas: ['Aging logic', 'Dashboard metrics', 'Business-facing presentation'],
    tasks: [
      'Add request aging',
      'Add overdue reminders',
      'Build dashboard metrics: total requests, active requests, overdue requests, average completion days, by owner, by type',
      'Prepare workflow diagram and screenshots',
    ],
    build: ['Reporting layer for Project 2'],
    deliverables: ['Finalized Project 2 workflow', 'Dashboard mockup or file', 'Case study draft 2'],
    category: 'Portfolio',
  },
  {
    week: 9,
    title: 'Start Portfolio Project 3',
    subtitle: 'Reconciliation / Matching Automation',
    goal: 'Demonstrate control-focused automation capability.',
    focusAreas: ['Matching logic', 'Exception handling', 'Cross-checking two data sources', 'Reporting mismatches'],
    tasks: [
      'Choose one version: booking vs payout or invoice vs payment',
      'Define matching rules: exact match, partial mismatch, missing transaction, altered amount',
      'Prepare two sample structured datasets',
    ],
    build: ['Matching logic in Excel and/or automation workflow'],
    deliverables: ['Matching framework', 'Logic rules sheet', 'First exception report draft'],
    category: 'Portfolio',
  },
  {
    week: 10,
    title: 'Refine Portfolio Project 3',
    goal: 'Turn matching logic into a presentable business solution.',
    focusAreas: ['Exception reporting', 'Clear status output', 'Control narrative'],
    tasks: [
      'Improve comparison logic',
      'Add exception categories',
      'Create summary dashboard: matched, mismatched, missing, altered amount',
      'Draft control-oriented case study',
    ],
    build: ['Presentable control-monitoring solution'],
    deliverables: ['Finalized Project 3', 'Exception report', 'Dashboard or summary sheet', 'Case study draft 3'],
    category: 'Portfolio',
  },
  {
    week: 11,
    title: 'Package the Portfolio',
    goal: 'Turn your work into marketable assets.',
    focusAreas: ['Presentation quality', 'File cleanup', 'Strong business language', 'Reusable templates'],
    tasks: [
      'Clean up screenshots',
      'Rename technical fields into business-friendly labels',
      'Create 1-page summary for each project',
      'Use this case study structure: business problem, manual process, automation approach, tools used, workflow steps, outputs, business value',
    ],
    build: ['Portfolio packaging system'],
    deliverables: ['3 one-page project summaries', '3 case studies', 'Clean screenshots folder', 'Polished workflow visuals'],
    category: 'Positioning',
  },
  {
    week: 12,
    title: 'Build Your Market Position',
    goal: 'Become ready to present yourself to clients or employers.',
    focusAreas: ['LinkedIn positioning', 'Service packaging', 'Simple pricing logic', 'Credibility assets'],
    tasks: [
      'Write final LinkedIn headline',
      'Write About section',
      'Finalize service offers',
      'Prepare a short presentation deck',
      'Prepare pricing structure: starter, standard, custom',
      'Create one portfolio summary page',
    ],
    build: ['Career-ready positioning package'],
    deliverables: ['Updated LinkedIn profile text', '3 service packages', '1 short deck', 'Outreach-ready portfolio summary'],
    category: 'Positioning',
  },
]

const resources = {
  'Beginner Guides': [
    'Workflow automation basics',
    'How to identify repetitive steps and decisions',
    'How triggers, actions, and conditions work',
    'How to design a simple automation-friendly Excel log',
  ],
  'Power Platform Topics': [
    'Power Automate fundamentals',
    'Outlook to Excel logging flows',
    'SharePoint list tracking basics',
    'Due dates, reminders, and status logic',
  ],
  'Portfolio Build Topics': [
    'Writing automation case studies',
    'Creating workflow diagrams',
    'Designing before-vs-after comparisons',
    'Packaging business-friendly deliverables',
  ],
}

const STORAGE_KEY = 'workflow-learning-tool-progress-v2'

function getWeekCompletion(week, completedMap) {
  return week.deliverables.every((_, idx) => completedMap[`${week.week}-${idx}`])
}

function getUnlockedWeeks(completedMap) {
  const unlocked = new Set([1])
  for (let i = 0; i < curriculum.length - 1; i += 1) {
    const currentWeek = curriculum[i]
    const nextWeek = curriculum[i + 1]
    if (getWeekCompletion(currentWeek, completedMap)) {
      unlocked.add(nextWeek.week)
    } else {
      break
    }
  }
  return unlocked
}

function App() {
  const [completedMap, setCompletedMap] = useState({})
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [tab, setTab] = useState('curriculum')
  const [view, setView] = useState('student')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setCompletedMap(JSON.parse(saved))
      } catch {
        setCompletedMap({})
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedMap))
  }, [completedMap])

  const unlockedWeeks = useMemo(() => getUnlockedWeeks(completedMap), [completedMap])
  const currentWeek = curriculum.find((item) => item.week === selectedWeek) ?? curriculum[0]
  const totalDeliverables = curriculum.reduce((sum, week) => sum + week.deliverables.length, 0)
  const completedDeliverables = Object.values(completedMap).filter(Boolean).length
  const completedWeeks = curriculum.filter((week) => getWeekCompletion(week, completedMap)).length
  const highestUnlocked = Math.max(...Array.from(unlockedWeeks))
  const overallProgress = Math.round((completedDeliverables / totalDeliverables) * 100) || 0

  useEffect(() => {
    if (!unlockedWeeks.has(selectedWeek)) {
      setSelectedWeek(highestUnlocked)
    }
  }, [highestUnlocked, selectedWeek, unlockedWeeks])

  function toggleDeliverable(weekNumber, deliverableIndex) {
    const key = `${weekNumber}-${deliverableIndex}`
    setCompletedMap((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function resetProgress() {
    setCompletedMap({})
    setSelectedWeek(1)
  }

  const currentWeekCompletion = Math.round(
    (currentWeek.deliverables.filter((_, idx) => completedMap[`${currentWeek.week}-${idx}`]).length /
      currentWeek.deliverables.length) *
      100
  ) || 0

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <div className="pill">Student–Teacher Learning Tool</div>
          <h1>Workflow Automation Curriculum App</h1>
          <p>
            A 12-week guided learning tool that shows focus areas, tasks, build activities, and deliverables.
            When the student completes all deliverables for a week, the next week unlocks automatically.
          </p>
        </div>
        <div className="hero-actions">
          <button className={view === 'student' ? 'btn btn-primary' : 'btn'} onClick={() => setView('student')}>
            Student View
          </button>
          <button className={view === 'teacher' ? 'btn btn-primary' : 'btn'} onClick={() => setView('teacher')}>
            Teacher View
          </button>
          <button className="btn btn-danger" onClick={resetProgress}>Reset Progress</button>
        </div>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Overall Progress</div>
          <div className="stat-value">{overallProgress}%</div>
          <div className="stat-helper">{completedDeliverables} of {totalDeliverables} deliverables completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Weeks Unlocked</div>
          <div className="stat-value">{unlockedWeeks.size}/12</div>
          <div className="stat-helper">Current available week: Week {highestUnlocked}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Weeks Completed</div>
          <div className="stat-value">{completedWeeks}</div>
          <div className="stat-helper">Weeks with all deliverables completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Mode</div>
          <div className="stat-value">{view === 'student' ? 'Student' : 'Teacher'}</div>
          <div className="stat-helper">Switch between learner and mentor perspective</div>
        </div>
      </section>

      <section className="tabs-row">
        <button className={tab === 'curriculum' ? 'tab active' : 'tab'} onClick={() => setTab('curriculum')}>Curriculum</button>
        <button className={tab === 'dashboard' ? 'tab active' : 'tab'} onClick={() => setTab('dashboard')}>Progress Dashboard</button>
        <button className={tab === 'resources' ? 'tab active' : 'tab'} onClick={() => setTab('resources')}>Learning Resources</button>
      </section>

      {tab === 'curriculum' && (
        <section className="content-grid">
          <aside className="sidebar-panel">
            <div className="panel-header">
              <h2>Weekly Path</h2>
              <span className="mini-pill">Sequential unlock</span>
            </div>
            <div className="week-list">
              {curriculum.map((week) => {
                const unlocked = unlockedWeeks.has(week.week)
                const completed = getWeekCompletion(week, completedMap)
                const selected = currentWeek.week === week.week

                return (
                  <button
                    key={week.week}
                    className={[
                      'week-card',
                      selected ? 'selected' : '',
                      !unlocked ? 'locked' : '',
                    ].join(' ').trim()}
                    onClick={() => unlocked && setSelectedWeek(week.week)}
                  >
                    <div className="week-card-top">
                      <span className="week-number">Week {week.week}</span>
                      <span className="week-state">{!unlocked ? 'Locked' : completed ? 'Done' : 'Open'}</span>
                    </div>
                    <div className="week-title">{week.title}</div>
                    <div className="week-category">{week.category}</div>
                  </button>
                )
              })}
            </div>
          </aside>

          <main className="main-panel">
            <div className="main-header">
              <div>
                <div className="tag-row">
                  <span className="mini-pill dark">Week {currentWeek.week}</span>
                  <span className="mini-pill blue">{currentWeek.category}</span>
                  {currentWeek.subtitle ? <span className="mini-pill green">{currentWeek.subtitle}</span> : null}
                </div>
                <h2>{currentWeek.title}</h2>
                <p>{currentWeek.goal}</p>
              </div>
              <div className="progress-card">
                <div className="stat-label">Week Completion</div>
                <div className="stat-value compact">{currentWeekCompletion}%</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${currentWeekCompletion}%` }} />
                </div>
              </div>
            </div>

            <div className="detail-grid">
              <section className="detail-card blue-bg">
                <h3>Focus Areas</h3>
                <ul>
                  {currentWeek.focusAreas.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="detail-card amber-bg">
                <h3>Tasks</h3>
                <ul>
                  {currentWeek.tasks.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="detail-card green-bg">
                <h3>Build</h3>
                <ul>
                  {currentWeek.build.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="detail-card deliverables-card">
                <h3>Deliverables</h3>
                <div className="deliverable-list">
                  {currentWeek.deliverables.map((item, idx) => {
                    const checked = Boolean(completedMap[`${currentWeek.week}-${idx}`])
                    return (
                      <label key={item} className={checked ? 'deliverable checked' : 'deliverable'}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDeliverable(currentWeek.week, idx)}
                        />
                        <div>
                          <div className="deliverable-title">{item}</div>
                          <div className="deliverable-help">Complete this to progress to the next week.</div>
                        </div>
                      </label>
                    )
                  })}
                </div>

                {getWeekCompletion(currentWeek, completedMap) ? (
                  <div className="notice success">
                    {currentWeek.week < 12
                      ? `This week is complete. Week ${currentWeek.week + 1} is now unlocked.`
                      : 'All 12 weeks are complete.'}
                  </div>
                ) : (
                  <div className="notice warning">Complete all deliverables to unlock the next week.</div>
                )}
              </section>
            </div>

            {currentWeek.checkpoint ? (
              <section className="checkpoint-card">
                <h3>Checkpoint</h3>
                <div className="checkpoint-grid">
                  {currentWeek.checkpoint.map((item) => (
                    <div key={item} className="checkpoint-item">{item}</div>
                  ))}
                </div>
              </section>
            ) : null}
          </main>
        </section>
      )}

      {tab === 'dashboard' && (
        <section className="dashboard-panel">
          <div className="panel-header">
            <h2>{view === 'teacher' ? 'Teacher Progress Board' : 'Student Progress Board'}</h2>
            <span className="mini-pill">Weekly overview</span>
          </div>

          <div className="dashboard-list">
            {curriculum.map((week) => {
              const doneCount = week.deliverables.filter((_, idx) => completedMap[`${week.week}-${idx}`]).length
              const progress = Math.round((doneCount / week.deliverables.length) * 100) || 0
              const unlocked = unlockedWeeks.has(week.week)
              const completed = progress === 100
              return (
                <div key={week.week} className="dashboard-row">
                  <div>
                    <div className="tag-row">
                      <span className="mini-pill dark">Week {week.week}</span>
                      <span className="mini-pill blue">{week.category}</span>
                      <span className={completed ? 'mini-pill green' : unlocked ? 'mini-pill amber' : 'mini-pill'}>
                        {completed ? 'Completed' : unlocked ? 'In Progress' : 'Locked'}
                      </span>
                    </div>
                    <div className="dashboard-title">{week.title}</div>
                    <div className="dashboard-subtitle">{week.goal}</div>
                  </div>
                  <div className="dashboard-progress">
                    <div className="dashboard-progress-meta">
                      <span>{doneCount}/{week.deliverables.length} deliverables</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {tab === 'resources' && (
        <section className="resources-panel">
          <div className="panel-header left-only">
            <div>
              <h2>Learning Resources</h2>
              <p className="panel-text">These are suggested study topics to support coaching sessions and weekly implementation work.</p>
            </div>
          </div>
          <div className="resources-grid">
            {Object.entries(resources).map(([group, items]) => (
              <div className="resource-card" key={group}>
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default App
