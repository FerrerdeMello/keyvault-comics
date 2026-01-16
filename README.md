# KeyVault Comics — Backend Platform



## Overview
KeyVault Comics is a Europe-first, full-stack commerce platform focused on
used, rare, and graded comic books.

This backend is designed as a domain-driven, event-oriented system,
prioritizing inventory integrity, reservation safety, and scalability
towards grading, consignment, and marketplace features.



## Architectural Principles

This system follows a set of explicit architectural principles:

1. Domain-first design  
   Business rules are implemented before infrastructure concerns.

2. Event-driven core  
   Critical domain events are explicitly modeled and handled asynchronously.

3. Flow-oriented architecture  
   The system is organized around critical business flows, not CRUD operations.

4. Infrastructure as an adapter  
   Databases, messaging, and external services serve the domain logic.

5. Mobile-first usage  
   The platform assumes that 70–80% of user interactions happen on mobile devices.



## High-level Architecture

The backend is composed of:

- Frontend: Next.js (separate repository)
- API: NestJS
- Database: PostgreSQL
- ORM: Prisma
- Architecture Style: Modular, Domain-oriented, Event-driven

Communication between modules happens through explicit domain services and events.



## Core Domain Flow — Comic Reservation

The first implemented flow in this system is the comic reservation process.

This flow guarantees:
- Inventory locking for unique items
- Time-bound reservations
- Safe release of inventory in case of expiration or failure

### Flow steps

1. User initiates a reservation request
2. System validates comic availability
3. Inventory is locked atomically
4. A reservation record is created
5. A domain event is emitted
6. Side effects (notifications, timers) are handled asynchronously



## What this project demonstrates

- Domain modeling before implementation
- Explicit handling of critical business invariants
- Event-driven backend design
- Clean separation of concerns
- Production-ready architectural thinking



Domain model



Architecture decisions


flowchart LR
    U[User / Mobile / Desktop] -->|HTTP / HTTPS| FE[Next.js Frontend]

    FE -->|REST / JSON| API[NestJS API]

    API -->|ORM| DB[(PostgreSQL)]

    API -->|Domain Events| EB[Event Dispatcher]

    EB --> EMAIL[Email Service]
    EB --> PAY[Payment Webhooks]
    EB --> ANALYTICS[Analytics / Logs]


Tech stack



Event-driven approach



Future extensions

