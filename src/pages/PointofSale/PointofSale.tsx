import { Grid } from '@mantine/core'
import { ItemsListPos } from '../../components/modules/pointofSale/ItemList.pos'
import { OrderItemsPos } from '../../components/modules/pointofSale/Orderitems.pos'

export const PointofSale = () => {
    return (
        <Grid className="{w-full h-full}">
            <Grid.Col md={8}>
                <ItemsListPos />
            </Grid.Col>
            <Grid.Col md={4}>
                <OrderItemsPos />
            </Grid.Col>
        </Grid>
    )
}
