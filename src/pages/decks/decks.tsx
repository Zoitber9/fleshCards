import { useState } from 'react'

import s from './deck.module.scss'

import { Delete, Play, Redactor } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Table } from '@/components/ui/tables/tables'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks-api/decks-api'
import { currentPageReducer } from '@/services/store/deckParamsSlice'
import { useAppDispatch } from '@/services/store/store'

export const Decks = () => {
  const dispatch = useAppDispatch()
  const { data, isSuccess } = useGetDecksQuery()

  const [currentPage, setCurrentPage] = useState<number>(data?.pagination.currentPage || 1)

  const handlerPagination = (page: number) => {
    dispatch(currentPageReducer({ currentPage: page }))
    setCurrentPage(page)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <Typography variant={'large'}>Packs list</Typography>
        <Button>Add new pack</Button>
      </div>
      <div className={s.filtersContainer}>
        <div className={s.inputContainer}>
          <TextField type={'search'} placeholder={'Input search'}></TextField>
        </div>
        <div className={s.switcherContainer}>
          <TabSwitcher
            label={'Show packs cards'}
            defaultValue={'allCards'}
            tabData={[
              {
                title: 'My cards',
                value: 'myCards',
              },
              {
                title: 'All cards',
                value: 'allCards',
              },
            ]}
          />
        </div>
        <Slider label={'Number of cards'} min={0} max={15} defaultValue={[2, 10]}></Slider>
        <Button variant={'secondary'}>
          <Delete /> Clear Filter
        </Button>
      </div>
      <div>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Cards</Table.HeadCell>
              <Table.HeadCell>Last Updated</Table.HeadCell>
              <Table.HeadCell>Created by</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {isSuccess &&
              data.items.map(deck => (
                <Table.Row key={deck.id}>
                  <Table.Cell>{deck.name}</Table.Cell>
                  <Table.Cell>{deck.cardsCount}</Table.Cell>
                  <Table.Cell>
                    {deck.updated.toString().slice(0, 10).split('-').reverse().join('.')}
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant={'caption'}>{deck.author.name}</Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <div className={s.buttonContainer}>
                      <Button variant="link" className={s.editAvatarButton}>
                        <Play />
                      </Button>
                      <Button variant="link" className={s.editAvatarButton}>
                        <Redactor />
                      </Button>
                      <Button variant="link" className={s.editAvatarButton}>
                        <Delete />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Root>
      </div>
      <div className={s.pagination}>
        {data && (
          <Pagination
            currentPage={currentPage}
            pageSize={data.pagination.itemsPerPage}
            totalCount={data.pagination.totalPages}
            onPageChange={page => handlerPagination(page)}
          />
        )}
      </div>
    </div>
  )
}
