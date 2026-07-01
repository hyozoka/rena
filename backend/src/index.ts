import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { sequelize } from './config/database'

dotenv.config()

const app = express()
const PORT = process.env.API_PORT || 3001

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// API Routes (to be implemented)
app.use('/api/auth', (req, res) => res.json({ message: 'Auth routes' }))
app.use('/api/invoices', (req, res) => res.json({ message: 'Invoice routes' }))
app.use('/api/reminders', (req, res) => res.json({ message: 'Reminder routes' }))
app.use('/api/vault', (req, res) => res.json({ message: 'Vault routes' }))

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString(),
  })
})

// Start server
const startServer = async () => {
  try {
    await sequelize.authenticate()
    console.log('✅ Database connected')
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
