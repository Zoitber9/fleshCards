import { useGetDecksQuery } from '@/services/decks-api/decks-api'

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  return (
    <div>
      <h1>Cards</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
