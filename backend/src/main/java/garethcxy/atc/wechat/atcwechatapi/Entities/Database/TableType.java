package garethcxy.atc.wechat.atcwechatapi.Entities.Database;

import lombok.Getter;

@Getter
public enum TableType {
    ORDER("orders");

    private final String tbName;
    TableType(String tbName){
        this.tbName = tbName;
    }

}
