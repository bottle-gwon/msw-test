import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductList from './components/common/ProductList'
import Test from './components/features/Test'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>

  )
}

export default App
