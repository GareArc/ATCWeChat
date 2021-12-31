package garethcxy.atc.wechat.atcwechatapi.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Response<T> {
    T data = null;
    String errorDescription = "";
    int code = 0;
}
