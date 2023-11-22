package model;


/**
 * This class is processing all operation with data that user input and sent to the server
 * Information must be valid
 */
public class areaProcessing {
    public static String areaCheck(Double x,Double y, Integer R) {
        //second rotation
        if(x <= 0 && y>=0){
            if(x>=-R && y <= R) {
                return "Hit";
            }
        }
        // first rotation
        else if ((x >= 0) && (y >= 0)) {
            if(x <= R && y<=R && (-x+R) >= y){
                return "Hit";
            }
        }
        //fourth rotation
        else if (x >= 0 && y<= 0) {
            if ((x * x + y * y) <= ((float) R / 2) * (float) R / 2) {
                return "Hit";
            }
        }
        return "Miss";
    }
}
