package garethcxy.atc.wechat.atcwechatapi.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Getter
@Setter
public class Order {
    @JsonProperty(value = "Target1Info")
    private String Target1Info;
    @JsonProperty(value = "Target2Info")
    private String Target2Info;
    @JsonProperty(value = "ThreePeople")
    private List<Item> ThreePeople;
    @JsonProperty(value = "Target1")
    private List<Item> Target1;
    @JsonProperty(value = "Target2")
    private List<Item> Target2;
    @JsonProperty(value = "Fees")
    private RegularFeeObject Fees;
    @JsonProperty(value = "Target1Total")
    private double Target1Total;
    @JsonProperty(value = "Target2Total")
    private double Target2Total;

    public void calculate(){
        double target1 = 0;
        double target2 = 0;
        // fees
        double temp = Fees.calculate();
        target1 += temp;
        target2 += temp;
        // three people
        for(Item item : ThreePeople){
            temp = item.calculate();
            target1 += temp;
            target2 += temp;
        }
        // target1
        for(Item item : Target1){
            target1 += item.calculate();
        }
        // target2
        for(Item item : Target2){
            target2 += item.calculate();
        }
        Target1Total = BigDecimal.valueOf(target1).setScale(2, RoundingMode.HALF_UP).doubleValue();
        Target2Total = BigDecimal.valueOf(target2).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

}
