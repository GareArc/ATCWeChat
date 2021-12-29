package garethcxy.atc.wechat.atcwechatapi.Databases;

import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.ColumnListHandler;
import org.springframework.stereotype.Repository;
import org.sqlite.SQLiteDataSource;

import java.sql.SQLException;
import java.util.List;

@Repository
public class SQLiteManager {
    private final String DB_NAME = "atc.db";
    private final String DRIVER = "org.sqlite.JDBC";
    private QueryRunner runner;

    public SQLiteManager() {
        init();
    }

    /**
     * Perform a single SQL for updating. For query SQL, please use querySQL() method.
     * */
    public void performQuery(String sql) throws InternalError {
        try{
            runner.update(sql);
        }catch (SQLException sqle){
            throw new InternalError("Cannot perform sql: " + sql + "\n" + sqle.getMessage());
        }
    }

    public void modifyQuery(String sql, Object... args) throws InternalError{
        try{
            runner.update(sql, args);
        }catch (SQLException e){
            throw new InternalError("Cannot perform sql:" + sql);
        }

    }

    public<T> List<T> selectQueryRow(String sql, Class<T> rowClass, Object... args) throws InternalError{
        ResultSetHandler<List<T>> handler = new BeanListHandler<>(rowClass);
        try{
            return runner.query(sql, handler, args);
        }catch (SQLException sqle){
            throw new InternalError("Failed to query data using sql: " + sql);
        }
    }

    public<T> List<T> selectQueryColumn(String sql, Class<T> columnClass, Object... args) throws InternalError{
        ResultSetHandler<List<T>> handler = new ColumnListHandler<>();
        try {
            return runner.query(sql, handler, args);
        }catch (SQLException sqle){
            throw new InternalError("Failed to query data using sql: " + sql);
        }
    }

    private void init(){
        DbUtils.loadDriver("org.sqlite.JDBC");
        SQLiteDataSource ds = new SQLiteDataSource();
        ds.setDatabaseName(DB_NAME);
        ds.setUrl("jdbc:sqlite:" + DB_NAME);
        ds.setEncoding("UTF-8");
        runner = new QueryRunner(ds);
    }
}
