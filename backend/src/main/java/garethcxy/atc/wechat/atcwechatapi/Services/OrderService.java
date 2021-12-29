package garethcxy.atc.wechat.atcwechatapi.Services;

import garethcxy.atc.wechat.atcwechatapi.DAOs.OrderDAO;
import garethcxy.atc.wechat.atcwechatapi.Entities.Database.Order.OrderMeta;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import garethcxy.atc.wechat.atcwechatapi.Entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderDAO orderDAO;

    public List<OrderMeta> getAllOrderMetas() throws InternalError {
        return orderDAO.getAllOrderMeta();
    }

    public Boolean addNewOrder(Order order) throws InternalError{
        orderDAO.insert(order);
        return true;
    }

    public Order getOrderByUUID(String uuid) throws InternalError{
        return orderDAO.getOrderByUUID(uuid);
    }
}
