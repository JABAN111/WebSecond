package serverlets;

import model.areaProcessing;

import java.util.Date;

/*
* This class will keep one row of results in context
* */
public class rowResult {
    ;
    private double x;
    private double y;
    private int R;
    private String localTime;
    private String isHit;

    public rowResult(double x, double y, int R,  String isHit,String localTime) {
        this.x = x;
        this.y = y;
        this.R = R;
        this.localTime = localTime;
        this.isHit = isHit;
    }
    public String getAllByTableRow(){
        return "<tr>\n" +
                "<td>" + this.x + "</td>\n" +
                "<td>" + this.y + "</td>\n" +
                "<td>" + this.R + "</td>\n" +
                "<td>" + this.isHit + "</td>\n" +
                "<td>" + this.localTime + "</td>\n" + "</tr>";
    }
}
