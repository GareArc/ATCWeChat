package garethcxy.atc.wechat.atcwechatapi.DAOs;

import garethcxy.atc.wechat.atcwechatapi.Databases.SQLiteManager;
import garethcxy.atc.wechat.atcwechatapi.Entities.Database.Order.OrderMeta;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import garethcxy.atc.wechat.atcwechatapi.Entities.Order;
import garethcxy.atc.wechat.atcwechatapi.Entities.Database.TableType;
import garethcxy.atc.wechat.atcwechatapi.Utils.JsonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Repository
public class OrderDAO extends BaseDAO<Order>{
    private final int limit = 100;

    @Autowired
    private JsonUtils jsonUtils;

    @Autowired
    public OrderDAO(SQLiteManager manager) throws InternalError{
        super(manager);
        init();
    }

    @Override
    public void insert(Order object) throws InternalError{
        object.calculate();
        UUID uuid = UUID.randomUUID();
        String time = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        // first check limit
        String sql = String.format("DELETE FROM %s WHERE uuid NOT IN (SELECT uuid FROM %s ORDER BY time DESC LIMIT %d)",
                TableType.ORDER.getTbName(), TableType.ORDER.getTbName(), limit);
        manager.performQuery(sql);
        // insert new item
        sql = String.format("INSERT INTO %s VALUES (?, ?, ?)", TableType.ORDER.getTbName());
        manager.modifyQuery(sql, uuid.toString(), time, jsonUtils.parseToJSON(object));
    }

    public List<OrderMeta> getAllOrderMeta() throws InternalError{
        return manager.selectQueryRow(String.format("SELECT uuid, time FROM %s", TableType.ORDER.getTbName()), OrderMeta.class);
    }

    public Order getOrderByUUID(String uuid) throws InternalError{
        String sql = String.format("SELECT content FROM %s WHERE uuid = ?;", TableType.ORDER.getTbName());
        List<String> order = manager.selectQueryColumn(sql, String.class, uuid);
        if(order == null || order.size() == 0) throw new InternalError("Order not found. uuid: " + uuid);
        return jsonUtils.parseToObject(order.get(0), Order.class);
    }


    private void init() throws InternalError {
        String sql = "CREATE TABLE IF NOT EXISTS %s (\n" +
                "uuid text PRIMARY KEY," +
                "time text NOT NULL,\n" +
                "content text" +
                ");";
        sql = String.format(sql, TableType.ORDER.getTbName());
        manager.performQuery(sql);
    }


}
