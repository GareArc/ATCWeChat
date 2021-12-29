package garethcxy.atc.wechat.atcwechatapi.DAOs;

import garethcxy.atc.wechat.atcwechatapi.Databases.SQLiteManager;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class BaseDAO<T> {
    SQLiteManager manager;

    public BaseDAO(SQLiteManager manager){
        this.manager = manager;
    }

    abstract public void insert(T object) throws InternalError;
}
