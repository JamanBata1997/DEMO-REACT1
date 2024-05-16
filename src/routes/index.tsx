import { Routes, Route } from 'react-router-dom'
import { PointofSale } from '../pages/PointofSale/PointofSale'
import { ConfirmOrder } from '../pages/PointofSale/ConfirmOrder'

const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<PointofSale />} />
            <Route path={'placeorder'} element={<ConfirmOrder />} />
        </Routes>
    )
}

export default MainRoute
