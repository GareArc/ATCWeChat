package garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InternalError extends Exception{
    private int code = -1;
    private String description;

    public InternalError(String description){
        super(description);
        this.description = description;
    }
    public InternalError(String description, int code){
        super(description);
        this.description = description;
        this.code = code;
    }
}
