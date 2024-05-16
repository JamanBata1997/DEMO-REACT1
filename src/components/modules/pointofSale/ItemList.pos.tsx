import { StackTitleComponent } from '../../common/StackTitleComponent'
import { Grid, Tabs } from '@mantine/core'
import {
    CATEGORIES,
    FOOD_ITEMS,
    getItemsByCategory,
} from '../../../utils/constants/fooditems.constants'
import { ItemCardPos } from './ItemCard.pos'

export const ItemsListPos = () => {
    return (
        <section className={'p-sm'}>
            <StackTitleComponent>Food Items</StackTitleComponent>
            <Tabs defaultValue="all">
                <Tabs.List>
                    <Tabs.Tab value={'all'}>All</Tabs.Tab>
                    {CATEGORIES.map((v, key) => (
                        <Tabs.Tab value={v.id.toString()} key={key}>
                            {v.name}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panel value={'all'} pt="xs">
                    <div
                        className={'overflow-y-auto w-full p-xs'}
                        style={{ height: 'calc(100vh - 185px)' }}
                    >
                        <Grid p={0} className={'w-full'}>
                            {FOOD_ITEMS.map((item: any, key2) => (
                                <Grid.Col md={3} key={key2}>
                                    <ItemCardPos item={item} />
                                </Grid.Col>
                            ))}
                        </Grid>
                    </div>
                </Tabs.Panel>
                {CATEGORIES.map((v, key) => (
                    <div>
                        <Tabs.Panel value={v.id.toString()} pt="xs" key={key}>
                            <Grid>
                                {getItemsByCategory(v.id.toString()).map(
                                    (item: any, key2) => (
                                        <Grid.Col md={3} key={key2}>
                                            <ItemCardPos item={item} />
                                        </Grid.Col>
                                    ),
                                )}
                            </Grid>
                        </Tabs.Panel>
                    </div>
                ))}
            </Tabs>
        </section>
    )
}
