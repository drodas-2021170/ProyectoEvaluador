import { Select, HStack } from '@chakra-ui/react'

const FilterBar = ({ filter, setFilter }) => {
  return (
    <HStack mb={4} spacing={4}>
      <Select value={filter} onChange={e => setFilter(e.target.value)} maxW='200px'>
        <option value='all'>Todas</option>
        <option value='todo'>Por hacer</option>
        <option value='in-progress'>En progreso</option>
        <option value='done'>Completadas</option>
      </Select>
    </HStack>
  )
}

export default FilterBar