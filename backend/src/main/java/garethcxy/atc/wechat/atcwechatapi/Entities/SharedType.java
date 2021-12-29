package garethcxy.atc.wechat.atcwechatapi.Entities;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum SharedType {
    WITHTARGET1,
    WITHTARGET2,
    TARGETS;

    @JsonCreator
    public static SharedType get(String s) {
        if(s.isEmpty()) return WITHTARGET1;
        for(SharedType sharedType : SharedType.values()){
            if(sharedType.name().equalsIgnoreCase(s))
                return sharedType;
        }
        return WITHTARGET1;
    }
}
