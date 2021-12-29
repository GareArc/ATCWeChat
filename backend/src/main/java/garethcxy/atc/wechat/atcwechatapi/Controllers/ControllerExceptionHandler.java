package garethcxy.atc.wechat.atcwechatapi.Controllers;

import garethcxy.atc.wechat.atcwechatapi.Entities.Exceptions.InternalError;
import garethcxy.atc.wechat.atcwechatapi.Entities.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(InternalError.class)
    public ResponseEntity<Response<Integer>> handleInternalError(InternalError e){
        Response<Integer> r = new Response<>();
        r.setCode(e.getCode());
        r.setErrorDescription(e.getDescription());
        r.setData(e.getCode());
        return new ResponseEntity<>(r, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
