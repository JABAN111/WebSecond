package serverlets;

import model.areaProcessing;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

/**
 * AreaCheckServlet, which checks whether a point hits an area on the coordinate plane and generates
 * an HTML page with the results of the check. Must process all requests
 * containing information about the coordinates of the point and the radius of the area.
 */

@WebServlet("/areaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        ServletContext context = getServletContext();
//        String outpTableData = "";
        String[] data;
        if((data = (String[]) context.getAttribute("outputString")) != null){
            for(int i = 0; i < data.length; i++) {
                out.println(data[i]);
            }
        }

        String timeZone = request.getParameter("localTime");
        TimeZone userTimeZone = TimeZone.getTimeZone(timeZone);
        TimeZone.setDefault(userTimeZone);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd\nHH:mm:ss");
        Date currentTime = new Date();
        String formattedTime = dateFormat.format(currentTime);

        String outputString = "<tr>\n" +
                "<td>" + request.getParameter("x") + "</td>\n" +
                "<td>" + request.getParameter("y") + "</td>\n" +
                "<td>" + request.getParameter("R") + "</td>\n" +
                "<td>" + areaProcessing.areaCheck(
                Float.parseFloat(request.getParameter("x")),
                Double.parseDouble(request.getParameter("y").replace(",", ".")),
                Integer.parseInt(request.getParameter("R"))) + "</td>\n" +
                "<td>" + formattedTime + "</td>\n" + "</tr>";
            out.println(outputString);
            out.close();
    }
}

