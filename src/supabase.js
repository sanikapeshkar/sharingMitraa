import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://odllspkmjlsuxtijwztq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbGxzcGttamxzdXh0aWp3enRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NTQyNjYsImV4cCI6MjAwNjAzMDI2Nn0.d2YsqZI7lwXmpM8-G5iGT5jN4zuUuvM2iWGioSyFT_M"

export default createClient(supabaseUrl, supabaseAnonKey)