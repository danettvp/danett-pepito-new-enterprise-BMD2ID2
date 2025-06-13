import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqvvhzbnsaygeoaeyxmr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnZoemJuc2F5Z2VvYWV5eG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTc1NzIsImV4cCI6MjA2NTM5MzU3Mn0.Kq8ttUnTCn7ukuvxij3tyN-D50X9eEZw6HnC8Gv6pIE'

export const supabase = createClient(supabaseUrl, supabaseKey)