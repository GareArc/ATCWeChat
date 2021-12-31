package garethcxy.atc.wechat.atcwechatapi.Utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

public class PathDecoder {
    public static String decodePathParam(String pathParam) throws InternalError{
        try{
            return URLDecoder.decode(pathParam, "UTF-8");
        }catch (UnsupportedEncodingException e){
            throw new InternalError("Cannot decode url path parameter: " + pathParam);
        }
    }
}
