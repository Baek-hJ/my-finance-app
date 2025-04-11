interface Input {
    amount?: number | null
    date: string
    description?: string | null
    id: string
    item?: string | null
  }

const { data, error } = await supabase
  .from('expenses')
  .insert([
    { Input },
  ])
  .select()