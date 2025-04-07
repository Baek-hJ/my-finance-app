const { data, error } = await supabase
  .from('expenses')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()