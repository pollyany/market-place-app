import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OrderItem } from './components/OrderItem'
import { useOrdersViewModel } from './useOrders.viewModel'
import { EmptyList } from './components/EmptyList'
import { ListHeader } from './components/ListHeader'

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders,
}) => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        contentContainerClassName="px-[16px] pb-[120px]"
        data={orders}
        renderItem={({ item: order }) => <OrderItem order={order} />}
        keyExtractor={({ id }) => `order-${id}`}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  )
}