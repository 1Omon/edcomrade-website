# Pioneers' Software — Module Reference, Pricing & Combinations

**S.A Edcomrade Ventures** · Last updated: July 2026

---

## Overview

Pioneers' Software is a modular, cloud-hosted school ERP delivered as a Progressive Web App at **pioneers.edcomrade.com**. Every school gets the School Administration Module free — permanently. Paid add-on modules are priced **per student, per term** and activated at any time from the school's Settings page.

There are **3 academic terms per year**. All pricing below is in **Ghana Cedis (GHS)**.

---

## Module 0 — School Administration Module

**Price: FREE — always, for every school**

The core module is the entry point into the Pioneers' ecosystem. It is not a trial. It does not expire. Every school that registers gets it at no cost, and it comes bundled with ParentAide and a verified Schoolpedia profile.

### Features

#### Admissions Management
- Online application form builder — admin configures required fields per intake
- Application portal accessible from ParentAide and the school's Schoolpedia profile
- Application status tracking (Submitted → Under Review → Accepted/Rejected)
- Entrance examination scheduling and result recording
- Admission letter generation — PDF with school branding
- Batch admission — bulk student upload via CSV
- Waitlist management with automatic promotion when a place opens
- Applicant document upload (birth certificate, passport photo, report cards)
- Automatic student record creation on admission confirmation
- Parent notification via ParentAide and SMS/email on every status change

#### Student Information System (SIS)
- Complete searchable student profile: personal details, academic history, class assignment, photo
- Emergency contact storage
- Student ID generation (format: SCHOOLCODE-YEAR-SEQUENCE)
- Class assignment and stream management with bulk end-of-year promotion
- Academic year promotion with exception flagging for students who repeat
- Transfer management — record transfers in and out with previous school data
- Sibling detection — flags students sharing a guardian for potential fee discounts
- Export all student data as CSV or PDF

#### Health Records
- Medical history per student — conditions, allergies, blood group, immunisation records
- Clinic visit log — date, complaint, treatment, referral status
- Medication tracking — students on regular medication with dosage and schedule
- Emergency medical card — printable one-page summary per student
- Role-restricted access — only admin and designated health staff can view full records
- Parent can request health record updates via ParentAide (subject to admin review)

#### Staff Communication
- Broadcast messaging — send to all parents, a class, a year group, or individual parents
- Message delivery via ParentAide push notification, in-app message, and SMS fallback
- Staff circulars — internal messaging to all staff or selected departments
- Message templates — reusable notices (fee reminders, PTA meetings, holiday notices)
- Message read receipts — see which parents have read a notice
- Scheduled messages — set notices to send at a future date and time
- Emergency broadcast — full-screen alert on parent phones until dismissed

#### Timetable Scheduling
- Automated timetable generation with constraint detection
- Conflict detection and reporting — flags unresolvable clashes rather than silently failing
- Handles: teacher unavailability, double-booking prevention, subject spread rules
- Manual drag-and-drop override after generation
- Teacher timetable view — each teacher sees only their own schedule
- Printable class timetable per class
- Substitute teacher assignment — suggests available substitutes when a teacher is absent
- Timetable visible to parents and students in ParentAide

#### Basic Billing Management
- Fee structure configuration — set fee items per class and per term
- Automatic invoice generation at term start for all students
- Individual invoice adjustment — discounts, waivers, additional charges
- Payment collection via ParentAide Wallet (Paystack)
- Automated payment reminders at configurable intervals
- PDF receipt generation on payment confirmation
- Outstanding balance report by class or school-wide
- Partial payment recording with remaining balance tracking
- Sibling discount application

#### Bundled Free with Core
- **ParentAide** — the parent and guardian mobile app (fee payments, notifications, academic tracking, marketplace, bus notifications, pickup authorisation)
- **Schoolpedia Verified Profile** — school listed and verified on schoolpedia.edcomrade.com with full public profile

---

## Module 1 — Classroom & Exam Management

**Price: GHS 2.00 – 3.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 3.00 |
| 100 – 299 students | GHS 2.50 |
| 300 – 499 students | GHS 2.20 |
| 500+ students | GHS 2.00 |

### Features

#### Attendance
- Per-period or per-day attendance — mark Present, Absent, Late, or Excused per student
- Offline attendance recording with automatic sync when connectivity restores
- Bulk mark all present, then individually mark exceptions
- Automated parent notification in ParentAide when student is marked absent
- Attendance history per student for the current term
- Attendance analytics — trends per student, class, and term
- Attendance threshold alerts — flag students below a configurable attendance percentage

#### Lesson Notes & Assignments
- Lesson note creation — title, subject, class, rich text content, optional file attachment
- Assignment creation — title, description, due date, class, marks available, file attachment
- Assignment submission tracking — record which students have submitted
- Grade entry per assignment per student
- Lesson notes and assignments visible to parents and students in ParentAide

#### Assessments & Examinations
- Continuous assessment score entry — per subject, per assessment type (classwork, quiz, midterm, project)
- End-of-term examination result entry
- Grade computation — weighted average of continuous assessment and examination scores, configurable weighting per school
- Grade boundaries configuration — A/B/C or numeric, configurable per school level
- Academic report card generation — PDF per student per term with school branding
- Class and school-wide performance analytics — subject averages, top performers, students needing support
- Parent access to report card via ParentAide

#### AI-Powered Early Warning System *(visionary — included)*
- Analyses attendance rate, assignment submission rate, and assessment scores per student weekly
- Flags students showing early signs of academic difficulty (2+ thresholds breached)
- Sends alert to class teacher in Pioneers' and a gentle notification to parent in ParentAide

#### AI Report Card Narrative *(visionary — included)*
- Auto-generates a one-paragraph written narrative for each student's report card
- Rule-based natural language generation — no external AI API, runs on Pioneers' servers
- Teacher can edit the generated narrative before the PDF is finalised

---

## Module 2 — Hostel & Boarding Management

**Price: GHS 3.00 – 4.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 4.00 |
| 100 – 299 students | GHS 3.50 |
| 300 – 499 students | GHS 3.20 |
| 500+ students | GHS 3.00 |

> Note: This module is typically activated only for students who are boarders. If a school has 400 students but only 150 boarders, pricing applies to the 150 boarders only. Admin configures which students are flagged as boarders.

### Features
- Hostel and room configuration — define blocks, floors, rooms, capacity, and room type
- Student room allocation with capacity enforcement
- Boarding fee billing separate from tuition — integrates with Finance module if active
- Duty roster management — assign house masters and matrons to duty dates
- Student welfare log — record welfare checks, incidents, and notes per student
- Exeat management — track when boarders leave campus and when they return
- Parent approval of exeat via ParentAide — boarding master approves or rejects
- Parent notification on exeat approval/rejection and on student return
- Occupancy reports — current occupancy per room, block, and hostel

---

## Module 3 — HR Management

**Price: GHS 2.00 – 3.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 3.00 |
| 100 – 299 students | GHS 2.50 |
| 300 – 499 students | GHS 2.20 |
| 500+ students | GHS 2.00 |

### Features
- Staff profile — personal details, qualifications, employment history, role, department, salary grade
- Staff ID generation
- Payroll computation — salary, allowances, deductions (tax, SSNIT), net pay (Ghana-specific)
- Payroll disbursement records per staff per month
- Payslip generation — PDF per staff member per month
- Leave management — apply, approve workflow, and leave balance tracking
- Recruitment pipeline — job posting, applicant tracking, interview scheduling, offer management
- Performance appraisal — configurable templates, scores, and comments
- Staff attendance tracking — integrated with timetable for teacher attendance
- Contract management — store contract dates, trigger renewal alerts
- Staff App integration — staff view payslips, submit leave, and check contracts on mobile

---

## Module 4 — Finance Management

**Price: GHS 3.00 – 4.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 4.00 |
| 100 – 299 students | GHS 3.50 |
| 300 – 499 students | GHS 3.20 |
| 500+ students | GHS 3.00 |

> Note: The Core Module includes basic billing (invoice generation and Paystack payment collection). The Finance Module extends this with full bookkeeping, budgeting, and financial reporting. Schools needing only fee collection do not need this module.

### Features
- Double-entry bookkeeping — all financial transactions recorded with debit and credit entries
- Chart of accounts — configurable, with a Ghana education sector-appropriate default chart
- Income recording — fees received, grants, donations, rental income
- Expense recording — categorised, supplier-linked, receipt upload
- Invoice management — create, send, and track invoices to third parties
- Budget creation — annual and termly budget per category with variance tracking
- Bank reconciliation — import bank statements and match against recorded transactions
- Financial reports — income statement, balance sheet, cash flow statement, fee collection summary
- GRA-compatible tax report output
- Petty cash management — float tracking, expense recording, replenishment requests
- Multi-signatory approval — large expenses require sign-off from configured approvers

---

## Module 5 — Alumni Management

**Price: GHS 1.00 – 2.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 2.00 |
| 100 – 299 students | GHS 1.50 |
| 300 – 499 students | GHS 1.20 |
| 500+ students | GHS 1.00 |

### Features
- Alumni profile auto-creation from graduated student records
- Alumni directory — searchable by graduation year, class, programme
- Alumni communication — broadcast messages to cohorts via email and ParentAide
- Event management — alumni reunion events, RSVPs, attendance tracking
- Contribution and donation tracking — alumni giving records and campaigns
- Alumni self-update — alumni can update their own profile via an alumni portal
- Employment and achievement tracking — career updates and notable achievements

---

## Module 6 — Transportation & Safety

**Price: GHS 2.00 – 3.00 per student per term**

| School Size | Price per Student per Term |
|---|---|
| Under 100 students | GHS 3.00 |
| 100 – 299 students | GHS 2.50 |
| 300 – 499 students | GHS 2.20 |
| 500+ students | GHS 2.00 |

> Note: This module is typically activated only for students who use school transport. Pricing applies to enrolled transport students only, not the total school population.

### Features
- Vehicle registry — buses with capacity, registration number, assigned driver
- Route management — define routes with stops and assigned students per stop
- Student transport enrolment — assign students to routes and stops
- Pickup authorisation — parent designates authorised pickup persons via ParentAide
- QR-code and 4-digit code pickup confirmation — driver scans or enters code to confirm
- Pickup confirmation notification to parent the moment their child is collected
- Bus boarding and alighting notifications — parent notified in real time
- Real-time bus GPS tracking — location visible to school admin and parents in ParentAide (requires driver phone with internet)
- ETA calculation and push notification to parents before bus arrives at their stop
- Missing child report — driver flags a student as unaccounted for, triggers immediate admin and parent alert
- Transport fee billing — integrated with basic billing or Finance module
- Driver interface via Pioneers' Staff App — lightweight route and pickup management on mobile

---

## Module 7 — E-Commerce & Inventory Management

**Price: GHS 2.00 per student per term (flat across all sizes)**

### Features
- Asset registry — track all school physical assets (furniture, equipment, electronics) with serial number, condition, location, purchase date
- Inventory management — track consumable stock with low-stock alerts
- School store setup — admin creates a product catalogue with prices and stock levels
- Order placement — parents browse and order from the school store via ParentAide
- Order processing — admin receives orders, confirms availability, marks as ready for collection
- Payment via ParentAide Wallet — order payment deducted from parent wallet balance
- Order history for parents in ParentAide
- Stock deduction on order fulfilment
- Purchase order management — school raises purchase orders for restocking
- Smart Procurement Suggestions *(visionary — included)*: analyses inventory consumption patterns, predicts stockouts, and generates automated reorder suggestions to the bursar 1–2 weeks before projected stockout

---

## Pricing Summary Table

| Module | Under 100 | 100–299 | 300–499 | 500+ |
|---|---|---|---|---|
| School Administration | **FREE** | **FREE** | **FREE** | **FREE** |
| Classroom & Exam | GHS 3.00 | GHS 2.50 | GHS 2.20 | GHS 2.00 |
| Hostel & Boarding* | GHS 4.00 | GHS 3.50 | GHS 3.20 | GHS 3.00 |
| HR Management | GHS 3.00 | GHS 2.50 | GHS 2.20 | GHS 2.00 |
| Finance Management | GHS 4.00 | GHS 3.50 | GHS 3.20 | GHS 3.00 |
| Alumni Management | GHS 2.00 | GHS 1.50 | GHS 1.20 | GHS 1.00 |
| Transportation & Safety* | GHS 3.00 | GHS 2.50 | GHS 2.20 | GHS 2.00 |
| E-Commerce & Inventory | GHS 2.00 | GHS 2.00 | GHS 2.00 | GHS 2.00 |

*Hostel and Transportation are priced on enrolled students in those programmes, not total school enrolment.

---

## Discounts & Lock-In

### Bundle Discount
Activate **3 or more paid modules simultaneously** and receive **15% off the combined module total** for every term those modules remain active.

The discount applies to the combined invoice — it is not per module. If a school activates 3 modules and later deactivates one (dropping to 2), the discount is removed from the next term's invoice.

### 5-Year Price Lock-In
Schools that sign a **5-year commitment** on any combination of paid modules lock in the current per-student pricing for the full 5-year period — regardless of future price increases or how much the school grows in enrolment. The rate per student per term is frozen at today's price.

The 5-year lock-in can be activated at any time from the school's Settings page and is available on any module or combination of modules.

---

## Combination Calculations

The following examples show real invoice amounts for common school profiles.  
All calculations are: **(price per student × number of students) × number of active modules (combined)**  
Then bundle discount applied if 3+ modules active.  
Then multiplied by 3 for annual cost.

---

### School A — Small Private Basic School
**150 students | Tier: 100–299**

#### Option 1: Core Only
| | |
|---|---|
| Modules active | School Administration (free) |
| Cost per term | GHS 0 |
| Annual cost | GHS 0 |

#### Option 2: Core + Classroom & Exam
| | |
|---|---|
| Modules active | Core + Classroom & Exam |
| Classroom rate | GHS 2.50 × 150 = GHS 375 per term |
| Bundle discount | Not applicable (only 1 paid module) |
| **Cost per term** | **GHS 375** |
| **Annual cost (3 terms)** | **GHS 1,125** |

#### Option 3: Core + Classroom + Finance (bundle)
| | |
|---|---|
| Modules active | Core + Classroom & Exam + Finance Management |
| Classroom | GHS 2.50 × 150 = GHS 375 |
| Finance | GHS 3.50 × 150 = GHS 525 |
| Combined before discount | GHS 900 per term |
| Bundle discount (15%) | −GHS 135 |
| **Cost per term** | **GHS 765** |
| **Annual cost (3 terms)** | **GHS 2,295** |

#### Option 4: Core + Classroom + Finance + HR (bundle)
| | |
|---|---|
| Classroom | GHS 2.50 × 150 = GHS 375 |
| Finance | GHS 3.50 × 150 = GHS 525 |
| HR | GHS 2.50 × 150 = GHS 375 |
| Combined before discount | GHS 1,275 per term |
| Bundle discount (15%) | −GHS 191.25 |
| **Cost per term** | **GHS 1,083.75** |
| **Annual cost (3 terms)** | **GHS 3,251.25** |

#### Option 5: All 7 paid modules (bundle)
| | |
|---|---|
| Classroom | GHS 2.50 × 150 = GHS 375 |
| Hostel (50 boarders) | GHS 3.50 × 50 = GHS 175 |
| HR | GHS 2.50 × 150 = GHS 375 |
| Finance | GHS 3.50 × 150 = GHS 525 |
| Alumni | GHS 1.50 × 150 = GHS 225 |
| Transport (60 students) | GHS 2.50 × 60 = GHS 150 |
| E-Commerce | GHS 2.00 × 150 = GHS 300 |
| Combined before discount | GHS 2,125 per term |
| Bundle discount (15%) | −GHS 318.75 |
| **Cost per term** | **GHS 1,806.25** |
| **Annual cost (3 terms)** | **GHS 5,418.75** |

---

### School B — Mid-Size Private SHS
**300 students | Tier: 300–499**

#### Option 1: Core + Classroom + Finance (bundle)
| | |
|---|---|
| Classroom | GHS 2.20 × 300 = GHS 660 |
| Finance | GHS 3.20 × 300 = GHS 960 |
| Combined before discount | GHS 1,620 per term |
| Bundle discount (15%) | −GHS 243 |
| **Cost per term** | **GHS 1,377** |
| **Annual cost (3 terms)** | **GHS 4,131** |

#### Option 2: Core + Classroom + Finance + HR (bundle)
| | |
|---|---|
| Classroom | GHS 2.20 × 300 = GHS 660 |
| Finance | GHS 3.20 × 300 = GHS 960 |
| HR | GHS 2.20 × 300 = GHS 660 |
| Combined before discount | GHS 2,280 per term |
| Bundle discount (15%) | −GHS 342 |
| **Cost per term** | **GHS 1,938** |
| **Annual cost (3 terms)** | **GHS 5,814** |

#### Option 3: Core + Classroom + Finance + HR + Hostel (bundle, 120 boarders)
| | |
|---|---|
| Classroom | GHS 2.20 × 300 = GHS 660 |
| Finance | GHS 3.20 × 300 = GHS 960 |
| HR | GHS 2.20 × 300 = GHS 660 |
| Hostel | GHS 3.20 × 120 = GHS 384 |
| Combined before discount | GHS 2,664 per term |
| Bundle discount (15%) | −GHS 399.60 |
| **Cost per term** | **GHS 2,264.40** |
| **Annual cost (3 terms)** | **GHS 6,793.20** |

#### Option 4: All 7 paid modules (bundle)
| | |
|---|---|
| Classroom | GHS 2.20 × 300 = GHS 660 |
| Hostel (120 boarders) | GHS 3.20 × 120 = GHS 384 |
| HR | GHS 2.20 × 300 = GHS 660 |
| Finance | GHS 3.20 × 300 = GHS 960 |
| Alumni | GHS 1.20 × 300 = GHS 360 |
| Transport (100 students) | GHS 2.20 × 100 = GHS 220 |
| E-Commerce | GHS 2.00 × 300 = GHS 600 |
| Combined before discount | GHS 3,844 per term |
| Bundle discount (15%) | −GHS 576.60 |
| **Cost per term** | **GHS 3,267.40** |
| **Annual cost (3 terms)** | **GHS 9,802.20** |

---

### School C — Large Private SHS / International School
**500 students | Tier: 500+**

#### Option 1: Core + Classroom + Finance (bundle)
| | |
|---|---|
| Classroom | GHS 2.00 × 500 = GHS 1,000 |
| Finance | GHS 3.00 × 500 = GHS 1,500 |
| Combined before discount | GHS 2,500 per term |
| Bundle discount (15%) | −GHS 375 |
| **Cost per term** | **GHS 2,125** |
| **Annual cost (3 terms)** | **GHS 6,375** |

#### Option 2: Core + Classroom + Finance + HR + Hostel (bundle, 200 boarders)
| | |
|---|---|
| Classroom | GHS 2.00 × 500 = GHS 1,000 |
| Finance | GHS 3.00 × 500 = GHS 1,500 |
| HR | GHS 2.00 × 500 = GHS 1,000 |
| Hostel | GHS 3.00 × 200 = GHS 600 |
| Combined before discount | GHS 4,100 per term |
| Bundle discount (15%) | −GHS 615 |
| **Cost per term** | **GHS 3,485** |
| **Annual cost (3 terms)** | **GHS 10,455** |

#### Option 3: All 7 paid modules (bundle)
| | |
|---|---|
| Classroom | GHS 2.00 × 500 = GHS 1,000 |
| Hostel (200 boarders) | GHS 3.00 × 200 = GHS 600 |
| HR | GHS 2.00 × 500 = GHS 1,000 |
| Finance | GHS 3.00 × 500 = GHS 1,500 |
| Alumni | GHS 1.00 × 500 = GHS 500 |
| Transport (150 students) | GHS 2.00 × 150 = GHS 300 |
| E-Commerce | GHS 2.00 × 500 = GHS 1,000 |
| Combined before discount | GHS 5,900 per term |
| Bundle discount (15%) | −GHS 885 |
| **Cost per term** | **GHS 5,015** |
| **Annual cost (3 terms)** | **GHS 15,045** |

---

### 5-Year Lock-In Value Illustration

A school with 300 students on 3 modules paying GHS 1,377 per term today:

| | Without Lock-In | With 5-Year Lock-In |
|---|---|---|
| Year 1 (today's rate) | GHS 4,131 | GHS 4,131 |
| Year 2 (assume 10% price rise) | GHS 4,544 | GHS 4,131 |
| Year 3 (assume further 10% rise) | GHS 4,999 | GHS 4,131 |
| Year 4 (assume further 10% rise) | GHS 5,498 | GHS 4,131 |
| Year 5 (assume further 10% rise) | GHS 6,048 | GHS 4,131 |
| **5-Year Total** | **GHS 25,220** | **GHS 20,655** |
| **Saving** | | **GHS 4,565** |

---

## Pioneers' Software vs Custom App — Full Comparison

---

### The Fundamental Difference

**Pioneers' Software** is a shared cloud platform. All schools access it from pioneers.edcomrade.com. Each school's data is completely isolated from every other school's data, but the infrastructure, codebase, and hosting are shared. This is how Pioneers' stays affordable — the cost of building and maintaining one excellent system is spread across all schools using it.

**Custom App** is a bespoke system built from the ground up, specifically for one school or school group. It lives on the school's own servers (or dedicated cloud hosting), runs on the school's own domain name (e.g. app.heritageinternational.edu.gh), and belongs entirely to that institution. No other school shares any part of it.

---

### Feature-by-Feature Comparison

| Feature | Pioneers' Software | Custom App |
|---|---|---|
| **Best for** | Private basic schools, private SHS, vocational schools digitising for the first time | Established private schools, international schools, school chains and groups |
| **Hosting** | Shared cloud — pioneers.edcomrade.com | School's own servers or dedicated cloud |
| **Domain** | pioneers.edcomrade.com/[school-id] | school's own domain (.edu.gh available) |
| **Data ownership** | School owns all data — exportable at any time | School owns everything — data lives on their infrastructure |
| **System design** | Standardised modules — same system for all schools | Fully bespoke — designed around the school's specific workflows |
| **Website included** | No | Yes — a cinematic, professionally designed school website |
| **Branding** | Edcomrade-branded interface | Fully branded to the school's identity |
| **ParentAide** | Edcomrade-branded parent app (shared) | ParentAide branded to the school (their name, their colours) |
| **Schoolpedia profile** | Free verified profile included | Free verified profile included |
| **AI analytics** | Early warning system and report card narrative (Classroom module) | Full AI-powered analytics and reporting suite built in |
| **LMS (Learning Management)** | Not included | Can be included in scope |
| **Hardware procurement** | Through ComputerStore partners at market rates | Included as part of deployment scope — devices configured for the specific system |
| **Staff training** | Training manuals and Grind-based onboarding | Full on-site training for all staff — admin, teachers, bursars, drivers, nurses |
| **Deployment time** | 2 to 4 weeks | Approximately 3 months |
| **Starting cost** | Free (Core Module) | GHS 30,000+ (web PWA) |
| **Ongoing cost** | GHS 1–4 per student per term (paid modules only) | Annual maintenance fee (determined at scoping) |
| **Pricing model** | Usage-based (per student, per term) | Rent-to-own licensing — fixed fee + annual instalments, or one-time payment |
| **5-year price lock** | Available — lock in today's per-student rate for 5 years | Not applicable — pricing is agreed at scoping and fixed in the contract |
| **School chains** | Not designed for multi-campus | Includes central board dashboard for multi-campus oversight |
| **Customisation** | Standardised — modules are the same for every school | Unlimited — every screen, workflow, and feature designed to spec |
| **Module activation** | Self-serve — school activates from Settings, pays via Paystack | Agreed at scoping — all features included in the build |
| **New features** | Added to the shared platform — all schools benefit | School requests features — added under maintenance agreement |
| **Offline capability** | Core workflows function offline, sync on reconnection | Designed to spec — offline capability included if requested |
| **Support** | Platform Admin support via Pioneers' and WhatsApp | Dedicated Edcomrade project contact + maintenance agreement |
| **Who decides what gets built** | Edcomrade — based on platform-wide priorities | The school — based on their own requirements |

---

### When to Choose Pioneers' Software

Choose Pioneers' if:
- The school is taking its first step into digital management
- Budget is a primary consideration — free to start is a genuine starting point
- The school wants to be live quickly (2–4 weeks) without a long procurement process
- The school does not need a custom-branded parent app or their own domain
- The school is comfortable with a standardised system that is regularly updated
- The school wants to activate features incrementally as it grows

### When to Choose the Custom App

Choose the Custom App if:
- The school has a strong identity and wants technology that reflects it completely
- The school manages more than 500 students or operates multiple campuses
- The school wants to own its own infrastructure — data, hosting, domain
- The school needs specific workflows or features that Pioneers' does not offer
- The school's brand is part of how it attracts parents, and a generic interface undermines that
- The school is prepared to invest in a 3-month deployment process for a system that lasts a decade
- The school is an international institution with global accreditation requirements

---

### Cost Comparison — Real Example

**A school with 300 students choosing between the two options:**

#### Pioneers' Software — 3 modules (Classroom + Finance + HR), 5 years
| Year | Annual cost (with 15% bundle) | Notes |
|---|---|---|
| Year 1 | GHS 5,814 | Today's rates |
| Year 2 | GHS 5,814 | Locked in (if 5-year contract) |
| Year 3 | GHS 5,814 | Locked in |
| Year 4 | GHS 5,814 | Locked in |
| Year 5 | GHS 5,814 | Locked in |
| **5-Year Total** | **GHS 29,070** | |

#### Custom App — web PWA, 300 students
| Item | Cost |
|---|---|
| License fee (one-time or first instalment) | GHS 30,000+ |
| Annual maintenance (estimated) | GHS 4,000–8,000/year |
| Year 1 total (license + maintenance) | GHS 34,000–38,000 |
| Years 2–5 (maintenance only) | GHS 16,000–32,000 |
| **5-Year Total (estimate)** | **GHS 50,000–70,000** |

**The Custom App costs approximately 2–3× more over 5 years than Pioneers' at the same school size.** The additional cost buys: a bespoke system, full data sovereignty, school-branded parent app, a professional school website, dedicated support, and a system that belongs entirely to the school forever.

---

*Document maintained by S.A Edcomrade Ventures · edcomrade.com · For internal and sales use*