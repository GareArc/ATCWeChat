package garethcxy.atc.wechat.atcwechatapi.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
    @JsonProperty(value = "description")
    private String description = "物品";
    @JsonProperty(value = "price")
    private double price;
    @JsonProperty(value = "quantity")
    private int quantity;
    @JsonProperty(value = "relation")
    private Relation relation;
    @JsonProperty(value = "isTaxed")
    private boolean isTaxed;
    @JsonProperty(value = "shareType")
    private SharedType sharedType;

    public double calculate(){
        return price * quantity * (isTaxed? 1.13 : 1) / relation.getDivider();
    }
}
