interface InputValue {
    amount?: number | null
    date: string
    description?: string | null
    id: string
    item?: string | null
  }

  export const addData = async (Input: InputFormData) => {
const InputData: InputValue = {
    input_type: Input.input_type,
const { data, error } = await supabase
  .from('expenses')
  .insert([
    { Input },
  ])
  .select()