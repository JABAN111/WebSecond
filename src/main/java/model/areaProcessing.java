package model;


/**
 * This class is processing all operation with data that user input and sent to the server
 * Information must be valid
 */
public class areaProcessing {
    public static String areaCheck(Float x,Double y, Integer R) {
        //second rotation
        if(x <= 0 && y>=0){
            if(x>=-R && y <= R) {
                return "Попадание";
            }
        }
        // first rotation
        else if (x >= 0 && y >= 0) {
            if(x <= R && y<=R){
                return "Попадание";
            }
        }
        //fourth rotation
        else if (x >= 0 && y>= 0) {
            if ((x * x + y * y) <= ((double) R / 2) * (double) R / 2) {
                return "Попадание";
            }
        }
        return "мимо";
    }
}
