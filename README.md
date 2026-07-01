# RENA - Smart Invoice Management System

**Record & Electronic Navigation Assistant** – An integrated invoice and payment management platform for BCA OCEAN corporate ecosystem.

## 🎯 Project Overview

RENA is a comprehensive invoice management solution designed for corporate clients to:
- Upload and manage invoices (single or bulk)
- Track payments and reminders
- Integrate with ERP systems (Oracle, SAP)
- Generate business summaries for lending purposes
- Store documents securely in a digital vault

## 📊 Key Features

### FREE Tier
- Single invoice upload with OCR
- Basic invoice tracking
- Payment reminders
- Digital vault

### SUBSCRIPTION Tier
- Bulk upload (TXT/CSV from ERP)
- Agentic AI verification
- Business summary reports
- Advanced analytics
- KMK loan potential calculation

## 🏗️ Project Structure

```
rena/
├── frontend/              # React/Next.js web application
├── backend/               # Node.js/Express API server
├── database/              # Database schemas and migrations
├── docs/                  # Documentation
├── scripts/               # Utility scripts
└── docker-compose.yml     # Local development setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+ (or use Docker)

### Installation

```bash
# Clone the repository
git clone https://github.com/hyozoka/rena.git
cd rena

# Install dependencies
npm install

# Start development environment
docker-compose up -d

# Run migrations
npm run db:migrate

# Start development servers
npm run dev
```

## 📚 Documentation

See `/docs` for detailed documentation:
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Authentication](./docs/AUTH.md)
- [Development Guide](./docs/DEVELOPMENT.md)

## 🔗 Technology Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Query
- Zustand (State Management)

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- JWT Authentication

### DevOps
- Docker & Docker Compose
- GitHub Actions (CI/CD)

## 📝 License

This project is proprietary to PT Bank Central Asia Tbk.

## 👥 Contributors

- Project Lead: hyozoka
