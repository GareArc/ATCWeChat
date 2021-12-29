package garethcxy.atc.wechat.atcwechatapi.Utils;

import com.google.gson.Gson;

import com.google.gson.JsonSyntaxException;
import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import org.springframework.stereotype.Component;

@Component
public class JsonUtils {
    public<T> T parseToObject(String json, Class<T> tClass) throws InternalError {
        try{
            return new Gson().fromJson(json, tClass);
        }catch (JsonSyntaxException jse){
            throw new InternalError("JSON syntax error: " + json);
        }
    }

    public String parseToJSON(Object object) throws InternalError{
        try{
            return new Gson().toJson(object);
        }catch (Exception e){
            throw new InternalError("Cannot parse object to JSON");
        }
    }
}
