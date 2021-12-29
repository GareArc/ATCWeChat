package garethcxy.atc.wechat.atcwechatapi.Controllers;


import garethcxy.atc.wechat.atcwechatapi.Entities.Database.Order.OrderMeta;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import garethcxy.atc.wechat.atcwechatapi.Entities.Order;
import garethcxy.atc.wechat.atcwechatapi.Entities.Response;
import garethcxy.atc.wechat.atcwechatapi.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/atc/api/order")
public class OrderController{
    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    public Response<List<OrderMeta>> getAllOrderMetas() throws InternalError {
        Response<List<OrderMeta>> r = new Response<>();
        r.setData(orderService.getAllOrderMetas());
        return r;
    }

    @PostMapping("/add")
    public Response<Boolean> addNewOrder(@RequestBody Order order) throws InternalError{
        Response<Boolean> r = new Response<>();
        r.setData(orderService.addNewOrder(order));
        return r;
    }

    @GetMapping("/uuid/{uuid}")
    public Response<Order> getOrderByUUID(@PathVariable("uuid") String uuid) throws InternalError{
        Response<Order> r = new Response<>();
        r.setData(orderService.getOrderByUUID(uuid));
        return r;
    }
}
