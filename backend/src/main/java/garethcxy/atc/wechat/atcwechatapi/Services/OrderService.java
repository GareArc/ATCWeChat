package garethcxy.atc.wechat.atcwechatapi.Services;

import garethcxy.atc.wechat.atcwechatapi.DAOs.OrderDAO;
import garethcxy.atc.wechat.atcwechatapi.Entities.Database.Order.OrderMeta;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import garethcxy.atc.wechat.atcwechatapi.Entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Value("${atc.admin.password}")
    private String adminPass;
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

    public Boolean clearOrders(String password) throws InternalError{
        if(!password.equals(adminPass)) throw new InternalError("Invalid Password.");
        orderDAO.clear();
        return true;
    }

    public Boolean deleteOrderByUUID(String password, String uuid) throws InternalError{
        if(!password.equals(adminPass)) throw new InternalError("Invalid Password.");
        orderDAO.delete(uuid);
        return true;
    }
}
