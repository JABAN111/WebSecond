package serverlets;

import model.areaProcessing;

import javax.servlet.ServletConfig;
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
import java.util.LinkedList;
import java.util.List;
import java.util.TimeZone;

/**
 * AreaCheckServlet, which checks whether a point hits an area on the coordinate plane and generates
 * an HTML page with the results of the check. Must process all requests
 * containing information about the coordinates of the point and the radius of the area.
 */

@WebServlet("/areaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private List<rowResult> rowResults;
    public void init(ServletConfig config) throws ServletException {
        super.init(config);

        ServletContext context = getServletContext();
        this.rowResults = (LinkedList<rowResult>) context.getAttribute("checkResults");
        if (this.rowResults == null) {
            this.rowResults = new LinkedList<>();

            context.setAttribute("rowResults", rowResults);
        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws  IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        ServletContext context = getServletContext();

        String timeZone = request.getParameter("localTime");
        TimeZone userTimeZone = TimeZone.getTimeZone(timeZone);
        TimeZone.setDefault(userTimeZone);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd\nHH:mm:ss");
        Date currentTime = new Date();
        String formattedTime = dateFormat.format(currentTime);
        double x = Double.parseDouble(request.getParameter("x"));
        double y = Double.parseDouble(request.getParameter("y"));
        int R = Integer.parseInt(request.getParameter("R"));
        rowResult rR = new rowResult(x,y,R,areaProcessing.areaCheck(x,y,R),formattedTime);
        this.rowResults.add(rR);

        context.setAttribute("rowResults",rowResults);
        for (rowResult row: rowResults) {
            out.println(row.getAllByTableRow());
        }
        out.close();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        for (rowResult row: rowResults) {
            out.println(row.getAllByTableRow());
        }
        out.close();
    }
}

