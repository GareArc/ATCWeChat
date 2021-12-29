package garethcxy.atc.wechat.atcwechatapi.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegularFeeObject {
    @JsonProperty(value = "electricityFee")
    private double electricityFee = 0;
    @JsonProperty(value = "amazonFee")
    private double amazonFee = 0;
    @JsonProperty(value = "internetFee")
    private double internetFee = 0;
    @JsonProperty(value = "otherFee")
    private double otherFee = 0;

    public double calculate(){
        return (this.amazonFee
                    + this.electricityFee
                    + this.internetFee
                    + this.otherFee) / 3;}

}