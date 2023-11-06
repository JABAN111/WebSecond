package model;


/**
 * This class is processing all operation with data that user input and sent to the server
 */
public class areaProcessing {
    public String areaCheck(float x,double y, int R) {
        //second rotation
        if(x <= 0 && y>=0){
            if(x>=-R && y <= R) {
                return "Hit";
            }
        }
        // first rotation
        else if (x >= 0 && y >= 0) {
            if(x <= R && y<=R){
                return "hit";
            }
        }
        //fourth rotation
        else if (x >= 0 && y>= 0) {
            if ((x * x + y * y) <= ((double) R / 2) * (double) R / 2) {
                return "hit";
            }
        }
        return "miss";
    }
}
