import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lumglxnmnbcqzjkblezs.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bWdseG5tbmJjcXpqa2JsZXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NjUxNDMsImV4cCI6MjAwNTI0MTE0M30.ajIV3xH8OOlvfYoJqsiluCnx0jtgQX-flXU9Rz_6mjI"

export default createClient(supabaseUrl, supabaseAnonKey)